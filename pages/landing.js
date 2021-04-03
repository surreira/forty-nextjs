import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

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
    <div id="wrapper">
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
        <title>Landing - Forty by HTML5 UP</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header id="header" className="alt style2">
        <Link href="/">
          <a className="logo">
            <strong>Forty</strong> <span>by HTML5 UP</span>
          </a>
        </Link>
        <nav>
          <a href="#menu">Menu</a>
        </nav>
      </header>

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

      <section id="banner" className="style2">
        <div className="inner">
          <span className="image">
            <img src="images/pic07.jpg" alt="" />
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
                  src="images/pic08.jpg"
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
                <img src="images/pic09.jpg" alt="" data-position="top center" />
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
                <img src="images/pic10.jpg" alt="" data-position="25% 25%" />
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

      <section id="contact">
        <div className="inner">
          <section>
            <form method="post" action="#">
              <div className="fields">
                <div className="field half">
                  <label htmlFor="name">Name</label>
                  <input type="text" name="name" id="name" />
                </div>
                <div className="field half">
                  <label htmlFor="email">Email</label>
                  <input type="text" name="email" id="email" />
                </div>
                <div className="field">
                  <label htmlFor="message">Message</label>
                  <textarea name="message" id="message" rows="6"></textarea>
                </div>
              </div>
              <ul className="actions">
                <li>
                  <input
                    type="submit"
                    value="Send Message"
                    className="primary"
                  />
                </li>
                <li>
                  <input type="reset" value="Clear" />
                </li>
              </ul>
            </form>
          </section>
          <section className="split">
            <section>
              <div className="contact-method">
                <span className="icon solid alt fa-envelope"></span>
                <h3>Email</h3>
                <a href="#">information@untitled.tld</a>
              </div>
            </section>
            <section>
              <div className="contact-method">
                <span className="icon solid alt fa-phone"></span>
                <h3>Phone</h3>
                <span>(000) 000-0000 x12387</span>
              </div>
            </section>
            <section>
              <div className="contact-method">
                <span className="icon solid alt fa-home"></span>
                <h3>Address</h3>
                <span>
                  1234 Somewhere Road #5432
                  <br />
                  Nashville, TN 00000
                  <br />
                  United States of America
                </span>
              </div>
            </section>
          </section>
        </div>
      </section>

      <footer id="footer">
        <div className="inner">
          <ul className="icons">
            <li>
              <a href="#" className="icon brands alt fa-twitter">
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon brands alt fa-facebook-f">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon brands alt fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon brands alt fa-github">
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon brands alt fa-linkedin-in">
                <span className="label">LinkedIn</span>
              </a>
            </li>
          </ul>
          <ul className="copyright">
            <li>&copy; Untitled</li>
            <li>
              Design: <a href="https://html5up.net">HTML5 UP</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
