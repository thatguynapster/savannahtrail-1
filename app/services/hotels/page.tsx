import { Building, Calendar, MapPin, Star } from 'lucide-react'
import React from 'react'

type Props = {}

const HotelsPage = (props: Props) => {
    return (
        <div className="min-h-screen pb-12">
            <div
                className="relative h-80 bg-cover bg-center"
                style={{ backgroundImage: "url('/img/about-banner.png')" }}
            >
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
                    <div className="text-center text-white">
                        <h1 className="text-5xl font-cursive font-bold">Accommodations</h1>
                        <h2 className="mt-8 text-3xl capitalize">Find Your Perfect stay</h2>
                    </div>
                </div>
            </div>

            <div className="container mx-auto pt-12 px-4">
                <div className="text-center mb-8">
                    <p className="text-gray-600 max-w-2xl mx-auto mt-4">
                        From luxury resorts to budget-friendly options, we offer a wide range of accommodations
                        to suit every traveler's needs and preferences.
                    </p>
                </div>

                {/* Hotel Search Section */}
                <div className="bg-white rounded-lg p-6 shadow-lg mb-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="bg-gray-100 p-3 rounded-md">
                            <label className="block text-gray-700 text-sm font-medium mb-1">Destination</label>
                            <div className="flex items-center">
                                <MapPin className="w-5 h-5 text-primary mr-2" />
                                <input
                                    type="text"
                                    placeholder="Where are you going?"
                                    className="bg-transparent text-gray-800 w-full focus:outline-none"
                                />
                            </div>
                        </div>

                        <div className="bg-gray-100 p-3 rounded-md">
                            <label className="block text-gray-700 text-sm font-medium mb-1">Check-in Date</label>
                            <div className="flex items-center">
                                <Calendar className="w-5 h-5 text-primary mr-2" />
                                <input
                                    type="date"
                                    className="bg-transparent text-gray-800 w-full focus:outline-none"
                                />
                            </div>
                        </div>

                        <div className="bg-gray-100 p-3 rounded-md">
                            <label className="block text-gray-700 text-sm font-medium mb-1">Check-out Date</label>
                            <div className="flex items-center">
                                <Calendar className="w-5 h-5 text-primary mr-2" />
                                <input
                                    type="date"
                                    className="bg-transparent text-gray-800 w-full focus:outline-none"
                                />
                            </div>
                        </div>

                        <button className="bg-primary hover:bg-primary-hover text-white font-medium py-4 px-6 rounded-md transition-colors flex items-center justify-center">
                            <Building className="w-5 h-5 mr-2" />
                            Search Hotels
                        </button>
                    </div>
                </div>

                {/* Featured Hotels Section */}
                <div className="mb-16">
                    <h3 className="text-2xl font-semibold mb-8">Featured Hotels</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Grand Luxury Resort & Spa",
                                location: "Bali, Indonesia",
                                rating: 5,
                                price: "$220",
                                image: "https://images.unsplash.com/photo-1566073771259-6a8506099945"
                            },
                            {
                                name: "Urban Boutique Hotel",
                                location: "Paris, France",
                                rating: 4,
                                price: "$180",
                                image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa"
                            },
                            {
                                name: "Oceanfront Paradise",
                                location: "Cancun, Mexico",
                                rating: 5,
                                price: "$250",
                                image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4"
                            }
                        ].map((hotel, index) => (
                            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md card-hover">
                                <img
                                    src={`${hotel.image}?auto=format&q=75&fit=crop&w=600&h=350`}
                                    alt={hotel.name}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-5">
                                    <h4 className="font-semibold text-lg mb-1">{hotel.name}</h4>
                                    <div className="flex items-center text-gray-500 text-sm mb-3">
                                        <MapPin className="w-4 h-4 mr-1" />
                                        <span>{hotel.location}</span>
                                    </div>
                                    <div className="flex justify-between items-center mb-4">
                                        <div className="flex items-center">
                                            {Array(hotel.rating).fill(0).map((_, i) => (
                                                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                                            ))}
                                        </div>
                                        <div className="text-primary font-bold">{hotel.price}<span className="text-gray-500 font-normal text-sm"> / night</span></div>
                                    </div>
                                    <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 rounded-md transition-colors">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Hotel Types Section */}
                <div className="mb-16">
                    <h3 className="text-2xl font-semibold mb-8">Browse by Property Type</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            {
                                type: "Hotels",
                                count: 842,
                                image: "https://images.unsplash.com/photo-1590073242678-70ee3fc28f8a"
                            },
                            {
                                type: "Resorts",
                                count: 315,
                                image: "https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd"
                            },
                            {
                                type: "Villas",
                                count: 219,
                                image: "https://images.unsplash.com/photo-1613977257363-707ba9348227"
                            },
                            {
                                type: "Apartments",
                                count: 651,
                                image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
                            }
                        ].map((property, index) => (
                            <div key={index} className="relative rounded-lg overflow-hidden card-hover h-40">
                                <img
                                    src={`${property.image}?auto=format&q=75&fit=crop&w=300&h=200`}
                                    alt={property.type}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                                    <h4 className="text-white font-semibold">{property.type}</h4>
                                    <p className="text-white/80 text-sm">{property.count} properties</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HotelsPage