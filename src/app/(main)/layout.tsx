import {FC, ReactNode} from 'react'
import classes from './layout.module.sass'
import Sidebar from "../../components/organisms/Sidebar";

type Props = {
  children: ReactNode
}

const MainLayout: FC<Props> = async ({ children }) => {
    return (
        <div className={classes.container}>
            <div className={classes.sidebar}><Sidebar/></div>
            <main className={classes.content}>{children}</main>
        </div>
    )
}
export default MainLayout
