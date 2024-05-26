import {FC, ReactNode} from 'react'
import {COURSE_CATEGORY} from "@/enum";
import Courses from "@/components/molecules/Cources";

type Props = {
    children: ReactNode
}

const LogicThinking: FC<Props> = async ({ children }) => {
    return (
        <Courses tag={COURSE_CATEGORY.LOGIC_THINKING}/>
    )
}
export default LogicThinking
