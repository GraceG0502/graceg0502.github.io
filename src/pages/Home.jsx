import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import SplitText from '../components/SplitText'

function Home() {
  useEffect(() => {
    // Optional micro-interactions
    const handleMouseMove = (e) => {
      const blobs = document.querySelectorAll('.blur-3xl')
      const x = e.clientX / window.innerWidth
      const y = e.clientY / window.innerHeight

      blobs.forEach((blob, index) => {
        const speed = (index + 1) * 20
        blob.style.transform = `translate(${x * speed}px, ${y * speed}px)`
      })
    }

    document.addEventListener('mousemove', handleMouseMove)
    return () => document.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <main className="pt-32">
      {/* Hero Section */}
      <section className="px-margin-desktop max-w-container-max mx-auto mb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-7">
            <h1 className="font-display-lg text-display-lg md:text-[100px] leading-tight mb-8">
              HI HERE IS <br />
              <SplitText
                text="GRACE"
                tag="span"
                className="text-primary italic"
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
            </h1>
            <p className="font-body-lg text-secondary max-w-xl mb-10 leading-relaxed">
              A curated sanctuary where digital precision meets botanical fluidity. We craft identities that breathe and spaces that resonate through sophisticated playful artistry.
            </p>
            <div className="flex gap-6">
              <Link
                to="/contact"
                className="bg-primary-container text-on-primary-container px-10 py-5 rounded-full font-bold text-lg shadow-lg shadow-primary/10 hover:shadow-xl transition-all duration-300 active:scale-95"
              >
                CONTACT ME
              </Link>
              <Link
                to="/projects"
                className="border-2 border-secondary text-secondary px-10 py-5 rounded-full font-bold text-lg hover:bg-secondary/5 transition-all"
              >
                VIEW WORK
              </Link>
            </div>
          </div>
          <div className="md:col-span-5 relative">
            <div className="arch-mask aspect-[4/5] bg-secondary-container relative">
              <div className="w-full h-full bg-gradient-to-br from-secondary-container to-primary-container/30 flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-9xl opacity-30">palette</span>
              </div>
            </div>
            {/* Decorative Element */}
            <div
              className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full border-2 border-primary/30 flex items-center justify-center"
              style={{ animation: 'spin 10s linear infinite' }}
            >
              <span className="material-symbols-outlined text-primary text-4xl">eco</span>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="bg-white/40 py-32">
        <div className="px-margin-desktop max-w-container-max mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="md:w-1/3">
              <span className="inline-block bg-primary-container/10 text-primary-container px-4 py-1 rounded-full font-label-md text-label-md mb-6">
                PHILOSOPHY
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">
                Artistry Rooted <br />
                in Nature
              </h2>
            </div>
            <div className="md:w-2/3">
              <p className="font-body-lg text-secondary leading-loose mb-8">
                Every project begins with a seed of intent. We cultivate visual experiences that reject the cold rigidity of modern industrialism, favoring instead the asymmetric grace found in the natural world. By blending Deep Royal Blue structures with the vibrant energy of Soft Pink accents, we create a dialogue between strength and playfulness.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
                <div className="text-center">
                  <div className="text-display-lg text-primary leading-none mb-2">12+</div>
                  <div className="font-label-md text-secondary">AWARDS</div>
                </div>
                <div className="text-center">
                  <div className="text-display-lg text-primary leading-none mb-2">80</div>
                  <div className="font-label-md text-secondary">PROJECTS</div>
                </div>
                <div className="text-center">
                  <div className="text-display-lg text-primary leading-none mb-2">09</div>
                  <div className="font-label-md text-secondary">YEARS</div>
                </div>
                <div className="text-center">
                  <div className="text-display-lg text-primary leading-none mb-2">100%</div>
                  <div className="font-label-md text-secondary">PASSION</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Bento Grid */}
      <section className="px-margin-desktop max-w-container-max mx-auto py-32">
        <div className="mb-16">
          <h2 className="font-headline-lg text-headline-lg mb-4">Capabilities</h2>
          <div className="h-1 w-24 bg-primary-container"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Cap 1 */}
          <div className="bento-card md:col-span-2 bg-secondary/5 border border-secondary/15 rounded-[40px] p-12 flex flex-col justify-between overflow-hidden relative group">
            <div className="relative z-10">
              <span className="material-symbols-outlined text-secondary text-5xl mb-6">local_florist</span>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-4">Botanical Installation</h3>
              <p className="font-body-md text-secondary max-w-md">
                Transforming physical environments into living, breathing narratives through organic sculpture and curated flora.
              </p>
            </div>
            <div className="absolute right-0 bottom-0 w-64 h-64 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-[200px] text-secondary">psychiatry</span>
            </div>
          </div>

          {/* Cap 2 */}
          <div className="bento-card bg-primary-container/10 border border-primary/15 rounded-[40px] p-12 flex flex-col items-center text-center">
            <span className="material-symbols-outlined text-primary text-5xl mb-6">auto_awesome</span>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-4">Organic Brand Identity</h3>
            <p className="font-body-md text-secondary">
              Defining visual voices that feel innate, human, and inherently sophisticated.
            </p>
          </div>

          {/* Cap 3 */}
          <div className="bento-card bg-white border border-outline-variant/30 rounded-[40px] p-12 flex flex-col justify-center">
            <h3 className="font-headline-md text-headline-md text-on-surface mb-4">Editorial Design</h3>
            <p className="font-body-md text-secondary mb-8">
              Magazine-style layouts that prioritize negative space and high-contrast serif typography.
            </p>
            <div className="flex -space-x-4">
              <div className="w-12 h-12 rounded-full border-4 border-brand-alabaster bg-secondary-container"></div>
              <div className="w-12 h-12 rounded-full border-4 border-brand-alabaster bg-primary-container"></div>
              <div className="w-12 h-12 rounded-full border-4 border-brand-alabaster bg-on-surface"></div>
            </div>
          </div>

          {/* Cap 4 */}
          <div className="bento-card md:col-span-2 bg-on-surface rounded-[40px] p-12 flex flex-col md:flex-row items-center gap-8 overflow-hidden">
            <div className="md:w-1/2">
              <h3 className="font-headline-md text-headline-md text-brand-alabaster mb-4">Digital Experience</h3>
              <p className="font-body-md text-white/70">
                Fluid, motion-first interfaces that transition with the grace of falling leaves. Modern web ecosystems built on Playfair Elegance.
              </p>
            </div>
            <div className="md:w-1/2 arch-mask h-48 bg-secondary/30 flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-6xl">blur_on</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mb-32 px-margin-desktop max-w-container-max mx-auto">
        <div className="bg-primary-container rounded-[64px] py-24 px-12 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="font-display-lg text-display-lg text-on-primary-container mb-8">Ready to bloom?</h2>
            <p className="font-body-lg text-on-primary-container/80 max-w-2xl mx-auto mb-12">
              Let's discuss how we can bring organic sophistication and playful botanical energy to your next creative venture.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-on-surface text-brand-alabaster px-12 py-6 rounded-full font-bold text-xl hover:scale-105 transition-transform"
            >
              START A CONVERSATION
            </Link>
          </div>
          {/* Abstract decorative shapes */}
          <div className="absolute -top-12 -left-12 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-12 -right-12 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        </div>
      </section>
    </main>
  )
}

export default Home
