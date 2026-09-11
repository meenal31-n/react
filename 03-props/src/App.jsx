import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className="parent"> 
      <Card user='Aman Singh' age={18} img='https://images.unsplash.com/photo-1742745181459-815e9815ac05?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      <Card user='Meenal Nanagwal' age={21} img='https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdpcmx8ZW58MHx8MHx8fDA%3D'/>
      <Card user='Sarthak Sharma' age={28} img='https://images.unsplash.com/photo-1679531751641-79f78cbb5c0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGRpYW1vbmR8ZW58MHx8MHx8fDA%3D'/>

    </div>
    
  )
}

export default App