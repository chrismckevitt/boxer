const features = [
    {
        name: 'Solar & Battery',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mx-auto size-10 text-[#110F0C]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
            </svg>
        ),
        description: 'Roof-mounted solar panels with leisure battery for full off-grid power wherever you park up.',
    },
    {
        name: 'Dual Electrics',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mx-auto size-10 text-[#110F0C]">
                <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
            </svg>
        ),
        description: '12v and 230v electrical systems with full mains hookup — run anything from a phone charger to a hairdryer.',
    },
    {
        name: 'Onboard Water',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mx-auto size-10 text-[#110F0C]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
        ),
        description: 'Full onboard fresh and waste water system with kitchen sink and pressurised tap.',
    },
    {
        name: 'Diesel Heater',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mx-auto size-10 text-[#110F0C]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
            </svg>
        ),
        description: 'Independent diesel heater runs off the main fuel tank — stay warm through any season without draining your battery.',
    },
    {
        name: 'Fridge Freezer',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mx-auto size-10 text-[#110F0C]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5V18M15 7.5V18M3 16.811V8.69c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811Z" />
            </svg>
        ),
        description: 'Compressor fridge freezer keeps food fresh for days — no more living off service station sandwiches.',
    },
    {
        name: 'Sleeps Two',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mx-auto size-10 text-[#110F0C]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
            </svg>
        ),
        description: 'Dining area converts to a full double bed in seconds — rattan overhead storage keeps everything tidy.',
    },
]

export default function Features() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
                <div className="rounded-2xl bg-gray-50 px-6 py-16 sm:p-16">
                    <div className="mx-auto max-w-xl lg:max-w-none">
                        <div className="text-center">
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                                Built for off-grid living
                            </h2>
                        </div>
                        <div className="mx-auto mt-12 grid max-w-sm grid-cols-1 gap-x-8 gap-y-10 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3">
                            {features.map((feature) => (
                                <div key={feature.name} className="text-center sm:flex sm:text-left lg:block lg:text-center">
                                    <div className="sm:shrink-0">
                                        <div className="flow-root">
                                            {feature.icon}
                                        </div>
                                    </div>
                                    <div className="mt-3 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                                        <h3 className="text-sm font-medium text-gray-900">{feature.name}</h3>
                                        <p className="mt-2 text-sm text-gray-500">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
