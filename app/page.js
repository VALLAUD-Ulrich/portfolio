import Image from "next/image";
import Headers from "../app/components/headers";
import "../app/css/globals.css";

export default function Home() {
  return (
    <main>
      <Headers />
      <section className="w-full laptop:flex justify-evenly flex-row-reverse desktop:flex desktopL:h-screen">
        <article className="flex flex-col items-center">
          <div className="mx-5">
            <Image
              src="/images/avatar.jpg"
              alt="Photo de Ulrich"
              width={400}
              height={400}
              className="rounded-full desktopL:mr-20"
            />
          </div>
          <div className="flex mt-5 mb-5">
            <a href="https://github.com/VALLAUD-Ulrich">
              <Image
                src="/images/github-black.svg"
                alt="logo github"
                width={75}
                height={75}
                className="tablette:w-{150} h-{150}"
              />
            </a>
            <a href="https://www.linkedin.com/in/ulrich-vallaud-18b41124b/">
              <Image
                src="/images/linkedin.svg"
                alt="logo linkedin"
                width={75}
                height={75}
                className="logo-com"
              />
            </a>
            <a href="mailto:ulrichvallaud@digitaluniverse.fr">
              <Image
                src="/images/gmail.svg"
                alt="logo gmail"
                width={75}
                height={75}
                className="logo-com"
              />
            </a>
          </div>
        </article>
        <article className="flex flex-col laptop: justify-center">
          <h1 className="text-center text-5xl laptop:text-7xl desktopL:text-9xl">
            Hello !{" "}
          </h1>
          <div className="w-full mt-5 tablette: w-9/12 mx-auto">
            <p className="mx-auto w-11/12 text-2xl laptop:text-3xl desktopL:text-4xl w-9/12">
              Je suis{" "}
              <span className="text-3xl desktopL:text-6xl">Ulrich Vallaud</span>{" "}
              <br />
              Développeur Web Fullstack Javascript
            </p>
            <p className="mx-auto w-11/12 text-2xl laptop:text-3xl desktopL:text-4xl w-9/12">
              Passionné par la création d&apos;expériences en ligne en partant
              du site vitrine aux applications complexes.
            </p>
          </div>
        </article>
      </section>
      <section id="skill" className="tablette:mt-10">
        <h1 className="mt-10 text-center text-4xl mb-5 font-bold tablette:m-auto">
          Compétences
        </h1>
        <article className="tablette:flex flex-wrap justify-around">
          <div>
            <h3 className="text-3xl text-center my-5">Design</h3>
            <div className="flex flex-col items-center">
              <div className="flex items-center mb-5">
                <Image
                  src="/images/figma.svg"
                  alt="logo figma"
                  width={60}
                  height={60}
                  className="mr-5 "
                />
                <p className="text-2xl">Figma</p>
              </div>
              <div className="flex items-center mb-5">
                <Image
                  src="/images/mockflow.svg"
                  alt="logo mockflow"
                  width={60}
                  height={60}
                  className="mr-5 "
                />
                <p className="text-2xl">Mockflow</p>
              </div>
              <div className="flex items-center mb-5">
                <Image
                  src="/images/tailwind.svg"
                  alt="logo tailwind"
                  width={60}
                  height={60}
                  className="mr-5 "
                />
                <p className="text-2xl">tailwind</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-3xl text-center my-5">Frontend</h3>
            <div className="flex flex-col items-center">
              <div className="flex items-center mb-5">
                <Image
                  src="/images/react.svg"
                  alt="logo react"
                  width={60}
                  height={60}
                  className="mr-5"
                />
                <p className="text-2xl">React</p>
              </div>
              <div className="flex items-center mb-5">
                <Image
                  src="/images/nextjs.svg"
                  alt="logo nextjs"
                  width={60}
                  height={60}
                  className="mr-5"
                />
                <p className="text-2xl">Next.js</p>
              </div>
              <div className="flex items-center mb-5">
                <Image
                  src="/images/vue.svg"
                  alt="logo vuejs"
                  width={60}
                  height={60}
                  className="mr-5"
                />
                <p className="text-2xl">Vue.js</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-3xl text-center my-5">Backend</h3>
            <div className="flex flex-col items-center">
              <div className="flex items-center mb-5">
                <Image
                  src="/images/nodejs.svg"
                  alt="logo nodejs"
                  width={60}
                  height={60}
                  className="mr-5 bg-white"
                />
                <p className="text-2xl">Node.js</p>
              </div>
              <div className="flex items-center mb-5">
                <Image
                  src="/images/postgresql.svg"
                  alt="logo postgresql"
                  width={60}
                  height={60}
                  className="mr-5"
                />
                <p className="text-2xl">PostgreSQL</p>
              </div>
              <div className="flex items-center mb-5">
                <Image
                  src="/images/sequelize.svg"
                  alt="logo sequelize"
                  width={60}
                  height={60}
                  className="mr-5"
                />
                <p className="text-2xl">Sequelize</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-3xl text-center my-5">
              Outils de développement
            </h3>
            <div className="flex items-center justify-center mb-5">
              <Image
                src="/images/github.svg"
                alt="logo git-github"
                width={60}
                height={60}
                className="mr-5"
              />
              <p className="text-2xl">Git & GitHub</p>
            </div>
          </div>
        </article>
      </section>
      <section id="contact">
        <h1 className="text-center text-4xl font-bold tablette:mt-10">
          Me Contacter
        </h1>
        <p className="text-2xl w-10/12 mx-auto my-10 text-center tablette:w-8/12">
          {" "}
          Une idée , un projet ? Contactez moi pour en discuter{" "}
        </p>
        <div className="flex justify-center mb-10">
          <a href="https://www.linkedin.com/in/ulrich-vallaud-18b41124b/">
            <Image
              src="/images/linkedin.svg"
              alt="logo linkedin"
              width={75}
              height={75}
            />
          </a>
          <a href="mailto:ulrichvallaud@digitaluniverse.fr">
            <Image
              src="/images/gmail.svg"
              alt="logo gmail"
              width={75}
              height={75}
            />
          </a>
        </div>
      </section>
      <div className="w-{75} h-{75} ">
        <a href="#" className="w-100 h-100">
          <Image
            src="/images/arrow-up.svg"
            alt="planete"
            width={50}
            height={50}
            className="-rotate-90 fixed bottom-5 right-5 z-50 cursor-pointer p-2 border-2 bg-white opacity-60 rounded"
          />
        </a>
      </div>

      <footer>
        <p className="text-xl text-center">
          © 2024 Digital Universe - Ulrich Vallaud
        </p>
      </footer>
    </main>
  );
}
