'use client'

import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'
import { mainEventImageData } from '@/lib/MainEventImageData'
import Image from 'next/image'

export default function MainEventSection() {
    const [backgroundImage, setBackgroundImage] = useState(mainEventImageData[0].src)

    const handleSlideChange = (slide: any) => {
        const currentSlideIndex: number = slide.realIndex
        setBackgroundImage(mainEventImageData[currentSlideIndex].src)
    }

    return (
        <section className="relative overflow-hidden pb-bottom min-h-[60vh] w-full  ">
            <div
                className="absolute overflow-hidden top-0 bottom-[40px] left-[10%] right-[10%] bg-cover"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    filter: 'blur(5px)',
                    transition: 'background-image 1s ease-in-out',
                }}
            ></div>

            <div className="absolute left-4 right-4 bottom-0 top-4 min-w overflow-hidden block ">
                <Swiper
                    className="relative w-full h-full"
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 3000 }}
                    modules={[Pagination, Navigation, Autoplay]}
                    onSlideChange={handleSlideChange}
                >
                    {mainEventImageData.map((item, idx) => {
                        return (
                            <SwiperSlide key={idx}>
                                <div className="absolute inset-0 flex items-center justify-center ">
                                    <div className="relative w-[500px] h-[800px]">
                                        <Image src={item.src} alt="메인광고" fill className="object-contain" />
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </section>
    )
}
