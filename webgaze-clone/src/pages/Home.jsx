import { useEffect } from 'react'
import Navbar from '../components/shared/Navbar'
import HeroSection from '../components/home/HeroSection'
import LogoMarquee from '../components/home/LogoMarquee'
import ServicesSection from '../components/home/ServicesSection'
import ProjectsParallax from '../components/home/ProjectsParallax'
import ProcessSection from '../components/home/ProcessSection'
import TestimonialsFAQ from '../components/home/TestimonialsFAQ'
import CTABanner from '../components/shared/CTABanner'
import Footer from '../components/shared/Footer'

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.fade-in-up').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-light-bg">
      <Navbar />
      <main>
        <HeroSection />
        <LogoMarquee />
        <ServicesSection />
        <ProjectsParallax />
        <ProcessSection />
        <TestimonialsFAQ />
        <CTABanner />
      </main>
      <Footer />
    </div>
  )
}
