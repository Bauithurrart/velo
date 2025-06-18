import { FaPlane } from "react-icons/fa";

export default function BannerVelo() {
  return (
    <div className="bg-[#a1c8cf] w-full py-16 flex justify-center items-center relative">
      
      
      <FaPlane
        className="text-white text-[100px] md:text-[160px] absolute right-[240px] top-[60px] -translate-y-1/2 rotate-[230deg] opacity-100 z-10"
        aria-hidden="true"
      />

      
      <div className="relative bg-[#3a5f63] w-[100%] max-w-[1520px] h-[300px] rounded-md shadow-lg text-white flex flex-col justify-center items-center z-0 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
          VELO.
        </h1>
        <p className="text-2xl md:text-5xl font-bold tracking-tight leading-snug">
          VIAJÁ DISTINTO. SENTÍ EL CAMINO.
        </p>
      </div>
    </div>
  );
}
