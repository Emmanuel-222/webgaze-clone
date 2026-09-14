import { Link } from 'react-router-dom'

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] py-16 md:py-24">
      <div className="absolute left-0 right-0 top-0 h-[2px] overflow-hidden">
        <div className="animate-line-grow h-full w-full bg-red-brand" />
      </div>

      <div className="absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-red-brand/20 blur-[120px]" />

      <div className="container-wide relative z-10 text-center">
        <h2 className="mx-auto max-w-3xl text-2xl font-bold text-white md:text-[2rem]">
          Let's build something that earns its keep.
        </h2>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link to="/contact" className="btn-primary">
            Request a Proposal
          </Link>
          <Link to="/contact" className="btn-outline">
            Book Discovery Call
          </Link>
        </div>
      </div>
    </section>
  )
}
