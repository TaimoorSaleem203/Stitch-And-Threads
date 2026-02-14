import post1 from "../assets/contactPoster1.png"
import post2 from "../assets/contactPoster2.png"
import post3 from "../assets/contactPoster3.png"
import post4 from "../assets/contactPoster4.png"
import post5 from "../assets/contactPoster5.png"
import post6 from "../assets/contactPoster6.png"

const ContactUs = () => {
  return (
    <section className="mt-28">
      <div className="max-w-7xl mx-auto flex text-center p-12">
        <div className="flex gap-2 flex-col">
          <img src={post1} alt="" className="w-full" />
          <div className="flex gap-2 items-center">
            <img src={post2} alt="" />
            <img src={post3} alt="" />
          </div>
        </div>
        <div className="bg-secondary p-12 rounded-lg max-w-xs max-h-full flex flex-col gap-5 items-center">
          <h1 className="font-heading text-black uppercase text-4xl font-bold">follow us on <span className="text-primary">instagram</span></h1>
          <p>Stay connected with our latest work, client projects, and behind-the-scenes updates.</p>
          <button className="transition-all duration-150 active:scale-95 focus:outline-none text-sm uppercase bg-primary text-white px-6 p-3 rounded-full font-medium">follow us</button>
        </div>
        <div className="flex gap-2 flex-col">
          <img src={post6} alt="" className="w-full" />
          <div className="flex gap-2 items-center">
            <img src={post4} alt="" className="w-full" />
            <img src={post5} alt="" className="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs