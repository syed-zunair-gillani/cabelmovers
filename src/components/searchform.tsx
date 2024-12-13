import { FaMagnifyingGlass } from 'react-icons/fa6'
import { useRouter } from 'next/navigation'
import { useRouter as Router } from 'next/router'
import React, { useState } from 'react'
import { FiMapPin } from "react-icons/fi";
import InputSelect from './inputSelect';


const query = `
query zones($zipcode: String = "") {
   zones(where: {title: $zipcode}) {
     nodes {
       title
       cities {
         nodes {
           name
           slug
         }
       }
       states {
         nodes {
           name
           slug
         }
       }
     }
   }
 }
`;


const SearchForm = ({types, closeModal}:any) => {
  const [zipcode, setzipcode] = useState<string>();
  const [proType, setProType] = useState<string>('internet');
  const router = useRouter();
  const router2 = Router();
  const [loader, setloader] = useState<boolean>(false);
  const [resultNotFound, setResultNotFound] = useState('')

  const variables = {
    zipcode: zipcode
  };
  async function fetchData() {
    setloader(true);
    const response = await fetch('https://cblproject.cablemovers.net/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ query, variables: variables }),
    });
    const respons = await response.json();

    if (respons?.data?.zones?.nodes.length > 0) {
      if(zipcode){
        router.push(`/${proType}/zip-${zipcode}`);
      }else{
        setResultNotFound('Please Enter a Zipcode!')
      }
      setTimeout(() => {
        setloader(false);
      }, router2.pathname === "/" ? 2000 : 1000)
      setResultNotFound('No Result found! please enter correct zipcode')
      types && closeModal()
    }
    else {
      setloader(false);
      setResultNotFound('No Result found! please enter correct zipcode')
    }
  }

  function handleState() {
    fetchData();
  }

  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      fetchData()
    }
  }

  return (
    <div>
      {loader ? <div className='fixed z-50 inset-0 !w-full bg-black/60 flex items-center flex-col justify-center'><div className="custom-loader"></div></div> :
        <form className='sm:bg-gray-100 rounded-2xl shadow-xl w-full sm:w-auto'>
          <div className="relative sm:flex-row flex-col gap-2 flex sm:pl-3 items-center w-full m-auto serch_form ">
            <div className='flex items-center bg-gray-100 w-full border border-gray-300 sm:border-none'>
            <FiMapPin className="absolute text-2xl sm:text-3xl ml-2 sm:ml-1 text-[#ef9831]" />
            <input type="text" onKeyDown={handleKeyDown} placeholder="Enter Zip Code" maxLength={5} name="zip_code" value={zipcode} onChange={(e) => setzipcode(e.target.value)} className="w-full py-3 sm:py-5 pl-10 pr-8 outline-none md:w-80 bg-transparent rounded-l-md" />
            </div>
           <div className='flex sm:flex-row flex-col gap-2 w-full sm:gap-0'>
           <InputSelect setProType={setProType} proType={proType}/>
            <button className="px-3 md:px-8 py-3 sm:py-[20px] w-full  font-semibold text-white bg-[#ef9831] border-[#ef9831] sm:rounded-br-2xl sm:rounded-r-2xl" onClick={handleState}>Search</button>
            </div> 
          </div>
        </form>
      }
      {resultNotFound && <div className='w-full py-2 pl-2 text-red-500'>{resultNotFound}</div>}
    </div>
  )
}

export default SearchForm
