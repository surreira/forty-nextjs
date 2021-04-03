import Link from "next/link";

export default function Navigation() {
  return (
    <nav id="menu">
      <ul className="links">
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/landing">
            <a>Landing</a>
          </Link>
        </li>
        <li>
          <Link href="/generic">
            <a>Generic</a>
          </Link>
        </li>
        <li>
          <Link href="/elements">
            <a>Elements</a>
          </Link>
        </li>
      </ul>
      <ul className="actions stacked">
        <li>
          <a href="#" className="button primary fit">
            Get Started
          </a>
        </li>
        <li>
          <a href="#" className="button fit">
            Log In
          </a>
        </li>
      </ul>
    </nav>
  );
}
