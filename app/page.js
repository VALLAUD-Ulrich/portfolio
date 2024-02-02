import Image from "next/image";
import Burger from "./components/burger";
import Contact from "./components/contact";
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
              <a className="text-2xl" href="skill">
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
      <section className="relative flex max-w-screen-xl m-auto min-h-screen ">
        <article className="relative top-48 w-2/3">
          <p className="mb-4">
            <span className="text-9xl font-bold">Hello !</span>
          </p>
          <p className="text-4xl ">
            Je suis <span className="text-6xl font-bold">Ulrich Vallaud</span>{" "}
            <br />
            Développeur Web Fullstack Javascript
          </p>
          <p className="text-2xl mt-4 font-medium w-4/5 justify-text text-wrap">
            Passionné par la création d&apos;expériences en ligne en partant du
            site vitrine aux applications complexes.
          </p>
        </article>
        <article className="w-1/3">
          <div className="border-photo relative top-1/4 left-1/4">
            <Image
              src="/images/avatar.jpg"
              alt="Photo de Ulrich"
              width={250}
              height={250}
              className="rounded-full"
            />
          </div>
          <div className="flex justify-around relative top-1/3 left-6">
            <a
              className="logo text-sm px-4 border-2 border-black rounded-full "
              href="https://github.com/VALLAUD-Ulrich"
            >
              <Image
                src="/images/github-black.svg"
                alt="logo github"
                width={50}
                height={50}
              />
            </a>
            <a
              className="logo text-sm px-4 border-2 border-black rounded-full"
              href="https://www.linkedin.com/in/ulrich-vallaud-18b41124b/"
            >
              <Image
                src="/images/linkedin.svg"
                alt="logo linkedin"
                width={50}
                height={50}
              />
            </a>
            <a
              className="text-sm logo text-sm px-4 border-2 border-black rounded-full"
              href="mailto:ulrichvallaud@digitaluniverse.fr"
            >
              <Image
                src="/images/gmail.svg"
                alt="logo gmail"
                width={50}
                height={50}
              />
            </a>
          </div>
        </article>
      </section>
      <section id="skill">
        <h1 className="text-center text-4xl mb-10 h-">Compétences</h1>
        <article className="flex justify-evenly">
          <div className="flex flex-col ">
            <h3 className="text-center text-2xl ">Design</h3>
            <div className="flex mt-5 items-center">
              <Image
                src="/images/figma.svg"
                alt="logo figma"
                width={45}
                height={45}
                className="mr-5"
              />
              <p className="text-xl">Figma</p>
            </div>
            <div className="flex mt-5 items-center">
              <Image
                src="/images/mockflow.svg"
                alt="logo mockflow"
                width={45}
                height={45}
                className="mr-5"
              />
              <p className="text-xl">Mockflow</p>
            </div>
            <div className="flex mt-5 items-center">
              <Image
                src="/images/tailwind.svg"
                alt="logo tailwind"
                width={45}
                height={45}
                className="mr-5"
              />
              <p className="text-xl">tailwind</p>
            </div>
          </div>
          <div>
            <h3 className="text-center text-2xl">Frontend</h3>
            <div className="flex mt-5 items-center">
              <Image
                src="/images/react.svg"
                alt="logo react"
                width={45}
                height={45}
                className="mr-5"
              />
              <p className="text-xl">React</p>
            </div>
            <div className="flex mt-5 items-center">
              <Image
                src="/images/nextjs.svg"
                alt="logo nextjs"
                width={45}
                height={45}
                className="mr-5"
              />
              <p className="text-xl">Next.js</p>
            </div>
            <div className="flex mt-5 items-center">
              <Image
                src="/images/vue.svg"
                alt="logo vuejs"
                width={45}
                height={45}
                className="mr-5"
              />
              <p className="text-xl">Vue.js</p>
            </div>
          </div>
          <div>
            <h3 className="text-center text-2xl">Backend</h3>
            <div>
              <div className="flex mt-5 items-center">
                <Image
                  src="/images/nodejs.svg"
                  alt="logo nodejs"
                  width={45}
                  height={45}
                  className="mr-5 bg-white"
                />
                <p className="text-xl">Node.js</p>
              </div>
              <div className="flex mt-5 items-center">
                <Image
                  src="/images/postgresql.svg"
                  alt="logo postgresql"
                  width={45}
                  height={45}
                  className="mr-5"
                />
                <p className="text-xl">PostgreSQL</p>
              </div>
              <div className="flex mt-5 items-center">
                <Image
                  src="/images/sequelize.svg"
                  alt="logo sequelize"
                  width={45}
                  height={45}
                  className="mr-5"
                />
                <p className="text-xl">Sequelize</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-center text-2xl">Outils de développement</h3>
            <div className="flex mt-5 items-center">
              <Image
                src="/images/github.svg"
                alt="logo git-github"
                width={45}
                height={45}
                className="mr-5"
              />
              <p className="text-xl">Git & GitHub</p>
            </div>
          </div>
        </article>
      </section>
      <section id="contact">
        <h1 className="text-center text-4xl mt-20 mb-20">Me Contacter</h1>
        <Contact />
      </section>
      <footer></footer>
    </main>
  );
}
