"use client";
import React from "react";

interface LoginProps {
    register: any;
    errors: any;
    //mail
    emailId: string;
    emailLabel: string;
    emailPlaceholder: string;
    emailFieldName: string;
    //pass
    passwordFieldName: string;
    passwordId: string;
    passwordLabel: string;
    passwordPlaceholder: string;
    //checkbox
    rememberId: string;
    rememberLabel: string;
    //botton
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
    //styles
    className?: any;
}

const LoginForm = ({
    emailId,
    passwordId,
    register,
    errors,
    emailFieldName,
    passwordFieldName,
    emailLabel,
    passwordLabel,
    emailPlaceholder,
    passwordPlaceholder,
    rememberId,
    rememberLabel,
    className

}: LoginProps) => {
    return (
    <div className="flex flex-col">
        <label htmlFor={emailId} className="ff-roboto block">
            {emailLabel}
        </label>
        <input
            id={emailId}
            {...register(`${emailFieldName}`, { required: true })}
            className={`text-x1 text-[#707070] ff-roboto shadow-md rounded-lg opacity-100 p-2 w-[492px] h-[66px] text-md placeholder:text-gray-400 border-0 border-[1px] border-[#D8D5D5] appearance-none focus:border-[2px] dark:border-[##D8D5D5] dark:focus:border-[#707070] focus:outline-none focus:ring-0 focus:border-[#707070] peer ${
            errors[emailFieldName] === undefined ? "" : "border-red-500"
            }`}
            placeholder={emailPlaceholder}
            required=""
        />
        <div className="h-6 p-0 m-0">
            {errors[emailFieldName] && (
            <span className="ff-roboto text-red-500 text-xs">
                This field is required
            </span>
            )}
        </div>
        <label htmlFor={passwordId} className="ff-roboto block">
            {passwordLabel}
        </label>
        <input
            id={passwordId}
            type="password"
            {...register(`${passwordFieldName}`, { required: true })}
            className={`ff-roboto shadow-md rounded-lg opacity-100 p-2 w-[492px] h-[66px] text-md placeholder:text-gray-400 border-[#D8D5D5] appearance-none focus:border-[2px] dark:border-[##D8D5D5] dark:focus:border-[#707070] focus:outline-none focus:ring-0 focus:border-[#707070] peer ${
            errors[passwordFieldName] === undefined ? "" : "border-red-500"
            }`}
            placeholder={passwordPlaceholder}
            required=""
        />
        <div className="h-6 p-0 m-0">
            {errors[passwordFieldName] && (
            <span className="ff-roboto text-red-500 text-xs">
                This field is required
            </span>
            )}
        </div>
        <div className="rounded-sm flex flex-col gap-2.5 justify-center items-start relative bg-transparent"> 
            <div className="pl-0 pr-2.5 py-2.5 flex gap-2.5 items-center self-stretch relative w-full bg-transparent">
            <input
                rememberId="remember"
                type="checkbox"
                {...register("remember")}
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-gray-400 dark:bg-gray-700 dark:border-gray-600  dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                <label htmlFor="remember" className="ff-roboto text-x1 text-[#707070] ">
                    {rememberLabel}
                </label> 
            </div>
        </div>
            <div className="">                  
                <button
                    type="submit"
                    className="text-white rounded-md p-2 mt-4rounded-lg pl-[148px] pr-[161px] py-3 flex gap-2.5 justify-center items-center relative w-[492px] h-[49px] bg-[#203F51]"
                >
                    Iniciar sesión
                </button>
            </div>
    </div>
    );
};

export default LoginForm;
