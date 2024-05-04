import Link from "next/link";
import Image from "next/image";
import { RiSparklingFill } from "react-icons/ri";
import { dataMenu } from "@/src/constants";

export default function HeroContents(){

    dataMenu.forEach((item)=>{
        console.log(item)
    })

    
    return(
    
        
        <section className="z-20 flex min-h-screen w-full items-center justify-center">
        <div className="container z-20 mx-auto  flex h-full w-full max-w-7xl flex-col items-center justify-center px-5 pt-20 max-[375px]:max-w-[320px] max-[320px]:mt-0 lg:flex-row lg:pt-0     ">
        <div className="
mx-auto flex h-full w-full flex-col items-center justify-center gap-5 text-start lg:items-start">
            <div className="welcome-box border border-[#7042f88b] px-4 py-4 opacity-90" >
                <RiSparklingFill className="mr-1 h-5 w-5 text-[#b49bff]"/>
                <h1 className="welcome-text text-[13px]" >Desenvolvedor Front-End</h1>     
            </div>
            <div className="font-bold text-white lg:max-w-[600px]">
                <span className="flex flex-col" >
                    <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-center text-4xl text-transparent lg:text-left lg:text-6xl">Josiel Santos</span>
                    <span className="text-center text-3xl leg:text-left leg text-4xl">Desenvolvedor Front-End</span>
                </span>
            </div>
            <p className=" max-w-[600px]  text-center text-base text-gray-300 md:text-lg lg:max-w-[450px] lg:text-left xl:max-w-[600px]">
            Olá! 👋 Meu nome é Josiel Santos, é um prazer conhecê-lo! Sou um entusiasta da tecnologia de 21 anos, nascido e criado em na pequena cidade de <span className="font-bold"> Oriximina</span> do interior do Estado do Pará. Atualmente, estou dedicando meus esforços ao curso de Bacharelado em Sistemas de Informação na Universidade Federal do Oeste do Pará <span className="font-bold">(UFOPA)</span>
            </p>
            <div className="flex w-full  items-center justify-center gap-5 lg:justify-start ">
                <Link href={"https://www.linkedin.com/in/josiel-santos-41200b2b8/"}className="button-primary w-full max-w-[200px] cursor-pointer rounded-lg py-2 text-center text-white transition-all duration-100 hover:scale-105" >Linkedin</Link>
                <Link href={"https://github.com/JosielSantos16"}className="button-primary w-full max-w-[200px] cursor-pointer rounded-lg py-2 text-center text-white transition-all duration-100 hover:scale-105">GitHub</Link>
            </div>
        </div>
        <div className="flex h-full w-full items-center	justify-center"  >
                <Image src={"/imagem.svg"} alt={"foto"} width={650} height={650}>
                </Image>
        </div>
        </div>
        </section>
    )
}