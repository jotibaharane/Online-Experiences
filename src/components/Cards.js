import React from 'react'

function Cards({item}) {
    let badgeText
    if (item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (item.location === "Online") {
        badgeText = "ONLINE"
    }
  return (
    <div className='card'>
        {badgeText&&<div className="card--badge">{badgeText}</div>}
        <img src={item.coverImg} className='card-img' alt="cover-image"/>
    <div className="card-stats">
        <img src="./star.png" className='card-star' alt="star-image"/>
        <span>{item.stats.rating}</span>
        <span className='grey'>({item.stats.reviewCount}) • </span>
        <span className='grey'>{item.location}</span>
        </div>
        <p>{item.title}</p>
            <p><span className='bold'>From ${item.price} </span>/ person</p>
    </div>
  )
}

export default Cards
    