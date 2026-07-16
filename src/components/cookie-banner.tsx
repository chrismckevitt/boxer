import {useState} from "react";

export default function CookieBanner() {
    const [show, setShow] = useState(true);
    return (show ?
            <div className="pointer-events-none fixed inset-x-0 bottom-0 px-6 pb-6">
                <div
                    className="pointer-events-auto ml-auto max-w-xl rounded-xl bg-[#110F0C] p-6 outline-1 -outline-offset-1 outline-white/10">
                    <p className="text-sm/6 text-white">
                        This website <strong>does not</strong> use cookies. You have a right to browse the internet without surveillance.
                    </p>
                    <div className="mt-4 flex items-center gap-x-5">
                        <button
                            type="button"
                            className="rounded-md bg-gray-950 px-3 py-2 text-sm font-semibold text-white shadow-xs inset-ring inset-ring-white/10 hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                            onClick={() => setShow(false)}
                        >
                            Hide
                        </button>
                    </div>
                </div>
            </div> : null
    )
}
