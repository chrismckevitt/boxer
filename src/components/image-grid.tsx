export default function ImageGrid() {
    return (
        <div className="overflow-hidden py-32">
            <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:max-w-none lg:min-w-full lg:flex-none lg:gap-y-8">
                    <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
                        <h2 className="text-4xl font-semibold tracking-tight text-[#110F0C] sm:text-5xl">Built for living</h2>
                        <p className="mt-6 text-xl/8 text-gray-950">
                            Every detail considered. From the handcrafted cabinetry to the all-terrain tyres, Boxer is designed to take you further and feel like home when you get there.
                        </p>
                        <p className="mt-6 text-base/7 text-gray-900">
                            Off-grid capable with solar, a full kitchen, and enough storage for extended trips. Whether parked up at the coast or deep in the countryside, everything you need is within reach.
                        </p>
                    </div>
                    <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
                        <div className="w-full flex-auto sm:w-0 lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                            <img
                                alt="Boxer van interior wide shot showing full living space"
                                src="/images/exterior/img_3615.webp"
                                className="aspect-7/5 w-full max-w-none bg-gray-800 object-cover sm:w-148 max-sm:rounded-sm"
                            />
                        </div>
                        <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-148 lg:items-start lg:justify-end lg:gap-x-8">
                            <div className="order-first flex w-full flex-none justify-end self-end sm:w-64 lg:w-auto">
                                <img
                                    alt="Boxer van front 3/4 at dusk with interior lights glowing"
                                    src="/images/exterior/img_3685.webp"
                                    className="aspect-4/3 w-full max-w-none flex-none bg-gray-800 object-cover sm:w-[24rem] max-sm:rounded-sm"
                                />
                            </div>
                            <div className="flex w-full flex-auto justify-end sm:w-96 lg:w-auto lg:flex-none">
                                <img
                                    alt="Boxer van passenger side with sunset reflection in windows"
                                    src="/images/exterior/img_3742.webp"
                                    className="aspect-7/5 w-full max-w-none flex-none bg-gray-800 object-cover sm:w-148 max-sm:rounded-sm"
                                />
                            </div>
                            <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                                <img
                                    alt="Boxer van rear exterior showing open doors and living space"
                                    src="/images/exterior/img_3681.webp"
                                    className="aspect-4/3 w-[24rem] max-w-none bg-gray-800 object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
