import Link from 'next/link'
import React from 'react'

const MenuItem = ({ title, link, Icon }) => {
    return (
        <div>
            <Link href={link} className="hover:text-amber-500 duration-300 ease-in-out mx-4 font-bold " >
                <Icon className="text-2xl lg:hidden mx-4" />
                <p className='hidden lg:inline my-2 text-sm text-2xl ' >
                    {title}
                </p>
            </Link>
        </div>
    )
}

export default MenuItem
