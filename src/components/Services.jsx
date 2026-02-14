import { useState } from "react"
import ServiceImg from "../assets/ServiceImg.png"

const Services = () => {
  return (
    <section className='relative bg-secondary w-screen h-full mx-auto mt-36'>
        <div className='w-full text-center flex flex-col gap-4 p-6 md:p-8 lg:p-12'>
            <h1 className='uppercase text-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mt-8'>explore our <span className='text-black'>Services</span></h1>
            <p className='text-text/75 max-w-prose mx-auto'>Everything you need to turn your artwork into high-quality production files.</p>
            <img className="hidden lg:block absolute max-w-[350px] w-full -translate-y-20 -translate-x-20 right-0 top-0" src={ServiceImg} alt="Service illustration" />
        </div>

        <div className="max-w-screen flex flex-col items-center mx-auto mt-20">
            {["Embroidery Digitizing","Vector Tracing","Screen Separation","Custom Patches","DTF Gang Sheets","Custom Apparels"].map((item)=>{
                return (
                    <div className={`transition-all duration-300 ease-in-out w-full flex flex-row items-center justify-between border-b border-text/40 p-8 ${item=="Embroidery Digitizing" && "border-t"}`}>
                        <h1 className="translate-x-12 max-w-36 sm:max-w-full uppercase text-black font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">{item}</h1>
                        <button className="-translate-x-12" aria-label="embroidery"><i class="hover:text-primary text-xl lg:text-2xl ri-arrow-right-down-long-line"></i></button>
                    </div>
                )
            })}
        </div>
    </section>
  )
}

export default Services