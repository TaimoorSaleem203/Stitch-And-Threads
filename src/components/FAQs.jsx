import { useState } from "react"

const FAQs = () => {

    const [isOpen, setOpen] = useState(false)

    return (
        <section className='mt-28'>
            <div className='max-w-7xl mx-auto flex items-center justify-between'>
                <div className='w-full flex flex-col text-black justify-between h-[600px] p-6 md:p-10 lg:p-12'>
                    <div className='font-bold flex flex-col gap-5'>
                        <h1 className='font-heading text-4xl md:text-5xl lg:text-6xl'>FAQs</h1>
                        <p className='font-body font-medium max-w-xs'>are questions about our products, services, or building solutions? </p>
                    </div>

                    <div className='font-body mr-auto flex flex-col gap-2'>
                        <h6 className='text-xl font-bold max-w-xs'>Still Have A Question ?</h6>
                        <p className='max-w-xs text-side'>We’re here to help. Reach out to our team and we’ll get back to you as soon as possible.</p>
                        <button className='bg-text mt-3 text-white p-3 rounded-full text-xl'>Contact Us</button>
                    </div>
                </div>

                <div className='w-full mx-auto flex flex-col gap-3 font-body'>
                    <div className={`flex flex-col gap-3 py-3 max-w-xl border-t border-b`}>
                        <div className='font-medium flex justify-between items-center'>
                            <h4 className='text-lg'>What files do you accept?</h4>
                            <button aria-label='open' className="transition-all ease-in-out duration-300" onClick={()=>setOpen(!isOpen)}><i class={`${isOpen ? 'ri-arrow-up-s-line' : 'ri-arrow-down-s-line'} text-lg`}></i></button>
                        </div>
                        <p className='text-side max-w-lg'>MGO (Magnesium Oxide) is a durable, fire-resistant board used in walls and ceilings. It’s mold-proof, eco-friendly, and ideal for sustainable construction.</p>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default FAQs