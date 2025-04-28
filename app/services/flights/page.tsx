import { Calendar, Clock, MapPin, Plane } from 'lucide-react'
import React from 'react'

type Props = {}

const FlightsPage = (props: Props) => {
    return (
        <div className="min-h-screen pb-12">
            <div
                className="relative h-80 bg-cover bg-center"
                style={{ backgroundImage: "url('/img/about-banner.png')" }}
            >
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
                    <div className="text-center text-white">
                        <h1 className="text-5xl font-cursive font-bold">Flights</h1>
                        <h2 className="mt-8 text-3xl">Find Your Perfect Flight</h2>
                    </div>
                </div>
            </div>

            <div className="container mx-auto pt-12 px-4">
                <div className="text-center mb-8">
                    <p className="text-gray-600 max-w-2xl mx-auto mt-4">
                        Discover the best deals on flights worldwide. Our extensive network of airlines
                        ensures you get the best prices and schedules to match your travel needs.
                    </p>
                </div>

                {/* Flight Search Section */}
                <div className="bg-white rounded-lg p-6 shadow-lg mb-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="bg-gray-100 p-3 rounded-md">
                            <label className="block text-gray-700 text-sm font-medium mb-1">From</label>
                            <div className="flex items-center">
                                <MapPin className="w-5 h-5 text-primary mr-2" />
                                <input
                                    type="text"
                                    placeholder="Departure city"
                                    className="bg-transparent text-gray-800 w-full focus:outline-none"
                                />
                            </div>
                        </div>

                        <div className="bg-gray-100 p-3 rounded-md">
                            <label className="block text-gray-700 text-sm font-medium mb-1">To</label>
                            <div className="flex items-center">
                                <MapPin className="w-5 h-5 text-primary mr-2" />
                                <input
                                    type="text"
                                    placeholder="Destination city"
                                    className="bg-transparent text-gray-800 w-full focus:outline-none"
                                />
                            </div>
                        </div>

                        <div className="bg-gray-100 p-3 rounded-md">
                            <label className="block text-gray-700 text-sm font-medium mb-1">Departure Date</label>
                            <div className="flex items-center">
                                <Calendar className="w-5 h-5 text-primary mr-2" />
                                <input
                                    type="date"
                                    className="bg-transparent text-gray-800 w-full focus:outline-none"
                                />
                            </div>
                        </div>

                        <button className="bg-primary hover:bg-primary-hover text-white font-medium py-4 px-6 rounded-md transition-colors flex items-center justify-center">
                            <Plane className="w-5 h-5 mr-2" />
                            Search Flights
                        </button>
                    </div>
                </div>

                {/* Popular Flights Section */}
                <div className="mb-16">
                    <h3 className="text-2xl font-semibold mb-8">Popular Flight Routes</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                from: "New York",
                                to: "London",
                                price: "$450",
                                image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad"
                            },
                            {
                                from: "Paris",
                                to: "Tokyo",
                                price: "$780",
                                image: "https://images.unsplash.com/photo-1532236204992-f5e85c024202"
                            },
                            {
                                from: "Dubai",
                                to: "Bali",
                                price: "$560",
                                image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62"
                            }
                        ].map((flight, index) => (
                            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md card-hover">
                                <img
                                    src={`${flight.image}?auto=format&q=75&fit=crop&w=600&h=350`}
                                    alt={`${flight.from} to ${flight.to}`}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-5">
                                    <div className="flex justify-between items-center mb-4">
                                        <div>
                                            <h4 className="font-semibold">{flight.from} to {flight.to}</h4>
                                            <div className="flex items-center text-gray-500 text-sm mt-1">
                                                <Clock className="w-4 h-4 mr-1" />
                                                <span>Various flight times available</span>
                                            </div>
                                        </div>
                                        <div className="text-primary font-bold">{flight.price}</div>
                                    </div>
                                    <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 rounded-md transition-colors">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Benefits Section */}
                <div className="bg-gray-50 rounded-xl p-8">
                    <h3 className="text-2xl font-semibold mb-6">Why Book Flights With Us</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="flex flex-col items-center text-center p-4">
                            <div className="bg-primary/10 p-4 rounded-full mb-4">
                                <Plane className="w-8 h-8 text-primary" />
                            </div>
                            <h4 className="font-semibold mb-2">Best Prices Guaranteed</h4>
                            <p className="text-gray-600">We offer the best prices with our price match guarantee policy.</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-4">
                            <div className="bg-primary/10 p-4 rounded-full mb-4">
                                <Clock className="w-8 h-8 text-primary" />
                            </div>
                            <h4 className="font-semibold mb-2">Easy Booking</h4>
                            <p className="text-gray-600">Book your flights in just a few clicks with our user-friendly platform.</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-4">
                            <div className="bg-primary/10 p-4 rounded-full mb-4">
                                <Calendar className="w-8 h-8 text-primary" />
                            </div>
                            <h4 className="font-semibold mb-2">Flexible Dates</h4>
                            <p className="text-gray-600">Change your travel dates if your plans change, with minimal fees.</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-4">
                            <div className="bg-primary/10 p-4 rounded-full mb-4">
                                <MapPin className="w-8 h-8 text-primary" />
                            </div>
                            <h4 className="font-semibold mb-2">Global Coverage</h4>
                            <p className="text-gray-600">Access flights to over 190 countries and territories worldwide.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlightsPage