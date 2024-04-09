import Image from "next/image";
import Right from "../icons/right";

export default function Hero() {
  return (
    <section className="hero">
      <div className="py-12">
        <h1 className=" text-4xl font-semibold">
          Everything<br/> is better <br/> with a&nbsp; 
          <span className=" text-primary">Pizza</span>
        </h1>
        <p className="my-6 text-gray-500 text-sm">
          Pizza makes your everyday special with just a single slice
        </p>
        <div className="flex gap-4 text-sm">
          <button className="bg-primary text-white uppercase flex items-center gap-2 px-4 py-2 rounded-full">
            Order Now
            <Right />
          </button>
          <button className="flex gap-2 py-2 text-gray-600 font-semibold">
            Learn More
            <Right />
          </button>
        </div>
      </div>
      <div className="relative">
        <Image
          src="/pizza.png"
          alt="Pizza"
          objectFit="contain"
          layout=" fill"
          width={400}
          height={400}
        />
      </div>
    </section>
  );
}
