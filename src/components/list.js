import React from 'react'

const List = () => {
  return (
    <div className="container">
      <ListItem />
      <ListItem />
      <ListItem />
    </div>
  )
}

const ListItem = () => {
  return (
    <div className="card row">
      <div className="col s4">
        <p>Student Name:</p>
      </div>
      <div className="col s4">
        <p>GPA:</p>
      </div>
      <div className="col s4 center">
        <button>yeet</button>
      </div>
    </div>
  )
}

export default List