
import { Calendar, Clock, User } from "lucide-react";
import React from 'react'

type Props = {}

const BookingSection = (props: Props) => {
    return (<section className="py-20 bg-white">
        <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-12">
                <div className="md:w-1/2">
                    <h3 className="section-subtitle">BOOKINGS</h3>
                    <h2 className="section-title">Get Your Favourite Resort Bookings</h2>

                    <div className="space-y-6 mt-8">
                        <div className="bg-white shadow-lg rounded-lg p-6 flex items-start gap-4 card-hover">
                            <div className="bg-yellow-100 p-3 rounded-lg">
                                <Calendar className="w-6 h-6 text-yellow-600" />
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold">Choose Destination</h4>
                                <p className="text-gray-600 mt-1">Select your dream destination from our extensive catalog of exotic locations worldwide.</p>
                            </div>
                        </div>

                        <div className="bg-white shadow-lg rounded-lg p-6 flex items-start gap-4 card-hover">
                            <div className="bg-red-100 p-3 rounded-lg">
                                <Clock className="w-6 h-6 text-red-600" />
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold">Check Availability</h4>
                                <p className="text-gray-600 mt-1">Browse available dates and accommodations to plan your perfect getaway.</p>
                            </div>
                        </div>

                        <div className="bg-white shadow-lg rounded-lg p-6 flex items-start gap-4 card-hover">
                            <div className="bg-blue-100 p-3 rounded-lg">
                                <User className="w-6 h-6 text-blue-600" />
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold">Book with Confidence</h4>
                                <p className="text-gray-600 mt-1">Secure your reservation with our easy booking system and flexible cancellation policies.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:w-1/2 relative">
                    <img
                        src="/img/illustration_2.png"
                        alt="Resort view"
                    />
                </div>
            </div>
        </div>
    </section>
    )
}

export default BookingSection