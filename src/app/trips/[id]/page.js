import { tripsData, getTripById } from '@/data/tripsData'
import TripDetailClient from './TripDetailClient'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return tripsData.map((trip) => ({ id: trip.id }))
}

export async function generateMetadata({ params }) {
  const { id } = await params
  const trip = getTripById(id)
  if (!trip) {
    return { title: 'Trip Not Found | AASTMT Alumni' }
  }
  return {
    title: `${trip.title.ar} | ${trip.title.en} - AASTMT Alumni`,
    description: trip.description ? trip.description.ar : `${trip.title.ar} - رحلات وعروض رابطة الخريجين`
  }
}

export default async function TripDetailPage({ params }) {
  const { id } = await params
  const trip = getTripById(id)

  if (!trip) {
    notFound()
  }

  return <TripDetailClient trip={trip} allTrips={tripsData} />
}
