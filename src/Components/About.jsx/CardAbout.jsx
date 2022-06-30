import React from "react"

const CardAbout = () => {
  return (
    <div className="CardEffet sm:px-16 px-5 py-10 rounded-3xl  shadow cursor-pointer z-30">
        <div className="flex flex-col">
            <h2 className="lg:text-2xl text-lg">About Us</h2>
            <h1 className="lg:text-7xl text-2xl pb-10">CARBON BASE</h1>
            <p className="lg:text-xl text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliq lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliq lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <div className="pt-10 flex sm:flex-row flex-col sm:justify-start justify-center items-center">
      <button className="mr-5 sm:mt-0 mt-2 rounded-3xl px-10 py-2 btnEffet">Twitter</button>
      <button className="mr-5 sm:mt-0 mt-2 rounded-3xl px-10 py-2 btnEffet">Discord</button>

      </div>
       </div>

    </div>
  )
}

export default CardAbout