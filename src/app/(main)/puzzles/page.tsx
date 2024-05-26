import {FC, ReactNode} from 'react'
import Courses from "@/components/molecules/Cources";
import {COURSE_CATEGORY} from "@/enum";

type Props = {
    children: ReactNode
}

const Puzzles: FC<Props> = async ({ children }) => {
    return (
        <Courses tag={COURSE_CATEGORY.PUZZLES}/>
    )
}
export default Puzzles
