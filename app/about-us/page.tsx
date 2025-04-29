import Link from "next/link"
import Image from "next/image"
import { Instagram, Youtube } from "lucide-react"

export default function AboutUsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold">EIDEOFY</span>
          </Link>
          <nav className="hidden md:flex gap-8">
            <Link href="/#what-we-do" className="text-sm font-medium hover:text-gray-600 transition-colors">
              What we do
            </Link>
            <Link href="/#platforms" className="text-sm font-medium hover:text-gray-600 transition-colors">
              Platforms
            </Link>
            <Link href="/#why-us" className="text-sm font-medium hover:text-gray-600 transition-colors">
              Why us
            </Link>
            <Link href="/about-us" className="text-sm font-medium hover:text-gray-600 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-gray-600 transition-colors">
              Contact us
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Eideofy</h1>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our story, mission, and the team behind Eideofy.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-12 mt-12">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="flex justify-center">
                  <div className="relative w-full max-w-[500px] aspect-square">
                    <Image
                      src="/placeholder.svg?height=500&width=500"
                      alt="About Eideofy"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center space-y-4">
                  <h2 className="text-2xl font-bold">Our Story</h2>
                  <p className="text-gray-600">
                    Eideofy was founded with a clear vision: to transform how influencers and creators navigate the
                    ever-evolving digital landscape. Rooted in the idea of "Eidos" (form, essence) and "Amplify," our
                    name reflects our commitment to enhancing the core essence of your brand while amplifying your reach
                    and impact.
                  </p>
                  <p className="text-gray-600">
                    What began as a specialized consultancy has evolved into a comprehensive agency offering end-to-end
                    solutions for digital growth and strategy. Our journey has been defined by continuous innovation,
                    data-driven approaches, and a relentless focus on delivering measurable results for our clients.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-center">Our Mission</h2>
                <p className="text-gray-600 text-center max-w-3xl mx-auto">
                  To empower creators and influencers with strategic expertise, innovative solutions, and data-driven
                  insights that elevate their digital presence and maximize their impact in an authentic, sustainable
                  way.
                </p>
                <div className="grid gap-6 md:grid-cols-3 mt-8">
                  <div className="flex flex-col space-y-3 border p-6 rounded-lg">
                    <h3 className="text-xl font-bold">Excellence</h3>
                    <p className="text-gray-600">
                      We are committed to delivering exceptional quality in everything we do, constantly pushing
                      boundaries and exceeding expectations.
                    </p>
                  </div>
                  <div className="flex flex-col space-y-3 border p-6 rounded-lg">
                    <h3 className="text-xl font-bold">Innovation</h3>
                    <p className="text-gray-600">
                      We embrace change and continuously evolve our strategies to stay ahead of trends and leverage
                      emerging opportunities.
                    </p>
                  </div>
                  <div className="flex flex-col space-y-3 border p-6 rounded-lg">
                    <h3 className="text-xl font-bold">Integrity</h3>
                    <p className="text-gray-600">
                      We operate with transparency, honesty, and ethical practices, building trust with our clients and
                      within our team.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-center">Our Team</h2>
                <p className="text-gray-600 text-center max-w-3xl mx-auto">
                  Eideofy brings together a diverse team of experts in social media strategy, content creation,
                  analytics, and digital marketing. Our collective experience spans multiple industries and platforms,
                  allowing us to provide comprehensive, innovative solutions.
                </p>
                <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4 mt-8">
                  <div className="flex flex-col items-center space-y-3">
                    <div className="relative w-32 h-32 rounded-full overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=128&width=128"
                        alt="Team Member"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-bold">Alex Johnson</h3>
                    <p className="text-gray-600 text-sm">Founder & CEO</p>
                  </div>
                  <div className="flex flex-col items-center space-y-3">
                    <div className="relative w-32 h-32 rounded-full overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=128&width=128"
                        alt="Team Member"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-bold">Sarah Chen</h3>
                    <p className="text-gray-600 text-sm">Head of Strategy</p>
                  </div>
                  <div className="flex flex-col items-center space-y-3">
                    <div className="relative w-32 h-32 rounded-full overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=128&width=128"
                        alt="Team Member"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-bold">Michael Rivera</h3>
                    <p className="text-gray-600 text-sm">Creative Director</p>
                  </div>
                  <div className="flex flex-col items-center space-y-3">
                    <div className="relative w-32 h-32 rounded-full overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=128&width=128"
                        alt="Team Member"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-bold">Priya Patel</h3>
                    <p className="text-gray-600 text-sm">Analytics Lead</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-black text-white">
        <div className="container flex flex-col gap-6 py-8 md:py-12 px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold">EIDEOFY</span>
            </div>
            <nav className="flex gap-4 sm:gap-6">
              <Link href="/#what-we-do" className="text-sm font-medium hover:text-gray-300 transition-colors">
                What we do
              </Link>
              <Link href="/#platforms" className="text-sm font-medium hover:text-gray-300 transition-colors">
                Platforms
              </Link>
              <Link href="/#why-us" className="text-sm font-medium hover:text-gray-300 transition-colors">
                Why us
              </Link>
              <Link href="/about-us" className="text-sm font-medium hover:text-gray-300 transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-sm font-medium hover:text-gray-300 transition-colors">
                Contact us
              </Link>
            </nav>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} Eideofy. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
