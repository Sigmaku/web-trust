import { Form, TextField, InputGroup, FieldError, Label } from "@heroui/react"

const FormPeminjaman = () => {
    return (
        <div className="bg-sekunder w-15/16 h-full p-6 font-sans-poppins font-semibold">
            <Form action="post" className="flex flex-col items-center gap-4" >
                <Label className="text-xl"/>Nama Mahasiswa
                <TextField isRequired type="name" className={`w-103 h-16`}>
                    <InputGroup className="bg-white border-5 rounded-2xl border-blur flex flex-row gap-3 px-4">
                        <InputGroup.Prefix className="flex items-center">
                        </InputGroup.Prefix>
                        <InputGroup.Input 
                        placeholder="Username" 
                        className="placeholder:text-gray-500 placeholder:font-sans-poppins placeholder:font-semibold w-full text-black text-2xl font-sans-poppins font-semibold"
                        />
                        <FieldError/>
                    </InputGroup>
                </TextField>
            </Form>
        </div>
    )
}

export default FormPeminjaman
