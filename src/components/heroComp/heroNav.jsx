import { Card, CardContent } from "@/components//ui/card";
import Image from "next/image";
import Link from "next/link";

const nav = [
    { image: "/images/sphere.jpg", link: "/images/sphere.jpg"},
    { image: "/images/sphere.jpg", link: "/images/sphere.jpg"},
    { image: "/images/sphere.jpg", link: "/images/sphere.jpg"},
];

export default function HeroNav () {
    return (
        <div className="flex flex-col gap-2 border border-black p-2 m-2">
            {nav.map((navLinks, idx) => (
                <Link key={idx} className="" href={navLinks.link}>
                    <Image 
                        className=""
                        width={50}
                        height={50}
                        src={navLinks.image}
                        alt="Image"
                    >

                    </Image>
                </Link>
            ))}
            
        </div>
    )
}