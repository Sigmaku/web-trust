export interface RiwayatPeminjaman {
    id: number;
    namaAlat: string;
    tanggalPinjam: string;
    tanggalKembali: string;
    status: string;
}

export const ListPeminjaman: RiwayatPeminjaman[] = [
    {
        id: 1,
        namaAlat: "Gergaji Kayu",
        tanggalPinjam: "2023-06-01",
        tanggalKembali: "2023-06-05",
        status: "Selesai"
    },
    {
        id: 2,
        namaAlat: "Palu",
        tanggalPinjam: "2023-06-02",
        tanggalKembali: "2023-06-06",
        status: "Selesai"
    },
    {
        id: 3,
        namaAlat: "Gerinda",
        tanggalPinjam: "2023-06-03",
        tanggalKembali: "2023-06-07",
        status: "Selesai"
    },
    {
        id: 4,
        namaAlat: "Obeng",
        tanggalPinjam: "2023-06-04",
        tanggalKembali: "2023-06-08",
        status: "Dikembalikan"
    },
    {
        id: 5,
        namaAlat: "Tang",
        tanggalPinjam: "04/06/2026",
        tanggalKembali: "-",
        status: "Dipinjam"
    }
]