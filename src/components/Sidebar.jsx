import { useState, useEffect } from 'react'

const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
]

export default function Sidebar({ activeSection }) {
    const [mobileOpen, setMobileOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    // Detect mobile
    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 1024)
        check()
        window.addEventListener('resize', check)
        return () => window.removeEventListener('resize', check)
    }, [])

    // Close sidebar on section change (mobile)
    useEffect(() => {
        if (mobileOpen) setMobileOpen(false)
    }, [activeSection])

    const scrollTo = (id) => {
        const el = document.getElementById(id)
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' })
            setMobileOpen(false)
        }
    }

    const sidebarStyle = {
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
        width: isMobile ? '280px' : 'var(--nav-width)',
        background: 'rgba(13,13,15,0.97)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        borderRight: '1px solid rgba(251,191,36,0.1)',
        zIndex: 10000,
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.4s cubic-bezier(0.4,0,0.2,1)',
        transform: isMobile ? (mobileOpen ? 'translateX(0)' : 'translateX(-100%)') : 'translateX(0)',
    }

    return (
        <>
            {/* Mobile backdrop */}
            {isMobile && mobileOpen && (
                <div
                    onClick={() => setMobileOpen(false)}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        background: 'rgba(0,0,0,0.5)',
                        backdropFilter: 'blur(4px)',
                        zIndex: 9999,
                        animation: 'fadeIn 0.3s ease',
                    }}
                />
            )}

            {/* Mobile hamburger button */}
            {isMobile && (
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle navigation menu"
                    style={{
                        position: 'fixed',
                        top: '1.1rem',
                        left: '1.1rem',
                        zIndex: 10001,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '5px',
                        padding: '10px 11px',
                        borderRadius: '10px',
                        background: 'rgba(22,22,26,0.95)',
                        border: '1px solid rgba(251,191,36,0.2)',
                        cursor: 'none',
                        backdropFilter: 'blur(12px)',
                    }}
                >
                    {[0, 1, 2].map(i => (
                        <span
                            key={i}
                            style={{
                                display: 'block',
                                width: '20px',
                                height: '2px',
                                background: '#fbbf24',
                                borderRadius: '2px',
                                transformOrigin: 'center',
                                transition: 'transform 0.3s ease, opacity 0.3s ease',
                                transform: mobileOpen
                                    ? i === 0 ? 'rotate(45deg) translate(5px, 5px)'
                                        : i === 2 ? 'rotate(-45deg) translate(5px, -5px)'
                                            : 'scaleX(0)'
                                    : 'none',
                                opacity: mobileOpen && i === 1 ? 0 : 1,
                            }}
                        />
                    ))}
                </button>
            )}

            {/* Mobile backdrop */}
            {isMobile && mobileOpen && (
                <div
                    onClick={() => setMobileOpen(false)}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        background: 'rgba(0,0,0,0.65)',
                        backdropFilter: 'blur(4px)',
                        zIndex: 9999,
                        animation: 'fadeIn 0.25s ease',
                    }}
                />
            )}

            {/* Sidebar */}
            <aside style={sidebarStyle}>
                {/* Logo */}
                <div style={{ padding: isMobile ? '4.5rem 1.75rem 1.5rem' : '2rem 1.75rem 1.5rem', borderBottom: '1px solid rgba(251,191,36,0.08)' }}>
                    <div
                        style={{
                            fontFamily: 'JetBrains Mono, monospace',
                            fontSize: '1.35rem',
                            fontWeight: 600,
                            color: '#fbbf24',
                            letterSpacing: '-0.02em',
                        }}
                    >
                        <span style={{ color: 'rgba(251,191,36,0.5)' }}>&lt;</span>
                        <span>Akshit</span>
                        <span style={{ color: 'rgba(251,191,36,0.5)' }}> /&gt;</span>
                    </div>
                    <p style={{
                        fontFamily: 'Plus Jakarta Sans',
                        fontSize: '0.72rem',
                        color: 'var(--text-muted)',
                        marginTop: '4px',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                    }}>
                        Full Stack Web Developer
                    </p>
                </div>

                {/* Nav items */}
                <nav style={{ flex: 1, padding: '1.5rem 0', position: 'relative', overflowY: 'auto' }}>
                    {/* Vertical connector line */}
                    <div style={{
                        position: 'absolute',
                        left: '2.2rem',
                        top: '2.5rem',
                        bottom: '2.5rem',
                        width: '1px',
                        background: 'linear-gradient(to bottom, rgba(251,191,36,0.3), rgba(251,191,36,0.05) 80%, transparent)',
                    }} />

                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {navItems.map((item) => {
                            const isActive = activeSection === item.id
                            return (
                                <li key={item.id} style={{ position: 'relative' }}>
                                    {/* Node dot on the line */}
                                    <div style={{
                                        position: 'absolute',
                                        left: 'calc(2.2rem - 4.5px)',
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        width: '9px',
                                        height: '9px',
                                        borderRadius: '50%',
                                        background: isActive ? '#fbbf24' : 'rgba(251,191,36,0.2)',
                                        border: isActive ? '2px solid rgba(251,191,36,0.4)' : '1.5px solid rgba(251,191,36,0.15)',
                                        boxShadow: isActive ? '0 0 10px rgba(251,191,36,0.7)' : 'none',
                                        transition: 'all 0.3s ease',
                                        zIndex: 1,
                                    }} />

                                    <button
                                        onClick={() => scrollTo(item.id)}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '12px',
                                            width: '100%',
                                            padding: '11px 1.75rem 11px 3.5rem',
                                            background: isActive ? 'rgba(251,191,36,0.08)' : 'transparent',
                                            borderLeft: `2px solid ${isActive ? '#fbbf24' : 'transparent'}`,
                                            border: 'none',
                                            cursor: 'none',
                                            textAlign: 'left',
                                            transition: 'all 0.25s ease',
                                        }}
                                        onMouseEnter={e => {
                                            if (!isActive) {
                                                e.currentTarget.style.background = 'rgba(251,191,36,0.04)'
                                                e.currentTarget.style.borderLeftColor = 'rgba(251,191,36,0.3)'
                                            }
                                        }}
                                        onMouseLeave={e => {
                                            if (!isActive) {
                                                e.currentTarget.style.background = 'transparent'
                                                e.currentTarget.style.borderLeftColor = 'transparent'
                                            }
                                        }}
                                    >
                                        <span style={{
                                            fontFamily: 'Outfit, sans-serif',
                                            fontSize: '0.9rem',
                                            fontWeight: isActive ? 600 : 400,
                                            color: isActive ? '#fbbf24' : 'var(--text-secondary)',
                                            letterSpacing: '0.02em',
                                            transition: 'color 0.25s ease',
                                        }}>
                                            {item.label}
                                        </span>
                                        {isActive && (
                                            <span style={{
                                                marginLeft: 'auto',
                                                width: '4px',
                                                height: '4px',
                                                background: '#fbbf24',
                                                borderRadius: '50%',
                                                flexShrink: 0,
                                                boxShadow: '0 0 6px rgba(251,191,36,0.8)',
                                            }} />
                                        )}
                                    </button>
                                </li>
                            )
                        })}
                    </ul>
                </nav>

                {/* Bottom social links */}
                <div style={{
                    padding: '1.25rem 1.75rem',
                    borderTop: '1px solid rgba(251,191,36,0.08)',
                    display: 'flex',
                    gap: '10px',
                    alignItems: 'center',
                }}>
                    {[
                        {
                            href: 'https://github.com/AkshitKachariya',
                            title: 'GitHub',
                            icon: (
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                                </svg>
                            ),
                        },
                        {
                            href: 'https://in.linkedin.com/in/akshit-kachariya-a2a9aa325',
                            title: 'LinkedIn',
                            icon: (
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            ),
                        },
                        {
                            href: 'mailto:akshitkachariya1508@gmail.com',
                            title: 'Email',
                            icon: (
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                            ),
                        },
                    ].map(({ href, title, icon }) => (
                        <a
                            key={title}
                            href={href}
                            target={href.startsWith('http') ? '_blank' : undefined}
                            rel="noopener noreferrer"
                            title={title}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '34px',
                                height: '34px',
                                borderRadius: '8px',
                                background: 'rgba(251,191,36,0.07)',
                                border: '1px solid rgba(251,191,36,0.15)',
                                color: 'var(--text-secondary)',
                                textDecoration: 'none',
                                transition: 'all 0.25s ease',
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.background = 'rgba(251,191,36,0.15)'
                                e.currentTarget.style.color = '#fbbf24'
                                e.currentTarget.style.borderColor = 'rgba(251,191,36,0.4)'
                                e.currentTarget.style.transform = 'translateY(-2px)'
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.background = 'rgba(251,191,36,0.07)'
                                e.currentTarget.style.color = 'var(--text-secondary)'
                                e.currentTarget.style.borderColor = 'rgba(251,191,36,0.15)'
                                e.currentTarget.style.transform = 'translateY(0)'
                            }}
                        >
                            {icon}
                        </a>
                    ))}

                    {/* Scroll progress indicator */}
                    <div style={{ marginLeft: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3px' }}>
                        {navItems.map(item => (
                            <div
                                key={item.id}
                                style={{
                                    width: activeSection === item.id ? '6px' : '3px',
                                    height: activeSection === item.id ? '6px' : '3px',
                                    borderRadius: '50%',
                                    background: activeSection === item.id ? '#fbbf24' : 'rgba(251,191,36,0.2)',
                                    transition: 'all 0.3s ease',
                                }}
                            />
                        ))}
                    </div>
                </div>
            </aside>
        </>
    )
}
