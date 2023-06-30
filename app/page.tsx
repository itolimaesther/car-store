'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Hero, CustomFilter, SearchBar } from '@/components'
// import { fetchCars } from '@/utils'
import { CarCard } from '@/components'
import { CarProps } from '@/types'
import axios from 'axios';

export default function Home() {
  // const allCars =  fetchCars();
  const [arr, setArr] = useState<any | null>(null);


  

  function fetchCars() {
  const options = {
  method: 'GET',
  // url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
  contentType: 'application/json',
  headers: {
    'X-Api-Key': 'oYvlTVhuPetUXh9ToHtBAg==XAmbzvMn9NhonMVz',
  }
};
   axios
    .get('https://api.api-ninjas.com/v1/cars?limit=10&model=camry', options)
    .then(async (response) => {
      const res = await response.data
      console.log(res, "res")
      setArr(res)
      // return res;
    }).catch((err) => {
      console.log(err)
  })
    // try {
    //   const response = await axios.request(options);
    //   const data = response.data
    //   return data
    //     // console.log(response);
    // } catch (error) {
    //     console.error(error);
    // }
}



const isDataEmpty = !Array.isArray(arr) || arr.length < 1 || !arr;

useEffect(() => {
  fetchCars();
}, [])


  return (
    <main className="overflow-hidden">
      <Hero />

      <div className='mt-12 padding-x padding-y max-width' id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Catalogue</h1>
          <p>Explore the cars you might like.</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter
              title="fuel"
            />
            <CustomFilter
              title="year"
            />

            {!isDataEmpty ? (
              <section>
                <div className="home__cars-wrapper">
                  {arr.map((car: any) => (
                    <CarCard
                      car={car}
                    />
                   ))} 
                </div>
              </section>
            ) : (
                <div className='home__error-container'>
                  <h2 className='text-black text-xl text-bold'>Oops, No results</h2>
                  {/* <p>{allCars?.statusText}</p> */}
                </div>
            )}

          </div>
        </div>

      </div>
    </main>
  )
}
