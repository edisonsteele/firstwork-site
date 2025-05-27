import Link from 'next/link'

const caseStudies = [
  {
    title: 'Appling County School System',
    description: 'How FirstWork is being implemented in the Appling County School System to enhance student learning outcomes.',
    category: 'Education',
    href: 'https://firstworkapp.com/case-studies/',
  },
  {
    title: 'New View Autism',
    description: 'A case study on how FirstWork is supporting learning and development at New View Autism.',
    category: 'Special Education',
    href: 'https://firstworkapp.com/case-studies/',
  },
  {
    title: 'Pine Lake Preparatory',
    description: 'Discover how Pine Lake Preparatory is utilizing FirstWork to improve student engagement and achievement.',
    category: 'Education',
    href: 'https://firstworkapp.com/case-studies/',
  },
]

export default function CaseStudies() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-[#035183]">Case Studies</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-[#035183] sm:text-4xl">
            Success Stories
          </p>
          <p className="mt-6 text-lg leading-8 text-[#035183]/80">
            See how FirstWork is making a difference in schools and educational programs across the country.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {caseStudies.map((study) => (
            <article key={study.title} className="flex flex-col h-[200px]">
              <div className="flex flex-col flex-grow">
                <div className="flex items-center gap-x-4 text-xs">
                  <span className="rounded-full bg-[#6FCEF4]/10 px-3 py-1 text-[#035183] font-medium">
                    {study.category}
                  </span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-[#035183] group-hover:text-[#6FCEF4]">
                    <Link href={study.href} target="_blank" rel="noopener noreferrer">
                      <span className="absolute inset-0" />
                      {study.title}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-[#035183]/80">{study.description}</p>
                </div>
              </div>
              <div className="mt-auto">
                <Link
                  href={study.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold leading-6 text-[#035183] hover:text-[#6FCEF4]"
                >
                  Learn more <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link
            href="https://firstworkapp.com/case-studies/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-[#035183] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#035183]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#035183]"
          >
            View all case studies
          </Link>
        </div>
      </div>
    </div>
  )
} 