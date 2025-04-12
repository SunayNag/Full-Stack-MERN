export default function Navbar() {
  return (
    <nav className="bg-[#006666] shadow-md p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-white">GameStop</h1>
      <ul className="flex space-x-4">
        <li>
          <a href="/" className="text-white">
            Home
          </a>
        </li>
        <li>
          <a href="#products" className="text-white">
            Products
          </a>
        </li>
      </ul>
    </nav>
  );
}
