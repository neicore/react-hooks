import { ChangeEvent, useState } from 'react'

export interface InitialStates {
  name: string
  email: string
  password: string
}

export const useForm = (initialStates: InitialStates) => {
  const [states, setStates] = useState(initialStates)

  return {
    states,
    handleChange: (e: ChangeEvent<HTMLInputElement>) => {
      setStates({
        ...states,
        [e.target.name]: e.target.value,
      })
    },
    emptyStates: () => {
      setStates({
        name: '',
        email: '',
        password: '',
      })
    },
  }
}
