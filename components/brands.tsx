import Image from 'next/image'
import React from 'react'

type Props = {}

const Brands = (props: Props) => {
    return (
        <div className="bg-[#f7f7f7] py-10">
            <div
                className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] group"
            >
                <ul
                    className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll group-hover:paused">
                    <li className="relative w-20 h-[25px]">
                        <Image src={'/img/emirates.png'} alt='' fill />
                    </li>
                    <li className="relative w-20 h-[25px]">
                        <Image src={'/img/trivago.png'} alt='' fill />
                    </li>
                    <li className="relative w-20 h-[25px]">
                        <Image src={'/img/airbnb.png'} alt='' fill />
                    </li>
                    <li className="relative w-20 h-[25px]">
                        <Image src={'/img/turkish-airlines.png'} alt='' fill />
                    </li>
                    <li className="relative w-20 h-[25px]">
                        <Image src={'/img/swiss.png'} alt='' fill />
                    </li>
                </ul>
                <ul
                    className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll group-hover:paused" aria-hidden="true">
                    <li className="relative w-20 h-[25px]">
                        <Image src={'/img/emirates.png'} alt='' fill />
                    </li>
                    <li className="relative w-20 h-[25px]">
                        <Image src={'/img/trivago.png'} alt='' fill />
                    </li>
                    <li className="relative w-20 h-[25px]">
                        <Image src={'/img/airbnb.png'} alt='' fill />
                    </li>
                    <li className="relative w-20 h-[25px]">
                        <Image src={'/img/turkish-airlines.png'} alt='' fill />
                    </li>
                    <li className="relative w-20 h-[25px]">
                        <Image src={'/img/swiss.png'} alt='' fill />
                    </li>
                </ul>
                <ul
                    className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll group-hover:paused" aria-hidden="true">
                    <li className="relative w-20 h-[25px]">
                        <Image src={'/img/emirates.png'} alt='' fill />
                    </li>
                    <li className="relative w-20 h-[25px]">
                        <Image src={'/img/trivago.png'} alt='' fill />
                    </li>
                    <li className="relative w-20 h-[25px]">
                        <Image src={'/img/airbnb.png'} alt='' fill />
                    </li>
                    <li className="relative w-20 h-[25px]">
                        <Image src={'/img/turkish-airlines.png'} alt='' fill />
                    </li>
                    <li className="relative w-20 h-[25px]">
                        <Image src={'/img/swiss.png'} alt='' fill />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Brands