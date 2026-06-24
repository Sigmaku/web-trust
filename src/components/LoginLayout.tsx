import { FaCircle } from "react-icons/fa6";
import {Button, Label, FieldError, Form, InputGroup, Radio, RadioGroup, TextField} from "@heroui/react";
import { IoPerson } from "react-icons/io5";
import { PiLockKeyFill } from "react-icons/pi";
import { useState } from "react";

const LoginLayout = () => {
  const [isOn, setIsOn] = useState<boolean>(false);

  const handleToggle = () => {
    setIsOn((prev) => !prev);
  };

  return (
    <div className="bg-white relative w-full min-h-screen p-12">
        <FaCircle size={1108} className="absolute -left-76 -top-102 text-[#1E5DC8]"/>
        <FaCircle size={386} className="absolute right-192 -bottom-23 text-[#2A6FE0] shadow-2xl/50 shadow-black rounded-full"/>
        <FaCircle size={504} className="absolute text-[#2A6FE0] -bottom-89 -left-33 shadow-2xl/50 shadow-black rounded-full"/>
        <FaCircle size={320} className="absolute text-[#2A6FE0] -bottom-89 -right-20 shadow-2xl/50 shadow-black rounded-full"/>
        
        <div className="relative flex flex-row justify-between">
          {/* Title */}
          <div className="flex flex-col text-white gap-2 p-16">
            <div className="font-extrabold text-6xl text-shadow-2xs font-sans-poppins">TRUST</div>
            <div className="text-2xl font-normal font-sans-poppins">Tool Reservation, Usage, and Stock Tracking</div>
          </div>
    
          {/* Login Form */}
          <div className="flex flex-col gap-4 w-125 h-130 pt-10">
            <div className="text-5xl font-bold font-sans-poppins tracking-wide">Selamat Datang</div>
            <div className="text-2xl font-extralight font-sans-poppins">Gunakan NIM Anda sebagai username dan password</div>
            <Form action="post" className="flex flex-col gap-4" >
              <TextField isRequired type="name" >
                <InputGroup className="bg-white border-5 rounded-2xl border-yellow-300 w-full h-20.25 flex flex-row gap-3 px-4">
                  <InputGroup.Prefix className="flex items-center">
                    <IoPerson size={36} className="text-black"/>
                  </InputGroup.Prefix>
                  <InputGroup.Input 
                    placeholder="Username" 
                    className="placeholder:text-gray-500 placeholder:font-sans-poppins placeholder:font-semibold w-full text-black text-2xl font-sans-poppins font-semibold"
                  />
                  <FieldError/>
                </InputGroup>
              </TextField>
              <TextField isRequired type="password">
                <InputGroup className="bg-white border-5 rounded-2xl border-yellow-300 w-full h-20.25 flex flex-row gap-3 px-4">
                  <InputGroup.Prefix className="flex items-center">
                    <PiLockKeyFill size={36} className="text-black"/>
                  </InputGroup.Prefix>
                  <InputGroup.Input 
                    placeholder="Password" 
                    className="placeholder:text-gray-500 placeholder:font-sans-poppins placeholder:font-semibold w-full text-black text-2xl font-sans-poppins font-semibold"
                  />
                </InputGroup>
              </TextField>
              <div className="flex flex-row justify-between w-full h-12">
                <RadioGroup value={isOn ? "active" : ""}>
                  <Radio value="active" onClick={handleToggle} className="cursor-pointer">
                    <Radio.Control className="w-6 h-6 rounded-full border-4 border-gray-300">
                      <Radio.Indicator/>
                    </Radio.Control>
                    <Radio.Content>
                      <Label className="text-gray-500 text-xl text-center">
                        Remember Me
                      </Label>
                    </Radio.Content>
                  </Radio>
                </RadioGroup>
                <a href="" className="font-sans-poppins text-xl pt-3 underline text-[#5B95F5]">Forgot Password?</a>
              </div>
              <Button className={`bg-[#FDCB2E] w-full h-20 shadow-2xl rounded-2xl text-black font-sans-poppins font-semibold text-3xl hover:bg-yellow-200`}>Login</Button>
            </Form>
          </div>
        </div>
    </div>
  )
}

export default LoginLayout