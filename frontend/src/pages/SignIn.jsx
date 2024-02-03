import React from "react";
import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { Button } from "../components/Button";
import { ButtonWarning } from "../components/ButtonWarning";
import { InputBox } from "../components/InputBox";
import { Input } from "postcss";

export function SignIn(){
    return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
            <Heading label={"Sign In"} />
            <SubHeading label={"Enter your credentials to access your account"} />
            <InputBox label={"Email"} placeholder={"Enter your email"} />
            <InputBox label={"Password"} placeholder={"Enter your password"} />
            <div className="pt-4">
                <Button label={"Sign In"}/>
            </div>
            <ButtonWarning label={"Don't have an account"} buttonText={"Sign Up"} to={"/signup"} />
        </div>
    </div>
</div>
}