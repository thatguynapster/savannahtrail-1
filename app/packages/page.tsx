'use client'

import { ArrowDownAZ, ArrowUpZA, Calendar, CalendarIcon, Users } from 'lucide-react';
import React, { useState } from 'react'
import Link from 'next/link';

const destinations = [
    {
        id: 1,
        name: "Switzerland",
        image: "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?auto=format&fit=crop&w=600&h=400&q=80",
        date: "15 September 2023",
        people: "10+ People",
        description: "Experience the breathtaking Swiss Alps and charming villages",
        price: 1100,
        rating: 5.0,
    },
    {
        id: 2,
        name: "Berlin",
        image: "https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=600&h=400&q=80",
        date: "20 September 2023",
        people: "15+ People",
        description: "Discover the vibrant culture and history of Berlin",
        price: 1230,
        rating: 4.9,
    },
    {
        id: 3,
        name: "Maldives",
        image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=600&h=400&q=80",
        date: "10 October 2023",
        people: "12+ People",
        description: "Relax in paradise with crystal clear waters",
        price: 3000,
        rating: 5.0,
    },
    {
        id: 4,
        name: "Toronto",
        image: "https://images.unsplash.com/photo-1517090504586-fde19ea6066f?auto=format&fit=crop&w=600&h=400&q=80",
        date: "25 September 2023",
        people: "20+ People",
        description: "Experience the diverse culture of Canada's largest city",
        price: 2000,
        rating: 4.8,
    },
    {
        id: 5,
        name: "Baku",
        image: "https://images.unsplash.com/photo-1593085260707-5377ba37f868?auto=format&fit=crop&w=600&h=400&q=80",
        date: "15 September 2023",
        people: "15+ People",
        description: "Explore the unique blend of ancient and modern Azerbaijan",
        price: 1440,
        rating: 5.0,
    },
    {
        id: 6,
        name: "Chinese Heritage",
        image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=600&h=400&q=80",
        date: "18 September 2023",
        people: "10+ People",
        description: "Journey through China's rich cultural heritage",
        price: 1210,
        rating: 4.0,
    }
];

