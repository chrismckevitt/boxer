export default function SplitImage() {
    return (
        <div className="grid h-200 grid-cols-1 lg:grid-cols-2 bg-[#110F0C] relative">
            <div className="relative">
                <img
                    alt="Boxer van parked in open landscape at golden hour"
                    src="/images/interior/img_3435.webp"
                    className="absolute inset-0 h-full w-full object-cover"
                />
            </div>
            <div className="relative overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 h-full w-full object-cover"
                >
                    <source src="/video/boxer-lines.webm" type="video/webm" />
                    <source src="/video/boxer-lines.mp4" type="video/mp4" />
                </video>
            </div>
        </div>

    )
}
