import clsx from 'clsx';
import { ArrowRight } from 'lucide-react';
import React from 'react'

type Props = {}

const destinations = [
    {
        id: 1,
        name: "London",
        image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&h=400&q=80",
        featured: false
    },
    {
        id: 4,
        name: "Eiffel Tower",
        image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=600&h=400&q=80",
        featured: false
    },
    {
        id: 2,
        name: "Paris",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&h=400&q=80",
        featured: true
    },
    {
        id: 3,
        name: "Rome",
        image: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?auto=format&fit=crop&w=600&h=400&q=80",
        featured: false
    },
    {
        id: 5,
        name: "Santorini",
        image: "/img/santorini.jpg",
        featured: false
    }
];

const ToursSection = (props: Props) => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="mb-12">
                    <h3 className="section-subtitle">TOP DESTINATIONS</h3>
                    <div className="flex flex-col md:flex-row justify-between items-end">
                        <h2 className="section-title mb-0 font-bold font-volkhov">We Provide You Best Europe Sightseeing Tours</h2>
                        <button className="btn-primary flex items-center mt-4 md:mt-0">
                            View All <ArrowRight className="ml-2 w-5 h-5" />
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-flow-col gap-6">
                    {destinations.map((destination) => (
                        <div
                            key={destination.id}
                            className={`relative rounded-lg overflow-hidden shadow-lg group transition-all card-hover ${destination.featured ? 'row-span-2 col-span-2' : ''
                                }`}
                        >
                            <img
                                src={destination.image}
                                alt={destination.name}
                                className={clsx("w-full aspect-square object-cover", {
                                    'h-[calc((16rem*2)+1.5rem)]': destination.featured,
                                    'h-64': !destination.featured
                                })}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                                <div className="p-6 text-white">
                                    <h3 className="text-xl font-semibold">{destination.name}</h3>
                                    {destination.featured && (
                                        <p className="mt-2 text-white/80">Explore the iconic landmarks and hidden gems of this beautiful city</p>
                                    )}
                                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button className="bg-primary text-white px-4 py-2 rounded-md text-sm">
                                            Explore Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ToursSection