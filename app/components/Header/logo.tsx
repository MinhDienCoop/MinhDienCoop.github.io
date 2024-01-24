'use client'
import Image from 'next/image';
import { useRouter } from "next/navigation";

import LogoImage from '@/public/images/logo.png'

const Logo = () => {
    const router = useRouter()
    return (
        <div className="w-[90px] min-w-[50px] h-[50px] bg-[rgba(225,_225,_225,_0.2)] rounded-[6px] mr-[24px] overflow-hidden">
            <Image
                onClick={() => router.push('/')}
                src={LogoImage}
                alt="Mdc Logo"
                className="hidden md:block cursor-pointer h-full object-cover mx-auto"
                width={40}
            />
        </div>
    );
}
 
export default Logo;