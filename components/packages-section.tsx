import { Star, Users } from 'lucide-react';
import React from 'react'

type Props = {}

const packages = [
    {
        id: 1,
        name: "Heritage Discovery Tour",
        image: "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?auto=format&fit=crop&w=600&h=400&q=80",
        rating: 4.8,
        price: 1250,
        duration: "7 days",
        people: "10+ People"
    },
    {
        id: 2,
        name: "Immersive Village Experience",
        image: "https://images.unsplash.com/photo-1518182170546-07661fd94144?auto=format&fit=crop&w=600&h=400&q=80",
        rating: 4.7,
        price: 1450,
        duration: "5 days",
        people: "8+ People"
    },
    {
        id: 3,
        name: "Adventure & Nature Trail",
        image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&w=600&h=400&q=80",
        rating: 4.9,
        price: 1350,
        duration: "8 days",
        people: "12+ People"
    }
];

const PackagesSection = (props: Props) => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h3 className="section-subtitle">POPULAR</h3>
                    <h2 className="section-title">Our Trending Tour Packages</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {packages.map(pkg => (
                        <div key={pkg.id} className="border border-gray-200 rounded-xl overflow-hidden shadow-sm card-hover">
                            <div className="relative">
                                <img
                                    src={pkg.image}
                                    alt={pkg.name}
                                    className="w-full h-56 object-cover"
                                />
                                <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm py-1 px-3 rounded-full text-sm font-medium">
                                    {pkg.duration}
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex justify-between items-center mb-3">
                                    <h3 className="text-xl font-semibold">{pkg.name}</h3>
                                    <div className="flex items-center">
                                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                                        <span className="ml-1 font-medium">{pkg.rating}</span>
                                    </div>
                                </div>

                                <div className="flex items-center text-gray-600 mb-5">
                                    <Users className="w-4 h-4 mr-1" />
                                    <span className="text-sm">{pkg.people}</span>
                                </div>

                                <div className="flex justify-between items-center">
                                    <div>
                                        <span className="text-xl font-bold text-primary">${pkg.price}</span>
                                        <span className="text-gray-500 ml-1">/ person</span>
                                    </div>
                                    <button className="bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-md text-sm transition-colors">
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PackagesSection