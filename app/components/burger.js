import React from "react";
import Image from "next/image";

function Burger() {
  return (
    <div className="mx-4 hidden">
      <Image src="burger.svg" alt="burger" width={25} height={25} />
    </div>
  );
}

export default Burger;
