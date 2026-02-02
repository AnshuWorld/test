import { Fullscreen } from "lucide-react";
import Image from "next/image";
export default function Header() {
    return (
        <main className="">
            <div className="min-h-screen flex flex-col md:flex-row gap-10 items-center justify-between bg-gradient-to-t from-purple-500 to-blue-600 text-white">
                <div className="w-1/2 relative h-90 md:h-screen  m-auto p-7">
                    <Image src="/a.jpg" fill  alt="Hi" className="object-cover w-auto h-auto mt-5 md:mt-0"/>
                </div>
                <div className="w-1/2 h-auto p-7">
                    <p className="md:text-4xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nisi, reprehenderit aliquid veritatis iusto sunt aspernatur esse cum ipsam dolore delectus cupiditate fuga reiciendis doloribus omnis laboriosam qui nam quasi nulla harum quaerat maiores neque. Libero ad delectus voluptatibus minus sed labore facilis debitis, pariatur dolores corporis id odio repudiandae nulla.</p>
                </div>
            </div>
        </main>
    );
} 