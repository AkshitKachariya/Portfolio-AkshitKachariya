import { useEffect, useRef } from 'react'

const educationData = [
    {
        period: '2023 – 2026',
        degree: 'Bachelor of Computer Applications (B.C.A.)',
        institution: 'VNSGU — Sutex Bank College of Computer Applications and Science',
        grade: 'CGPA: 8.58',
        gradeLabel: 'First Class with Distinction',
        desc: 'I have completed my BCA with first class with distinction, specializing in web development. Skilled in HTML, CSS, JavaScript, PHP, MySQL. I am eager to build dynamic and user-friendly websites.',
        skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Web Development'],
        color: '#fbbf24',
        icon: '🎓',
        type: 'Graduation',
    },
    {
        period: '2022 – 2023',
        degree: '12th Grade — Commerce Stream (GSHEB)',
        institution: 'I C Gandhi School',
        grade: 'Percentage: 84.4%',
        gradeLabel: 'Distinction',
        desc: 'I have completed my 12th grade in Commerce with 84.40%. I am hardworking, eager to learn, and possess a strong foundation in business, accounting, and economics, aiming for professional growth.',
        skills: ['Business Studies', 'Accounting', 'Economics', 'Commerce'],
        color: '#a78bfa',
        icon: '📚',
        type: 'Higher Secondary',
    },
]

export default function Education() {
    const ref = useRef()

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) ref.current?.classList.add('visible') },
            { threshold: 0.1 }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    return (
        <section id="education" style={{ minHeight: '100vh', padding: '6rem 3rem' }}>
            <div style={{ maxWidth: '900px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '1rem' }}>
                    <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.75rem', color: '#fbbf24', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                        05. Education
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
                    My <span className="gradient-text">Education</span>
                </h2>

                {/* Timeline */}
                <div ref={ref} className="reveal" style={{ position: 'relative', paddingLeft: '2.5rem' }}>
                    {/* Timeline vertical line */}
                    <div style={{
                        position: 'absolute',
                        left: '0',
                        top: '1.5rem',
                        bottom: '1.5rem',
                        width: '1px',
                        background: 'linear-gradient(to bottom, #fbbf24, rgba(251,191,36,0.1))',
                    }} />

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        {educationData.map((edu, idx) => (
                            <div key={idx} style={{ position: 'relative' }}>
                                {/* Timeline dot */}
                                <div style={{
                                    position: 'absolute',
                                    left: '-2.5rem',
                                    top: '1.5rem',
                                    width: '11px',
                                    height: '11px',
                                    background: edu.color,
                                    borderRadius: '50%',
                                    boxShadow: `0 0 0 4px ${edu.color}20, 0 0 16px ${edu.color}50`,
                                }} />

                                <div className="glass-card card-hover" style={{ padding: '2rem' }}>
                                    {/* Header */}
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', marginBottom: '1.25rem' }}>
                                        <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                                            <div style={{
                                                width: '48px',
                                                height: '48px',
                                                flexShrink: 0,
                                                background: `${edu.color}15`,
                                                border: `1px solid ${edu.color}30`,
                                                borderRadius: '12px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontSize: '1.4rem',
                                            }}>
                                                {edu.icon}
                                            </div>
                                            <div>
                                                <span style={{
                                                    fontFamily: 'JetBrains Mono',
                                                    fontSize: '0.7rem',
                                                    color: edu.color,
                                                    letterSpacing: '0.08em',
                                                    textTransform: 'uppercase',
                                                    display: 'block',
                                                    marginBottom: '4px',
                                                }}>
                                                    {edu.type}
                                                </span>
                                                <h3 style={{
                                                    fontFamily: 'Outfit',
                                                    fontSize: '1.1rem',
                                                    fontWeight: 700,
                                                    color: 'var(--text-primary)',
                                                    marginBottom: '3px',
                                                    lineHeight: 1.3,
                                                }}>
                                                    {edu.degree}
                                                </h3>
                                                <p style={{
                                                    fontFamily: 'Plus Jakarta Sans',
                                                    fontSize: '0.875rem',
                                                    color: edu.color,
                                                    fontWeight: 500,
                                                }}>
                                                    {edu.institution}
                                                </p>
                                            </div>
                                        </div>

                                        <div style={{ textAlign: 'right', flexShrink: 0 }}>
                                            <div style={{
                                                background: `${edu.color}12`,
                                                border: `1px solid ${edu.color}25`,
                                                borderRadius: '6px',
                                                padding: '6px 14px',
                                                marginBottom: '5px',
                                                display: 'inline-block',
                                            }}>
                                                <span style={{ fontFamily: 'Outfit', fontSize: '0.85rem', fontWeight: 700, color: edu.color }}>
                                                    {edu.grade}
                                                </span>
                                            </div>
                                            <div>
                                                <span style={{
                                                    fontFamily: 'JetBrains Mono',
                                                    fontSize: '0.68rem',
                                                    color: 'var(--text-muted)',
                                                    background: 'rgba(255,255,255,0.04)',
                                                    border: '1px solid rgba(255,255,255,0.08)',
                                                    borderRadius: '4px',
                                                    padding: '2px 8px',
                                                }}>
                                                    {edu.period}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)', marginBottom: '1.25rem' }} />

                                    <p style={{
                                        fontFamily: 'Plus Jakarta Sans',
                                        fontSize: '0.9rem',
                                        lineHeight: 1.8,
                                        color: 'var(--text-secondary)',
                                        marginBottom: '1rem',
                                    }}>
                                        {edu.desc}
                                    </p>

                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                                        {edu.skills.map(s => (
                                            <span key={s} style={{
                                                fontFamily: 'JetBrains Mono',
                                                fontSize: '0.68rem',
                                                color: edu.color,
                                                background: `${edu.color}10`,
                                                border: `1px solid ${edu.color}25`,
                                                borderRadius: '4px',
                                                padding: '3px 8px',
                                            }}>
                                                {s}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
