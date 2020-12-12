import React from 'react'

import './menu-item.styles.scss'

const MenuItem = ({title, imageUrl, size}) => (
     <div className={`menu-item ${size}`}>
        <div style={{backgroundImage: `url(${imageUrl})`}} className='background-image'/>
        <div className='content'>
            <h2 className='title'>{title.toUpperCase()}</h2>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
)

export default MenuItem;