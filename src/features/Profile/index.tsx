import { IoPersonCircle } from "react-icons/io5"
import { TextField, Label, InputGroup, FieldError, Button } from "@heroui/react"
import logoPoltek from "../../assets/logo-poltek.png"

const index = () => {


    return (
        <div className="bg-[#FAFAFA] w-292.5 min-h-screen pb-12 px-12 rounded-2xl border border-primer font-sans-poppins">
            <div className="flex flex-col gap-20">
                {/* Header */}
                <div className="flex flex-row justify-between">
                    <div className="bg-[#FAFAFA] border-6 border-sekunder mt-14 rounded-lg w-138.75 p-8 flex flex-row gap-4 ">
                        <IoPersonCircle size={100} className="text-primer"/>
                        <div className="flex flex-col font-bold my-auto">
                            <div className="text-4xl text-primer">Serinda</div>
                            <div className="text-xl text-tersier">2 Teknologi Informasi</div>
                        </div>
                    </div>

                    {/* Logo Poltek */}
                    <img src={logoPoltek} alt="Logo PGT" className="w-15 h-15 mt-7.5" />
                </div>

                {/* Value Password */}
                <div className="bg-sekunder flex flex-col items-center rounded-lg w-53/54 h-full font-sans-poppins gap-6 p-10">
                    <div className="flex flex-col">
                        <Label className="text-[25px] font-semibold">Password</Label>
                        <TextField isRequired type="password" className={`w-220.75 h-16.75`}>
                            <InputGroup className="bg-white border-5 rounded-xl border-blur w-full h-full flex flex-row gap-3 px-2">
                                <InputGroup.Input
                                    placeholder="Current Password"
                                    className="placeholder:text-tersier placeholder:text-[16px] placeholder:font-sans-poppins placeholder:font-semibold w-full text-black text-[16px] font-sans-poppins font-semibold"
                                />
                                <InputGroup.Prefix className="flex items-center">
                                </InputGroup.Prefix>
                                <FieldError/>
                            </InputGroup>
                        </TextField>
                    </div>
                    <div className="flex flex-col">
                        <Label className="text-[25px] font-semibold">New Password</Label>
                        <TextField isRequired type="password" className={`w-220.75 h-16.75`}>
                            <InputGroup className="bg-white border-5 rounded-xl border-blur w-full h-full flex flex-row gap-3 px-2">
                                <InputGroup.Input
                                    placeholder="Minimal 6 Characters"
                                    className="placeholder:text-tersier placeholder:text-[16px] placeholder:font-sans-poppins placeholder:font-semibold w-full text-black text-[16px] font-sans-poppins font-semibold"
                                />
                                <InputGroup.Prefix className="flex items-center">
                                </InputGroup.Prefix>
                                <FieldError/>
                            </InputGroup>
                        </TextField>
                    </div>
                    <div className="flex flex-col">
                        <Label className="text-[25px] font-semibold">Confirm New Password</Label>
                        <TextField isRequired type="password" className={`w-220.75 h-16.75`}>
                            <InputGroup className="bg-white border-5 rounded-xl border-blur w-full h-full flex flex-row gap-3 px-2">
                                <InputGroup.Input
                                    placeholder="Confirm New Password"
                                    className=" placeholder:text-tersier placeholder:text-[16px] placeholder:font-sans-poppins placeholder:font-semibold w-full text-black text-[16px] font-sans-poppins font-semibold"
                                />
                                <InputGroup.Prefix className="flex items-center">
                                </InputGroup.Prefix>
                                <FieldError/>
                            </InputGroup>
                        </TextField>
                    </div>
                    <div className="flex flex-row w-full h-15 justify-end gap-6 mt-10 pr-10">
                        <Button className={`bg-primer rounded-2xl w-65 h-12.5 font-sans-poppins text-xl font-extrabold`}>Save Password</Button>
                        <Button className={`bg-tersier rounded-2xl w-46 h-12.5 font-sans-poppins text-xl font-extrabold`}>Cancel</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index