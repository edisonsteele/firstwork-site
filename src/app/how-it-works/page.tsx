import Image from 'next/image'
import Link from 'next/link'

export default function HowItWorks() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-[#035183]/5 to-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-[#035183] sm:text-6xl">
              How FirstWork Works
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#035183]/80">
              FirstWork uses digital reinforcement learning technology to make learning on smart devices more engaging and effective. Our approach combines proven educational methods with cutting-edge technology.
            </p>
          </div>
        </div>
      </div>

      {/* Core Technology Section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-[#035183] sm:text-4xl">Core Technology</h2>
          <p className="mt-6 text-lg leading-8 text-[#035183]/80">
            FirstWork's digital reinforcement learning technology adapts to each student's learning pace and style, providing personalized feedback and support.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div className="flex flex-col gap-8">
            <div className="rounded-2xl bg-[#035183]/5 p-8">
              <h3 className="text-xl font-semibold text-[#035183]">Adaptive Learning</h3>
              <p className="mt-4 text-[#035183]/80">
                Our system continuously analyzes student performance and adjusts difficulty levels to maintain optimal engagement and learning progress.
              </p>
            </div>
            <div className="rounded-2xl bg-[#035183]/5 p-8">
              <h3 className="text-xl font-semibold text-[#035183]">Real-time Feedback</h3>
              <p className="mt-4 text-[#035183]/80">
                Immediate reinforcement and guidance help students understand their progress and stay motivated throughout their learning journey.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="rounded-2xl bg-[#035183]/5 p-8">
              <h3 className="text-xl font-semibold text-[#035183]">Progress Tracking</h3>
              <p className="mt-4 text-[#035183]/80">
                Detailed analytics and progress reports help educators and parents monitor student development and identify areas for improvement.
              </p>
            </div>
            <div className="rounded-2xl bg-[#035183]/5 p-8">
              <h3 className="text-xl font-semibold text-[#035183]">Engagement Optimization</h3>
              <p className="mt-4 text-[#035183]/80">
                Our technology ensures students remain engaged by providing the right level of challenge and support at the right time.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="rounded-2xl bg-[#035183]/5 p-8">
              <h3 className="text-xl font-semibold text-[#035183]">Personalized Learning Paths</h3>
              <p className="mt-4 text-[#035183]/80">
                Each student receives a customized learning experience based on their individual needs, strengths, and learning style.
              </p>
            </div>
            <div className="rounded-2xl bg-[#035183]/5 p-8">
              <h3 className="text-xl font-semibold text-[#035183]">Data-Driven Insights</h3>
              <p className="mt-4 text-[#035183]/80">
                Advanced analytics provide valuable insights into learning patterns and help optimize the educational experience.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Learning Methods Section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-[#035183] sm:text-4xl">Learning Methods</h2>
          <p className="mt-6 text-lg leading-8 text-[#035183]/80">
            FirstWork incorporates proven educational methods to ensure effective learning outcomes.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="rounded-2xl bg-[#035183]/5 p-8">
            <h3 className="text-xl font-semibold text-[#035183]">Feature, Function, and Class (FFC)</h3>
            <p className="mt-4 text-[#035183]/80">
              Our comprehensive FFC curriculum helps students understand object characteristics, purposes, and categories, building a strong foundation for learning.
            </p>
          </div>
          <div className="rounded-2xl bg-[#035183]/5 p-8">
            <h3 className="text-xl font-semibold text-[#035183]">Receptive Identification</h3>
            <p className="mt-4 text-[#035183]/80">
              Students learn to identify and understand objects, concepts, and relationships through interactive exercises and real-world applications.
            </p>
          </div>
          <div className="rounded-2xl bg-[#035183]/5 p-8">
            <h3 className="text-xl font-semibold text-[#035183]">Mathematics</h3>
            <p className="mt-4 text-[#035183]/80">
              From basic counting to complex arithmetic, our math curriculum builds skills progressively with engaging, interactive lessons.
            </p>
          </div>
          <div className="rounded-2xl bg-[#035183]/5 p-8">
            <h3 className="text-xl font-semibold text-[#035183]">Phonics</h3>
            <p className="mt-4 text-[#035183]/80">
              Our phonics program helps students develop essential reading skills through systematic, engaging instruction and practice.
            </p>
          </div>
        </div>
      </div>

      {/* Research & Results Section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-[#035183] sm:text-4xl">Research & Results</h2>
          <p className="mt-6 text-lg leading-8 text-[#035183]/80">
            FirstWork's effectiveness is backed by research and proven results in educational settings.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div className="rounded-2xl bg-[#035183]/5 p-8">
            <h3 className="text-xl font-semibold text-[#035183]">Proven Methodology</h3>
            <p className="mt-4 text-[#035183]/80">
              Our approach is based on established educational research and best practices in digital learning.
            </p>
          </div>
          <div className="rounded-2xl bg-[#035183]/5 p-8">
            <h3 className="text-xl font-semibold text-[#035183]">Measurable Results</h3>
            <p className="mt-4 text-[#035183]/80">
              Students using FirstWork show significant improvements in learning outcomes and engagement.
            </p>
          </div>
          <div className="rounded-2xl bg-[#035183]/5 p-8">
            <h3 className="text-xl font-semibold text-[#035183]">Continuous Improvement</h3>
            <p className="mt-4 text-[#035183]/80">
              We regularly update our system based on research findings and user feedback to ensure optimal learning outcomes.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#035183] sm:text-4xl">Ready to Get Started?</h2>
          <p className="mt-6 text-lg leading-8 text-[#035183]/80">
            Join the growing number of educators and students using FirstWork to enhance learning outcomes.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/?showContact=true"
              className="rounded-md bg-[#035183] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#035183]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#035183]"
            >
              Contact Us
            </Link>
            <Link href="/pricing" className="text-sm font-semibold leading-6 text-[#035183]">
              View Pricing <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 