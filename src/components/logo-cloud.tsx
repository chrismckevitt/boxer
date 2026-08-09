import WaveLines from "@/components/aicanvas/wave-lines.tsx";

export default function LogoCloud() {
    return (
        <div className="bg-[#110F0C] py-24 sm:py-32 relative">
            <WaveLines/>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">
                    <img
                        alt="Fiamma"
                        src="/logos/fiamma.png"
                        width={158}
                        height={48}
                        className="max-h-12 w-full object-contain"
                    />
                    <img
                        alt="Rogue Alloy"
                        src="/logos/rogue-alloy.avif"
                        width={158}
                        height={48}
                        className="max-h-12 w-full object-contain"
                    />
                    <img
                        alt="BF Goodrich"
                        src="/logos/bf-goodrich.png"
                        width={158}
                        height={48}
                        className="max-h-12 w-full object-contain"
                    />
                    <img
                        alt="Camper Glass"
                        src="/logos/camper-glass.png"
                        width={158}
                        height={48}
                        className="max-h-12 w-full object-contain"
                    />
                </div>
            </div>
        </div>
    )
}
