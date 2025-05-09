
import { Calendar, Clock, User } from "lucide-react";
import React from 'react'

type Props = {}

const options = [
    {
        title: "Deep Cultural Connection",
        icon: <div className="bg-blue-100 p-3 rounded-lg">
            <User className="w-6 h-6 text-blue-600" />
        </div>,
        description: "Immerse yourself in authentic African experiences designed to reconnect you with your roots and heritage."
    },
    {
        title: "Community-Centered & Authentic",
        icon: <div className="bg-yellow-100 p-3 rounded-lg">
            <Calendar className="w-6 h-6 text-yellow-600" />
        </div>,
        description: "We collaborate with local communities to ensure your travel supports heritage preservation and creates lasting impact."
    },
    {
        title: "Diaspora-Focused Experiences",
        icon: <div className="bg-red-100 p-3 rounded-lg">
            <Clock className="w-6 h-6 text-red-600" />
        </div>,
        description: "Our tours are curated for the African diaspora, blending history, culture, and self-discovery in every step."
    },
]

const BookingSection = (props: Props) => {
    return (<section className="py-20 bg-white">
        <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-12">
                <div className="md:w-1/2">
                    {/* <h3 className="section-subtitle">BOOKINGS</h3> */}
                    <h2 className="section-title">Why Choose Savannah Trail</h2>

                    <div className="space-y-6 mt-8">

                        {options.map(({ description, icon, title }, i) =>
                            <div key={i} className="bg-white shadow-lg rounded-lg p-6 flex items-start gap-4 card-hover">
                                {icon}
                                <div>
                                    <h4 className="text-lg font-semibold">{title}</h4>
                                    <p className="text-gray-600 mt-1">{description}</p>
                                </div>
                            </div>
                        )}
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