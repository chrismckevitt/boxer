import WaveLines from '@/components/aicanvas/wave-lines'

export default function ImageLines() {
    return (
        <div className="grid h-200 grid-cols-1 lg:grid-cols-2 bg-[#110F0C] relative">
            <div className="relative">
                <img
                    alt=""
                    src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2102&q=80"
                    className="absolute inset-0 h-full w-full object-cover"
                />
                <WaveLines/>
            </div>
            <div className="relative">
                <img
                    alt=""
                    src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2102&q=80"
                    className="absolute inset-0 h-full w-full object-cover"
                />
            {/*<WaveLines/>*/}
            </div>
        </div>

    )
}
