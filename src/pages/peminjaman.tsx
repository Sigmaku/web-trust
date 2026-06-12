import DefaultLayout from "../features/Layout/DefaultLayout"
import Peminjaman from "../features/Peminjaman"

const peminjaman = () => {
  return (
    <DefaultLayout currentMenu={"peminjaman"}>
        <Peminjaman/>
    </DefaultLayout>  
    )
}

export default peminjaman