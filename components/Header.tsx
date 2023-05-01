import Image from "next/image"

export const Header = (): JSX.Element => {
    return (
        <header
        className='flex justify-between items-center px-8 md:px-16 py-8'
        >
            <div>
                <h2
                className="text-3xl font-semibold text-primary"
                >
                    SwiftScale
                </h2>
            </div>
            <div
            className="flex items-center gap-6"
            >
                <Image
                    src="/images/twitter.svg"
                    alt="Twitter Logo"
                    width={24}
                    height={24}
                />
                <button
                className="bg-white text-primary px-4 py-2 rounded-md
                border border-primary hover:bg-primary hover:text-white
                "
                >
                    Get Early Access
                </button>

            </div>
        </header>
    )
}
