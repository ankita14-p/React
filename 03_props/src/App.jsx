import React from 'react'
import Card from './components/card'
const App = () => {
  return (
    <div className='parent'>
    <Card user='Aman' age={20}/>
    <Card user='Ankita' age={22}/>
    <Card user='Priya' age={25} />
    </div>
  )
}

export default App
