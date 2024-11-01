import React from 'react'
import heroImage from "../assets/HeroImage"
import Identicon from "react-identicons"

function Hero() {
  return (
    <div className="flex flex-col md:flex-row w-4/5 justify-between 
      items-center mx-auto py-10">
         <div className="md:w-3/6 w-full">
          <div>
           <h1 className="text-white text-5xl font-bold">
            Buy and Sell <br /> Digital Arts, <br />
            <span className="text-gradient">NFTs</span> Collections
           </h1>
          <p className="text-gray-500 font-semibold text-sm mt-3">
            Mint and collect the hottest NFTs around.
          </p>
         </div>
         
         <div className="flex flex-row mt-5">
          <button
            className="shadow-xl shadow-black text-white
            bg-[#e32970] hover:bg-[#bd255f]
            rounded-full cursor-pointer p-2"
          >
            Create NFT
          </button>
        </div>
          
        </div>

        <div className="shadow-xl shadow-black md:w-2/5 w-full 
      mt-10 md:mt-0 rounded-md overflow-hidden bg-gray-800">
            <img className="h-60 w-full object-cover" src={heroImage} alt="Hero Section Image"></img>

            <div className="flex justify-start items-center p-3">
          <Identicon
            // string={connectedAccount ? connectedAccount : 'Connect Your Wallet'}
            size={50}
            className="h-10 w-10 object-contain rounded-full mr-3"
          />
          <div>
            {/* <p className="text-white font-semibold">
              {connectedAccount
                ? truncate(connectedAccount, 4, 4, 11)
                : 'Connect Your Wallet'}
            </p> */}
            <small className="text-pink-800 font-bold">@you</small>
          </div>
        </div>


       </div>
    </div>
  )
}

export default Hero