import SliceType from '@/components/aicanvas/slice-type'

export default function OnOffGrid() {
    return (
        <div className="grid grid-cols-1 md:cols-2 lg:grid-cols-3 bg-[#110F0C]">
            <div className="relative aspect-[4/3] lg:aspect-auto lg:h-125">
                <img
                    alt="Boxer van exterior front angle"
                    src="/images/exterior/img_3830.webp"
                    className="absolute inset-0 h-full w-full object-cover"
                />
            </div>
            <div className="flex aspect-[4/3] items-center justify-center lg:aspect-auto lg:h-125">
                <SliceType />
            </div>
            <div className="relative aspect-[4/3] lg:aspect-auto lg:h-125">
                <img
                    alt="Boxer van exterior rear angle"
                    src="/images/exterior/img_3827.webp"
                    className="absolute inset-0 h-full w-full object-cover"
                />
            </div>
        </div>
    )
}
