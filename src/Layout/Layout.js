import React from 'react'
import Header from '../components/UI/Header/Header'
import Footer from '../components/UI/Footer/Footer'
import Routers from '../routers/Routers'
import Newsletter from '../components/UI/Newsletter/NewsLetter'
import ScrollButton from '../components/UI/ScrollButton/ScrollButton'


const Layout = () => {
  return (
    <div>
        <Header />
        <div>
            <Routers />
        </div>
        <Newsletter />
        <Footer />
        <ScrollButton />
    </div>
  )
}

export default Layout;
