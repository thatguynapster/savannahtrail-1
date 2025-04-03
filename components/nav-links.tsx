'use client'

import clsx from 'clsx'
import NavItem from './nav-item'

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
]

type Props = {}

const NavLinks = (props: Props) => {
    return (
        <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map(({ href, name }) => {

                return (
                    <NavItem key={href} {...{ href, name }} />
                )
            })}</div>
    )
}

export default NavLinks