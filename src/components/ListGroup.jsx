import React, { useContext } from 'react'
import ListItem from './ListItem'
import RatingContext from '../context/RatingContext'

const ListGroup = () => {
    const {ratings} = useContext(RatingContext)
    console.log(ratings)
  return (
    <ul className="list-group my-3">
        {
            ratings.map((rating) =>(
                <ListItem key = {rating.id} rating = {rating}/>
            ))
        }
    </ul>
  )
}

export default ListGroup
