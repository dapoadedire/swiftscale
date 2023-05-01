import React from "react"
import { playfair } from "./Copy"
export const Header = (): JSX.Element => {


    return (
        <header
        className='flex justify-between items-center
        px-6 md:px-16 py-8 md:py-16
     '
        >
            <div>
                <h2
                className={`font-[900] text-primary
                text-2xl md:text-3xl
                ${playfair.className}
                `}

                >
                    SWFT
                </h2>
            </div>
            <div
            className="flex items-center gap-6 "
            >
                <button
                className="bg-white text-primary px-4 py-2 rounded-md
                border border-primary hover:bg-primary hover:text-white
                ">
                  <span
                  className="font-medium text-sm md:text-base "
                  >
                        Get Early Access
                  </span>
                </button>

            </div>

           
        </header>
    )
}
