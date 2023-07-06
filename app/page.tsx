'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Hero, CustomFilter, SearchBar } from '@/components'
// import { fetchCars } from '@/utils'
import { CarCard, ShowMore } from '@/components'
import { CarProps, FilterProps } from '@/types'
import axios from 'axios';
import { fuels, yearsOfProduction } from '@/constants'


export default function Home({searchParams}: any) {
  // const allCars =  fetchCars();
  const [arr, setArr] = useState([]);
  const [loading, setLoading] = useState(false)


  // search state
  const [manufacturer, setManufacturer] = useState("")
  const [model, setModel] = useState("")


// filter state
  const [fuel, setFuel] = useState("")
  const [year, setYear] = useState(2022)

  // pagination state
  const [limit, setLimit] = useState(10)


  function fetchCars(filter: FilterProps) {
    const {manufacturer, model, year, limit, fuel} = filter
    setLoading(true)
    const options = {
    method: 'GET',
    contentType: 'application/json',
    headers: {
      'X-Api-Key': 'oYvlTVhuPetUXh9ToHtBAg==XAmbzvMn9NhonMVz',
    }
};
   axios
    .get(`https://api.api-ninjas.com/v1/cars?make=${manufacturer}&year=${year}&limit=${limit}&fuel_type=${fuel}&model=${model}`, options)
    .then(async (response) => {
      const res = await response.data
      setArr(res)
    }).catch((err) => {
      setLoading(false)
      console.log(err)
  })
  }
  



  // const isDataEmpty = !Array.isArray(arr) || arr.length < 1 || !arr;
  
  useEffect(() => {
    console.log(model, manufacturer, year, limit, fuel)
    let ignore = false;
    fetchCars({
      manufacturer: manufacturer.toLowerCase() || '',
      year: year || 2022,
      fuel: fuel.toLowerCase() || '',
      limit: limit || 10,
      model: model.toLowerCase() || '',
    });
  return () => { ignore = true }
}, [arr, manufacturer, year, fuel, limit, model])


  return (
    <main className="overflow-hidden">
      <Hero />

      <div className='mt-12 padding-x padding-y max-width' id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Catalogue</h1>
          <p>Explore the cars you might like.</p>
        </div>
        <div className="home__filters">
          <SearchBar
            setManufacturer={setManufacturer}
            // setYear={setYear}
            // setFuel={setFuel}
            setModel={setModel}
            // setLimit={setLimit}
          />
          <div className="home__filter-container">
            <CustomFilter
              // title="fuel"
              options={fuels}
              setFilter={setFuel}
              // setLimit={setLimit}

            />
            <CustomFilter
              // title="year"
              options={yearsOfProduction}
              setFilter={setYear}
              // setLimit={setLimit}
            />

            {arr.length > 0 ? (
              <section>
                <div className="home__cars-wrapper">
                  {arr.map((car: any) => (
                    <CarCard
                      car={car}
                    />
                   ))} 
                </div>
                {
                  loading && (
                    <div className='mt-16 w-full flex-center'>
                      <Image
                        src="./loader.svg"
                        alt='loader'
                        width={50}
                        height={50}
                        className="object-contain"
                      />
                    </div>
                  )
                }
                <ShowMore
                  pageNumber={limit / 10}
                  isNext={limit > arr.length}
                  setLimit={setLimit}
                />
              </section>
            ) : (
                !loading && (
                <div className='home__error-container'>
                  <h2 className='text-black text-xl text-bold'>Oops, No results</h2>
                  {/* <p>{arr?.message}</p> */}
                </div>

                )
            )}

          </div>
        </div>

      </div>
    </main>
  )
}
