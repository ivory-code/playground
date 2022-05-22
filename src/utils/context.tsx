import React, {createContext, useState} from 'react'

const CalendarContext = createContext({
  date: '',
  setDate: (element: string) => {
    element
  },
  stamp: 0,
  setStamp: (element: number) => {
    element
  },
  text: '',
  setText: (element: string) => {
    element
  },
})

interface Props {
  children: JSX.Element | JSX.Element[]
}

const CalendarProvider = ({children}: Props): JSX.Element => {
  const [date, setDate] = useState('')
  const [stamp, setStamp] = useState(0)
  const [text, setText] = useState('')

  return (
    <CalendarContext.Provider
      value={{date, setDate, stamp, setStamp, text, setText}}>
      {children}
    </CalendarContext.Provider>
  )
}

export {CalendarContext, CalendarProvider}