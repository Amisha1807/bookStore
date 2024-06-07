import React from 'react'
import image from '../../public/image.jpg'
import list from '../../public/list.json'
const Cards = ({item}) => {
    //console.log(item)
  return (
    <div className='mt-4 p-4'>
       <div className="card w-92 bg-base-100 shadow-xl hover:scale-110 duration-200 dark:bg-slate-900 dark:text-white dark:border">
  <figure><img src={item.image} alt="Books" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
    <div className="card-actions flex justify-between">
      <div className="badge badge-outline hover:bg-pink-500 duration-200 hover:text-white mt-4">${item.price}</div> 
      <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] badge badge-outline hover:bg-pink-500 duration-200 hover:text-white my-3">Buy Now</div>
    </div>
  </div>
</div> 
    </div>
  )
}

export default Cards