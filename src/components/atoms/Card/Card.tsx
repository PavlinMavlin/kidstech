import React, {FC} from 'react'
import Typography from '../Typography'
import classes from './Card.module.sass'
import {СourseType} from "@/types";


export type Props = {
    course: СourseType
    key?: string
}

const Card: FC<Props> = ({course}) => {
    const {name, bgColor, image} = course
    const imageBlockStyles = {
        background: bgColor,
    }
    return (
        <div className={classes.container}>
            <div style={imageBlockStyles} className={classes.imageBlock}>
                <img src={image} alt={name}/>
            </div>
            <div className={classes.titleBlock}>
                <Typography variant='bodyXL' weight='extra-bold' color='dark'>{name}</Typography>
            </div>
        </div>

    )
}

export default Card
