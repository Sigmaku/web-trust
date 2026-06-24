import { Card, Button, Modal } from "@heroui/react"
import { ListPeminjaman } from "../../lib/riwayatpeminjaman"

const CardNotifikasi = () => {
    const targetId = 5; 

    const detailData = ListPeminjaman.find(item => item.id === targetId);

    return (
        <Card className="bg-[#FAFAFA] w-268.5 border-2 border-blur rounded-2xl h-32 mt-24">
            <Card.Content className="flex flex-row justify-between px-5 py-3 font-sans-poppins">
                <div className="flex flex-col w-3/4 items-start tracking-wide gap-2">
                    <div className="text-2xl font-black text-primer">Serinda</div>
                    <div className="text-[16px] font-semibold text-tersier">Ada barang yg belum kamu kembalikan!</div>
                </div>
                <div className="flex flex-col justify-center w-1/4 px-12 gap-4">
                    <Modal>
                        <Button className={`rounded-2xl bg-primer w-full text-[16px] font-semibold`}>Detail</Button>
                        <Modal.Backdrop>
                            <Modal.Container>
                                <Modal.Dialog className="font-sans-poppins gap-8">
                                    <Modal.Header>
                                        <Modal.CloseTrigger />
                                        <Modal.Heading className="text-2xl font-bold ">Haloo Serinda</Modal.Heading>
                                    </Modal.Header>
                                    <Modal.Body className="grid grid-cols-2 gap-4 text-lg font-semibold text-primer">
                                        <div>{detailData?.namaAlat}</div>
                                        <div>{detailData?.tanggalPinjam}</div>
                                        <div>{detailData?.tanggalKembali}</div>
                                        <div>{detailData?.status}</div>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button slot="close" className={`rounded-xl bg-primer w- text-[16px] font-semibold`}>Ajukan Pengembalian</Button>
                                    </Modal.Footer>
                                </Modal.Dialog>
                            </Modal.Container>
                        </Modal.Backdrop>
                    </Modal>
                </div>
            </Card.Content>
        </Card>
    )
}

export default CardNotifikasi