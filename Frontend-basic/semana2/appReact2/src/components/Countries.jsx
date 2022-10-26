import { useEffect, useState } from 'react'

export default function Countries () {
  const [data, setData] = useState([])
  const [loading , setLoading] = useState(true)
  const [error, setError] = useState('')

  const getData = async () => {
    try {
      const req = await fetch('https://restcountries.com/v3.1/all')
      const res = await req.json()
      setData(res)
    } catch (error) {
      setError(String(error))
    } finally {
      setLoading(false)
    }
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
