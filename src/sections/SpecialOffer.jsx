import React from 'react'
import { Button } from '../components'
import { arrowRight } from '../assets/icons'

const SpecialOffer = () => {
  return (
    <section className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'>
      <div className="flex flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red">Special</span>{" "}
         Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
        Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
        Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.
        </p>
        <div className="mt-11 flex gap-6">
          <Button label="Shop Now" type={"filled"} iconURL={arrowRight}/>
          <Button label="Learn More" type={"outline"} />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer