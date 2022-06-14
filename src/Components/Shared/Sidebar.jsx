import React from 'react'
import { Link, usePage } from '@inertiajs/inertia-react';

const Sidebar = () => {
    const { primary_menu } = usePage().props
    const { url } = usePage()

    return (
        <nav className='sidebar-nav flex flex-col items-start'>
            {primary_menu.map((link, index) =>
                <Link
                    href={link.link}
                    key={index}
                    className={url.includes(link.name.toLowerCase()) === true || link.name === 'Introduction' && url === '/' ? 'active' : ''}>
                    {link.name}
                </Link>
            )}
        </nav>
    )
}

export default Sidebar