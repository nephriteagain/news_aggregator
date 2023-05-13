import { ChangeEvent } from 'react'
import { COUNTRY, CATEGORY } from "../lib/data"


import type { params } from "../lib/queryHelper"


interface propTypes {
  queryParams: params
  setQueryParams: React.Dispatch<React.SetStateAction<params>>
} 


export default function NewsFilter({queryParams, setQueryParams}: propTypes) {
  
  
  function changeCountry(e : ChangeEvent<HTMLSelectElement>) {
    const newCountry = e.currentTarget.value
    setQueryParams({country: newCountry})
  }


  function changeCategory(e: ChangeEvent<HTMLSelectElement>) {
    const newCategory = e.currentTarget.value
    if (!newCategory || !CATEGORY.includes(newCategory)) return    
    setQueryParams({...queryParams, category: newCategory})
  }
  

  

  return (
    <section className='mt-12 flex bg-[#19A7CE] items-center justify-center px-4 py-4 rounded-md shadow-md drop-shadow-md'>
      <div>
      <label htmlFor='country ' className='text-[#F6F1F1]'>
        Country
      </label>
      <select onChange={(e) => changeCountry(e)}                        
        className='ms-2 px-2 py-1 rounded-md bg-[#AFD3E2] shadow-md drop-shadow-sm hover:scale-[1.02] transition-all duration-200'
        name='country'
      >
        {COUNTRY.map(country => {
          const { countryCode, countryName } = country
          return (
            <option value={countryCode} defaultChecked={countryCode === 'us'} key={countryCode}
            >
              {countryName}
            </option>
          )
        })}
      </select>
      </div>
      
      <div className='ms-8'>
        <label htmlFor='category ' className='text-[#F6F1F1]'>Category</label>
        <select name='category' onChange={(e) => changeCategory(e)}
          className='ms-2 px-2 py-1 rounded-md bg-[#AFD3E2] shadow-md drop-shadow-sm hover:scale-[1.02] transition-all duration-200'
        >
          <option value='' defaultChecked></option>
          {CATEGORY.map(category => {
            return (
              <option value={category}>
                {category}
              </option>
            )
          })}
        </select>
      </div>
    </section>
  )
}
