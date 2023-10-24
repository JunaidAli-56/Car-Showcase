"use client";
import { CarProps } from '@/types';
import { calculateCarRent } from '@/utils';
import Image from 'next/image';
import { useState } from 'react'

interface CarCardProps {
    car: CarProps
}
const CarCard = ({ car }: CarCardProps) => {
    const { city_mpg, year, make, model, transmission, drive } = car;
    const carRent = calculateCarRent(city_mpg, year);
    return (
        <div className='car-card group'>

            <div className='car-card__content'>
                <h2 className='car-card__content-title'>
                    {make} {model}
                </h2>
            </div>

            <p className='flex mt-6 text-[32px] font-extrabold'>
                <span className='self-start text-[14px] font-semibold'>
                    $
                </span>
                {carRent}
                <span className='self-end text-[14px] font-semibold'>
                    /day
                </span>
            </p>

            <div className='relative w-full h-40 object-contain'>
                <Image src="/hero.png" alt='car model' fill priority className='object-contain' />
            </div>

            <div className='relative flex w-full mt-2'>
                <div className='flex group-hover:invisible w-full justify-between text-gray'>
                    <div className='flex flex-col gap-2 justify-center items-center'>
                        <Image src="/steering-wheel.svg" alt='steering wheel' height={20} width={20} />
                        <p>{transmission === "a" ? "Automatic" : "Manual"}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarCard