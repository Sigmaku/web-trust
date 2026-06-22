import { Form, TextField, InputGroup, FieldError, Label, Button, Calendar, DateField, DatePicker } from "@heroui/react"
import { IoPerson, IoFolderOpenSharp, IoDocumentTextSharp, IoCalendarSharp } from "react-icons/io5"
import { FaIdCard } from "react-icons/fa";
import { FaBoxesStacked } from "react-icons/fa6";
import { HiArchive } from "react-icons/hi";



const FormPeminjaman = () => {
    return (
        <div className="bg-sekunder w-53/54 h-full max-w-full py-7.5 px-10 font-sans-poppins font-semibold rounded-2xl">
            <Form action="post" className="flex flex-col items-center w-full" >
                {/* Identitas */}
                <div className="flex flex-row gap-10">
                    <div className="flex flex-col gap-2.5">
                        <Label className="text-xl"/>Nama Mahasiswa
                        <TextField isRequired type="text" className={`w-103 h-16.75`}>
                            <InputGroup className="bg-white border-5 rounded-xl border-blur flex flex-row gap-3 px-2">
                                <InputGroup.Prefix className="flex items-center">
                                    <IoPerson size={17}/>
                                </InputGroup.Prefix>
                                <InputGroup.Input 
                                    placeholder="Nama Mahasiswa" 
                                    className="placeholder:text-gray-500 placeholder:text-[16px] placeholder:font-sans-poppins placeholder:font-semibold w-full text-black text-[16px] font-sans-poppins font-semibold"
                                />
                                <FieldError/>
                            </InputGroup>
                        </TextField>
                    </div>
                    <div className="flex flex-col gap-2.5">
                        <Label className="text-xl"/>NIM
                        <TextField isRequired type="text" className={`w-107.75 h-16.75`}>
                            <InputGroup className="bg-white border-5 rounded-xl border-blur flex flex-row gap-3 px-2">
                                <InputGroup.Prefix className="flex items-center">
                                    <FaIdCard size={17}/>
                                </InputGroup.Prefix>
                                <InputGroup.Input 
                                    placeholder="NIM"
                                    className="placeholder:text-gray-500 placeholder:text-[16px] placeholder:font-sans-poppins placeholder:font-semibold w-full text-black text-[16px] font-sans-poppins font-semibold"
                                />
                                <FieldError/>
                            </InputGroup>
                        </TextField>
                    </div>
                </div>
                {/* Kebutuhan */}
                <div className="flex flex-row gap-10">
                    <div className="flex flex-col gap-2.5">
                        <Label className="text-xl"/>Nama Alat
                        <TextField isRequired type="text" className={`w-75.5 h-16.75`}>
                            <InputGroup className="bg-white border-5 rounded-xl border-blur flex flex-row gap-3 px-2">
                                <InputGroup.Prefix className="flex items-center">
                                    <HiArchive size={17}/>
                                </InputGroup.Prefix>
                                <InputGroup.Input 
                                    placeholder="Nama Alat" 
                                    className="placeholder:text-gray-500 placeholder:text-[16px] placeholder:font-sans-poppins placeholder:font-semibold w-full text-black text-[16px] font-sans-poppins font-semibold"
                                />
                                <FieldError/>
                            </InputGroup>
                        </TextField>
                    </div>
                    <div className="flex flex-col gap-2.5">
                        <Label className="text-xl"/>Kategori
                        <TextField isRequired type="text" className={`w-76.75 h-16.75`}>
                            <InputGroup className="bg-white border-5 rounded-xl border-blur flex flex-row gap-3 px-2">
                                <InputGroup.Prefix className="flex items-center">
                                    <IoFolderOpenSharp size={17}/>
                                </InputGroup.Prefix>
                                <InputGroup.Input 
                                    placeholder="Kategori"
                                    className="placeholder:text-gray-500 placeholder:text-[16px] placeholder:font-sans-poppins placeholder:font-semibold w-full text-black text-[16px] font-sans-poppins font-semibold"
                                />
                                <FieldError/>
                            </InputGroup>
                        </TextField>
                    </div>
                    <div className="flex flex-col gap-2.5">
                        <Label className="text-xl"/>Jumlah
                        <TextField isRequired type="number" className={`w-48.5 h-16.75`}>
                            <InputGroup className="bg-white border-5 rounded-xl border-blur flex flex-row gap-3 px-2">
                                <InputGroup.Prefix className="flex items-center">
                                    <FaBoxesStacked size={17}/>
                                </InputGroup.Prefix>
                                <InputGroup.Input 
                                    placeholder="Jumlah"
                                    className="placeholder:text-gray-500 placeholder:text-[16px] placeholder:font-sans-poppins placeholder:font-semibold w-full text-black text-[16px] font-sans-poppins font-semibold"
                                />
                                <FieldError/>
                            </InputGroup>
                        </TextField>
                    </div>
                </div>
                {/* Deskripsi */}
                <div className="flex flex-col gap-2.5">
                    <Label className="text-xl"/>Deskripsi
                    <TextField isRequired type="text" className={`w-220.75 h-16.75`}>
                        <InputGroup className="bg-white border-5 rounded-xl border-blur flex flex-row gap-3 px-2">
                            <InputGroup.Prefix className="flex items-center">
                                <IoDocumentTextSharp size={17}/>
                            </InputGroup.Prefix>
                            <InputGroup.Input 
                                placeholder="Deskripsi"
                                className="placeholder:text-gray-500 placeholder:text-[16px] placeholder:font-sans-poppins placeholder:font-semibold w-full text-black text-[16px] font-sans-poppins font-semibold"
                            />
                            <FieldError/>
                        </InputGroup>
                    </TextField>
                </div>

                {/* Tanggal menggunakan struktur dokumentasi resmi HeroUI */}
                <div className="flex flex-row gap-10">
                    {/* Tgl Peminjaman */}
                    <div className="flex flex-col gap-2.5">
                        <Label className="text-xl"/>Tgl Peminjaman
                        <DatePicker isRequired className="w-103 h-13.75">
                            <DateField.Group className="bg-white border-5 rounded-xl border-blur flex flex-row justify-between px-4 h-full w-full">
                                <DateField.Suffix>
                                    <DatePicker.Trigger className="text-gray-500 hover:text-primer transition-colors">
                                        <IoCalendarSharp size={17}/>
                                    </DatePicker.Trigger>
                                </DateField.Suffix>
                                <DateField.Input className="text-black text-[16px] font-sans-poppins font-semibold flex gap-1">
                                    {(segment) => <DateField.Segment segment={segment} className="focus:bg-primer focus:text-white px-0.5 rounded" />}
                                </DateField.Input>
                            </DateField.Group>
                            
                            <DatePicker.Popover className="bg-white p-4 rounded-xl shadow-xl border border-gray-200">
                                <Calendar aria-label="Pilih Tanggal Pinjam">
                                    <Calendar.Header className="flex justify-between items-center mb-2">
                                        <Calendar.YearPickerTrigger className="flex items-center gap-1 font-bold">
                                            <Calendar.YearPickerTriggerHeading />
                                            <Calendar.YearPickerTriggerIndicator />
                                        </Calendar.YearPickerTrigger>
                                        <div className="flex gap-2">
                                            <Calendar.NavButton slot="previous" className="p-1 rounded hover:bg-gray-100" />
                                            <Calendar.NavButton slot="next" className="p-1 rounded hover:bg-gray-100" />
                                        </div>
                                    </Calendar.Header>
                                    <Calendar.Grid className="w-full">
                                        <Calendar.GridHeader className="text-gray-400 font-medium">
                                            {(day) => <Calendar.HeaderCell className="text-center p-1 text-sm">{day}</Calendar.HeaderCell>}
                                        </Calendar.GridHeader>
                                        <Calendar.GridBody>
                                            {(date) => <Calendar.Cell date={date} className="text-center p-1 hover:bg-primer hover:text-white rounded-lg cursor-pointer" />}
                                        </Calendar.GridBody>
                                    </Calendar.Grid>
                                </Calendar>
                            </DatePicker.Popover>
                            <FieldError />
                        </DatePicker>
                    </div>

                    {/* Tgl Pengembalian */}
                    <div className="flex flex-col gap-2.5">
                        <Label className="text-xl"/>Tgl Pengembalian
                        <DatePicker isRequired className="w-107.75 h-13.75">
                            <DateField.Group className="bg-white border-5 rounded-xl border-blur flex flex-row items-center justify-between px-4 h-full w-full">
                                <DateField.Suffix>
                                    <DatePicker.Trigger className="text-gray-500 hover:text-primer transition-colors">
                                        <IoCalendarSharp size={17}/>
                                    </DatePicker.Trigger>
                                </DateField.Suffix>
                                <DateField.Input className="text-black text-[16px] font-sans-poppins font-semibold flex gap-1">
                                    {(segment) => <DateField.Segment segment={segment} className="focus:bg-primer focus:text-white px-0.5 rounded" />}
                                </DateField.Input>
                            </DateField.Group>
                            
                            <DatePicker.Popover className="bg-white p-4 rounded-xl shadow-xl border border-gray-200">
                                <Calendar aria-label="Pilih Tanggal Kembali">
                                    <Calendar.Header className="flex justify-between items-center mb-2">
                                        <Calendar.YearPickerTrigger className="flex items-center gap-1 font-bold">
                                            <Calendar.YearPickerTriggerHeading />
                                            <Calendar.YearPickerTriggerIndicator />
                                        </Calendar.YearPickerTrigger>
                                        <div className="flex gap-2">
                                            <Calendar.NavButton slot="previous" className="p-1 rounded hover:bg-gray-100" />
                                            <Calendar.NavButton slot="next" className="p-1 rounded hover:bg-gray-100" />
                                        </div>
                                    </Calendar.Header>
                                    <Calendar.Grid className="w-full">
                                        <Calendar.GridHeader className="text-gray-400 font-medium">
                                            {(day) => <Calendar.HeaderCell className="text-center p-1 text-sm">{day}</Calendar.HeaderCell>}
                                        </Calendar.GridHeader>
                                        <Calendar.GridBody>
                                            {(date) => <Calendar.Cell date={date} className="text-center p-1 hover:bg-primer hover:text-white rounded-lg cursor-pointer" />}
                                        </Calendar.GridBody>
                                    </Calendar.Grid>
                                </Calendar>
                            </DatePicker.Popover>
                            <FieldError />
                        </DatePicker>
                    </div>
                </div>
                <div className="flex flex-row justify-end w-full h-15 gap-7.5 mt-8">
                    <Button className={`bg-primer w-53.75 h-10 font-sans-poppins font-extrabold text-xl rounded-xl`}>
                        Tambah Alat
                    </Button>
                    <Button className={`bg-primer w-53.75 h-10 font-sans-poppins font-extrabold text-xl rounded-xl`}>
                        Kirim
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export default FormPeminjaman
