import WaveLines from '@/components/aicanvas/wave-lines'

export default function Footer() {
    return (
        <footer className="relative bg-[#110F0C]">
            <div className="absolute inset-0">
                <WaveLines />
            </div>
            <div className="relative mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
                <p className="mt-8 text-center text-sm/6 text-gray-400 md:order-1 md:mt-0">
                    Made with 🖤 and 🤖 by the owner.
                </p>
            </div>
        </footer>
    )
}
