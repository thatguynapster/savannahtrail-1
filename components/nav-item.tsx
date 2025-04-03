import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

type Props = { name: string, href: string, className?: string }

const NavItem = ({ name, href, className }: Props) => {
    const pathname = usePathname()
    const isActive = (pathname === href)

    return (
        <Link href={href} className={clsx("text-sm/6 font-semibold", { 'border-b-2 border-b-primary': isActive }, className)}>
            {name}
        </Link>
    )
}

export default NavItem