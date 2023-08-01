import React, { useContext } from 'react'
import RatingContext from '../context/RatingContext';

const ListItem = ({rating}) => {
  console.log(rating);

  const {deleteRating,editRating} = useContext(RatingContext)
  return (
   <li className="list-group-item ">
    <div className="full-des d-flex justify-content-between align-items-center">
        <div className="show-des">
            <p>{rating.userrating}</p>
            <p>{rating.comment}</p>
       </div>
       <div className="button">
       <button className="btn btn-danger" onClick={()=>(deleteRating(rating.id))}>Delete</button>
       <button className="btn btn-danger" style={{marginRight:10}} onClick={()=>(editRating(rating))}>Edit</button>
       </div>
      
    </div>
       
   </li>
  )
}

export default ListItem
