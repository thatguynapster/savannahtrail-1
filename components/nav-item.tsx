import { usePathname } from 'next/navigation'
import Link from 'next/link'
import React from 'react'
import clsx from 'clsx'

type Props = { name: string, href: string, className?: string, isSub?: boolean }

const NavItem = ({ name, href, className, isSub = false }: Props) => {
    const pathname = usePathname()
    const isActive = (pathname === href)

    return (
        <Link href={href} className={clsx("text-sm/6 font-semibold", { 'border-b-2 border-b-primary': (isActive && !isSub) }, className)}>
            {name}
        </Link>
    )
}

export default NavItem