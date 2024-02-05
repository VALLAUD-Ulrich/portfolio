export default function Headers() {
  return (
    <>
      <header className="flex items-center w-full h-20 mb-20 ">
        <nav className="text-2xl desktop:flex justify-between w-full tablette:flex justify-between">
          <div className="hidden tablette:block mx-5">
            <h1>Digital Universe</h1>
          </div>
          <div className="flex justify-around tablette:flex justify-between">
            <a className="tablette:mx-5" href="#">
              Accueil
            </a>
            <a href="#skill" className="tablette:mx-5 ">
              Compétences
            </a>
            <a href="#contact" className="tablette:mx-5">
              Contact
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}
