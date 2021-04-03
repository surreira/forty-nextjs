import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

import Layout from "../components/layout";
import Header from "../components/header";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import ContactFooter from "../components/contact-footer";

export default function Landing() {
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
    <Layout>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
        <title>Landing - Forty by HTML5 UP</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header className="alt style2" />
      <Navigation />

      <section id="banner" className="style2">
        <div className="inner">
          <span className="image">
            <img src="https://placeimg.com/1280/360/forrest" alt="" />
          </span>
          <header className="major">
            <h1>Landing</h1>
          </header>
          <div className="content">
            <p>
              Lorem ipsum dolor sit amet nullam consequat
              <br />
              sed veroeros. tempus adipiscing nulla.
            </p>
          </div>
        </div>
      </section>

      <main id="main">
        <section id="one">
          <div className="inner">
            <header className="major">
              <h2>Sed amet aliquam</h2>
            </header>
            <p>
              Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
              magna sed nunc rhoncus condimentum sem. In efficitur ligula tate
              urna. Maecenas massa vel lacinia pellentesque lorem ipsum dolor.
              Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
              libero. Nullam et orci eu lorem consequat tincidunt vivamus et
              sagittis magna sed nunc rhoncus condimentum sem. In efficitur
              ligula tate urna.
            </p>
          </div>
        </section>

        <section id="two" className="spotlights">
          <section>
            <Link href="/generic">
              <a className="image">
                <img
                  src="https://placeimg.com/860/640/trees"
                  alt=""
                  data-position="center center"
                />
              </a>
            </Link>
            <div className="content">
              <div className="inner">
                <header className="major">
                  <h3>Orci maecenas</h3>
                </header>
                <p>
                  Nullam et orci eu lorem consequat tincidunt vivamus et
                  sagittis magna sed nunc rhoncus condimentum sem. In efficitur
                  ligula tate urna. Maecenas massa sed magna lacinia magna
                  pellentesque lorem ipsum dolor. Nullam et orci eu lorem
                  consequat tincidunt. Vivamus et sagittis tempus.
                </p>
                <ul className="actions">
                  <li>
                    <Link href="/generic">
                      <a className="button">Learn more</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section>
            <Link href="/generic">
              <a className="image">
                <img
                  src="https://placeimg.com/860/640/park"
                  alt=""
                  data-position="top center"
                />
              </a>
            </Link>
            <div className="content">
              <div className="inner">
                <header className="major">
                  <h3>Rhoncus magna</h3>
                </header>
                <p>
                  Nullam et orci eu lorem consequat tincidunt vivamus et
                  sagittis magna sed nunc rhoncus condimentum sem. In efficitur
                  ligula tate urna. Maecenas massa sed magna lacinia magna
                  pellentesque lorem ipsum dolor. Nullam et orci eu lorem
                  consequat tincidunt. Vivamus et sagittis tempus.
                </p>
                <ul className="actions">
                  <li>
                    <Link href="/generic">
                      <a className="button">Learn more</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section>
            <Link href="/generic">
              <a className="image">
                <img
                  src="https://placeimg.com/860/640/garden"
                  alt=""
                  data-position="25% 25%"
                />
              </a>
            </Link>
            <div className="content">
              <div className="inner">
                <header className="major">
                  <h3>Sed nunc ligula</h3>
                </header>
                <p>
                  Nullam et orci eu lorem consequat tincidunt vivamus et
                  sagittis magna sed nunc rhoncus condimentum sem. In efficitur
                  ligula tate urna. Maecenas massa sed magna lacinia magna
                  pellentesque lorem ipsum dolor. Nullam et orci eu lorem
                  consequat tincidunt. Vivamus et sagittis tempus.
                </p>
                <ul className="actions">
                  <li>
                    <Link href="/generic">
                      <a className="button">Learn more</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </section>

        <section id="three">
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
                <Link href="/generic">
                  <a className="button next">Get Started</a>
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <ContactFooter />
      <Footer />
    </Layout>
  );
}
