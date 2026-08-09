import SliceType from '@/components/aicanvas/slice-type'

export default function OnOffGrid() {
    return (
        <div className="grid h-125 grid-cols-1 md:cols-2 lg:grid-cols-3 bg-[#110F0C]">
            <div className="relative">
                <img
                    alt="Boxer van exterior front angle"
                    src="/images/exterior/img_3830.webp"
                    className="absolute inset-0 h-full w-full object-cover"
                />
            </div>
            <div className="flex items-center justify-center">
                <SliceType />
            </div>
            <div className="relative">
                <img
                    alt="Boxer van exterior rear angle"
                    src="/images/exterior/img_3827.webp"
                    className="absolute inset-0 h-full w-full object-cover"
                />
            </div>
        </div>
    )
}
