import Link from "next/link";

export default function Header({ className }) {
  return (
    <header id="header" className={className}>
      <Link href="/">
        <a className="logo">
          <strong>Forty</strong> <span>by HTML5 UP</span>
        </a>
      </Link>
      <nav>
        <a href="#menu">Menu</a>
      </nav>
    </header>
  );
}
