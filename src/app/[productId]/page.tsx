import Image from "next/image";

type Product = {
    id:          number;
    title:       string;
    price:       number;
    description: string;
    category:    string;
    image:       string;
}


export async function generateStaticParams() {
    const products = await fetch('https://fakestoreapi.com/products')
    .then((res) => res.json())
   
    return products.map((element: any ) => ({
        productId: element.id.toString(),
    }))
  }

export default async function ProductDetails({
    params,
}: {
    params: Promise<{ productId: number }>;
}) {
    const {productId} = await params;
    const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
    const data: Product = await res.json()
     console.log(data)

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2  items-center mx-6 my-3">
            <div className="col-span-1 p-2">
                <Image className="w-full" src={data.image} alt={data.title} />
            </div>
            <div className="col-span-2 p-5">
                <h3 className="font-semibold text-2xl mb-3">{data.title}</h3>
                <p> <span className="font-semibold text-green-600">Category:</span>  {data.category}</p>
                <p> <span className="font-semibold text-green-600">Price:</span> {data.price} LE</p>
                <p> <span className="font-semibold text-green-600">Description:</span>  {data.description}</p>
                
                
            <button className="bg-green-700 rounded mt-5 w-full text-white py-3">Add to Cart</button>
            </div>
        </div>
    )
}

    
 

