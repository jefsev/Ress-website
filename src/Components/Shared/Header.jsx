import React from 'react';
import { Link, usePage } from '@inertiajs/inertia-react';
import defaultLogo from '../../assets/images/logo-nm.svg';
import githubLogo from '../../assets/images/github.svg';
import '../../assets/scss/components/_header.scss'

const Header = () => {
    const { custom_logo } = usePage().props

    return (
        <>
            <header className='nav py-3'>
                <div className="wrap container mx-auto px-3 flex flex-row justify-between items-center">
                    <Link href='/'>
                        <img src={custom_logo != null && custom_logo || defaultLogo} alt='site logo' className="logo" />
                    </Link>
                    <nav className='nav-menu flex flex-row justify-end items-center'>
                        <a href="https://github.com/jefsev/Ress" target="_blank" className="github">
                            <img src={githubLogo} alt="" />
                        </a>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header