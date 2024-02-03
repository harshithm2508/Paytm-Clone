import React from "react";
import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { ButtonWarning } from "../components/ButtonWarning";
import { Input } from "postcss";


export function SignUp(){
    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                    <Heading label={"Sign Up"}/>
                    <SubHeading label={"Enter your information to create an account"}/>
                    <InputBox label={"First Name"} placeholder={"John"}/>
                    <InputBox label={"Last Name"} placeholder={"Doe"} />
                    <InputBox label={"Email"} placeholder={"payments@mail.in"}/>
                    <InputBox label={"Password"} placeholder={"password"}/>
                    <div className="pt-4">
                        <Button label={"Sign Up"}/>
                    </div>
                    <ButtonWarning label={"Already have an account ?"} buttonText={"Sign In"} to={"/signin"} />
             </div>
        </div>
    </div>
}