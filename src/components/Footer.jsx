export default function Footer() {
    const year = new Date().getFullYear()

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }

    const navLinks = [
        { id: 'hero', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'experience', label: 'Experience' },
        { id: 'projects', label: 'Projects' },
        { id: 'education', label: 'Education' },
        { id: 'contact', label: 'Contact' },
    ]

    const socials = [
        {
            label: 'GitHub',
            href: 'https://github.com/AkshitKachariya',
            icon: (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
            ),
        },
        {
            label: 'LinkedIn',
            href: 'https://in.linkedin.com/in/akshit-kachariya-a2a9aa325',
            icon: (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            ),
        },
        {
            label: 'Email',
            href: 'mailto:akshitkachariya1508@gmail.com',
            icon: (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                </svg>
            ),
        },
    ]

    return (
        <footer
            style={{
                background: 'rgba(10,10,12,0.98)',
                borderTop: '1px solid rgba(251,191,36,0.08)',
                padding: '3rem 3rem 2rem',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Top glow line */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: '10%',
                right: '10%',
                height: '1px',
                background: 'linear-gradient(to right, transparent, rgba(251,191,36,0.4), transparent)',
            }} />

            <div style={{ maxWidth: '900px' }}>
                {/* Main footer grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr auto',
                    gap: '2rem',
                    alignItems: 'start',
                    marginBottom: '2.5rem',
                }}>
                    {/* Brand */}
                    <div>
                        <div style={{
                            fontFamily: 'JetBrains Mono, monospace',
                            fontSize: '1.25rem',
                            fontWeight: 600,
                            color: '#fbbf24',
                            letterSpacing: '-0.02em',
                            marginBottom: '8px',
                        }}>
                            <span style={{ color: 'rgba(251,191,36,0.5)' }}>&lt;</span>
                            Akshit
                            <span style={{ color: 'rgba(251,191,36,0.5)' }}> /&gt;</span>
                        </div>
                        <p style={{
                            fontFamily: 'Plus Jakarta Sans',
                            fontSize: '0.875rem',
                            color: 'var(--text-muted)',
                            lineHeight: 1.7,
                            maxWidth: '340px',
                            marginBottom: '1.25rem',
                        }}>
                            Aspiring Full Stack Web Developer crafting modern web experiences with clean code and thoughtful design.
                        </p>

                        {/* Social links */}
                        <div style={{ display: 'flex', gap: '10px' }}>
                            {socials.map(({ label, href, icon }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target={href.startsWith('http') ? '_blank' : undefined}
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: '36px',
                                        height: '36px',
                                        borderRadius: '8px',
                                        background: 'rgba(251,191,36,0.06)',
                                        border: '1px solid rgba(251,191,36,0.12)',
                                        color: 'var(--text-secondary)',
                                        textDecoration: 'none',
                                        transition: 'all 0.25s ease',
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.background = 'rgba(251,191,36,0.12)'
                                        e.currentTarget.style.color = '#fbbf24'
                                        e.currentTarget.style.borderColor = 'rgba(251,191,36,0.3)'
                                        e.currentTarget.style.transform = 'translateY(-2px)'
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.background = 'rgba(251,191,36,0.06)'
                                        e.currentTarget.style.color = 'var(--text-secondary)'
                                        e.currentTarget.style.borderColor = 'rgba(251,191,36,0.12)'
                                        e.currentTarget.style.transform = 'translateY(0)'
                                    }}
                                >
                                    {icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Nav links */}
                    <div>
                        <h4 style={{
                            fontFamily: 'Outfit',
                            fontSize: '0.78rem',
                            fontWeight: 600,
                            color: '#fbbf24',
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            marginBottom: '1rem',
                        }}>
                            Navigation
                        </h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            {navLinks.map(({ id, label }) => (
                                <li key={id}>
                                    <button
                                        onClick={() => scrollTo(id)}
                                        style={{
                                            background: 'none',
                                            border: 'none',
                                            color: 'var(--text-muted)',
                                            fontFamily: 'Plus Jakarta Sans',
                                            fontSize: '0.875rem',
                                            cursor: 'none',
                                            padding: 0,
                                            transition: 'color 0.2s ease',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '6px',
                                        }}
                                        onMouseEnter={e => { e.currentTarget.style.color = '#fbbf24' }}
                                        onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)' }}
                                    >
                                        <span style={{ color: 'rgba(251,191,36,0.4)', fontFamily: 'JetBrains Mono', fontSize: '0.7rem' }}>›</span>
                                        {label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div style={{ height: '1px', background: 'rgba(251,191,36,0.07)', marginBottom: '1.5rem' }} />

                {/* Bottom bar */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '12px',
                }}>
                    <p style={{
                        fontFamily: 'JetBrains Mono',
                        fontSize: '0.75rem',
                        color: 'var(--text-muted)',
                    }}>
                        © {year} Akshit Kachariya. Crafted with{' '}
                        <span style={{ color: '#f87171' }}>♥</span> using React & Tailwind CSS
                    </p>

                </div>
            </div>
        </footer>
    )
}
