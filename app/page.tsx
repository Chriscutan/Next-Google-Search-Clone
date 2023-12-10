import HomeHeader from "@/components/HomeHeader";
import Image from "next/image";
import { MagnifyingGlassIcon, MicrophoneIcon, CameraIcon } from "@heroicons/react/20/solid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="h-screen w-screen bg-[#202124] flex flex-col justify-between">
      <HomeHeader />

      <section className="flex flex-col items-center space-y-5 max-w-7xl -mt-60 mx-auto p-5">
         <Image src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png"
          alt="logo"
          height={30}
          width={300}
          className="!h-30 !w-60 lg:!h-30 lg:!w-600"
         />

        

         <div className="flex flex-1 items-center justify-between space-x-2 border border-white rounded-full 
         p-3 w-full lg:w-[600px] hover:bg-gray-400/10 hover:border-none ">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />

            <input type="text" className="bg-transparent flex-1 outline-none text-white" />

            <div className="flex items-center space-x-3">
              <MicrophoneIcon className="h-5 w-5 text-gray-500" />

              <CameraIcon className="h-5 w-5 text-gray-500" />
            </div>
         </div>

         <div className="flex items-center space-x-3 mt-5">
          <button className="text-white text-sm py-2 px-4 bg-gray-200/20 rounded-md hover:border hover:border-white">Google Search</button>
          <button className="text-white text-sm py-2 px-4 bg-gray-200/20 rounded-md hover:border hover:border-white">I'm Feeling Lucky</button>
         </div>
      </section>

      <Footer />
    </main>
  )
}
