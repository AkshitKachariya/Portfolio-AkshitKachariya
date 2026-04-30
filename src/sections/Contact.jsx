import { useState, useRef, useEffect } from 'react'

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
    const [status, setStatus] = useState(null) // 'sending' | 'success' | 'error'
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200)
    const ref = useRef()

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth)
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) ref.current?.classList.add('visible') },
            { threshold: 0.1 }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    const isMobile = windowWidth <= 768
    const isTabletOrSmallDesktop = windowWidth <= 1280

    const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus('sending')

        const data = new FormData()
        data.append('access_key', '60a72c2b-3381-4a30-aa8f-b43c6d3d06d0')
        data.append('name', form.name)
        data.append('email', form.email)
        data.append('subject', form.subject)
        data.append('message', form.message)

        try {
            const res = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: data,
            })
            const json = await res.json()
            if (json.success) {
                setStatus('success')
                setForm({ name: '', email: '', subject: '', message: '' })
            } else {
                setStatus('error')
            }
        } catch {
            setStatus('error')
        }
    }

    const [emailCopied, setEmailCopied] = useState(false)

    const handleEmailClick = (e, email) => {
        if (window.innerWidth <= 768) return // On mobile, just let mailto work
        e.preventDefault()
        navigator.clipboard.writeText(email)
        setEmailCopied(true)
        setTimeout(() => setEmailCopied(false), 2000)
    }

    const contactInfo = [
        {
            icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                </svg>
            ),
            label: 'Email',
            value: 'akshitkachariya1508@gmail.com',
            href: 'mailto:akshitkachariya1508@gmail.com',
            isEmail: true
        },
        {
            icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            ),
            label: 'LinkedIn',
            value: 'akshit-kachariya',
            href: 'https://in.linkedin.com/in/akshit-kachariya-a2a9aa325',
        },
        {
            icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
            ),
            label: 'GitHub',
            value: 'AkshitKachariya',
            href: 'https://github.com/AkshitKachariya',
        },
        {
            icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                </svg>
            ),
            label: 'Location',
            value: 'Surat, Gujarat — 395004',
            href: null,
        },
    ]

    return (
        <section id="contact" style={{ minHeight: '100vh', padding: isMobile ? '4rem 1.5rem' : '6rem 3rem' }}>
            <div style={{ maxWidth: '900px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '1rem' }}>
                    <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.75rem', color: '#fbbf24', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                        06. Contact
                    </span>
                    <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, rgba(251,191,36,0.3), transparent)', maxWidth: '80px' }} />
                </div>

                <h2 style={{
                    fontFamily: 'Outfit',
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    marginBottom: '0.75rem',
                    lineHeight: 1.2,
                }}>
                    Get In <span className="gradient-text">Touch</span>
                </h2>
                <p style={{
                    fontFamily: 'Plus Jakarta Sans',
                    color: 'var(--text-secondary)',
                    fontSize: '1rem',
                    marginBottom: isTabletOrSmallDesktop ? '2rem' : '3rem',
                    maxWidth: '480px',
                    lineHeight: 1.7,
                }}>
                    Whether you have an opportunity, a project idea, or just want to say hello — my inbox is always open.
                </p>

                <div ref={ref} className="reveal responsive-contact-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: isTabletOrSmallDesktop ? '1fr' : '1fr 1.5fr',
                    gap: isMobile ? '1.5rem' : '2.5rem',
                    alignItems: 'start'
                }}>
                    {/* Contact info */}
                    <div>
                        <div className="glass-card" style={{ padding: isMobile ? '1.5rem' : '1.75rem', marginBottom: isMobile ? '0' : '1.5rem' }}>
                            <h3 style={{
                                fontFamily: 'Outfit',
                                fontSize: '1rem',
                                fontWeight: 600,
                                color: 'var(--text-primary)',
                                marginBottom: '1.25rem',
                            }}>
                                Contact Information
                            </h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {contactInfo.map(({ icon, label, value, href, isEmail }) => (
                                    <div key={label} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                                        <div style={{
                                            width: '36px',
                                            height: '36px',
                                            flexShrink: 0,
                                            background: 'rgba(251,191,36,0.08)',
                                            border: '1px solid rgba(251,191,36,0.15)',
                                            borderRadius: '8px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: '#fbbf24',
                                        }}>
                                            {icon}
                                        </div>
                                        <div style={{ position: 'relative' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                <p style={{ fontFamily: 'JetBrains Mono', fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '2px' }}>
                                                    {label}
                                                </p>
                                                {isEmail && emailCopied && (
                                                    <span style={{ fontSize: '0.65rem', color: '#fbbf24', fontFamily: 'JetBrains Mono' }}>
                                                        [ COPIED! ]
                                                    </span>
                                                )}
                                            </div>
                                            {href ? (
                                                <a 
                                                    href={href} 
                                                    target={href.startsWith('http') ? '_blank' : undefined} 
                                                    rel="noopener noreferrer" 
                                                    onClick={isEmail ? (e) => handleEmailClick(e, value) : undefined}
                                                    style={{
                                                        fontFamily: 'Plus Jakarta Sans',
                                                        fontSize: '0.85rem',
                                                        color: 'var(--text-primary)',
                                                        textDecoration: 'underline',
                                                        textUnderlineOffset: '4px',
                                                        textDecorationColor: 'rgba(251,191,36,0.3)',
                                                        wordBreak: 'break-all',
                                                        transition: 'all 0.2s',
                                                    }}
                                                    onMouseEnter={e => {
                                                        e.currentTarget.style.color = '#fbbf24';
                                                        e.currentTarget.style.textDecorationColor = '#fbbf24';
                                                    }}
                                                    onMouseLeave={e => {
                                                        e.currentTarget.style.color = 'var(--text-primary)';
                                                        e.currentTarget.style.textDecorationColor = 'rgba(251,191,36,0.3)';
                                                    }}
                                                >
                                                    {value}
                                                </a>
                                            ) : (
                                                <p style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '0.85rem', color: 'var(--text-primary)' }}>{value}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact form */}
                    <div className="glass-card" style={{ padding: isMobile ? '1.5rem' : '2rem' }}>
                        <h3 style={{
                            fontFamily: 'Outfit',
                            fontSize: '1rem',
                            fontWeight: 600,
                            color: 'var(--text-primary)',
                            marginBottom: '1.5rem',
                        }}>
                            Send a Message
                        </h3>

                        {status === 'success' ? (
                            <div style={{
                                textAlign: 'center',
                                padding: '2.5rem 1rem',
                            }}>
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                                <h4 style={{ fontFamily: 'Outfit', fontSize: '1.2rem', fontWeight: 700, color: '#fbbf24', marginBottom: '8px' }}>
                                    Message Sent!
                                </h4>
                                <p style={{ fontFamily: 'Plus Jakarta Sans', color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                                    Thank you for reaching out. I'll get back to you soon.
                                </p>
                                <button
                                    className="btn-primary"
                                    onClick={() => setStatus(null)}
                                    style={{ fontSize: '0.9rem', padding: '10px 24px' }}
                                >
                                    Send Another
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                <div className="responsive-form-grid" style={{
                                    display: 'grid',
                                    gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                                    gap: '14px'
                                }}>
                                    <div>
                                        <label style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>
                                            Full Name <span style={{ color: '#fbbf24' }}>*</span>
                                        </label>
                                        <input
                                            className="form-input"
                                            type="text"
                                            name="name"
                                            value={form.name}
                                            onChange={handleChange}
                                            placeholder="Akshit Kachariya"
                                            required
                                            id="contact-name"
                                        />
                                    </div>
                                    <div>
                                        <label style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>
                                            Email Address <span style={{ color: '#fbbf24' }}>*</span>
                                        </label>
                                        <input
                                            className="form-input"
                                            type="email"
                                            name="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            placeholder="you@example.com"
                                            required
                                            id="contact-email"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>
                                        Subject <span style={{ color: '#fbbf24' }}>*</span>
                                    </label>
                                    <input
                                        className="form-input"
                                        type="text"
                                        name="subject"
                                        value={form.subject}
                                        onChange={handleChange}
                                        placeholder="Project Inquiry / Collaboration"
                                        required
                                        id="contact-subject"
                                    />
                                </div>
                                <div>
                                    <label style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>
                                        Message <span style={{ color: '#fbbf24' }}>*</span>
                                    </label>
                                    <textarea
                                        className="form-input"
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        placeholder="Tell me about your project or opportunity..."
                                        required
                                        rows={5}
                                        id="contact-message"
                                        style={{ resize: 'vertical', minHeight: '120px', resize: 'none' }}
                                    />
                                </div>

                                {status === 'error' && (
                                    <p style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '0.85rem', color: '#f87171', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                        ⚠️ Something went wrong. Please try again.
                                    </p>
                                )}

                                <button
                                    type="submit"
                                    className="btn-primary"
                                    disabled={status === 'sending'}
                                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', opacity: status === 'sending' ? 0.7 : 1 }}
                                    id="contact-submit"
                                >
                                    {status === 'sending' ? (
                                        <>
                                            <span style={{ width: '16px', height: '16px', border: '2px solid rgba(0,0,0,0.3)', borderTopColor: '#0d0d0f', borderRadius: '50%', display: 'inline-block', animation: 'spin 0.8s linear infinite' }} />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <line x1="22" y1="2" x2="11" y2="13" />
                                                <polygon points="22 2 15 22 11 13 2 9 22 2" />
                                            </svg>
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
