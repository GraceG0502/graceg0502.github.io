import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import SplitText from '../components/SplitText'

function About() {
  useEffect(() => {
    // Simple parallax or reveal effect on scroll
    const observerOptions = {
      threshold: 0.1
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0')
          entry.target.classList.remove('opacity-0', 'translate-y-10')
        }
      })
    }, observerOptions)

    document.querySelectorAll('section').forEach(section => {
      section.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-10')
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <main>
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <SplitText
              text="Get to Know Grace"
              tag="h1"
              className="font-display-lg text-display-lg text-secondary mb-8"
              delay={60}
              duration={1.2}
              ease="power3.out"
              splitType="words"
              from={{ opacity: 0, y: 50, rotateY: 45 }}
              to={{ opacity: 1, y: 0, rotateY: 0 }}
              threshold={0.2}
              rootMargin="-50px"
              textAlign="left"
            />
            <p className="font-body-lg text-body-lg max-w-2xl text-on-surface-variant leading-relaxed">
              A designer dedicated to weaving organic whimsy into digital ecosystems. From the first sketch to the final pixel, my work is a study in sophisticated playfulness and botanical elegance.
            </p>
          </div>
          <div className="lg:col-span-4 flex justify-end">
            <div className="w-64 h-80 bg-primary-container/20 botany-arch relative overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-primary-container/50 to-secondary-container/30 flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-9xl opacity-40">person</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cultivating Beauty Section (Staggered Layout) */}
      <section className="py-20 px-margin-desktop max-w-container-max mx-auto overflow-hidden">
        <div className="flex flex-col md:flex-row gap-12 items-center mb-32">
          <div className="w-full md:w-1/2 rounded-3xl overflow-hidden shadow-xl shadow-secondary/5 rotate-[-2deg]">
            <div className="w-full h-[500px] bg-gradient-to-br from-surface-container to-secondary-container/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-secondary text-9xl opacity-20">nature</span>
            </div>
          </div>
          <div className="w-full md:w-1/2 pl-0 md:pl-12">
            <span className="inline-block px-4 py-1 rounded-full bg-primary-container/10 text-primary font-label-md mb-6">
              Our Philosophy
            </span>
            <h2 className="font-headline-lg text-headline-lg text-secondary mb-8">Cultivating Beauty</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-loose">
              Beauty isn't just about appearance; it's about growth. Every project I undertake begins with a seed of an idea, nurtured through careful research and intentional craftsmanship.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant leading-loose">
              I believe in digital experiences that feel as natural and intuitive as a garden walk—guided by flow, punctuated by moments of wonder, and grounded in structural integrity.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
          <div className="w-full md:w-1/2 rounded-3xl overflow-hidden shadow-xl shadow-secondary/5 rotate-[2deg]">
            <div className="w-full h-[500px] bg-gradient-to-br from-primary-container/30 to-surface-variant flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-9xl opacity-20">brush</span>
            </div>
          </div>
          <div className="w-full md:w-1/2 pr-0 md:pr-12">
            <h2 className="font-headline-lg text-headline-lg text-secondary mb-8">Creative Roots</h2>
            <div className="space-y-8">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-label-md text-on-surface">Experience Design</span>
                  <span className="font-label-md text-primary">95%</span>
                </div>
                <div className="h-1.5 w-full bg-secondary/10 rounded-full overflow-hidden">
                  <div className="h-full bg-primary-container w-[95%] transition-all duration-1000"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-label-md text-on-surface">Brand Identity</span>
                  <span className="font-label-md text-primary">88%</span>
                </div>
                <div className="h-1.5 w-full bg-secondary/10 rounded-full overflow-hidden">
                  <div className="h-full bg-primary-container w-[88%] transition-all duration-1000"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-label-md text-on-surface">Editorial Layout</span>
                  <span className="font-label-md text-primary">92%</span>
                </div>
                <div className="h-1.5 w-full bg-secondary/10 rounded-full overflow-hidden">
                  <div className="h-full bg-primary-container w-[92%] transition-all duration-1000"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Location Bento */}
      <section className="py-20 bg-surface-container-low/50">
        <div className="px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Education Card */}
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-outline-variant/15 flex flex-col justify-between">
              <div>
                <span className="material-symbols-outlined text-primary text-4xl mb-6">school</span>
                <h3 className="font-headline-md text-headline-md text-secondary mb-4">Education</h3>
                <ul className="space-y-4">
                  <li>
                    <p className="font-label-md text-primary">2018 — 2022</p>
                    <p className="font-body-md font-bold text-on-surface">BFA in Visual Communications</p>
                    <p className="font-body-md text-on-surface-variant">Pratt Institute, New York</p>
                  </li>
                </ul>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-outline-variant/15 flex flex-col">
              <span className="material-symbols-outlined text-primary text-4xl mb-6">location_on</span>
              <h3 className="font-headline-md text-headline-md text-secondary mb-4">Location</h3>
              <p className="font-body-md text-on-surface-variant mb-6">
                Currently rooted in the vibrant creative landscape of Brooklyn, NY.
              </p>
              <div className="mt-auto h-40 rounded-2xl overflow-hidden grayscale contrast-125 bg-secondary-container/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-secondary text-6xl opacity-50">map</span>
              </div>
            </div>

            {/* Awards/Extra Card */}
            <div className="bg-primary-container p-10 rounded-3xl flex flex-col justify-between text-on-primary-container">
              <div>
                <span className="material-symbols-outlined text-white text-4xl mb-6">auto_awesome</span>
                <h3 className="font-headline-md text-headline-md mb-4">Recognition</h3>
                <ul className="space-y-4 opacity-90">
                  <li className="border-b border-on-primary-container/20 pb-4">
                    <p className="font-body-md font-bold">Awwwards Honorable Mention</p>
                    <p className="font-label-md">Best Visual Identity 2023</p>
                  </li>
                  <li className="pt-4">
                    <p className="font-body-md font-bold">Adobe Design Awards</p>
                    <p className="font-label-md">Finalist — Digital Media</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-margin-desktop max-w-container-max mx-auto text-center">
        <h2 className="font-display-lg text-display-lg text-secondary mb-12">Let's grow something.</h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <Link
            to="/contact"
            className="bg-primary-container text-on-primary-container px-12 py-5 rounded-full font-label-md text-lg hover:shadow-xl hover:shadow-primary/20 transition-all duration-300"
          >
            Start a Project
          </Link>
          <Link
            to="/projects"
            className="border-2 border-secondary text-secondary px-12 py-5 rounded-full font-label-md text-lg hover:bg-secondary hover:text-white transition-all duration-300"
          >
            View Projects
          </Link>
        </div>
      </section>
    </main>
  )
}

export default About
