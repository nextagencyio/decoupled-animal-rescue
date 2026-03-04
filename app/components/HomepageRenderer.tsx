'use client'

import Header from './Header'
import HeroSection from './HeroSection'
import StatsSection from './StatsSection'
import CTASection from './CTASection'
import ErrorBoundary from './ErrorBoundary'
import { DrupalHomepage } from '@/lib/types'
import { Heart, Home, Users, Shield, Star, Dog, Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react'

interface HomepageRendererProps {
  homepageContent: DrupalHomepage | null | undefined
}

const communityItems = [
  { icon: Heart, label: 'With Love', color: 'bg-primary-500', description: 'Compassionate care' },
  { icon: Dog, label: 'All Breeds', color: 'bg-primary-600', description: 'Dogs, cats & more' },
  { icon: Home, label: 'Forever Homes', color: 'bg-accent-500', description: 'Perfect matches' },
  { icon: Users, label: 'Community', color: 'bg-primary-400', description: 'Volunteer network' },
  { icon: Shield, label: 'Safe Haven', color: 'bg-accent-600', description: 'Protected & loved' },
  { icon: Star, label: 'Excellence', color: 'bg-primary-700', description: 'Top-rated rescue' },
]

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&q=80&fit=crop', alt: 'Happy rescue dog' },
  { src: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&q=80&fit=crop', alt: 'Dogs playing together' },
  { src: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80&fit=crop', alt: 'Adorable puppy portrait' },
  { src: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=600&q=80&fit=crop', alt: 'Cat relaxing in shelter' },
]

export default function HomepageRenderer({ homepageContent }: HomepageRendererProps) {
  return (
    <div className="min-h-screen bg-primary-50">
      <Header />

      <ErrorBoundary>
        <HeroSection homepageContent={homepageContent} />
      </ErrorBoundary>

      <ErrorBoundary>
        <StatsSection homepageContent={homepageContent} />
      </ErrorBoundary>

      {/* Featured Content Preview */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
              Featured
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How You Can Help
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              There are many ways to make a difference in the lives of animals waiting for their forever homes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Adopt a Pet', desc: 'Give a rescued animal the loving forever home they deserve. Browse our available animals and find your perfect companion.', color: 'shadow-primary-200/50' },
              { title: 'Volunteer With Us', desc: 'Share your time and skills to help animals in need. From dog walking to event planning, every contribution matters.', color: 'shadow-accent-200/50' },
              { title: 'Foster a Friend', desc: 'Open your home temporarily to an animal in need. Fostering saves lives and helps pets prepare for adoption.', color: 'shadow-amber-200/50' },
            ].map((card, i) => (
              <div
                key={card.title}
                className={`bg-white rounded-2xl p-8 shadow-lg ${card.color} hover:-translate-y-1 transition-all duration-300 relative`}
                style={{ transform: i === 1 ? 'translateY(-8px)' : undefined }}
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${i === 0 ? 'bg-primary-100' : i === 1 ? 'bg-accent-100' : 'bg-amber-100'}`}>
                  <Heart className={`w-6 h-6 ${i === 0 ? 'text-primary-600' : i === 1 ? 'text-accent-600' : 'text-amber-600'}`} />
                </div>
                <h3 className="font-display text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>
                <a href="/animals" className="inline-flex items-center mt-4 text-primary-600 font-semibold text-sm hover:text-primary-700">
                  Get started &rarr;
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Icons Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1 bg-accent-100 text-accent-700 rounded-full text-sm font-semibold mb-4">
              Our Mission
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Stand For
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Every animal deserves compassion, safety, and a chance at happiness.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {communityItems.map((item) => (
              <div key={item.label} className="flex flex-col items-center text-center group cursor-pointer">
                <div className={`${item.color} w-20 h-20 rounded-full flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-display font-bold text-gray-900 mb-1">{item.label}</h3>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
              Gallery
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Happy Tails
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Meet some of the amazing animals who have found their forever homes through Safe Paws Rescue.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="relative overflow-hidden rounded-2xl aspect-square group">
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/30 transition-colors duration-300 flex items-end">
                  <p className="text-white text-sm font-medium p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{img.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ErrorBoundary>
        <CTASection homepageContent={homepageContent} />
      </ErrorBoundary>

      {/* Footer */}
      <footer className="bg-primary-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-primary-600 rounded-2xl flex items-center justify-center">
                  <Heart className="w-7 h-7 text-accent-300" />
                </div>
                <span className="text-2xl font-extrabold font-display text-white">Safe Paws Rescue</span>
              </div>
              <p className="text-primary-300 mb-6 max-w-md leading-relaxed">
                Rescuing, rehabilitating, and rehoming animals since 2010. Every animal deserves a second chance at happiness and a loving forever home.
              </p>
              <div className="flex gap-3">
                {[
                  { icon: Facebook, label: 'Facebook' },
                  { icon: Twitter, label: 'Twitter' },
                  { icon: Instagram, label: 'Instagram' },
                  { icon: Youtube, label: 'YouTube' },
                ].map((social) => (
                  <a key={social.label} href="#" aria-label={social.label} className="w-10 h-10 bg-primary-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors duration-200">
                    <social.icon className="w-5 h-5 text-primary-200" />
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-display font-bold text-white text-lg mb-5">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { label: 'Animals', href: '/animals' },
                  { label: 'Events', href: '/events' },
                  { label: 'Volunteer', href: '/volunteer' },
                  { label: 'News', href: '/news' },
                  { label: 'Contact', href: '/contact' },
                ].map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-primary-300 hover:text-accent-400 transition-colors duration-200">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-display font-bold text-white text-lg mb-5">Contact Info</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent-400 flex-shrink-0 mt-0.5" />
                  <span className="text-primary-300">456 Rescue Lane<br />Portland, OR 97201</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-accent-400 flex-shrink-0" />
                  <span className="text-primary-300">(503) 555-0147</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-accent-400 flex-shrink-0" />
                  <span className="text-primary-300">hello@safepawsrescue.org</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-400 text-sm">&copy; {new Date().getFullYear()} Safe Paws Rescue. All rights reserved.</p>
            <div className="flex gap-6 text-sm text-primary-400">
              <a href="#" className="hover:text-accent-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent-400 transition-colors">Terms of Use</a>
              <a href="#" className="hover:text-accent-400 transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
