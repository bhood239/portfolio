import Link from "next/link"
type Props = {title?:string;};
export default function TopNavBar({title}:Props) {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li>
          <a href="/" className="text-white hover:text-gray-400">
            Home
          </a>
        </li>
        <li>
          <a href="/about" className="text-white hover:text-gray-400">
            About
          </a>
        </li>
        <li>
          <a href="/projects" className="text-white hover:text-gray-400">
            Projects
          </a>
        </li>
        <li>
          <a href="/contact" className="text-white hover:text-gray-400">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}