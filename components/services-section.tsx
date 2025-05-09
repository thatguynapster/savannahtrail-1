import React from 'react'
import { Plane, Building, MapPin, Headphones } from 'lucide-react';

type Props = {}

const services = [
    {
        icon: <Plane className="w-10 h-10 text-primary" />,
        title: "Tour Packages",
        description: "Embark on immersive cultural tours designed to reconnect you with Africa's rich history and vibrant traditions. From heritage landmarks to hidden gems, each tour offers a deep dive into local culture."
    },
    {
        icon: <Building className="w-10 h-10 text-primary" />,
        title: "Accommodation",
        description: "Choose from a variety of accommodation options, including guest rooms, rooms with host families, and boutique stays.Comfort, authenticity, and cultural immersion are at the heart of every lodging choice."
    },
    {
        icon: <MapPin className="w-10 h-10 text-primary" />,
        title: "Car Rental Services",
        description: "Enjoy the freedom to explore at your own pace with our flexible car rental and transportation services.From personal car hires to chauffeured rides, we ensure you get where you need to go comfortably and efficiently."
    },
    {
        icon: <Headphones className="w-10 h-10 text-primary" />,
        title: "Guided Cultural Tours",
        description: "Enhance your African journey with our expert local guides. From historic landmarks to vibrant community experiences, our knowledgeable guides provide insightful narratives that bring each destination to life."
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