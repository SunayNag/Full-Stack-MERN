export default function Hero() {
  return (
    <section className="bg-[#4F959D] text-center py-5 ">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#F6F8D5]">
        Welcome to GameStop
      </h1>
      <p className="text-lg md:text-xl text-[#F6F8D5]">
        Your one stop destination for games
      </p>

      {/* New Image Below Tagline */}
      <div className="bg-[#4F959D] flex flex-col md:flex-row justify-center items-center gap-4 mt-4">
        <div className="w-1/3 md:w-75% flex justify-center">
          <img
            src="https://blog.playstation.com/tachyon/2023/10/cd56722db7b991b3d7a33f1bafd55f80d0ac553d.png?resize=1088%2C612&crop_strategy=smart"
            alt="PlayStation"
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="w-1/3 md:w-75% flex justify-center">
          <img
            src="https://blog.playstation.com/tachyon/2023/10/cd56722db7b991b3d7a33f1bafd55f80d0ac553d.png?resize=1088%2C612&crop_strategy=smart"
            alt="PlayStation"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
}
