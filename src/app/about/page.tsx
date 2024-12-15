import React from 'react'
import Header from './components/SecHeader'
import AboutHero from './components/AboutHero'
import TeamMem from './components/TeamMem'
import Clients from './components/Clients'
const page = () => {
  return (
    <div>
        <Header/>

        <AboutHero/>

        <TeamMem/>

        <Clients/>
    </div>
  )
}

export default page