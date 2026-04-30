import { useEffect, useState, useMemo } from 'react'

export default function Preloader({ onComplete }) {
    const [isVisible, setIsVisible] = useState(true)
    const [progress, setProgress] = useState(0)

    // Generate random particles
    const particles = useMemo(() => {
        return Array.from({ length: 20 }).map((_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            size: Math.random() * 3 + 1,
            duration: Math.random() * 3 + 2,
            delay: Math.random() * 2
        }))
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval)
                    setTimeout(() => {
                        setIsVisible(false)
                        setTimeout(onComplete, 800)
                    }, 500)
                    return 100
                }
                return prev + 2
            })
        }, 25)

        return () => clearInterval(interval)
    }, [onComplete])

    if (!isVisible) return null

    return (
        <div style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: '#0a0a0b',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
        }}>
            {/* Background Particles */}
            {particles.map(p => (
                <div key={p.id} style={{
                    position: 'absolute',
                    left: p.left,
                    top: p.top,
                    width: `${p.size}px`,
                    height: `${p.size}px`,
                    background: '#fbbf24',
                    borderRadius: '50%',
                    opacity: 0.15,
                    filter: 'blur(1px)',
                    animation: `float ${p.duration}s ease-in-out ${p.delay}s infinite alternate`
                }} />
            ))}

            <div style={{ position: 'relative' }}>
                {/* Modern Shimmer Logo */}
                <div className="shimmer-text" style={{
                    fontFamily: 'Outfit',
                    fontSize: '2.2rem',
                    fontWeight: 800,
                    color: 'rgba(255,255,255,0.1)',
                    letterSpacing: '-0.5px',
                    zIndex: 2,
                    whiteSpace: 'nowrap',
                    position: 'relative',
                    background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(251,191,36,0.8) 50%, rgba(255,255,255,0) 100%)',
                    backgroundSize: '200% 100%',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    animation: 'shimmer 2.5s infinite linear'
                }}>
                    <span style={{ color: '#fbbf24', opacity: 0.6 }}>&lt;</span>
                    <span style={{ margin: '0 8px', color: '#fff' }}>Akshit</span>
                    <span style={{ color: '#fbbf24', opacity: 0.6 }}> /&gt;</span>
                </div>
                
                {/* Subtle Glow behind text */}
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '150%',
                    height: '150%',
                    background: 'radial-gradient(circle, rgba(251,191,36,0.1) 0%, transparent 70%)',
                    filter: 'blur(20px)',
                    zIndex: 1
                }} />
            </div>

            {/* Loading elements */}
            <div style={{ marginTop: '60px', textAlign: 'center' }}>
                <div style={{
                    fontFamily: 'JetBrains Mono',
                    fontSize: '0.75rem',
                    color: '#fbbf24',
                    letterSpacing: '0.5em',
                    textTransform: 'uppercase',
                    marginBottom: '20px',
                    fontWeight: 500,
                    opacity: 0.8
                }}>
                    {progress < 100 ? 'Initializing...' : 'Ready'}
                </div>

                <div style={{
                    width: '240px',
                    height: '3px',
                    background: 'rgba(255,255,255,0.05)',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    position: 'relative',
                    border: '1px solid rgba(255,255,255,0.02)'
                }}>
                    <div style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        height: '100%',
                        width: `${progress}%`,
                        background: 'linear-gradient(90deg, #fbbf24 0%, #f59e0b 100%)',
                        boxShadow: '0 0 12px rgba(251,191,36,0.4)',
                        transition: 'width 0.1s linear'
                    }} />
                </div>
                
                <div style={{
                    fontFamily: 'JetBrains Mono',
                    fontSize: '0.65rem',
                    color: 'rgba(255,255,255,0.2)',
                    marginTop: '12px',
                    letterSpacing: '0.1em'
                }}>
                    {progress}%
                </div>
            </div>

            <style>{`
                @keyframes shimmer {
                    0% { background-position: -200% 0; }
                    100% { background-position: 200% 0; }
                }
                @keyframes float {
                    0% { transform: translateY(0px) translateX(0px); opacity: 0.1; }
                    50% { opacity: 0.3; }
                    100% { transform: translateY(-20px) translateX(10px); opacity: 0.1; }
                }
                @keyframes pulse {
                    0% { opacity: 0.5; }
                    50% { opacity: 1; }
                    100% { opacity: 0.5; }
                }
            `}</style>
        </div>
    )
}
