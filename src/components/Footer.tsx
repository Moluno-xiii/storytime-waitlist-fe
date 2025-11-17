export default function Footer() {
  return (
    <div className="relative flex h-[1368px] w-full flex-col bg-[#7A07EC] px-4 py-6 text-white sm:px-6 md:px-10 lg:px-16 overflow-hidden">
    
      <svg
        className="absolute left-0 top-0 w-full h-[80px] sm:h-[100px] md:h-[120px] lg:h-[150px]"
        viewBox="0 0 1440 150"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#EC4007" 
          d="M0,0 Q360,100 720,100 T1440,0 L1440,0 Z"
        />
      </svg>

      {/* omor-- floating stars */}
      <div className="absolute top-[15%] left-[5%] text-4xl sm:text-5xl md:text-6xl"> <img src="star.png" alt="stars" className="w-[49.14px] h-[47.89px]"/> </div>

      <div className="absolute top-[25%] left-[15%] text-3xl sm:text-4xl md:text-5xl ">
        <img src="star.png" alt="stars"/></div>

      <div className="absolute top-[12%] right-[8%] text-3xl sm:text-4xl md:text-5xl"><img src="star.png" alt="stars" /></div>

      <div className="absolute top-[22%] right-[18%] text-4xl sm:text-5xl md:text-4xl " ><img src="star.png" alt="stars" /></div>

      <div className="absolute top-[50%] left-[8%] text-3xl sm:text-4xl md:text-6xl" ><img src="star.png" alt="stars" /></div>

      <div className="absolute top-[60%] left-[12%] text-4xl sm:text-5xl md:text-3xl"><img src="star.png" alt="stars" /></div>

      <div className="absolute top-[55%] right-[10%] text-3xl sm:text-4xl md:text-xl " ><img src="star.png" alt="stars" /></div>

      <div className="absolute top-[70%] right-[15%] text-4xl sm:text-5xl md:text-xl"><img src="star.png" alt="stars" /></div>

      <div className="absolute bottom-[25%] left-[10%] text-3xl sm:text-4xl md:text-5xl " ><img src="star.png" alt="stars" /></div>

      <div className="absolute bottom-[35%] right-[12%] text-4xl sm:text-5xl md:text-2xl "><img src="star.png" alt="stars" /></div>

      <div className="absolute bottom-[45%] right-[12%] text-4xl sm:text-5xl md:text-4xl "><img src="star.png" alt="stars" /></div>

      {/* container */}
      <div className="relative z-10 flex flex-col justify-between w-full max-w-[900px] mx-auto mt-24 sm:mt-28 md:mt-32 lg:mt-36 min-h-[600px]">

        {/* image */}
        <div className="mx-auto mb-8 sm:mb-10 md:mb-12">
          <img 
            src="/shuttle.png" 
            alt="Shuttle" 
            className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] h-auto"
          />
        </div>

        {/* content */}
        <div className="text-center flex flex-col gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-10">
          <h2 className="font-Qilka font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[64px] leading-tight px-4">
            30 days left to launch!
          </h2>
          <p className="font-Abezee text-base sm:text-lg md:text-xl lg:text-[24px] leading-relaxed max-w-[627px] mx-auto px-4">
            Magical stories for kids, from bedtime snuggles to learning adventures.
          </p>
        </div>

        {/* icons */}
        <div className="flex justify-center items-center gap-4 sm:gap-5 md:gap-6 mx-auto mb-12 sm:mb-16">
          <img 
            src="/facebook.png" 
            alt="Facebook" 
            className="w-[32px] sm:w-[36px] md:w-[38px] h-auto cursor-pointer hover:scale-110 transition-transform" 
          />
          <img 
            src="/instagram.png" 
            alt="Instagram" 
            className="w-[32px] sm:w-[36px] md:w-[38px] h-auto cursor-pointer hover:scale-110 transition-transform" 
          />
          <img 
            src="/tiktok.png" 
            alt="Tiktok" 
            className="w-[32px] sm:w-[36px] md:w-[38px] h-auto cursor-pointer hover:scale-110 transition-transform" 
          />
        </div>

      </div>

      {/* mobile image*/}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20">
        <img 
          src="/mobile.png" 
          alt="Mobile" 
          className="w-[280px] sm:w-[350px] md:w-[400px] lg:w-[451px] h-auto "
        />
      </div>
      
    </div>
  );
}