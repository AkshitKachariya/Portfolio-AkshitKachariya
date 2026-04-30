import { useEffect, useRef, useState } from 'react'

const roles = ['Full Stack Web Developer', 'MERN Stack Developer', 'React Enthusiast', 'UI/UX Explorer']

export default function Hero() {
    const [roleIndex, setRoleIndex] = useState(0)
    const [displayText, setDisplayText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)
    const [charIndex, setCharIndex] = useState(0)
    const isMobileDevice = typeof window !== 'undefined' && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    const emailHref = isMobileDevice ? 'mailto:akshitkachariya1508@gmail.com' : 'https://mail.google.com/mail/?view=cm&fs=1&to=akshitkachariya1508@gmail.com'


    // Typing effect
    useEffect(() => {
        const current = roles[roleIndex]
        let timeout

        if (!isDeleting && charIndex <= current.length) {
            timeout = setTimeout(() => {
                setDisplayText(current.slice(0, charIndex))
                setCharIndex(c => c + 1)
            }, 70)
        } else if (!isDeleting && charIndex > current.length) {
            timeout = setTimeout(() => setIsDeleting(true), 2000)
        } else if (isDeleting && charIndex > 0) {
            timeout = setTimeout(() => {
                setDisplayText(current.slice(0, charIndex - 1))
                setCharIndex(c => c - 1)
            }, 40)
        } else {
            setIsDeleting(false)
            setRoleIndex(i => (i + 1) % roles.length)
            setCharIndex(0)
        }

        return () => clearTimeout(timeout)
    }, [charIndex, isDeleting, roleIndex])

    return (
        <section
            id="hero"
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                position: 'relative',
                overflow: 'hidden',
                padding: '0 3rem',
            }}
        >
            {/* Background grid */}
            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `
          linear-gradient(rgba(251,191,36,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(251,191,36,0.03) 1px, transparent 1px)
        `,
                backgroundSize: '60px 60px',
                maskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 100%)',
            }} />

            {/* Glow blobs */}
            <div style={{
                position: 'absolute',
                top: '20%',
                left: '30%',
                width: '500px',
                height: '500px',
                background: 'radial-gradient(circle, rgba(251,191,36,0.07) 0%, transparent 70%)',
                borderRadius: '50%',
                filter: 'blur(40px)',
                pointerEvents: 'none',
            }} />
            <div style={{
                position: 'absolute',
                bottom: '20%',
                right: '10%',
                width: '300px',
                height: '300px',
                background: 'radial-gradient(circle, rgba(234,179,8,0.05) 0%, transparent 70%)',
                borderRadius: '50%',
                filter: 'blur(40px)',
                pointerEvents: 'none',
            }} />

            {/* Content */}
            <div style={{ maxWidth: '780px', zIndex: 1 }}>
                {/* Greeting */}
                <div className="animate-slide-up" style={{ marginBottom: '0.5rem', animationDelay: '100ms' }}>
                    <p style={{
                        fontFamily: 'Outfit, sans-serif',
                        fontSize: 'clamp(1rem, 2vw, 1.1rem)',
                        color: 'var(--text-muted)',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        marginBottom: '0.75rem',
                    }}>
                        Hello, World! I'm
                    </p>
                </div>

                {/* Main Name Heading */}
                <div className="animate-slide-up" style={{ marginBottom: '0.5rem', animationDelay: '250ms' }}>
                    <h1 style={{
                        fontFamily: 'Outfit, sans-serif',
                        fontSize: 'clamp(3rem, 7vw, 5.5rem)',
                        fontWeight: 800,
                        lineHeight: 1.05,
                        letterSpacing: '-0.03em',
                        background: 'linear-gradient(135deg, #f0f0f2 0%, #a1a1aa 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        marginBottom: '0.5rem',
                    }}>
                        Akshit<br />
                        <span style={{
                            background: 'linear-gradient(135deg, #fbbf24 0%, #fcd34d 60%, #eab308 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}>
                            Kachariya
                        </span>
                    </h1>
                </div>

                {/* Typing role */}
                <div className="animate-slide-up" style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '2rem',
                    minHeight: '36px',
                    animationDelay: '400ms'
                }}>
                    <span style={{ color: 'rgba(251,191,36,0.5)', fontFamily: 'JetBrains Mono', fontSize: '1.1rem' }}>&gt;</span>
                    <span style={{
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: 'clamp(0.95rem, 2vw, 1.15rem)',
                        color: '#fbbf24',
                        letterSpacing: '-0.01em',
                    }}>
                        {displayText}
                    </span>
                    <span style={{
                        width: '2px',
                        height: '1.2em',
                        background: '#fbbf24',
                        display: 'inline-block',
                        animation: 'blink 1s step-end infinite',
                    }} />
                </div>

                {/* Tagline */}
                <div className="animate-slide-up" style={{ animationDelay: '550ms' }}>
                    <p style={{
                        fontFamily: 'Plus Jakarta Sans, sans-serif',
                        fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.7,
                        maxWidth: '560px',
                        marginBottom: '3rem',
                    }}>
                        Crafting modern, performant web experiences with clean code and thoughtful design — turning ideas into digital reality.
                    </p>
                </div>

                {/* CTA Buttons */}
                <div className="responsive-hero-buttons animate-slide-up" style={{
                    display: 'flex',
                    gap: '16px',
                    flexWrap: 'wrap',
                    marginBottom: '3.5rem',
                    animationDelay: '700ms'
                }}>
                    <button
                        className="btn-primary"
                        onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                    >
                        View My Work →
                    </button>
                    <button
                        onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                        style={{
                            padding: '14px 28px',
                            borderRadius: '10px',
                            border: '1px solid rgba(251,191,36,0.25)',
                            background: 'transparent',
                            color: 'var(--text-primary)',
                            fontFamily: 'Outfit, sans-serif',
                            fontWeight: 600,
                            fontSize: '0.95rem',
                            cursor: 'none',
                            transition: 'all 0.3s ease',
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.background = 'rgba(251,191,36,0.06)'
                            e.currentTarget.style.borderColor = 'rgba(251,191,36,0.5)'
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.background = 'transparent'
                            e.currentTarget.style.borderColor = 'rgba(251,191,36,0.25)'
                        }}
                    >
                        Let's Connect
                    </button>
                </div>

                {/* Info chips */}
                <div className="animate-slide-up" style={{
                    display: 'flex',
                    gap: '20px',
                    flexWrap: 'wrap',
                    animationDelay: '850ms'
                }}>
                    {[
                        { icon: '📍', text: 'Surat, Gujarat' },
                        { icon: '✉️', text: 'akshitkachariya1508@gmail.com', href: emailHref },
                    ].map((item, i) => (
                        item.href ? (
                            <a 
                                key={i} 
                                href={item.href}
                                target={item.href.startsWith('http') ? '_blank' : undefined}
                                rel="noopener noreferrer"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '7px',
                                    color: 'var(--text-muted)',
                                    fontSize: '0.85rem',
                                    fontFamily: 'Plus Jakarta Sans',
                                    textDecoration: 'none',
                                    transition: 'color 0.2s ease'
                                }}
                                onMouseEnter={e => e.currentTarget.style.color = '#fbbf24'}
                                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
                            >
                                <span>{item.icon}</span>
                                <span>{item.text}</span>
                            </a>
                        ) : (
                            <div key={i} style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '7px',
                                color: 'var(--text-muted)',
                                fontSize: '0.85rem',
                                fontFamily: 'Plus Jakarta Sans',
                            }}>
                                <span>{item.icon}</span>
                                <span>{item.text}</span>
                            </div>
                        )
                    ))}
                </div>
            </div>

            {/* Scroll indicator */}
            <div style={{
                position: 'absolute',
                bottom: '2.5rem',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px',
                animation: 'fadeInUp 0.6s ease 1s both',
            }}>
                <div style={{
                    width: '1px',
                    height: '50px',
                    background: 'linear-gradient(to bottom, rgba(251,191,36,0.6), transparent)',
                    animation: 'float 2s ease-in-out infinite',
                }} />
            </div>
        </section>
    )
}
