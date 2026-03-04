import Link from 'next/link'
import { DrupalVolunteerOpportunity } from '@/lib/types'
import { MapPin, Clock, ArrowRight, HandHeart } from 'lucide-react'
import ResponsiveImage from './ResponsiveImage'

interface VolunteerCardProps {
  opportunity: DrupalVolunteerOpportunity
}

export default function VolunteerCard({ opportunity }: VolunteerCardProps) {
  return (
    <Link
      href={opportunity.path || `/volunteer/${opportunity.id}`}
      className="group bg-white rounded-2xl shadow-md shadow-primary-200/50 hover:shadow-xl hover:shadow-primary-300/40 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
    >
      {/* Image */}
      <div className="relative h-48 bg-gradient-to-br from-green-100 to-emerald-100">
        {opportunity.image?.url ? (
          <ResponsiveImage
            src={opportunity.image.url}
            alt={opportunity.image.alt || opportunity.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            variations={opportunity.image.variations}
            targetWidth={400}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <HandHeart className="w-16 h-16 text-green-300" />
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors line-clamp-2">
          {opportunity.title}
        </h3>

        {opportunity.body?.summary && (
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {opportunity.body.summary}
          </p>
        )}

        <div className="space-y-2 text-sm text-gray-500 mb-4">
          {opportunity.commitment && (
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{opportunity.commitment}</span>
            </div>
          )}
          {opportunity.location && (
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{opportunity.location}</span>
            </div>
          )}
        </div>

        {opportunity.skillsNeeded && (
          <div className="mb-4">
            <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Skills Needed</span>
            <p className="text-sm text-gray-700 mt-1">{opportunity.skillsNeeded}</p>
          </div>
        )}

        <div className="flex items-center text-green-700 font-medium text-sm group-hover:gap-1 transition-all">
          Learn More
          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  )
}
