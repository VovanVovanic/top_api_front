import { DetailedHTMLProps, HTMLAttributes } from "react";
export enum IAuthVariant{
    Login,
    Register,
    PasswordRecover
}
export interface IAuth extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement>{
    variant: IAuthVariant
}

export interface IAuthForm{
    email:string
    password?: string
}