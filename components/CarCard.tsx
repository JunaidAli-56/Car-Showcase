"use client";
import { CarProps } from '@/types';
import { calculateCarRent, generateCarImageUrl } from '@/utils';
import Image from 'next/image';
import { useState } from 'react'
import { CardDetails, CustomButton } from '@/components';

interface CarCardProps {
    car: CarProps
}
const CarCard = ({ car }: CarCardProps) => {
    const [isOpen, setIsOpen] = useState(false)
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
                <Image src={generateCarImageUrl(car)} alt='car model' fill priority className='object-contain' />
            </div>

            <div className='relative flex w-full mt-2'>
                <div className='flex group-hover:invisible w-full justify-between text-gray'>
                    <div className='flex flex-col gap-2 justify-center items-center'>
                        <Image src="/steering-wheel.svg" alt='steering wheel' height={20} width={20} />
                        <p>{transmission === "a" ? "Automatic" : "Manual"}</p>
                    </div>
                    <div className='flex flex-col gap-2 justify-center items-center'>
                        <Image src="/tire.svg" alt='tire' height={20} width={20} />
                        <p>{drive.toUpperCase()}</p>
                    </div>
                    <div className='flex flex-col gap-2 justify-center items-center'>
                        <Image src="/gas.svg" alt='gas' height={20} width={20} />
                        <p>{city_mpg} MPG</p>
                    </div>
                </div>
                <div className='car-card__btn-container'>
                    <CustomButton
                        title='view more'
                        containerStyle='w-full py-[16px] rounded-full bg-primary-blue'
                        textStyle="text-white text-[14px] leading-[17px] font-bold"
                        rightIcon="/right-arrow.svg"
                        handleClick={() => setIsOpen(true)}
                    />
                </div>
            </div>
            <CardDetails
                isOpen={isOpen}
                closeModal={() => setIsOpen(false)}
                car={car}
            />
        </div>
    )
}

export default CarCard