import HeaderTitle from "../../components/HeaderTitle"
import FormPeminjaman from "./FormPeminjaman"

const index = () => {
  return (
    <div className="bg-[#FAFAFA] w-292.5 min-h-screen pb-12 px-12 rounded-2xl border border-primer font-sans-poppins">
      <div className="flex flex-col gap-5">
        {/* Header */}
        <HeaderTitle/>

        {/* Form Peminjaman */}
        <FormPeminjaman/>
      </div>
    </div>
  )
}

export default index