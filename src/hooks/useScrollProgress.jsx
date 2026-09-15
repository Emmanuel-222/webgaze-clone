import { useState, useEffect } from 'react'

export function useScrollProgress(ref) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // For a sticky h-[200vh] section:
      // When rect.top = windowHeight → progress 0 (section just entering)
      // When rect.bottom = 0 → progress 1 (section leaving)
      // The sticky content stays pinned while the section scrolls through
      const scrolled = windowHeight - rect.top
      const totalScrollDistance = rect.height - windowHeight
      const p = totalScrollDistance > 0 ? scrolled / totalScrollDistance : 0
      setProgress(Math.min(Math.max(p, 0), 1))
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [ref])

  return progress
}
