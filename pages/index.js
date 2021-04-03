import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

import Header from "../components/header";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import ContactFooter from "../components/contact-footer";

export default function Home() {
  useEffect(() => {
    document.body.classList.remove("is-preload");
    let timer = setTimeout(
      () => document.body.classList.remove("is-preload"),
      100
    );
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div id="wrapper">
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
        <title>Forty by HTML5 UP</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header className="alt" />
      <Navigation />

      <section id="banner" className="major">
        <div className="inner">
          <header className="major">
            <h1>Hi, my name is Forty</h1>
          </header>
          <div className="content">
            <p>
              A responsive site template designed by HTML5 UP
              <br />
              and released under the Creative Commons.
            </p>
            <ul className="actions">
              <li>
                <a href="#one" className="button next scrolly">
                  Get Started
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <main id="main">
        <section id="one" className="tiles">
          <article>
            <span className="image">
              <img src="/images/pic01.jpg" alt="" />
            </span>
            <header className="major">
              <h3>
                <Link href="/landing">
                  <a className="link">Aliquam</a>
                </Link>
              </h3>
              <p>Ipsum dolor sit amet</p>
            </header>
          </article>
          <article>
            <span className="image">
              <img src="images/pic02.jpg" alt="" />
            </span>
            <header className="major">
              <h3>
                <Link href="/landing">
                  <a className="link">Tempus</a>
                </Link>
              </h3>
              <p>feugiat amet tempus</p>
            </header>
          </article>
          <article>
            <span className="image">
              <img src="images/pic03.jpg" alt="" />
            </span>
            <header className="major">
              <h3>
                <Link href="/landing">
                  <a className="link">Magna</a>
                </Link>
              </h3>
              <p>Lorem etiam nullam</p>
            </header>
          </article>
          <article>
            <span className="image">
              <img src="images/pic04.jpg" alt="" />
            </span>
            <header className="major">
              <h3>
                <Link href="/landing">
                  <a className="link">Ipsum</a>
                </Link>
              </h3>
              <p>Nisl sed aliquam</p>
            </header>
          </article>
          <article>
            <span className="image">
              <img src="images/pic05.jpg" alt="" />
            </span>
            <header className="major">
              <h3>
                <Link href="/landing">
                  <a className="link">Consequat</a>
                </Link>
              </h3>
              <p>Ipsum dolor sit amet</p>
            </header>
          </article>
          <article>
            <span className="image">
              <img src="images/pic06.jpg" alt="" />
            </span>
            <header className="major">
              <h3>
                <Link href="/landing">
                  <a className="link">Etiam</a>
                </Link>
              </h3>
              <p>Feugiat amet tempus</p>
            </header>
          </article>
        </section>

        <section id="two">
          <div className="inner">
            <header className="major">
              <h2>Massa libero</h2>
            </header>
            <p>
              Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
              libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
              Pellentesque condimentum sem. In efficitur ligula tate urna.
              Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor.
              Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
              libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra
              et feugiat tempus.
            </p>
            <ul className="actions">
              <li>
                <Link href="/landing">
                  <a className="button next">Get Started</a>
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <ContactFooter />
      <Footer />
    </div>
  );
}
