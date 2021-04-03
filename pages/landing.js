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
        <title>Forty by HTML5 UP</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header id="header" class="alt style2">
        <a href="index.html" class="logo">
          <strong>Forty</strong> <span>by HTML5 UP</span>
        </a>
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

      <section id="banner" class="style2">
        <div class="inner">
          <span class="image">
            <img src="images/pic07.jpg" alt="" />
          </span>
          <header class="major">
            <h1>Landing</h1>
          </header>
          <div class="content">
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
          <div class="inner">
            <header class="major">
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

        <section id="two" class="spotlights">
          <section>
            <Link href="/generic">
              <a class="image">
                <img
                  src="images/pic08.jpg"
                  alt=""
                  data-position="center center"
                />
              </a>
            </Link>
            <div class="content">
              <div class="inner">
                <header class="major">
                  <h3>Orci maecenas</h3>
                </header>
                <p>
                  Nullam et orci eu lorem consequat tincidunt vivamus et
                  sagittis magna sed nunc rhoncus condimentum sem. In efficitur
                  ligula tate urna. Maecenas massa sed magna lacinia magna
                  pellentesque lorem ipsum dolor. Nullam et orci eu lorem
                  consequat tincidunt. Vivamus et sagittis tempus.
                </p>
                <ul class="actions">
                  <li>
                    <Link href="/generic">
                      <a class="button">Learn more</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section>
            <Link href="/generic">
              <a class="image">
                <img src="images/pic09.jpg" alt="" data-position="top center" />
              </a>
            </Link>
            <div class="content">
              <div class="inner">
                <header class="major">
                  <h3>Rhoncus magna</h3>
                </header>
                <p>
                  Nullam et orci eu lorem consequat tincidunt vivamus et
                  sagittis magna sed nunc rhoncus condimentum sem. In efficitur
                  ligula tate urna. Maecenas massa sed magna lacinia magna
                  pellentesque lorem ipsum dolor. Nullam et orci eu lorem
                  consequat tincidunt. Vivamus et sagittis tempus.
                </p>
                <ul class="actions">
                  <li>
                    <Link href="/generic">
                      <a class="button">Learn more</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section>
            <Link href="/generic">
              <a class="image">
                <img src="images/pic10.jpg" alt="" data-position="25% 25%" />
              </a>
            </Link>
            <div class="content">
              <div class="inner">
                <header class="major">
                  <h3>Sed nunc ligula</h3>
                </header>
                <p>
                  Nullam et orci eu lorem consequat tincidunt vivamus et
                  sagittis magna sed nunc rhoncus condimentum sem. In efficitur
                  ligula tate urna. Maecenas massa sed magna lacinia magna
                  pellentesque lorem ipsum dolor. Nullam et orci eu lorem
                  consequat tincidunt. Vivamus et sagittis tempus.
                </p>
                <ul class="actions">
                  <li>
                    <Link href="/generic">
                      <a class="button">Learn more</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </section>

        <section id="three">
          <div class="inner">
            <header class="major">
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
            <ul class="actions">
              <li>
                <Link href="/generic">
                  <a class="button next">Get Started</a>
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <section id="contact">
        <div class="inner">
          <section>
            <form method="post" action="#">
              <div class="fields">
                <div class="field half">
                  <label for="name">Name</label>
                  <input type="text" name="name" id="name" />
                </div>
                <div class="field half">
                  <label for="email">Email</label>
                  <input type="text" name="email" id="email" />
                </div>
                <div class="field">
                  <label for="message">Message</label>
                  <textarea name="message" id="message" rows="6"></textarea>
                </div>
              </div>
              <ul class="actions">
                <li>
                  <input type="submit" value="Send Message" class="primary" />
                </li>
                <li>
                  <input type="reset" value="Clear" />
                </li>
              </ul>
            </form>
          </section>
          <section class="split">
            <section>
              <div class="contact-method">
                <span class="icon solid alt fa-envelope"></span>
                <h3>Email</h3>
                <a href="#">information@untitled.tld</a>
              </div>
            </section>
            <section>
              <div class="contact-method">
                <span class="icon solid alt fa-phone"></span>
                <h3>Phone</h3>
                <span>(000) 000-0000 x12387</span>
              </div>
            </section>
            <section>
              <div class="contact-method">
                <span class="icon solid alt fa-home"></span>
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
        <div class="inner">
          <ul class="icons">
            <li>
              <a href="#" class="icon brands alt fa-twitter">
                <span class="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="#" class="icon brands alt fa-facebook-f">
                <span class="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="#" class="icon brands alt fa-instagram">
                <span class="label">Instagram</span>
              </a>
            </li>
            <li>
              <a href="#" class="icon brands alt fa-github">
                <span class="label">GitHub</span>
              </a>
            </li>
            <li>
              <a href="#" class="icon brands alt fa-linkedin-in">
                <span class="label">LinkedIn</span>
              </a>
            </li>
          </ul>
          <ul class="copyright">
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