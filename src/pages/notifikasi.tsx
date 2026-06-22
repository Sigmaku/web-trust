import DefaultLayout from "../features/Layout/DefaultLayout"
import Notifikasi from "../features/Notifikasi"

const notifikasi = () => {
  return (
    <DefaultLayout currentMenu={"notifikasi"}>
        <Notifikasi/>
    </DefaultLayout>
  )
}

export default notifikasi