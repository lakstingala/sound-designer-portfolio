import { Montserrat, Poppins } from 'next/font/google';
import Image from 'next/image'

const popins = Poppins({
    subsets: ['latin'],
    weight: '700'
})
const monserat = Montserrat({ subsets: ['latin'] })

const About = () => {

    return (
        <div className="relative w-full flex flex-col md:flex-row h-[840px] md:h-[600px] p-[12px] bg-[#1C221F] md:justify-center">
            <Image className="absolute bottom-[0] right-[0] shadow-2xl transition-shadow duration-300 ease-in-out md:h-[941px] md:w-[1077px]" src={"/karolis.jpeg"} width={1340} height={941} alt={"icon"} />
            <div className='w-full max-w-[1152px] z-10 pt-[32px]'>
                <h1 className={"text-[32px] pb-[20px] text-[#DFDED0] " + popins.className}>I’m Karolis.</h1>
                <div className={'w-full max-w-[520px] pr-[40px] text-[20px] space-y-[10px] text-[#DFDED0] ' + monserat.className}>
                    <p>Hi you beautiful human being! </p>
                    <div className='h-[5px]' />
                    <p>I can make music and create the sound design for your brand, commercial, cgi, video game, or produce you entirely as an artist from A to Z. </p>
                    <div className='h-[5px]' />
                    <p>I’ve been working in the field for over 20 years now and worked with the likes of Redbull, Atari, Swedbank, NBC and blah blah blah…</p>
                    <div className='h-[5px]' />
                    <p>Let’s make something cool!</p>
                </div>
            </div>
        </div>
    );
};

export default About;