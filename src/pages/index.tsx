import DefaultLayout from "../features/Layout/DefaultLayout"
import Dashboard from "../features/Dashboard"

const index = () => {
    return (
        <DefaultLayout currentMenu={"dashboard"}>  
            <Dashboard/>
        </DefaultLayout>
    )
}

export default index