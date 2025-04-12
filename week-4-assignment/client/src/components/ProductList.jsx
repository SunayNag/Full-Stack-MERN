import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Red Dead Redemption 2",
    price: "Rs 6799",
    image: "https://m.media-amazon.com/images/I/81k9mAngCkL.jpg",
  },
  {
    id: 2,
    name: "God Of War Ragnarok",
    price: "Rs 5599",
    image:
      "https://gmedia.playstation.com/is/image/SIEPDC/god-of-war-ragnarok-store-art-01-10sep21$ru?$800px--t$",
  },
  {
    id: 3,
    name: "Marvel's Spider-Man 2",
    price: "Rs 5999",
    image:
      "https://cdn1.epicgames.com/offer/b2818b59c0bb420e9647983dfd254931/EGS_Octopus_InsomniacGamesNixxesSoftware_S1_2560x1440-f27da78f484626718d1e22e7d6950ca5",
  },
];

export default function ProductList() {
  return (
    <section
      id="products"
      className="bg-[#4F959D] p-5 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
    >
      {products.map((p) => (
        <div key={p.id} className="bg-[#B0E0E6] shadow rounded p-4">
          <img
            src={p.image}
            alt={p.name}
            className="h-150 w-full object-cover"
          />
          <h3 className="text-xl font-semibold mt-2">{p.name}</h3>
          <p className="text-gray-500">{p.price}</p>
          <Link
            to={`/product/${p.id}`}
            className="text-blue-600 underline mt-2 inline-block"
          >
            View Details
          </Link>
        </div>
      ))}
    </section>
  );
}
