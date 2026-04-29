import { useEffect, useRef } from 'react'

export default function Experience() {
    const ref = useRef()

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) ref.current?.classList.add('visible') },
            { threshold: 0.15 }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    const techUsed = [
        'HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'React',
        'Node.js', 'Express.js', 'MongoDB', 'Figma', 'Postman',
    ]

    return (
        <section id="experience" style={{ minHeight: '100vh', padding: '6rem 3rem' }}>
            <div style={{ maxWidth: '900px' }}>
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
                    marginBottom: '3rem',
                    lineHeight: 1.2,
                }}>
                    Work <span className="gradient-text">Experience</span>
                </h2>

                {/* Experience card */}
                <div ref={ref} className="reveal" style={{ position: 'relative', paddingLeft: '2.5rem' }}>
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

                    <div className="glass-card card-hover" style={{ padding: '2rem' }}>
                        {/* Header */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', marginBottom: '1.25rem' }}>
                            <div>
                                <h3 style={{
                                    fontFamily: 'Outfit',
                                    fontSize: '1.25rem',
                                    fontWeight: 700,
                                    color: 'var(--text-primary)',
                                    marginBottom: '4px',
                                }}>
                                    Full Stack Web Developer
                                </h3>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <span style={{
                                        fontFamily: 'Plus Jakarta Sans',
                                        fontSize: '0.95rem',
                                        fontWeight: 600,
                                        color: '#fbbf24',
                                    }}>
                                        La Minds IT Company
                                    </span>
                                    <span style={{
                                        background: 'rgba(251,191,36,0.1)',
                                        border: '1px solid rgba(251,191,36,0.2)',
                                        borderRadius: '4px',
                                        padding: '2px 8px',
                                        fontFamily: 'JetBrains Mono',
                                        fontSize: '0.7rem',
                                        color: '#fbbf24',
                                    }}>
                                        Internship
                                    </span>
                                </div>
                            </div>

                            <div style={{ textAlign: 'right' }}>
                                <div style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    background: 'rgba(251,191,36,0.07)',
                                    border: '1px solid rgba(251,191,36,0.15)',
                                    borderRadius: '6px',
                                    padding: '5px 12px',
                                    marginBottom: '6px',
                                }}>
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2">
                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                        <line x1="16" y1="2" x2="16" y2="6" />
                                        <line x1="8" y1="2" x2="8" y2="6" />
                                        <line x1="3" y1="10" x2="21" y2="10" />
                                    </svg>
                                    <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.75rem', color: '#fbbf24' }}>
                                        4 Months
                                    </span>
                                </div>
                                <p style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                                    MERN Stack
                                </p>
                            </div>
                        </div>

                        {/* Divider */}
                        <div style={{ height: '1px', background: 'rgba(251,191,36,0.08)', marginBottom: '1.25rem' }} />

                        {/* Description */}
                        <p style={{
                            fontFamily: 'Plus Jakarta Sans',
                            fontSize: '0.95rem',
                            lineHeight: 1.8,
                            color: 'var(--text-secondary)',
                            marginBottom: '1.5rem',
                        }}>
                            During my internship at <span style={{ color: '#fbbf24', fontWeight: 600 }}>La Minds IT Company</span>, I worked on real-world full-stack web development projects using HTML, CSS, JavaScript, Tailwind CSS, React, Node.js, Express.js, and MongoDB. I also used tools like <span style={{ color: '#fbbf24', fontWeight: 600 }}>Figma and Postman</span> for UI design and API testing, which helped me improve my technical, problem-solving, and teamwork skills.
                        </p>

                        {/* Key highlights */}
                        <div style={{ marginBottom: '1.5rem' }}>
                            <h4 style={{ fontFamily: 'Outfit', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '10px' }}>
                                Key Highlights
                            </h4>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                {[
                                    'Built real-world full-stack web applications from scratch',
                                    'Designed responsive UIs using Tailwind CSS and React',
                                    'Developed RESTful APIs with Node.js and Express.js',
                                    'Managed MongoDB databases and integrated with backend',
                                    'Conducted UI design in Figma and API testing with Postman',
                                ].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontFamily: 'Plus Jakarta Sans', fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                                        <span style={{ color: '#fbbf24', marginTop: '3px', flexShrink: 0 }}>▸</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Tech stack chips */}
                        <div>
                            <h4 style={{ fontFamily: 'Outfit', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '10px' }}>
                                Tech Stack
                            </h4>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                {techUsed.map(tech => (
                                    <span key={tech} style={{
                                        fontFamily: 'JetBrains Mono',
                                        fontSize: '0.75rem',
                                        color: '#fbbf24',
                                        background: 'rgba(251,191,36,0.08)',
                                        border: '1px solid rgba(251,191,36,0.2)',
                                        borderRadius: '5px',
                                        padding: '4px 10px',
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
    