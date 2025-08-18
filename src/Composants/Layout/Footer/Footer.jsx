import React from 'react'
import "./Footer.scss";

function Footer() {
  return (
    <div className='Footer'>
        <div className='Footer-logo'>
            <img src="/Logo-kasa-blanc.png" alt="logo" />
        </div>
        <div className='Footer-text'>
  ⓒ 2020 Kasa. All <span className="line-break">rights reserved</span>
</div>   
    </div>
  )
}

export default Footer
