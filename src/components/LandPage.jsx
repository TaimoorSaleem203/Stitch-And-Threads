import LandImg from "../assets/LandPageImg.png"

const LandPage = () => {
  return (
    <main className='w-screen max-w-[500px] h-full bg-secondary grid grid-cols-2 items-center justify-center'>
        <div>
            <img src={LandImg} alt="landImg" className="max-w-[800px]"/>
        </div>
    </main>
  )
}

export default LandPage