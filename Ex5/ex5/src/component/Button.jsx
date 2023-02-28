import React from 'react'

export const Button = ({vote,incVote,decVote}) => {
  return (
    <div className='button'>
        <button onClick={incVote}>Click to Vote</button>
        <div className='voteFrame'><p>{vote}</p></div>
        <button onClick={decVote}>Click to Unvote</button>
    </div>
  )
}
