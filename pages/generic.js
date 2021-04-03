import Head from "next/head";

import Layout from "../components/layout";
import Navigation from "../components/navigation";
import Header from "../components/header";
import ContactFooter from "../components/contact-footer";
import Footer from "../components/footer";

export default function Generic() {
  return (
    <Layout>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
        <title>Generic - Forty by HTML5 UP</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Navigation />

      <main id="main" className="alt">
        <section id="one">
          <div className="inner">
            <header className="major">
              <h1>Generic</h1>
            </header>
            <span className="image main">
              <img src="https://placeimg.com/1280/360/forrest" />
            </span>
            <p>
              Donec eget ex magna. Interdum et malesuada fames ac ante ipsum
              primis in faucibus. Pellentesque venenatis dolor imperdiet dolor
              mattis sagittis. Praesent rutrum sem diam, vitae egestas enim
              auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit
              amet, fergiat. Pellentesque in mi eu massa lacinia malesuada et a
              elit. Donec urna ex, lacinia in purus ac, pretium pulvinar mauris.
              Curabitur sapien risus, commodo eget turpis at, elementum
              convallis elit. Pellentesque enim turpis, hendrerit.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora
              torquent per conubia nostra, per inceptos himenaeos. Etiam
              tristique libero eu nibh porttitor fermentum. Nullam venenatis
              erat id vehicula viverra. Nunc ultrices eros ut ultricies
              condimentum. Mauris risus lacus, blandit sit amet venenatis non,
              bibendum vitae dolor. Nunc lorem mauris, fringilla in aliquam at,
              euismod in lectus. Pellentesque habitant morbi tristique senectus
              et netus et malesuada fames ac turpis egestas. In non lorem sit
              amet elit placerat maximus. Pellentesque aliquam maximus risus,
              vel sed vehicula.
            </p>
            <p>
              Interdum et malesuada fames ac ante ipsum primis in faucibus.
              Pellentesque venenatis dolor imperdiet dolor mattis sagittis.
              Praesent rutrum sem diam, vitae egestas enim auctor sit amet.
              Pellentesque leo mauris, consectetur id ipsum sit amet, fersapien
              risus, commodo eget turpis at, elementum convallis elit.
              Pellentesque enim turpis, hendrerit tristique lorem ipsum dolor.
            </p>
          </div>
        </section>
      </main>

      <ContactFooter />
      <Footer />
    </Layout>
  );
}
