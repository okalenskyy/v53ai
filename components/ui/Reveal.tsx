'use client'

import { useEffect } from 'react'

/**
 * Mounts a single IntersectionObserver that reveals every `.reveal` element as
 * it scrolls into view. Rendered once near the end of the page so all static
 * (server-rendered) sections stay free of client code.
 */
export function RevealObserver() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            io.unobserve(e.target)
          }
        }),
      { threshold: 0.1, rootMargin: '0px 0px -48px 0px' }
    )
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return null
}
