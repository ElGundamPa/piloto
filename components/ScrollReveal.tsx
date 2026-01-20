'use client'

import { useEffect, useRef, useState, ReactNode } from 'react'

/**
 * ScrollReveal Component
 * 
 * Aplica:
 * - Ley de Continuidad: Animaciones suaves al hacer scroll
 * - Performance: Solo anima cuando está en viewport
 * - Accesibilidad: Respeta prefers-reduced-motion
 */
interface ScrollRevealProps {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade'
  className?: string
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Verificar si el usuario prefiere movimiento reducido
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion) {
      setIsVisible(true)
      setHasAnimated(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setTimeout(() => {
              setIsVisible(true)
              setHasAnimated(true)
            }, delay)
          }
        })
      },
      {
        threshold: 0.1, // Se activa cuando 10% del elemento es visible
        rootMargin: '0px 0px -50px 0px', // Se activa un poco antes de entrar
      }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [delay, hasAnimated])

  const getTransformClass = () => {
    if (isVisible) return 'translate-y-0 translate-x-0 opacity-100'

    switch (direction) {
      case 'up':
        return 'translate-y-8 opacity-0'
      case 'down':
        return '-translate-y-8 opacity-0'
      case 'left':
        return 'translate-x-8 opacity-0'
      case 'right':
        return '-translate-x-8 opacity-0'
      case 'fade':
        return 'opacity-0'
      default:
        return 'translate-y-8 opacity-0'
    }
  }

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ease-out ${getTransformClass()} ${className}`}
    >
      {children}
    </div>
  )
}
