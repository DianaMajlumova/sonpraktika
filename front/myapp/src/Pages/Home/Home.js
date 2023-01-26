import React from 'react'
import Navbar from '../../Layout/Navbar/Navbar'
import {Helmet} from "react-helmet";
import ShopIsFun from '../../Components/HomeComponents/ShopIsFun/ShopIsFun';
import TrendingProduct from '../../Components/HomeComponents/TrendingProduct/TrendingProduct';
import WinterSale from '../../Components/HomeComponents/WinterSale/WinterSale';
import BestSellers from '../../Components/HomeComponents/BestSellers/BestSellers';
import LatestNews from '../../Components/HomeComponents/LatestNews/LatestNews';
import Footer from '../../Layout/Footer/Footer';
function Home() {
  return (
    <div>
         <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <Navbar/>
      <ShopIsFun/>
      <TrendingProduct/>
      <WinterSale/>
      <BestSellers/>
      <LatestNews/>
      <Footer/>
    </div>
  )
}

export default Home
