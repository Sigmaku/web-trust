import HeaderTitle from "../../components/HeaderTitle"
import CardNotifikasi from "./CardNotifikasi"

const index = () => {
  return (
    <div className="bg-[#FAFAFA] w-292.5 min-h-screen pb-12 px-12 rounded-2xl border border-primer font-sans-poppins">
      <div className="flex flex-col ">
        {/* Header */}
        <HeaderTitle/>

        {/* Card Notifikasi */}
        <CardNotifikasi/>
      </div>
    </div>
  )
}

export default index