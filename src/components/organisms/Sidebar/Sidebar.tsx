'use client'

import React from 'react'
import classes from './Sidebar.module.sass'
import NavLink from "@/components/atoms/NavLink";
import { usePathname } from 'next/navigation'

export type NavRoutes = Array<{
    title: string
    to: string
    disabled?: boolean
}>

const routes: NavRoutes = [
    {
        title: 'Все темы',
        to: '/all-topics'
    },
    {
        title: 'Логика и мышление',
        to: '/logic-thinking'
    },
    {
        title: 'Загадки',
        to: '/riddles'
    },
    {
        title: 'Головоломки',
        to: '/puzzles'
    },
    {
        title: 'Путешествия',
        to: '/travelling'
    }
]

const Sidebar = () => {
    const pathname = usePathname()
    return (
        <div className={classes.container}>
            {routes.map(({ title, to }) => (
                <NavLink
                    key={title}
                    variant="bodyXL"
                    href={to}
                    active={pathname === to}
                >
                    {title}
                </NavLink>
            ))}
        </div>
    )
}

export default Sidebar
