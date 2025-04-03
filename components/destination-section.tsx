import { ArrowRight } from 'lucide-react'
import React from 'react'

type Props = {}

const DestinationSection = (props: Props) => {
    return (
        <section className="py-20 bg-gray-50 overflow-x-clip">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="md:w-1/2 relative">
                        <div className="rounded-full bg-gray-200 w-72 h-72 absolute -z-10 -top-10 -left-10"></div>
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&h=500&q=80"
                                alt="Couple on vacation"
                                className="rounded-tr-[100px] rounded-bl-[100px] object-cover h-[500px] w-full md:w-auto"
                            />

                            <div className="absolute -bottom-10 -left-10 bg-white p-3 rounded-lg shadow-lg">
                                <img
                                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=200&h=200&q=80"
                                    alt="Beach view"
                                    className="w-24 h-24 object-cover rounded-lg"
                                />
                            </div>

                            <div className="absolute -top-10 -right-10 bg-white p-3 rounded-lg shadow-lg">
                                <img
                                    src="https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=200&h=200&q=80"
                                    alt="Couple silhouette"
                                    className="w-24 h-24 object-cover rounded-lg"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="md:w-1/2">
                        <h3 className="section-subtitle">DESTINATION</h3>
                        <h2 className="section-title font-bold font-volkhov">Our Romantic Tropical Destinations</h2>
                        <p className="mb-6 text-gray-600">
                            Experience the romance of pristine beaches, crystal-clear waters, and breathtaking sunsets at our carefully selected tropical getaways. Perfect for honeymoons, anniversaries, or a special escape with your loved one.
                        </p>
                        <button className="btn-primary flex items-center">
                            Discover More <ArrowRight className="ml-2 w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DestinationSection