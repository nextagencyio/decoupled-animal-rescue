'use client'

import Link from 'next/link'
import { useQuery } from '@apollo/client'
import { GET_FEATURED_ANIMALS } from '@/lib/queries'
import { DrupalAnimal, DrupalHomepage } from '@/lib/types'
import { ArrowRight, PawPrint, Heart } from 'lucide-react'
import ResponsiveImage from './ResponsiveImage'

interface AnimalsPreviewProps {
  homepageContent?: DrupalHomepage | null
}

interface FeaturedAnimalsData {
  nodeAnimals: {
    nodes: DrupalAnimal[]
  }
}

export default function AnimalsPreview({ homepageContent }: AnimalsPreviewProps) {
  const { data, loading, error } = useQuery<FeaturedAnimalsData>(GET_FEATURED_ANIMALS)

  const animals = data?.nodeAnimals?.nodes || []

  if (loading) {
    return (
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {homepageContent?.featuredAnimalsTitle || 'Meet Our Animals'}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden animate-pulse">
                <div className="h-64 bg-gray-200" />
                <div className="p-6">
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-2" />
                  <div className="h-4 bg-gray-200 rounded w-1/2 mb-4" />
                  <div className="h-4 bg-gray-200 rounded w-1/3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (error || animals.length === 0) {
    return null
  }

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {homepageContent?.featuredAnimalsTitle || 'Meet Our Animals'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              These lovable friends are looking for their forever homes. Could you be the one?
            </p>
          </div>
          <Link
            href="/animals"
            className="hidden md:flex items-center text-orange-700 hover:text-orange-800 font-medium"
          >
            View All Animals
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {animals.map((animal) => {
            const statusName = animal.animalStatus?.[0]?.name || 'Available'
            const speciesName = animal.species?.[0]?.name || 'Animal'

            return (
              <Link
                key={animal.id}
                href={animal.path || `/animals/${animal.id}`}
                className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-64 bg-gradient-to-br from-orange-100 to-amber-100">
                  {animal.photo?.url ? (
                    <ResponsiveImage
                      src={animal.photo.url}
                      alt={animal.photo.alt || animal.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      variations={animal.photo.variations}
                      targetWidth={400}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <PawPrint className="w-16 h-16 text-orange-300" />
                    </div>
                  )}

                  <div className="absolute top-4 left-4 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {statusName}
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                    {speciesName}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-orange-700 transition-colors">
                    {animal.title}
                  </h3>
                  {animal.breed && (
                    <p className="text-sm text-gray-600 mb-2">{animal.breed}</p>
                  )}
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    {animal.age && <span>{animal.age}</span>}
                    {animal.gender && <span>{animal.gender}</span>}
                  </div>
                  <div className="flex items-center justify-between">
                    {animal.adoptionFee && (
                      <span className="text-lg font-bold text-orange-700">{animal.adoptionFee}</span>
                    )}
                    <span className="inline-flex items-center text-orange-700 font-medium text-sm">
                      <Heart className="w-4 h-4 mr-1" />
                      Meet Me
                    </span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/animals"
            className="inline-flex items-center px-8 py-4 bg-orange-700 text-white rounded-lg hover:bg-orange-800 transition-colors font-bold"
          >
            View All Adoptable Animals
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}
