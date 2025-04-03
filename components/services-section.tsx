import React from 'react'
import { Plane, Building, MapPin, Headphones } from 'lucide-react';

type Props = {}

const services = [
    {
        icon: <Plane className="w-10 h-10 text-primary" />,
        title: "Explore Top Flights",
        description: "Find the perfect flight to your dream destination with our comprehensive search and exclusive deals."
    },
    {
        icon: <Building className="w-10 h-10 text-primary" />,
        title: "Best Hotels Options",
        description: "From luxury resorts to charming boutique hotels, find the perfect accommodation for your stay."
    },
    {
        icon: <MapPin className="w-10 h-10 text-primary" />,
        title: "Enjoy Your Trips",
        description: "Experience unforgettable adventures with our carefully curated travel packages and guided tours."
    },
    {
        icon: <Headphones className="w-10 h-10 text-primary" />,
        title: "Premium Support",
        description: "Our dedicated customer service team is available 24/7 to assist with any inquiries or issues."
    }
];

const ServicesSection = (props: Props) => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h3 className="section-subtitle">WHAT WE SERVE</h3>
                    <h2 className="section-title font-bold font-volkhov">We Offer Best Services</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-shadow text-center">
                            <div className="flex justify-center mb-6">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ServicesSection