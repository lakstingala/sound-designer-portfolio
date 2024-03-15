import ImageCell from "./imageCell";
import Image from 'next/image'

const TopMenu = () => {

    return (
        <>
          <div className="w-full flex flex-row justify-between border border-red p-[12px] bg-[#DFDED0]">
            <h1 className="font-[24px] text-[#1C221F]">Karolis Balčius</h1>
            <div className="flex flex-row space-x-[20px]">
                <Image className="shadow-2xl transition-shadow duration-300 ease-in-out" src={"/icon.svg"} width={28} height={28} alt={"icon"} />
                <Image className="shadow-2xl transition-shadow duration-300 ease-in-out" src={"/icon_2.svg"} width={28} height={28} alt={"icon_2"} />
                <Image className="shadow-2xl transition-shadow duration-300 ease-in-out" src={"/icon_3.svg"} width={28} height={35} alt={"icon_3"} />
            </div>
        </div>
        <div className="bg-[#7B9A98] h-[3px] w-full"></div>
        </>
    );
};

export default TopMenu;