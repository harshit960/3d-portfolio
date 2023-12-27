import React from 'react'

export default function Footer() {
    return (
        <footer>
            <div className='py-6 text-center safe-x-padding text-white'>
                <p className='text-base font-medium md:text-xl lg:text-xl'>©{new Date().getFullYear()} All rights reserved.</p>
            </div>
        </footer>
    )
}
