import React from 'react'
import Header from '../about/components/SecHeader'
import Main from './components/Main'
import PricingCards from './components/PricingCards'
import FAQs from './components/FAQs'
const page = () => {
  return (
    <div className=' bg-light-grey'>
        <Header/>

        <Main/>

        <PricingCards/>

        <FAQs/>
    </div>
  )
}

export default page