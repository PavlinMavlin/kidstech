'use client'

import {FC, useEffect, useState} from 'react'
import Card from "@/components/atoms/Card";
import classes from './Courses.module.sass'
import {fetchData} from "@/utils/api";
import {СourseType} from "@/types";
import {COURSE_CATEGORY} from "@/enum";


type Props = {
    tag?: COURSE_CATEGORY
}
const Courses: FC<Props> = ({tag}) => {
    const [courses, setCourses] = useState<СourseType[]>([])
    const getData = async () => {
        try {
            const response = await fetchData(`${process.env.NEXT_PUBLIC_BE_URL}`);
            setCourses(tag ? response.filter(course => course.tags.includes(tag)) : response)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    useEffect(() => {
        getData();
    }, []);
    return (
        <div className={classes.container}>
            {courses.map((c) => <Card key={c.id} course={c}/>)}
        </div>
    )
}
export default Courses
