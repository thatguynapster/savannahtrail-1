import React from 'react'

type Props = {}

const CategoriesSection = (props: Props) => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div
                        className="h-80 bg-cover bg-center rounded-xl relative overflow-hidden"
                        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&h=600&q=80')" }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-8 text-white">
                            <h3 className="text-3xl mb-2">Nature's Wonders</h3>
                            <p className="mb-4">From Rainforests to Waterfalls</p>
                            <button className="btn-outline">Learn More</button>
                        </div>
                    </div>

                    <div
                        className="h-80 bg-cover bg-center rounded-xl relative overflow-hidden"
                        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1000&h=600&q=80')" }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-8 text-white">
                            <h3 className="text-3xl mb-2">Urban Escapes</h3>
                            <p className="mb-4">Culture and Creativity</p>
                            <button className="btn-outline">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CategoriesSection