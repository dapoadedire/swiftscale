import React from 'react'
import { Playfair_Display } from 'next/font/google'

export const playfair = Playfair_Display({ 
    subsets: ['latin'],
})

export const Copy = (): JSX.Element => {
    return (
        <section className="p-2 md:p-8 md:pl-0
       
        " >
            <div className="mb-20">
                <h4 className="text-gray-600 font-semibold uppercase">
                    Streamline your business processes with ease
                </h4>
            </div>
            <div className="mb-8 flex flex-col gap-4 ">
                <h2 className={`text-5xl font-semibold font-serif text-primary ${playfair.className}
                leading-tight
                `}>
                    Simplify your workflow, amplify your success.
                </h2>
                <p
                    className="text-gray-800 text-lg  py-4">
                    SwiftScale is a cloud-based SaaS platform that streamlines your business operations and boosts your productivity with its powerful tools and seamless integrations. Whether you&apos;re a small business or a large enterprise, SwiftScale is the scalable solution you need to stay ahead in the competitive digital landscape.
                </p>
            </div>
            <div className="mb-8 flex flex-wrap gap-6 items-center" >
                <button className="flex flex-col gap-1  bg-primary text-white px-4 py-2 rounded-md border border-primary hover:bg-white hover:text-primary">
                    <span
                        className="font-medium text-sm md:text-base"
                    >
                        Call Us
                    </span>
                    <span>
                        1-800-555-5555
                    </span>
                </button>

                <button
                    className="flex flex-col gap-1 bg-white text-primary px-4 py-2 rounded-md border border-primary hover:bg-primary hover:text-white"
                >
                    <span
                    className="font-medium text-sm md:text-base"
                    >
                        Email Us
                    </span>
                    <span>
                        hello@swiftscale.com
                    </span>
                </button>
            </div>
        </section>
    )
}


