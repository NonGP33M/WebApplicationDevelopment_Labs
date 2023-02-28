import React from 'react'
import { Button } from './Button'
import { useState } from 'react'

export const VoteBox = ({catagory,name,image,content}) => {
  const [vote,setVote]=useState(0);
  const increaseVote =()=>{
    if (vote === 10){
      alert("Cannot vote")
    }else{
      setVote(vote+1)
    }
  }
  const decreaseVote =()=>{
    if (vote === 0){
      alert("Cannot unvote")
    }else{
      setVote(vote-1)
    }
  }
  return (
    <div className='container'>
      <div className='content'>
        <div className='text'>
          <div className='header1'><h3>{catagory}</h3></div>
          <div className='header2'><h4>{name}</h4></div>
          <div className='text-content'>{content}</div>
        </div>
        <div className='pic'>
          <img src={image} alt="image" />
        </div>
      </div>
      <div>
        <Button vote={vote===0?"MIN":vote===10?"MAX":vote} incVote={increaseVote} decVote={decreaseVote}/>
      </div>
    </div>
  )
}   