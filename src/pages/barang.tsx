import DefaultLayout from '../features/Layout/DefaultLayout'
import Barang from "../features/Barang"

const barang = () => {
  return (
    <DefaultLayout currentMenu={"barang"}>
        <Barang/>
    </DefaultLayout>
  )
}

export default barang