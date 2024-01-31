import Image from "next/image";
import Burger from "./components/burger";
import "./globals.css";

export default function Home() {
  return (
    <main>
      <header>
        <nav className="h-12 flex justify-between items-center">
          <div>
            <h1 className="text-2xl ml-8">Digital Universe</h1>
          </div>
          <ul className="h-full flex items-center">
            <li className="mx-8">
              <a className="text-2xl " href="/">
                Accueil
              </a>
            </li>
            <li className="mx-8">
              <a className="text-2xl" href="/projets">
                Projets
              </a>
            </li>
            <li className="mx-8">
              <a className="text-2xl" href="/competences">
                Compétences
              </a>
            </li>
            <li className="mr-16 ml-8">
              <a className="text-2xl" href="/contact">
                Contact
              </a>
            </li>
          </ul>
          <Burger />
        </nav>
      </header>
      <section className="w-full h-full">
        <article className="w-1/2 absolute top-1/3 left-48">
          <p className="mb-4">
            <span className="text-9xl font-bold">Hello !</span>
          </p>
          <p className="text-4xl ">
            Je suis <span className="text-6xl font-bold">Ulrich</span> <br />
            Développeur Web Fullstack Javascript
          </p>
          <p className="text-2xl mt-4 font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            lorem erat, rutrum ac eros in, imperdiet eleifend leo. Nullam id
            iaculis mauris. Etiam nunc ipsum, suscipit eget sapien vitae,
            tristique convallis est.
          </p>
        </article>
        <div className="border-photo w-96 h-96  absolute top-1/4 right-48">
          <Image
            src="/images/avatar.jpg"
            alt="Photo de Ulrich"
            width={400}
            height={400}
            className="rounded-full"
          />
        </div>
      </section>
      <section></section>
      <section></section>
      <footer></footer>
    </main>
  );
}
