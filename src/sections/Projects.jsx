import { useEffect, useRef } from 'react'

export default function Projects() {
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
        <section id="projects" style={{ 
            minHeight: '100vh', 
            padding: '4rem 3rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <div style={{ maxWidth: '1100px', width: '100%', margin: '0 auto' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '0.5rem' }}>
                    <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.75rem', color: '#fbbf24', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                        04. Projects
                    </span>
                    <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, rgba(251,191,36,0.3), transparent)', maxWidth: '80px' }} />
                </div>

                <h2 style={{
                    fontFamily: 'Outfit',
                    fontSize: 'clamp(2rem, 3vw, 2.5rem)',
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    marginBottom: '1.5rem',
                    lineHeight: 1.2,
                }}>
                    Featured <span className="gradient-text">Projects</span>
                </h2>

                <div
                    ref={ref}
                    className="reveal"
                    style={{
                        background: 'rgba(15,15,18,0.9)',
                        border: '1px solid rgba(251,191,36,0.2)',
                        borderRadius: '24px',
                        overflow: 'hidden',
                        display: 'grid',
                        gridTemplateColumns: '400px 1fr', // Width 400px
                        gap: '0',
                        width: '100%',
                        height: '533px', // Height = 400 * 4/3 = 533px (Strict 3:4)
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)'
                    }}
                >
                    {/* LEFT COLUMN - 3:4 ASPECT RATIO IMAGE */}
                    <div style={{
                        position: 'relative',
                        width: '400px',
                        height: '533px',
                        overflow: 'hidden',
                        borderRight: '1px solid rgba(251,191,36,0.1)',
                        background: '#000'
                    }}>
                        <img
                            src="/asopalav - cover image.png"
                            alt="Asopalav"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                objectPosition: 'center top',
                                display: 'block'
                            }}
                        />
                    </div>

                    {/* RIGHT COLUMN - CONTENT WITH INDEPENDENT SCROLL */}
                    <div style={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        height: '533px', 
                        overflow: 'hidden',
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 100%)'
                    }}>
                        {/* FIXED HEADER */}
                        <div style={{ padding: '2rem 2.5rem 1rem', flexShrink: 0 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
                                <div>
                                    <h3 style={{
                                        fontFamily: 'Outfit',
                                        fontSize: '2.4rem',
                                        fontWeight: 800,
                                        color: '#fff',
                                        marginBottom: '4px',
                                        letterSpacing: '-0.03em',
                                        lineHeight: 1
                                    }}>
                                        Asopalav
                                    </h3>
                                    <p style={{
                                        fontFamily: 'Plus Jakarta Sans',
                                        fontSize: '1rem',
                                        color: 'rgba(255,255,255,0.5)',
                                        fontWeight: 500
                                    }}>
                                        The Cloth Store
                                    </p>
                                </div>

                                <a
                                    href="https://github.com/AkshitKachariya/DummyProject---Asopalav---The-Cloth-Store"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary"
                                    style={{
                                        padding: '12px 24px',
                                        display: 'inline-flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        gap: '10px',
                                        borderRadius: '100px',
                                        fontSize: '0.9rem',
                                        fontWeight: 600,
                                        boxShadow: '0 4px 12px rgba(251,191,36,0.3)'
                                    }}
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                                    </svg>
                                    GitHub Repo
                                </a>
                            </div>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '1.5rem' }}>
                                {['HTML5', 'CSS3', 'Tailwind', 'JavaScript', 'Core PHP', 'MySQL'].map(tag => (
                                    <span key={tag} style={{
                                        fontFamily: 'JetBrains Mono',
                                        fontSize: '0.7rem',
                                        color: '#fbbf24',
                                        background: 'rgba(251,191,36,0.1)',
                                        border: '1px solid rgba(251,191,36,0.3)',
                                        borderRadius: '4px',
                                        padding: '4px 12px',
                                        fontWeight: 600
                                    }}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div style={{ padding: '0 2.5rem', flexShrink: 0 }}>
                            <h4 style={{ 
                                fontFamily: 'Outfit', 
                                fontSize: '1.1rem', 
                                fontWeight: 700, 
                                color: '#fff', 
                                marginBottom: '10px',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em'
                            }}>
                                Case Study
                            </h4>
                            <div style={{ width: '100%', height: '2px', background: 'linear-gradient(90deg, #fbbf24 0%, rgba(251,191,36,0) 100%)', marginBottom: '1.5rem' }} />
                        </div>

                        {/* SCROLLABLE BODY */}
                        <div className="project-scroll" style={{ 
                            flex: 1, 
                            overflowY: 'scroll', // Force scroll for testing
                            padding: '0 2.5rem 2.5rem',
                            marginRight: '2px'
                        }}>
                            {/* 01 OVERVIEW */}
                            <div style={{ marginBottom: '2rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.75rem' }}>
                                    <span style={{ fontFamily: 'JetBrains Mono', color: '#fbbf24', fontSize: '0.85rem', fontWeight: 800 }}>01</span>
                                    <h5 style={{ fontFamily: 'Outfit', color: '#fff', fontSize: '1rem', fontWeight: 700, letterSpacing: '0.05em' }}>OVERVIEW</h5>
                                </div>
                                <p style={{ fontFamily: 'Plus Jakarta Sans', color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', lineHeight: 1.8, paddingLeft: '28px' }}>
                                    Asopalav - The Cloth Store is a dummy E-commerce website developed for men’s and women’s fashion shopping. The platform allows users to browse clothing categories, view product details, manage carts, and place orders through a responsive and user-friendly interface.
                                </p>
                            </div>

                            {/* 02 CHALLENGE */}
                            <div style={{ marginBottom: '2rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.75rem' }}>
                                    <span style={{ fontFamily: 'JetBrains Mono', color: '#fbbf24', fontSize: '0.85rem', fontWeight: 800 }}>02</span>
                                    <h5 style={{ fontFamily: 'Outfit', color: '#fff', fontSize: '1rem', fontWeight: 700, letterSpacing: '0.05em' }}>CHALLENGE</h5>
                                </div>
                                <p style={{ fontFamily: 'Plus Jakarta Sans', color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', lineHeight: 1.8, paddingLeft: '28px' }}>
                                    The main challenge was building a complete eCommerce system with both Admin Panel and User Panel while maintaining responsive design, smooth navigation, secure authentication, and proper product/order management.
                                </p>
                            </div>

                            {/* 03 SOLUTION */}
                            <div style={{ marginBottom: '2rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.75rem' }}>
                                    <span style={{ fontFamily: 'JetBrains Mono', color: '#fbbf24', fontSize: '0.85rem', fontWeight: 800 }}>03</span>
                                    <h5 style={{ fontFamily: 'Outfit', color: '#fff', fontSize: '1rem', fontWeight: 700, letterSpacing: '0.05em' }}>SOLUTION</h5>
                                </div>
                                <p style={{ fontFamily: 'Plus Jakarta Sans', color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', lineHeight: 1.8, paddingLeft: '28px', marginBottom: '1.5rem' }}>
                                    The project was developed using HTML, CSS, Tailwind CSS, JavaScript, Core PHP, and MySQL. The system includes an Admin Panel for managing products, categories, users, orders, store locations, and branding.
                                </p>

                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', paddingLeft: '28px' }}>
                                    {[
                                        { stat: '100%', label: 'Responsive' },
                                        { stat: '2', label: 'Panels' },
                                        { stat: 'Secure', label: 'MySQL' }
                                    ].map((item, i) => (
                                        <div key={i} style={{
                                            background: 'rgba(251,191,36,0.08)',
                                            border: '1px solid rgba(251,191,36,0.2)',
                                            borderRadius: '12px',
                                            padding: '1rem 0.5rem',
                                            textAlign: 'center',
                                        }}>
                                            <div style={{ fontFamily: 'Outfit', fontSize: '1.25rem', fontWeight: 800, color: '#fbbf24', marginBottom: '2px' }}>
                                                {item.stat}
                                            </div>
                                            <div style={{ fontFamily: 'JetBrains Mono', fontSize: '0.6rem', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase' }}>
                                                {item.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* 04 RESULTS */}
                            <div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.75rem' }}>
                                    <span style={{ fontFamily: 'JetBrains Mono', color: '#fbbf24', fontSize: '0.85rem', fontWeight: 800 }}>04</span>
                                    <h5 style={{ fontFamily: 'Outfit', color: '#fff', fontSize: '1rem', fontWeight: 700, letterSpacing: '0.05em' }}>RESULTS</h5>
                                </div>
                                <ul style={{ 
                                    fontFamily: 'Plus Jakarta Sans', 
                                    color: 'rgba(255,255,255,0.7)', 
                                    fontSize: '0.95rem', 
                                    lineHeight: 1.8, 
                                    paddingLeft: '48px',
                                    margin: 0,
                                    display: 'grid',
                                    gridTemplateColumns: '1fr',
                                    gap: '10px',
                                    listStyleType: 'disc'
                                }}>
                                    <li>Responsive online clothing store</li>
                                    <li>Secure login & authentication system</li>
                                    <li>Organized category & product management</li>
                                    <li>Efficient order handling & UI/UX design</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <style>{`
                /* More visible custom scrollbar */
                .project-scroll::-webkit-scrollbar {
                    width: 6px;
                }
                .project-scroll::-webkit-scrollbar-track {
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 10px;
                }
                .project-scroll::-webkit-scrollbar-thumb {
                    background: #fbbf24;
                    border-radius: 10px;
                    border: 2px solid rgba(15,15,18,0.9);
                }
                .project-scroll::-webkit-scrollbar-thumb:hover {
                    background: #f59e0b;
                }

                @media (max-width: 1024px) {
                    #projects .reveal {
                        grid-template-columns: 1fr !important;
                        height: auto !important;
                        max-height: none !important;
                    }
                    #projects .reveal > div:first-child {
                        width: 100% !important;
                        height: auto !important;
                        aspect-ratio: 3 / 4 !important;
                        border-right: none !important;
                    }
                    #projects .reveal > div:last-child {
                        height: auto !important;
                        min-height: 500px !important;
                    }
                    .project-scroll {
                        overflow-y: visible !important;
                        height: auto !important;
                    }
                }
            `}</style>
        </section>
    )
}
