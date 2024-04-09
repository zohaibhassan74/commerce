export default function MenuItem() {
  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all hover:ease-in-out">
      <div className="text-center">
      <img src={"/pizza.png"} alt="pizza" className="max-h-auto max-w-24 block mx-auto" />
      </div>
      <h4 className=" font-semibold my-2">Peporonni Pizza</h4>
      <p className=" text-gray-500 text-sm">On Trending</p>
      <button className="bg-primary text-white px-4 py-2 rounded-xl text-xl my-4">
        Buy Now
      </button>
    </div>
  );
}