const PackagesPage = () => {
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    // Filter and sort logic here
    const sortedDestinations = [...destinations].sort((a, b) => {
        if (sortOrder === 'asc') {
            return a.price - b.price;
        } else if (sortOrder === 'desc') {
            return b.price - a.price;
        }
        return 0;
    });

    // Calculate pagination
    const indexOfLastDestination = currentPage * itemsPerPage;
    const indexOfFirstDestination = indexOfLastDestination - itemsPerPage;
    const currentDestinations = sortedDestinations.slice(indexOfFirstDestination, indexOfLastDestination);
    const totalPages = Math.ceil(destinations.length / itemsPerPage);

    return (
        <div className="min-h-screen pb-12">
            <div
                className="relative h-80 bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1920&h=600&q=80')" }}
            >
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
                    <div className="text-center text-white">
                        <h1 className="text-5xl font-cursive font-bold">Plan Your Trip</h1>
                        <h2 className="mt-8 text-3xl capitalize">Experience Culture, History, and Adventure</h2>
                    </div>
                </div>
            </div>

            <section className="py-16">
                <div className="text-center mb-8">
                    <p className="text-gray-600 max-w-2xl mx-auto mt-4">
                        Embark on an unforgettable journey through Africa's rich tapestry of cultures and histories. Our expert local guides are passionate storytellers, ready to immerse you in authentic experiences that connect you deeply with the land and its people.
                        Whether you're tracing ancestral roots, exploring vibrant festivals, or discovering hidden gems, we're here to make your adventure truly memorable.
                    </p>
                </div>

                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        <button className="flex items-center gap-2 bg-white px-5 py-3 rounded-md shadow-sm">
                            <CalendarIcon className="w-5 h-5" />
                            <span>Date</span>
                        </button>
                        <button
                            className="flex items-center gap-2 bg-white px-5 py-3 rounded-md shadow-sm"
                            onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                        >
                            {sortOrder === 'asc' ? (
                                <>
                                    <ArrowUpZA className="w-5 h-5" />
                                    <span>Price High To Low</span>
                                </>
                            ) : (
                                <>
                                    <ArrowDownAZ className="w-5 h-5" />
                                    <span>Price Low To High</span>
                                </>
                            )}
                        </button>
                        <button className="flex items-center gap-2 bg-white px-5 py-3 rounded-md shadow-sm">
                            <ArrowDownAZ className="w-5 h-5" />
                            <span>Name (A-Z)</span>
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {currentDestinations.map((dest) => (
                            <div key={dest.id} className="bg-white rounded-lg overflow-hidden shadow-md card-hover">
                                <div className="relative">
                                    <img
                                        src={dest.image}
                                        alt={dest.name}
                                        className="w-full h-56 object-cover"
                                    />
                                    <div className="absolute bottom-0 left-0 bg-primary text-white px-4 py-2 flex items-center gap-2">
                                        <Calendar className="w-4 h-4" />
                                        <span className="text-sm">{dest.date}</span>
                                    </div>
                                    <div className="absolute bottom-0 right-0 bg-white text-dark px-4 py-2 flex items-center gap-2">
                                        <Users className="w-4 h-4" />
                                        <span className="text-sm">{dest.people}</span>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-2xl font-semibold mb-2">{dest.name}</h3>
                                    <p className="text-gray-600 text-sm mb-4">{dest.description}</p>

                                    <div className="flex justify-between items-center">
                                        <div>
                                            <span className="text-xl font-bold">${dest.price.toLocaleString()}</span>
                                            <div className="flex items-center mt-1">
                                                <div className="flex">
                                                    {Array(5).fill(0).map((_, i) => (
                                                        <svg
                                                            key={i}
                                                            className={`w-4 h-4 ${i < Math.floor(dest.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                                                            fill="currentColor"
                                                            viewBox="0 0 20 20"
                                                        >
                                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                    ))}
                                                </div>
                                                <span className="text-gray-500 text-sm ml-1">{dest.rating}</span>
                                            </div>
                                        </div>
                                        <Link href={`/packages/${dest.id}`} className="bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-md transition-colors">
                                            Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {totalPages > 1 && (
                        <div className="flex justify-center mt-12">
                            <div className="flex space-x-1">
                                <button
                                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                    disabled={currentPage === 1}
                                    className="px-3 py-2 border rounded-md hover:bg-gray-100 disabled:opacity-50"
                                >
                                    &lt;
                                </button>

                                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                                    <button
                                        key={page}
                                        onClick={() => setCurrentPage(page)}
                                        className={`px-3 py-2 border rounded-md ${currentPage === page
                                            ? 'bg-primary text-white'
                                            : 'hover:bg-gray-100'
                                            }`}
                                    >
                                        {page}
                                    </button>
                                ))}

                                <button
                                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                    disabled={currentPage === totalPages}
                                    className="px-3 py-2 border rounded-md hover:bg-gray-100 disabled:opacity-50"
                                >
                                    &gt;
                                </button>
                            </div>
                        </div>
                    )}

                    <div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-8 bg-white p-8 rounded-xl shadow-md">
                        <div className="md:w-1/2">
                            <h3 className="text-2xl font-semibold mb-4">Plan Your Trip</h3>
                            <p className="text-gray-600 mb-6">
                                Ex optio sequi et quos praesentium in nostrum labore nam rerum iusto qui magni nescunt? Quo quidem neque iste explicita est dolo.
                            </p>

                            <div className="space-y-4">
                                <div className="relative">
                                    <input
                                        type="text"
                                        className="input-field pl-10"
                                        placeholder="Search Tour"
                                    />
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </div>
                                </div>

                                <div className="relative">
                                    <input
                                        type="text"
                                        className="input-field pl-10"
                                        placeholder="Where To?"
                                    />
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                </div>

                                <div className="relative">
                                    <input
                                        type="date"
                                        className="input-field pl-10"
                                    />
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6">
                                <h4 className="text-lg font-semibold mb-3">Filter By Price</h4>
                                <div className="flex items-center gap-2">
                                    <div className="h-4 w-full bg-gray-200 rounded-full overflow-hidden">
                                        <div className="h-full bg-primary w-1/2"></div>
                                    </div>
                                </div>
                                <div className="flex justify-between mt-2">
                                    <span className="text-sm text-gray-600">Price: $12 - $3600</span>
                                </div>
                            </div>

                            <button className="btn-primary w-full mt-6">Book Now</button>
                        </div>

                        <div className="md:w-1/2 flex justify-center">
                            <img
                                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=600&h=400&q=80"
                                alt="Travel essentials"
                                className="max-w-full h-auto rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PackagesPage