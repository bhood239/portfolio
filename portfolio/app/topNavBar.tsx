import Link from "next/link";
type Props = { title?: string };
export default function TopNavBar({ title }: Props) {
  return (
    <nav className="fixed left-0 right-0 top-0 bg-black p-4 pl-14 pr-14 shadow-md z-50 opacity-75">
      <ul className="flex justify-between">
        <li>
          <a href="#home" className="text-white hover:text-gray-400">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="text-white hover:text-gray-400">
            About
          </a>
        </li>
        <li>
          <a href="#projects" className="text-white hover:text-gray-400">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="text-white hover:text-gray-400">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
