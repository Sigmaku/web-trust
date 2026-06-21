import { Card, Button } from "@heroui/react"

export type CardBarangGlobalProps = {
    gambar: string;
    nama: string;
    kategori: string;
}

const CardBarang = ({gambar, nama, kategori}: CardBarangGlobalProps) => {

    return (
        <Card className="bg-sekunder w-82.5 h-50 rounded-2xl p-5 shrink-0">
            <Card.Content className="flex flex-col ">
                <div className="flex flex-row gap-6">
                    <img src={gambar} alt={nama} className="w-30 h-30 rounded-2xl" />
                    <div className="flex flex-col font-sans-poppins">
                        <div className="text-xl text-[#FFFFFF] font-bold">{nama}</div>
                        <div className="text-lg text-[#6A6A6A] font-bold">Kategori : {kategori} </div>
                    </div>
                </div>
                <div className="flex flex-row justify-end w-full h-10">
                    <Button className="bg-primer hover:bg-[#4E8AEF] rounded-xl w-30 h-10 text-xl font-bold">Pinjam</Button>
                </div>
            </Card.Content>
        </Card>
    )
}

export default CardBarang