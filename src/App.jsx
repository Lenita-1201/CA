import React from 'react'

const App = () => {
  const data =[
    {
      title: "Service 1",
      description: "Description 1",
      image: "https://cdn-icons-png.flaticon.com/512/219/219969.png"
    },
    {
      title: "Service 2",
      description: "Description 2",
      image: "https://cdn-icons-png.flaticon.com/512/219/219969.png"
    },
    {
      title: "Service 3",
      description: "Description 3",
      image: "https://cdn-icons-png.flaticon.com/512/219/219969.png"
    }
  ]
  return (
    <div>
      {data.map((item, index)=>(
        <div key={index}>
          <img src={item.image} alt={item.title} style={{width:"250px", height:"220px"}} />
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  )
}

export default App