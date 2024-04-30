import { Montserrat, Poppins } from 'next/font/google';
import Image from 'next/image'

const monserat = Montserrat({ subsets: ['latin'] })

const TopMenu = () => {

    return (
        <div className='sticky top-0 z-30'>
            <div className="w-full flex flex-row justify-between border border-red p-[12px] bg-[#DFDED0]">
                <h1 className={"text-[24px] text-[#1C221F] pl-[20px] md:pl-[70px] " + monserat.className}>Karolis Balčius</h1>
                <div className="flex flex-row space-x-[20px] pr-[20px] md:pr-[70px]">
                    <a className='flex items-center justify-center' href='https://www.instagram.com/karolisbalcius/'>
                        <Image className="shadow-2xl transition-shadow duration-300 ease-in-out hover:opacity-75" src={"/icon.svg"} width={28} height={28} alt={"icon"} />
                    </a>
                    <a className='flex items-center justify-center' href="https://www.facebook.com/kbalcius">
                        <Image className="shadow-2xl transition-shadow duration-300 ease-in-out hover:opacity-75" src={"/icon_2.svg"} width={28} height={28} alt={"icon_2"} />
                    </a>
                    <a className='flex items-center justify-center' href='mailto:karolisbalcius@gmail.com'>
                        <Image className="shadow-2xl transition-shadow duration-300 ease-in-out hover:opacity-75" src={"/icon_3.svg"} width={28} height={35} alt={"icon_3"} />
                    </a>
                </div>
            </div>
            <div className="bg-[#7B9A98] h-[3px] w-full"></div>
        </div>
    );
};

export default TopMenu;