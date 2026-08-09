import WaveLines from "@/components/aicanvas/wave-lines.tsx";

export default function LogoCloud() {
    return (
        <div className="bg-[#110F0C] py-24 sm:py-32 relative">
            <WaveLines/>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                    <img
                        alt="Transistor"
                        src="/logos/fiamma.png"
                        width={158}
                        height={48}
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                    />

                    <img
                        alt="Reform"
                        src="/logos/rogue-alloy.avif"
                        width={158}
                        height={48}
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                    />

                    <img
                        alt="Tuple"
                        src="/logos/bf-goodrich.png"
                        width={158}
                        height={48}
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                    />

                    <img
                        alt="SavvyCal"
                        src="https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-white.svg"
                        width={158}
                        height={48}
                        className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                    />

                    <img
                        alt="Statamic"
                        src="https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-white.svg"
                        width={158}
                        height={48}
                        className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                    />
                </div>
            </div>
        </div>
    )
}
