import { useEffect, useRef, useState } from 'react'

export default function Experience() {
    const [isOpen, setIsOpen] = useState(false)
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
            { threshold: 0.15 }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    const isMobile = windowWidth <= 768
    const isTiny = windowWidth <= 492

    const techUsed = [
        'HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'React',
        'Node.js', 'Express.js', 'MongoDB', 'Figma', 'Postman',
    ]

    return (
        <section id="experience" style={{ minHeight: '100vh', padding: isMobile ? '4rem 1.5rem' : '4rem 3rem', display: 'flex', alignItems: 'center' }}>
            <div style={{ maxWidth: '100%', width: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '1rem' }}>
                    <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.75rem', color: '#fbbf24', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                        03. Experience
                    </span>
                    <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, rgba(251,191,36,0.3), transparent)', maxWidth: '80px' }} />
                </div>

                <h2 style={{
                    fontFamily: 'Outfit',
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    marginBottom: '2.5rem',
                    lineHeight: 1.2,
                }}>
                    Work <span className="gradient-text">Experience</span>
                </h2>

                {/* Experience card */}
                <div ref={ref} className="reveal" style={{ position: 'relative', paddingLeft: isTiny ? '1.5rem' : '2.5rem' }}>
                    {/* Timeline line */}
                    <div style={{
                        position: 'absolute',
                        left: '0',
                        top: '1.5rem',
                        bottom: '0',
                        width: '1px',
                        background: 'linear-gradient(to bottom, #fbbf24, rgba(251,191,36,0.1))',
                    }} />

                    {/* Timeline dot */}
                    <div style={{
                        position: 'absolute',
                        left: '-5px',
                        top: '1.5rem',
                        width: '11px',
                        height: '11px',
                        background: '#fbbf24',
                        borderRadius: '50%',
                        boxShadow: '0 0 0 4px rgba(251,191,36,0.15), 0 0 16px rgba(251,191,36,0.4)',
                    }} />

                    <div className="glass-card card-hover" style={{ padding: isTiny ? '1.25rem' : '1.5rem' }}>
                        {/* Header */}
                        <div style={{ 
                            display: 'flex', 
                            flexDirection: isTiny ? 'column' : 'row',
                            justifyContent: 'space-between', 
                            alignItems: isTiny ? 'flex-start' : 'flex-start', 
                            gap: '12px', 
                            marginBottom: '1.25rem' 
                        }}>
                            <div>
                                <h3 style={{
                                    fontFamily: 'Outfit',
                                    fontSize: isTiny ? '1.15rem' : '1.25rem',
                                    fontWeight: 700,
                                    color: 'var(--text-primary)',
                                    marginBottom: '6px',
                                    lineHeight: 1.3
                                }}>
                                    Full Stack Web Developer
                                </h3>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                                    <span style={{
                                        fontFamily: 'Plus Jakarta Sans',
                                        fontSize: '0.9rem',
                                        fontWeight: 600,
                                        color: '#fbbf24',
                                    }}>
                                        La Minds IT Company
                                    </span>
                                    <span style={{
                                        background: 'rgba(251,191,36,0.1)',
                                        border: '1px solid rgba(251,191,36,0.2)',
                                        borderRadius: '4px',
                                        padding: '1px 8px',
                                        fontFamily: 'JetBrains Mono',
                                        fontSize: '0.65rem',
                                        color: '#fbbf24',
                                    }}>
                                        Internship
                                    </span>
                                </div>
                            </div>

                            <div style={{ 
                                display: isTiny ? 'flex' : 'block',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                width: isTiny ? '100%' : 'auto',
                                marginTop: isTiny ? '4px' : '0',
                                textAlign: isTiny ? 'left' : 'right' 
                            }}>
                                <div style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    background: 'rgba(251,191,36,0.07)',
                                    border: '1px solid rgba(251,191,36,0.15)',
                                    borderRadius: '6px',
                                    padding: '4px 10px',
                                    marginBottom: isTiny ? '0' : '4px',
                                }}>
                                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2">
                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                        <line x1="16" y1="2" x2="16" y2="6" />
                                        <line x1="8" y1="2" x2="8" y2="6" />
                                        <line x1="3" y1="10" x2="21" y2="10" />
                                    </svg>
                                    <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.7rem', color: '#fbbf24' }}>
                                        4 Months
                                    </span>
                                </div>
                                <p style={{ 
                                    fontFamily: 'Plus Jakarta Sans', 
                                    fontSize: '0.75rem', 
                                    color: 'var(--text-muted)', 
                                    fontWeight: 500,
                                    margin: 0
                                }}>
                                    MERN Stack
                                </p>
                            </div>
                        </div>

                        {/* Divider */}
                        <div style={{ height: '1px', background: 'rgba(251,191,36,0.08)', marginBottom: '1.25rem' }} />

                        {/* Description */}
                        <p style={{
                            fontFamily: 'Plus Jakarta Sans',
                            fontSize: '0.875rem',
                            lineHeight: 1.7,
                            color: 'var(--text-secondary)',
                            marginBottom: '1.5rem',
                            textAlign: 'justify',
                        }}>
                            During my internship at <span style={{ color: '#fbbf24', fontWeight: 600 }}>La Minds IT Company</span>, I worked on real-world full-stack web development projects using HTML, CSS, JavaScript, Tailwind CSS, React, Node.js, Express.js, and MongoDB. I also used tools like <span style={{ color: '#fbbf24', fontWeight: 600 }}>Figma and Postman</span> for UI design and API testing.
                        </p>

                        {/* Key highlights Toggle (Mobile) */}
                        <div style={{ marginBottom: '1.5rem' }}>
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    width: '100%',
                                    padding: '10px 14px',
                                    background: 'rgba(251,191,36,0.05)',
                                    border: '1px solid rgba(251,191,36,0.15)',
                                    borderRadius: '8px',
                                    color: '#fbbf24',
                                    fontFamily: 'Outfit',
                                    fontSize: '0.85rem',
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    marginBottom: isOpen ? '12px' : '0',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <span style={{ fontSize: '1rem' }}>✨</span>
                                    KEY HIGHLIGHTS
                                </span>
                                <svg 
                                    width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                                    style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}
                                >
                                    <polyline points="6 9 12 15 18 9" />
                                </svg>
                            </button>

                            <div style={{
                                maxHeight: isOpen ? '500px' : '0',
                                opacity: isOpen ? 1 : 0,
                                overflow: 'hidden',
                                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                paddingLeft: isTiny ? '4px' : '8px'
                            }}>
                                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '4px' }}>
                                    {[
                                        'Built real-world full-stack web applications from scratch',
                                        'Designed responsive UIs using Tailwind CSS and React',
                                        'Developed RESTful APIs with Node.js and Express.js',
                                        'Managed MongoDB databases and integrated with backend',
                                        'Conducted UI design in Figma and API testing with Postman',
                                    ].map((item, i) => (
                                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontFamily: 'Plus Jakarta Sans', fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5, textAlign: 'justify' }}>
                                            <span style={{ color: '#fbbf24', marginTop: '2px', flexShrink: 0 }}>▸</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Tech stack chips */}
                        <div>
                            <h4 style={{ fontFamily: 'Outfit', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '10px' }}>
                                Tech Stack
                            </h4>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                                {techUsed.map(tech => (
                                    <span key={tech} style={{
                                        fontFamily: 'JetBrains Mono',
                                        fontSize: '0.65rem',
                                        color: '#fbbf24',
                                        background: 'rgba(251,191,36,0.08)',
                                        border: '1px solid rgba(251,191,36,0.2)',
                                        borderRadius: '5px',
                                        padding: '3px 8px',
                                        fontWeight: 500
                                    }}>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
    