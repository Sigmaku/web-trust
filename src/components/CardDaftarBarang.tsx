import { Card, Button } from "@heroui/react"
import type { CardBarangGlobalProps } from "./CardBarang"

const CardDaftarBarang = ({gambar, nama, kategori}: CardBarangGlobalProps) => {
  return (
    <Card className="bg-[#FDCB2E] w-65 h-80 p-6 shrink-0">
        <Card.Content className="flex flex-col font-sans-poppins gap-2">
            <div className="w-full h-40 ">
                <img src={gambar} alt={nama} className="w-full h-40"/>
            </div>
            <div className="text-2xl font-extrabold text-white">{nama}</div>
            <div className="text-[16px] font-semibold text-[#6A6A6A]">{kategori}</div>
            <Button className={`w-full h-10 bg-[#1E5DC8] text-xl font-extrabold text-white`}>Pinjam</Button>
        </Card.Content>
    </Card>
  )
}

export default CardDaftarBarang