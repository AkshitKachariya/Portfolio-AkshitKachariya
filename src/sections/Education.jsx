import { useEffect, useRef, useState } from 'react'

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
    const [openCard, setOpenCard] = useState(null)
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

    const isMobile = windowWidth <= 1024
    const isTiny = windowWidth <= 492

    return (
        <section id="education" style={{ minHeight: '100vh', padding: isMobile ? '4rem 1.5rem' : '6rem 3rem', display: 'flex', alignItems: 'center' }}>
            <div style={{ maxWidth: '100%', width: '100%' }}>
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
                    marginBottom: isMobile ? '2.5rem' : '3rem',
                    lineHeight: 1.2,
                }}>
                    My <span className="gradient-text">Education</span>
                </h2>

                {/* Timeline */}
                <div ref={ref} className="reveal" style={{ position: 'relative', paddingLeft: isTiny ? '1.5rem' : '2.5rem' }}>
                    {/* Timeline vertical line */}
                    <div style={{
                        position: 'absolute',
                        left: '0',
                        top: '1.5rem',
                        bottom: '1.5rem',
                        width: '1px',
                        background: 'linear-gradient(to bottom, #fbbf24, rgba(251,191,36,0.1))',
                    }} />

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {educationData.map((edu, idx) => {
                            const isOpen = openCard === idx
                            return (
                                <div key={idx} style={{ position: 'relative' }}>
                                    {/* Timeline dot */}
                                    <div style={{
                                        position: 'absolute',
                                        left: isTiny ? '-1.5rem' : (isMobile ? '-1.5rem' : '-2.5rem'),
                                        top: '1.5rem',
                                        width: '11px',
                                        height: '11px',
                                        background: edu.color,
                                        borderRadius: '50%',
                                        boxShadow: `0 0 0 4px ${edu.color}20, 0 0 16px ${edu.color}50`,
                                        zIndex: 1
                                    }} />

                                    <div className="glass-card card-hover" style={{ padding: isTiny ? '1.25rem' : (isMobile ? '1.5rem' : '2rem') }}>
                                        {/* Header */}
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', marginBottom: isMobile && !isOpen ? '0' : '1.25rem' }}>
                                            <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                                                <div style={{
                                                    width: isMobile ? '40px' : '48px',
                                                    height: isMobile ? '40px' : '48px',
                                                    flexShrink: 0,
                                                    background: `${edu.color}15`,
                                                    border: `1px solid ${edu.color}30`,
                                                    borderRadius: '12px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    fontSize: isMobile ? '1.2rem' : '1.4rem',
                                                }}>
                                                    {edu.icon}
                                                </div>
                                                <div>
                                                    <span style={{
                                                        fontFamily: 'JetBrains Mono',
                                                        fontSize: '0.65rem',
                                                        color: edu.color,
                                                        letterSpacing: '0.08em',
                                                        textTransform: 'uppercase',
                                                        display: 'block',
                                                        marginBottom: '2px',
                                                    }}>
                                                        {edu.type}
                                                    </span>
                                                    <h3 style={{
                                                        fontFamily: 'Outfit',
                                                        fontSize: isTiny ? '1.1rem' : (isMobile ? '1.15rem' : '1.2rem'),
                                                        fontWeight: 700,
                                                        color: 'var(--text-primary)',
                                                        marginBottom: '4px',
                                                        lineHeight: 1.3,
                                                    }}>
                                                        {edu.degree}
                                                    </h3>
                                                    <p style={{
                                                        fontFamily: 'Plus Jakarta Sans',
                                                        fontSize: '0.85rem',
                                                        color: edu.color,
                                                        fontWeight: 600,
                                                    }}>
                                                        {edu.institution}
                                                    </p>
                                                </div>
                                            </div>

                                            <div style={{ 
                                                display: isMobile ? 'flex' : 'block',
                                                flexDirection: 'row',
                                                justifyContent: isMobile ? 'space-between' : 'flex-start',
                                                alignItems: 'center',
                                                textAlign: isMobile ? 'left' : 'right', 
                                                flexShrink: 0, 
                                                marginLeft: isMobile ? (isTiny ? '0' : '54px') : '0',
                                                marginTop: isMobile ? '12px' : '0',
                                                width: isMobile ? (isTiny ? '100%' : 'calc(100% - 54px)') : 'auto',
                                                gap: '12px'
                                            }}>
                                                <div style={{ flexShrink: 0 }}>
                                                    <span style={{
                                                        fontFamily: 'JetBrains Mono',
                                                        fontSize: '0.7rem',
                                                        color: 'var(--text-muted)',
                                                        background: 'rgba(255,255,255,0.04)',
                                                        border: '1px solid rgba(255,255,255,0.08)',
                                                        borderRadius: '4px',
                                                        padding: '4px 10px',
                                                        whiteSpace: 'nowrap',
                                                        display: 'inline-block'
                                                    }}>
                                                        {edu.period}
                                                    </span>
                                                </div>
                                                <div style={{
                                                    background: `${edu.color}12`,
                                                    border: `1px solid ${edu.color}25`,
                                                    borderRadius: '6px',
                                                    padding: '5px 12px',
                                                    marginTop: isMobile ? '0' : '5px',
                                                    display: 'inline-block',
                                                    flexShrink: 0
                                                }}>
                                                    <span style={{ fontFamily: 'Outfit', fontSize: '0.85rem', fontWeight: 700, color: edu.color }}>
                                                        {edu.grade}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Mobile Toggle Button */}
                                        {isMobile && (
                                            <button 
                                                onClick={() => setOpenCard(isOpen ? null : idx)}
                                                style={{
                                                    width: '100%',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    gap: '8px',
                                                    marginTop: '1.25rem',
                                                    padding: '10px',
                                                    background: 'rgba(255,255,255,0.03)',
                                                    border: '1px solid rgba(255,255,255,0.1)',
                                                    borderRadius: '10px',
                                                    color: 'var(--text-muted)',
                                                    fontFamily: 'Plus Jakarta Sans',
                                                    fontSize: '0.8rem',
                                                    fontWeight: 600,
                                                    cursor: 'pointer',
                                                    transition: 'all 0.3s ease'
                                                }}
                                            >
                                                {isOpen ? 'Show Less' : 'View Details'}
                                                <svg 
                                                    width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                                                    style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}
                                                >
                                                    <polyline points="6 9 12 15 18 9" />
                                                </svg>
                                            </button>
                                        )}

                                        {/* Expandable Content */}
                                        <div style={{
                                            maxHeight: isMobile ? (isOpen ? '600px' : '0px') : 'none',
                                            opacity: isMobile ? (isOpen ? 1 : 0) : 1,
                                            overflow: 'hidden',
                                            transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                                            marginTop: isMobile && isOpen ? '1.5rem' : '0'
                                        }}>
                                            {!isMobile && <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)', marginBottom: '1.5rem' }} />}
                                            
                                            <p style={{
                                                fontFamily: 'Plus Jakarta Sans',
                                                fontSize: '0.875rem',
                                                lineHeight: 1.8,
                                                color: 'var(--text-secondary)',
                                                marginBottom: '1.5rem',
                                                textAlign: 'justify',
                                            }}>
                                                {edu.desc}
                                            </p>

                                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                                {edu.skills.map(s => (
                                                    <span key={s} style={{
                                                        fontFamily: 'JetBrains Mono',
                                                        fontSize: '0.65rem',
                                                        color: edu.color,
                                                        background: `${edu.color}10`,
                                                        border: `1px solid ${edu.color}25`,
                                                        borderRadius: '5px',
                                                        padding: '4px 10px',
                                                        fontWeight: 500
                                                    }}>
                                                        {s}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
