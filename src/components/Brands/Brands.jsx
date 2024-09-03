import React from 'react'
import hm from '../../assets/images/hm.png'
import obey from '../../assets/images/obey.png'
import shopify from '../../assets/images/shopify.png'
import lacoste from '../../assets/images/lacoste.png'
import levis from '../../assets/images/levis.png'
import amazon from '../../assets/images/amazon.png'


const Brands = () => {
  return (
    <section className="brands">
    <div className="flex-img">
        <img src={hm} alt=""/>
        <img src={obey} alt=""/>
        <img src={shopify} alt=""/>
        <img src={lacoste} alt=""/>
        <img src={levis} alt=""/>
        <img src={amazon} alt=""/>
    </div>
    </section>
)
}

export default Brands
