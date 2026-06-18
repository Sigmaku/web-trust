import { createBrowserRouter } from "react-router";
import Dashboard from "../features/Dashboard";
import DefaultLayout from "../features/Layout/DefaultLayout";
import Barang from "../features/Barang";
import Notifikasi from "../features/Notifikasi";
import Peminjaman from "../features/Peminjaman";

export const Header = createBrowserRouter ([
    {
        path: '/',
        element: <DefaultLayout/>,
        children: [
            {
                index: true,
                element: <Dashboard/>,
                handle: { title: "DASHBOARD" }
            },
            {
                path: '/barang',
                element: <Barang/>,
                handle: { title: "DAFTAR ALAT" }
            },
            {
                path: '/peminjaman',
                element: <Peminjaman/>,
                handle: { title: "PEMINJAMAN" }
            },
        ]
    }
])