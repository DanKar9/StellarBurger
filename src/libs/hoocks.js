import { useState, useEffect } from 'react';

const url = 'https://norma.nomoreparties.space/api/ingredients'
const useBurger = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {

      const response = await fetch(url)
      const res = await response.json()
    
      .catch(err => console.log('errow!!!'))

      setData(res.data)
    }
    fetchData()

  }, [])


  return { data }


}

export default useBurger






