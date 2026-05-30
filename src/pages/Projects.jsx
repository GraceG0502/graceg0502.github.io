import { useEffect } from 'react'
import SplitText from '../components/SplitText'
import leafImg from '../assets/images/leaf.png'
import unnamedImg from '../assets/images/unnamed.png'
import flowerImg from '../assets/images/flower.png'
import hillImg from '../assets/images/hill.png'
import yuanziImg from '../assets/images/yuanzi.png'
import treeImg from '../assets/images/tree.png'

function Projects() {
  useEffect(() => {
    // Interactive Micro-interactions
    document.querySelectorAll('.project-card').forEach(card => {
      const handleMouseDown = () => {
        card.style.transform = card.classList.contains('grid-item') && window.innerWidth >= 768 && card.matches(':nth-child(3n+2)')
          ? 'translateY(64px) scale(0.98)'
          : 'scale(0.98)'
      }

      const handleMouseUp = () => {
        card.style.transform = card.classList.contains('grid-item') && window.innerWidth >= 768 && card.matches(':nth-child(3n+2)')
          ? 'translateY(64px) scale(1)'
          : 'scale(1)'
      }

      card.addEventListener('mousedown', handleMouseDown)
      card.addEventListener('mouseup', handleMouseUp)
      card.addEventListener('mouseleave', handleMouseUp)
    })

    // Simple Fade-in Observer
    const observerOptions = {
      threshold: 0.1
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1'
          entry.target.style.transform = entry.target.classList.contains('grid-item') && window.innerWidth >= 768 && entry.target.matches(':nth-child(3n+2)')
            ? 'translateY(64px)'
            : 'translateY(0)'
        }
      })
    }, observerOptions)

    document.querySelectorAll('.project-card').forEach(card => {
      card.style.opacity = '0'
      card.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out'
      observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      title: 'Wild Fern Study',
      description: 'An exploration of intricate textures and organic geometry found in ancient forest floor dwellers.',
      icon: 'local_florist',
      image: leafImg
    },
    {
      title: 'The Herbarium Press',
      description: 'Curation of dried botanical specimens reimagined as high-contrast graphic elements.',
      icon: 'spa',
      image: unnamedImg
    },
    {
      title: 'Petals & Porcelain',
      description: 'A tactile study on the intersection of fragile flora and solid, glazed ceramic surfaces.',
      icon: 'water_drop',
      image: flowerImg
    },
    {
      title: 'Earth & Ember',
      description: 'Capturing the primal beauty of mineral formations and the warmth of shifting geological light.',
      icon: 'landscape',
      image: hillImg
    },
    {
      title: 'Secret Garden',
      description: 'Visualizing hidden sanctuaries through a lens of surreal color and architectural framing.',
      icon: 'yard',
      image: yuanziImg
    },
    {
      title: 'Seasonal Shifts',
      description: 'Documenting the subtle transition of light and mood as the calendar moves through its cycles.',
      icon: 'wb_twilight',
      image: treeImg
    }
  ]

  return (
    <main className="pt-32 pb-24 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
      {/* Page Header */}
      <header className="mb-24 text-center md:text-left">
        <span className="font-label-md text-primary tracking-widest mb-4 block">PORTFOLIO</span>
        <SplitText
          text="Selected Projects"
          tag="h1"
          className="font-display-lg text-display-lg text-secondary mb-6 leading-tight"
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
        <p className="font-body-lg text-on-surface-variant max-w-2xl">
          A curation of botanical explorations, tactile experiments, and seasonal observations. Each piece reflects a commitment to organic elegance and refined creative whimsy.
        </p>
      </header>

      {/* Staggered Projects Grid */}
      <div className="staggered-grid pb-32">
        {projects.map((project, index) => (
          <article key={index} className="grid-item project-card group cursor-pointer">
            <div className="arch-mask aspect-[4/5] bg-secondary-container/20 overflow-hidden mb-6 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(49,83,153,0.08)]">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <h3 className="font-headline-md text-secondary mb-2">{project.title}</h3>
            <p className="font-body-md text-on-surface-variant mb-4">{project.description}</p>
            <div className="relative inline-block">
              <span className="project-link font-label-md text-primary uppercase tracking-wider relative">
                View Project
              </span>
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}

export default Projects
