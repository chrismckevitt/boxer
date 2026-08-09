export default function Intro() {
    return (
        <div className="overflow-hidden py-32">
            <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:max-w-none lg:min-w-full lg:flex-none lg:gap-y-8">
                    <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
                        <h2 className="text-4xl font-semibold tracking-tight text-[#110F0C] sm:text-5xl">Ready for the next adventure</h2>
                        <p className="mt-6 text-xl/8 text-gray-950">
                            A one-of-a-kind Peugeot Boxer conversion, hand-built from the ground up. Every surface, every joint, every detail crafted with intention.
                        </p>
                        <p className="mt-6 text-base/7 text-gray-900">
                            Fully off-grid with solar charging, leisure battery, onboard water system, and independent diesel heater. Hook up to 230v mains or run free — the choice is yours. Oak worktops, rattan cabinetry, a fridge freezer, and a dining space that seats four. This isn't a compromise — it's a home that moves.
                        </p>
                    </div>
                    <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
                        <div className="w-full flex-auto sm:w-0 lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                            <img
                                alt="Boxer van interior dining and living space with skylight"
                                src="/images/interior/img_3781.webp"
                                className="aspect-7/5 w-full max-w-none bg-gray-800 object-cover sm:w-148 max-sm:rounded-sm"
                            />
                        </div>
                        <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-148 lg:items-start lg:justify-end lg:gap-x-8">
                            <div className="order-first flex w-full flex-none justify-end self-end sm:w-64 lg:w-auto">
                                <img
                                    alt="Custom bookshelf with reading light and personal touches"
                                    src="/images/interior/img_3761.webp"
                                    className="aspect-4/3 w-full max-w-none flex-none bg-gray-800 object-cover sm:w-[24rem] max-sm:rounded-sm"
                                />
                            </div>
                            <div className="flex w-full flex-auto justify-end sm:w-96 lg:w-auto lg:flex-none">
                                <img
                                    alt="Person relaxing inside Boxer van looking out window"
                                    src="/images/interior/img_3446.webp"
                                    className="aspect-7/5 w-full max-w-none flex-none bg-gray-800 object-cover sm:w-148 max-sm:rounded-sm"
                                />
                            </div>
                            <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                                <img
                                    alt="Boxer van rear quarter with topographic wrap on country road"
                                    src="/images/interior/img_3427.webp"
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
