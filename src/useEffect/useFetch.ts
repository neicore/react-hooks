import { useEffect, useState } from 'react'

export interface useFetchType {
  data: null | string
  loading: boolean
}

export const useFetch = (url: string) => {
  const [state, setState] = useState<useFetchType>({
    data: null,
    loading: true,
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        setState({ data: state.data, loading: true })
        const response = await fetch(url)
        setState({ data: await response.text(), loading: false })
      } catch (error) {}
    }
    fetchData()
  }, [url, setState])

  return state
}
