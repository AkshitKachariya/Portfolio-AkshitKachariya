import React, { useEffect, useRef, useState } from 'react'

const skillGroups = [
    {
        category: 'Frontend',
        color: '#fbbf24',
        icon: '⬡',
        skills: [
            { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', level: 95 },
            { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', level: 85 },
            { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg', level: 80 },
            { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', level: 85 },
            { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', level: 70 },
            { name: 'ReactJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', level: 70 },
        ],
    },
    {
        category: 'Backend',
        color: '#eab308',
        icon: '⬢',
        skills: [
            { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', level: 80 },
            { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', level: 70 },
            { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', level: 70 },
        ],
    },
    {
        category: 'Database',
        color: '#a78bfa',
        icon: '◈',
        skills: [
            { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', level: 80 },
            { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', level: 80 },
        ],
    },
    {
        category: 'Tools',
        color: '#fb923c',
        icon: '◉',
        skills: [
            { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', level: 65 },
            { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg', level: 70 },
            { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', level: 65 },
            { name: 'Canva', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg', level: 80 },
        ],
    },
]

function SkillCard({ skill, color, visible }) {
    return (
        <div
            className="glass-card card-hover"
            style={{
                padding: '1.1rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '10px',
            }}
        >
            <div style={{
                width: '48px',
                height: '48px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '12px',
                background: 'rgba(255,255,255,0.04)',
                padding: '8px',
            }}>
                <img
                    src={skill.icon}
                    alt={skill.name}
                    style={{ 
                        width: '32px', 
                        height: '32px', 
                        objectFit: 'contain',
                        filter: skill.name === 'GitHub' ? 'invert(1) brightness(2)' : 
                                skill.name === 'Express.js' ? 'invert(78%) sepia(40%) saturate(1000%) hue-rotate(350deg) brightness(105%) contrast(105%)' : 'none'
                    }}
                    onError={e => { e.target.style.display = 'none' }}
                />
            </div>
            <span style={{
                fontFamily: 'Plus Jakarta Sans',
                fontSize: '0.8rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                textAlign: 'center',
            }}>
                {skill.name}
            </span>
            <div style={{ width: '100%' }}>
                <div style={{
                    height: '3px',
                    background: 'rgba(255,255,255,0.06)',
                    borderRadius: '2px',
                    overflow: 'hidden',
                }}>
                    <div
                        style={{
                            height: '100%',
                            background: `linear-gradient(90deg, ${color}, ${color}99)`,
                            borderRadius: '2px',
                            width: visible ? `${skill.level}%` : '0%',
                            transition: 'width 1s cubic-bezier(0.4, 0, 0.2, 1)',
                            transitionDelay: '0.3s',
                            boxShadow: `0 0 8px ${color}66`,
                        }}
                    />
                </div>
                <span style={{
                    fontFamily: 'JetBrains Mono',
                    fontSize: '0.65rem',
                    color: 'var(--text-muted)',
                    float: 'right',
                    marginTop: '2px',
                }}>
                    {skill.level}%
                </span>
            </div>
        </div>
    )
}

export default function Skills() {
    const ref = useRef()
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true) },
            { threshold: 0.1 }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    return (
        <section id="skills" style={{ minHeight: '100vh', padding: '6rem 3rem' }} ref={ref}>
            <div style={{ maxWidth: '100%', width: '100%' }}>
                {/* Section label */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '1rem' }}>
                    <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.75rem', color: '#fbbf24', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                        02. Skills
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
                    Technical <span className="gradient-text">Skills</span>
                </h2>
                <p style={{
                    fontFamily: 'Plus Jakarta Sans',
                    color: 'var(--text-secondary)',
                    fontSize: '1rem',
                    marginBottom: '3rem',
                    maxWidth: '500px',
                    lineHeight: 1.7,
                }}>
                    Technologies and tools I've worked with and continue to grow in.
                </p>

                {skillGroups.map((group) => (
                    <div key={group.category} style={{ marginBottom: '2.5rem' }}>
                        {/* Category header */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.25rem' }}>
                            <span style={{ color: group.color, fontSize: '1.1rem' }}>{group.icon}</span>
                            <h3 style={{
                                fontFamily: 'Outfit',
                                fontSize: '1.05rem',
                                fontWeight: 600,
                                color: 'var(--text-primary)',
                            }}>
                                {group.category}
                            </h3>
                            <div style={{
                                flex: 1,
                                height: '1px',
                                background: `linear-gradient(to right, ${group.color}30, transparent)`,
                                maxWidth: '200px',
                            }} />
                        </div>

                        {/* Skill cards grid */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
                            gap: '12px',
                        }}>
                            {group.skills.map(skill => (
                                <SkillCard key={skill.name} skill={skill} color={group.color} visible={visible} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
