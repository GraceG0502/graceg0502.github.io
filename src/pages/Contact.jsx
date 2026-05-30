import { useEffect, useState } from 'react'
import SplitText from '../components/SplitText'

function Contact() {
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    // Simple floating effect for the profile photo
    const handleMouseMove = (e) => {
      const img = document.querySelector('.profile-photo')
      if (img) {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 45
        const yAxis = (window.innerHeight / 2 - e.pageY) / 45
        img.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
      }
    }

    document.addEventListener('mousemove', handleMouseMove)
    return () => document.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowModal(true)
    e.target.reset()
  }

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <>
      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Identity & Contact Methods */}
          <div className="lg:col-span-5 space-y-12">
            <header className="space-y-6">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary-container shadow-xl profile-photo transition-transform duration-200">
                <div className="w-full h-full bg-gradient-to-br from-primary-container to-secondary-container flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-9xl opacity-60">person</span>
                </div>
              </div>
              <SplitText
                text="Let's Connect."
                tag="h1"
                className="font-display-lg text-display-lg md:text-display-lg text-on-surface leading-tight"
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
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">
                Whether you have a groundbreaking idea or just want to chat about design botany, my door is always open.
              </p>
            </header>

            <div className="space-y-4">
              {/* Contact Cards */}
              <div className="group flex items-center p-4 bg-white/40 rounded-xl border border-secondary/15 hover:border-primary-container hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white mr-4 group-hover:bg-primary-container transition-colors">
                  <span className="material-symbols-outlined">chat</span>
                </div>
                <div>
                  <p className="font-label-md text-secondary uppercase tracking-widest text-xs">WeChat</p>
                  <p className="font-body-lg text-on-surface font-semibold">grace_design_studio</p>
                </div>
              </div>

              <div className="group flex items-center p-4 bg-white/40 rounded-xl border border-secondary/15 hover:border-primary-container hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white mr-4 group-hover:bg-primary-container transition-colors">
                  <span className="material-symbols-outlined">code</span>
                </div>
                <div>
                  <p className="font-label-md text-secondary uppercase tracking-widest text-xs">GitHub</p>
                  <p className="font-body-lg text-on-surface font-semibold">grace-studio-hq</p>
                </div>
              </div>

              <div className="group flex items-center p-4 bg-white/40 rounded-xl border border-secondary/15 hover:border-primary-container hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white mr-4 group-hover:bg-primary-container transition-colors">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <p className="font-label-md text-secondary uppercase tracking-widest text-xs">Email</p>
                  <p className="font-body-lg text-on-surface font-semibold">hello@grace.design</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white/30 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-sm border border-secondary/10">
            <form className="space-y-10" onSubmit={handleSubmit}>
              <div className="relative group">
                <input
                  className="peer w-full bg-transparent border-0 border-b-2 border-secondary/20 py-3 px-0 focus:ring-0 focus:border-primary-container transition-all text-body-lg text-on-surface"
                  id="name"
                  name="name"
                  placeholder=" "
                  required
                  type="text"
                />
                <label
                  className="absolute left-0 top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform font-label-md text-secondary/60 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary-container"
                  htmlFor="name"
                >
                  Name
                </label>
              </div>

              <div className="relative group">
                <input
                  className="peer w-full bg-transparent border-0 border-b-2 border-secondary/20 py-3 px-0 focus:ring-0 focus:border-primary-container transition-all text-body-lg text-on-surface"
                  id="email"
                  name="email"
                  placeholder=" "
                  required
                  type="email"
                />
                <label
                  className="absolute left-0 top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform font-label-md text-secondary/60 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary-container"
                  htmlFor="email"
                >
                  Email Address
                </label>
              </div>

              <div className="relative group">
                <textarea
                  className="peer w-full bg-transparent border-0 border-b-2 border-secondary/20 py-3 px-0 focus:ring-0 focus:border-primary-container transition-all text-body-lg text-on-surface resize-none"
                  id="message"
                  name="message"
                  placeholder=" "
                  required
                  rows="4"
                ></textarea>
                <label
                  className="absolute left-0 top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform font-label-md text-secondary/60 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary-container"
                  htmlFor="message"
                >
                  Message
                </label>
              </div>

              <div className="pt-6">
                <button
                  className="w-full md:w-auto px-12 py-4 bg-secondary text-white rounded-full font-label-md text-lg hover:bg-on-secondary-container hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3"
                  type="submit"
                >
                  Send Message
                  <span className="material-symbols-outlined">send</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      {/* Success Message Modal */}
      <div
        className={`fixed inset-0 bg-on-surface/40 backdrop-blur-sm z-[100] flex items-center justify-center transition-opacity duration-300 ${
          showModal ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="bg-surface p-12 rounded-[40px] text-center max-w-sm border-2 border-primary-container shadow-2xl">
          <div className="w-20 h-20 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              check_circle
            </span>
          </div>
          <h2 className="font-display-lg text-headline-md text-on-surface mb-2">Message Sent!</h2>
          <p className="font-body-md text-on-surface-variant mb-8">
            I'll get back to you faster than a petal falls in spring.
          </p>
          <button
            className="bg-secondary text-white px-8 py-3 rounded-full font-label-md w-full"
            onClick={closeModal}
          >
            Back to Page
          </button>
        </div>
      </div>
    </>
  )
}

export default Contact
