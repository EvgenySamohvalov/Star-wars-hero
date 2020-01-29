import React from 'react'

import loader from './loader.svg'
import './Loader.scss'

const Loader = () => (

  <div className="Loader">
    <img src={loader} className="Loader-img" alt="Loading..." />
  </div>
  
)
  
export default Loader