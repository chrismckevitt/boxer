import WaveLines from '@/components/aicanvas/wave-lines'

export default function Hero() {
    return (
        <div className="grid h-200 grid-cols-1 lg:grid-cols-2 bg-[#110F0C]">
            <div className="relative" id="wave-lines-container">
                <WaveLines/>
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <h1 className="text-7xl font-bold tracking-tight text-white">
                    BOXER
                </h1>
                <h2 className="text-5xltracking-tight text-white">
                    CAMPER
                </h2>
                </div>
            </div>
            <div className="relative overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 h-full w-full object-cover"
                >
                    <source src="/video/boxer-hero.webm" type="video/webm" />
                    <source src="/video/boxer-hero.mp4" type="video/mp4" />
                </video>
            </div>
        </div>

    )
}
