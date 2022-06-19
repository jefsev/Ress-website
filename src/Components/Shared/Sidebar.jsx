import React from 'react'
import { Link, usePage } from '@inertiajs/inertia-react';

const Sidebar = () => {
    const { primary_menu, seconday_menu, tertiary_menu } = usePage().props
    const { url } = usePage()

    return (
        <nav className='sidebar-nav flex flex-col items-start'>
            {primary_menu?.length > 0 && <h4>Getting started</h4>}
            {primary_menu?.map((link, index) =>
                <Link
                    href={link.link}
                    key={index}
                    className={url.includes(link.name.toLowerCase()) === true || link.name === 'Introduction' && url === '/' ? 'active' : ''}>
                    {link.name}
                </Link>
            )}

            {seconday_menu?.length > 0 && <h4>The basics</h4>}

            {seconday_menu?.map((link, index) =>
                <Link
                    href={link.link}
                    key={index}
                    className={url.includes(link.name.toLowerCase()) === true || link.name === 'Introduction' && url === '/' ? 'active' : ''}>
                    {link.name}
                </Link>
            )}

            {tertiary_menu?.length > 0 && <h4>Advanced</h4>}

            {tertiary_menu?.map((link, index) =>
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