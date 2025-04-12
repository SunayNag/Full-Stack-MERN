import { useParams } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "God Of War Ragnarok",
    price: "Rs 5599",
    image:
      "https://gmedia.playstation.com/is/image/SIEPDC/god-of-war-ragnarok-store-art-01-10sep21$ru?$800px--t$",
    features: [
      "Epic Norse saga spanning all Nine Realms.",
      "Refined combat system with enhanced weapon abilities.",
      "Immersive storytelling with a rich cast of characters.",
      "Stunning visuals with multiple graphics modes.",
      "Expanded accessibility features for inclusive gameplay.",
      "Extensive content with side quests and exploration.",
    ],
  },
  {
    id: 2,
    name: "Red Dead Redemption 2",
    price: "Rs 6799",
    image: "https://m.media-amazon.com/images/I/81k9mAngCkL.jpg",
    features: [
      "From the studio that brought you Grand Theft Auto.",
      "Immersive open-world set in the dying days of the Wild West.",
      "Deep narrative following outlaw Arthur Morgan and the Van der Linde gang.",
      "Over 50 unique weapons with extensive customization options.",
      "Dynamic weather and realistic horse bonding mechanics.",
      "Expansive online multiplayer experience with Red Dead Online.",
    ],
  },
  {
    id: 3,
    name: "Marvel's Spider-Man 2",
    price: "Rs 5999",
    image:
      "https://cdn1.epicgames.com/offer/b2818b59c0bb420e9647983dfd254931/EGS_Octopus_InsomniacGamesNixxesSoftware_S1_2560x1440-f27da78f484626718d1e22e7d6950ca5",
    features: [
      "Play as both Peter Parker and Miles Morales, each with unique abilities and storylines.",
      "Explore an expanded Marvel’s New York, including new boroughs like Brooklyn and Queens.",
      "Utilize new traversal options like Web Wings and dynamic wind tunnels for faster movement.",
      "Engage in enhanced combat with new abilities, including parrying and symbiote powers.",
      "Battle iconic villains such as Venom, Kraven the Hunter, and the Lizard.",
      "Customize your Spider-Man with over 65 suits and more than 200 suit style combinations.",
    ],
  },
];

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <p className="p-4">Product not found</p>;

  return (
    <div className="bg-[#4F959D] p-8 flex flex-col md:flex-row gap-8">
      <div className="flex-1">
        <img
          src={product.image}
          className="w-full h-full object-cover rounded-lg shadow-md"
          alt={product.name}
        />
      </div>
      <div className="flex-1">
        <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
        <p className="text-xl text-[#F6F8D5] mb-2">{product.price}</p>
        <p className="text-[#F6F8D5] mb-4">{product.desc}</p>
        <ul className="list-disc list-inside space-y-2 text-[#F6F8D5]">
          {product.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
