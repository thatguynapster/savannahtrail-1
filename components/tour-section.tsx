import clsx from 'clsx';
import { ArrowRight } from 'lucide-react';
import React from 'react'

type Props = {}

const destinations = [
    {
        id: 1,
        name: "Takoradi",
        image: "https://images.unsplash.com/photo-1622487560941-7f6bd5ed24b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        featured: false
    },
    {
        id: 4,
        name: "Johannesburg",
        image: "https://plus.unsplash.com/premium_photo-1721742732864-a22c6f460c79?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        featured: false
    },
    {
        id: 2,
        name: "Accra",
        image: "https://images.unsplash.com/photo-1628690570333-067654e57889?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        featured: true
    },
    {
        id: 3,
        name: "Kigali",
        image: "https://images.unsplash.com/photo-1585773111351-977313a05e66?q=80&w=2101&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        featured: false
    },
    {
        id: 5,
        name: "Addis Ababa",
        image: "https://plus.unsplash.com/premium_photo-1695297516798-d275bdf26575?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
                        <h2 className="section-title mb-0 font-bold font-volkhov">Explore the Best of Africa's Rich Heritage & Culture</h2>
                        <button className="btn-primary flex items-center mt-4 md:mt-0">
                            View All <ArrowRight className="ml-2 w-5 h-5" />
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-flow-col gap-6">
                    {destinations.map((destination) => (
                        <div
                            key={destination.id}
                            className={`relative rounded-lg overflow-hidden shadow-lg group transition-all card-hover ${destination.featured ? 'md:row-span-2 md:col-span-2' : ''
                                }`}
                        >
                            <img
                                src={destination.image}
                                alt={destination.name}
                                className={clsx("w-full aspect-square object-cover", {
                                    'md:h-[calc((16rem*2)+1.5rem)]': destination.featured,
                                    'md:h-64': !destination.featured
                                })}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                                <div className="p-6 text-white">
                                    <h3 className="text-xl font-semibold">{destination.name}</h3>
                                    {destination.featured && (
                                        <p className="mt-2 text-white/80">From vibrant festivals to ancestral landmarks, discover immersive destinations that connect you to the soul of Africa.</p>
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
        </section >
    )
}

export default ToursSection