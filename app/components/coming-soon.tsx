"use client"

import { useState, useEffect } from "react"

type Props = {}

const ComingSoon = (props: Props) => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    })

    useEffect(() => {
        const targetDate = new Date("2025-03-31T00:00:00") // Set your target launch date here

        const interval = setInterval(() => {
            const now = new Date()
            const difference = targetDate.getTime() - now.getTime()

            const days = Math.floor(difference / (1000 * 60 * 60 * 24))
            const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
            const minutes = Math.floor((difference / 1000 / 60) % 60)
            const seconds = Math.floor((difference / 1000) % 60)

            setTimeLeft({ days, hours, minutes, seconds })

            if (difference < 0) {
                clearInterval(interval)
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
            }
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-blue-500 text-white p-4">
            <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Coming Soon</h1>
                <p className="text-xl md:text-2xl mb-8">We're working hard to bring you something amazing!</p>

                <div className="flex justify-center space-x-4 mb-8">
                    <div className="text-center">
                        <div className="text-3xl md:text-5xl font-bold">{timeLeft.days}</div>
                        <div className="text-sm md:text-base">Days</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl md:text-5xl font-bold">{timeLeft.hours}</div>
                        <div className="text-sm md:text-base">Hours</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl md:text-5xl font-bold">{timeLeft.minutes}</div>
                        <div className="text-sm md:text-base">Minutes</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl md:text-5xl font-bold">{timeLeft.seconds}</div>
                        <div className="text-sm md:text-base">Seconds</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ComingSoon
