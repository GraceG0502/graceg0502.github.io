function Footer() {
  return (
    <footer className="border-t border-outline-variant/15 bg-surface">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-margin-desktop py-margin-desktop max-w-container-max mx-auto">
        <div className="mb-8 md:mb-0">
          <div className="font-display-lg text-headline-md text-on-surface mb-2">Grace Design</div>
          <p className="font-body-md text-secondary">© 2024 Grace Design. All rights reserved.</p>
        </div>
        <div className="flex gap-12">
          <a
            className="font-body-md text-secondary hover:text-primary underline decoration-2 underline-offset-4 transition-all duration-300"
            href="#"
          >
            Instagram
          </a>
          <a
            className="font-body-md text-secondary hover:text-primary underline decoration-2 underline-offset-4 transition-all duration-300"
            href="#"
          >
            LinkedIn
          </a>
          <a
            className="font-body-md text-secondary hover:text-primary underline decoration-2 underline-offset-4 transition-all duration-300"
            href="#"
          >
            Dribbble
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
