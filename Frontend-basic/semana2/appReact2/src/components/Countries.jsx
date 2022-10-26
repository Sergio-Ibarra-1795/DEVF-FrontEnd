import { useEffect, useState } from 'react'

export default function Countries () {
  const [data, setData] = useState([])

  const getData = async () => {
    const request = await fetch('https://restcountries.com/v3.1/all')
    const res = await request.json()
    setData(res)
  }

  useEffect(() => {
    getData()
  }, [])

  console.log(data)

  return (
    <section>
      <p>Countries</p>
    </section>
  )
}
