"use client"
import { dataMenu } from "@/src/constants";
import Link from "next/link";
import React, { useEffect } from "react";


export default function DesktopLinks(){

    dataMenu.forEach((item)=>{
        console.log(item)
    })
    
    useEffect( () => {
        dataMenu.forEach((item) => {
          console.log(`Nome: ${item.name}, Link: ${item.href}`);
        });
      })

      let item = dataMenu.find((item) => item.name === "Projetos");
      console.log(item);
    return(
            <div className="hidden justify-between gap-4 rounded-full border border-[#7042f861] bg-[#030014ad] px-5 py-2 md: flex">
            <Link href={""} className="relative flex h-auto w-auto cursor-pointer flex-row items-center ">INICIO <p className="text-base font-semibold tracking-wider text-white transition-all duration-100 hover:scale-105 hover:text-purple-300"></p></Link>
            <Link href={""} className="relative flex h-auto w-auto cursor-pointer flex-row items-center ">HABILIDADES<p className="text-base font-semibold tracking-wider text-white transition-all duration-100 hover:scale-105 hover:text-purple-300"></p></Link>
            <Link href={""} className="relative flex h-auto w-auto cursor-pointer flex-row items-center ">PROJETO<p className="text-base font-semibold tracking-wider text-white transition-all duration-100 hover:scale-105 hover:text-purple-300"></p></Link>
            <Link href={""} className="relative flex h-auto w-auto cursor-pointer flex-row items-center ">SOBRE<p className="text-base font-semibold tracking-wider text-white transition-all duration-100 hover:scale-105 hover:text-purple-300"></p></Link>
        </div>
    )
}