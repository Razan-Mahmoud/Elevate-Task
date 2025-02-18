
import Link from "next/link";

type AllProducts = [{
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;

}]


export default async function getAllProducts() {

  const res = await fetch('https://fakestoreapi.com/products');
  const data: AllProducts = await res.json()
  return (
    <>
      <div className=" w-full bg-slate-100 drop-shadow-md"><h1 className="text-center font-semibold text-3xl px-6 py-6 ">E-Commerce Next.JS App</h1></div>
      <div >

        <main className=" grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 w-full mx-6 my-8">
          {data?.map((element) => {
            return (
              <Link href={`/${element.id}`} key={element.id} className=" rounded   col-span-1 border border-green-100 p-2 cursor-pointer">
                <img src={element?.image} className="w-[75%] my-2" alt="" />
                <h2 className="font-semibold">{element?.title.split(" ").slice(0, 2).join(" ")}</h2>
                <p className="mt-1 text-slate-500"><span className="font-semibold text-green-600">Price: </span>{element?.price} LE</p>
                <p className="mt-1 text-slate-500"><span className="font-semibold text-green-600">Descriptions: </span>{element?.description.split(" ").slice(0, 5).join(" ")}</p>
              </Link>
            )
          })}


        </main>
      </div>
    </>
  );
}




