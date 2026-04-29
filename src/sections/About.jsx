import { useEffect, useRef } from 'react'

export default function About() {
    const ref = useRef()

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { ref.current?.classList.add('visible') } },
            { threshold: 0.15 }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    return (
        <section
            id="about"
            style={{
                display: 'flex',
                alignItems: 'center',
                minHeight: '100vh',
                padding: '6rem 3rem',
                position: 'relative',
            }}
        >
            <div style={{ maxWidth: '900px', width: '100%' }} className="stagger-children" ref={ref}>
                {/* Section label */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '1rem' }}>
                    <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.75rem', color: '#fbbf24', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                        01. About
                    </span>
                    <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, rgba(251,191,36,0.3), transparent)', maxWidth: '80px' }} />
                </div>

                <h2 style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    color: 'var(--text-primary)',
                    marginBottom: '3rem',
                    lineHeight: 1.2,
                }}>
                    About <span className="gradient-text">Me</span>
                </h2>

                <div className="responsive-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }}>
                    {/* Text content */}
                    <div>
                        <p style={{
                            fontFamily: 'Plus Jakarta Sans',
                            fontSize: '1rem',
                            lineHeight: 1.9,
                            color: 'var(--text-secondary)',
                            marginBottom: '1.4rem',
                        }}>
                            I'm an aspiring <span style={{ color: '#fbbf24', fontWeight: 600 }}>Full Stack Web Developer</span> with a strong interest in building modern, responsive, and user-friendly web applications. I have hands-on experience with frontend technologies like HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, and ReactJS, along with basic backend knowledge of PHP, NodeJS, and ExpressJS.
                        </p>
                        <p style={{
                            fontFamily: 'Plus Jakarta Sans',
                            fontSize: '1rem',
                            lineHeight: 1.9,
                            color: 'var(--text-secondary)',
                            marginBottom: '1.4rem',
                        }}>
                            I'm also familiar with databases such as <span style={{ color: '#fbbf24', fontWeight: 600 }}>MySQL and MongoDB</span>, and tools like GitHub, Postman, and Figma. I enjoy learning new technologies, improving my problem-solving skills, and turning ideas into practical digital solutions.
                        </p>
                        <p style={{
                            fontFamily: 'Plus Jakarta Sans',
                            fontSize: '1rem',
                            lineHeight: 1.9,
                            color: 'var(--text-secondary)',
                        }}>
                            As a developer, I'm continuously growing my skills and exploring better ways to create <span style={{ color: '#fbbf24', fontWeight: 600 }}>clean, efficient, and visually appealing</span> web experiences.
                        </p>
                    </div>

                    {/* Info grid */}
                    <div>
                        {/* Quick facts */}
                        <div className="glass-card" style={{ padding: '1.75rem', marginBottom: '1.5rem' }}>
                            <h3 style={{
                                fontFamily: 'Outfit',
                                fontSize: '0.85rem',
                                fontWeight: 600,
                                color: '#fbbf24',
                                letterSpacing: '0.1em',
                                textTransform: 'uppercase',
                                marginBottom: '1.25rem',
                            }}>
                                Quick Facts
                            </h3>
                            {[
                                { label: 'Name', value: 'Akshit Kachariya' },
                                { label: 'Role', value: 'Full Stack Web Developer' },
                                { label: 'Location', value: 'Surat, Gujarat' },
                                { label: 'Education', value: 'BCA — VNSGU (Sutex Bank College of Computer Applications and Science)' },
                                { label: 'Email', value: 'akshitkachariya1508@gmail.com' },
                            ].map(({ label, value }) => (
                                <div key={label} style={{
                                    display: 'grid',
                                    gridTemplateColumns: '90px 1fr',
                                    gap: '8px',
                                    paddingBottom: '10px',
                                    marginBottom: '10px',
                                    borderBottom: '1px solid rgba(251,191,36,0.06)',
                                }}>
                                    <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{label}</span>
                                    <span style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '0.85rem', color: 'var(--text-primary)', lineHeight: 1.6, wordBreak: 'break-word' }}>{value}</span>
                                </div>
                            ))}
                        </div>


                    </div>
                </div>
            </div>
        </section>
    )
}
