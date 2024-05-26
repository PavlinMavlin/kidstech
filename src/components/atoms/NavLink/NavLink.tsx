import React, {FC, ReactNode} from 'react'
import Link from 'next/link'
import classes from './NavLink.module.sass'
import Typography from '../Typography'
import {VariantsType} from '../Typography/Typography'
import cx from "classnames";

export type Props = {
    children: ReactNode,
    href: string,
    active?: boolean,
    variant: VariantsType,
    key?: string
}

const NavLink: FC<Props> = ({children, href, active = false, variant, key}) => {
    return (
        <Link href={href} className={cx(classes.link,{[classes.activeLink]: active})}>
            <Typography variant={variant} weight='extra-bold' color={active ? 'white':'dark'}>
                {children}
            </Typography>
        </Link>

    )
}

export default NavLink
