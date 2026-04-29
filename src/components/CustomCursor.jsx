import { useState, useEffect } from 'react'

export default function CustomCursor() {
    const [pos, setPos] = useState({ x: -100, y: -100 })
    const [isHovering, setIsHovering] = useState(false)
    const [isClicking, setIsClicking] = useState(false)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const moveCursor = (e) => {
            // Use requestAnimationFrame for smoother performance without lag
            requestAnimationFrame(() => {
                setPos({ x: e.clientX, y: e.clientY })
                if (!isVisible) setIsVisible(true)
            })
        }

        const handleMouseDown = () => setIsClicking(true)
        const handleMouseUp = () => setIsClicking(false)

        const handleHoverIn = (e) => {
            if (e.target.closest('a, button, [data-cursor="pointer"], input, textarea, select')) {
                setIsHovering(true)
            }
        }
        const handleHoverOut = (e) => {
            if (e.target.closest('a, button, [data-cursor="pointer"], input, textarea, select')) {
                setIsHovering(false)
            }
        }

        window.addEventListener('mousemove', moveCursor)
        window.addEventListener('mousedown', handleMouseDown)
        window.addEventListener('mouseup', handleMouseUp)
        document.addEventListener('mouseover', handleHoverIn)
        document.addEventListener('mouseout', handleHoverOut)

        return () => {
            window.removeEventListener('mousemove', moveCursor)
            window.removeEventListener('mousedown', handleMouseDown)
            window.removeEventListener('mouseup', handleMouseUp)
            document.removeEventListener('mouseover', handleHoverIn)
            document.removeEventListener('mouseout', handleHoverOut)
        }
    }, [isVisible])

    const size = isClicking ? 25 : isHovering ? 50 : 16

    return (
        <div
            className="custom-cursor"
            style={{
                left: pos.x,
                top: pos.y,
                opacity: isVisible ? 1 : 0,
                transform: 'translate(-50%, -50%)',
                width: size,
                height: size,
                background: isHovering ? 'transparent' : '#fbbf24',
                border: isHovering ? '1.5px solid #fbbf24' : 'none',
                borderRadius: '50%',
                pointerEvents: 'none',
                zIndex: 99999,
                transition: 'width 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275), height 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275), background-color 0.2s ease, border 0.2s ease',
                boxShadow: isHovering ? '0 0 15px rgba(251,191,36,0.5)' : 'none',
                backdropFilter: isHovering ? 'invert(10%)' : 'none',
            }}
        />
    )
}
