import React from 'react'

const Card = (props) => {
  return (
       <div className="card">
        <h1>{props.user}</h1>
        <h6>{props.age}</h6>
        <img src="https://plus.unsplash.com/premium_photo-1764533873501-bee26e5ea0f6?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="broken" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button>View Profile</button>
      </div>
  )
}

export default Card
