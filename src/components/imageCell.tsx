import React from 'react';
import Image from 'next/image'
import { Montserrat, Poppins } from 'next/font/google';

const popins = Poppins({
    subsets: ['latin'],
    weight: '700'
})
const monserat = Montserrat({ subsets: ['latin'] })

interface Props {
    title: string,
    description: string,
    thumb: string
    thumbAlt: string
    thumbWidth: number
    thumbHeight: number
    onClick: () => void
}

const ImageCell = ({ thumb, thumbWidth, thumbHeight, thumbAlt, onClick, title, description }: Props) => {
    return (
        <div>
            <button
                className="relative flex justify-center items-center focus:outline-none focus-visible:ring focus-visible:ring-indigo-300 w-full group"
                onClick={() => { onClick() }}
                aria-label="Watch the video"
            >
                <Image className="w-full shadow-2xl transition-shadow duration-300 ease-in-out" src={thumb} width={thumbWidth} height={thumbHeight} priority alt={thumbAlt} />
                <div className='group transition duration-300 ease-in-out opacity-0 hover:opacity-100 p-[40px] absolute w-full h-full bg-[#1C221F] bg-opacity-90 items-start justify-start'>
                    <h2 className={'transition duration-300 ease-in-out translate-y-[190px] group-hover:translate-y-[0px] text-left text-[32px] ' + popins.className}>{title}</h2>
                    <p className={'transition duration-300 ease-in-out translate-y-[190px] group-hover:translate-y-[0px] text-left text-[16px] leading-[19px] pt-[20px] pl-[40px] ' + monserat.className}>{description}</p>
                </div>
                {/* Play icon */}
                {/* <svg className="absolute pointer-events-none group-hover:scale-110 transition-transform duration-300 ease-in-out" xmlns="http://www.w3.org/2000/svg" width="72" height="72">
                    <circle className="fill-white" cx="36" cy="36" r="36" fillOpacity=".8" />
                    <path className="fill-indigo-500 drop-shadow-2xl" d="M44 36a.999.999 0 0 0-.427-.82l-10-7A1 1 0 0 0 32 29V43a.999.999 0 0 0 1.573.82l10-7A.995.995 0 0 0 44 36V36c0 .001 0 .001 0 0Z" />
                </svg> */}
            </button>
        </div>
    );
};

export default ImageCell;