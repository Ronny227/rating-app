import React, { useContext, useEffect, useState } from 'react'
import RatingContext from '../context/RatingContext'

const Form = () => {
   
    const {saveRating,edit,updateRating} = useContext(RatingContext)

    const [userrating,setUserrating] = useState("")
    const [comment,setComment] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault(); 
        if(edit.isEdit){
            updateRating(edit.rating.id, comment)
        }else{
            saveRating(userrating,comment);
        }
       
        setComment("");
    }

    useEffect(() =>{
        setUserrating(edit.rating.userrating),
        setComment(edit.rating.comment);
    },[edit]);

  return (
    <form onSubmit={handleSubmit}>
        
        <select className="form-select my-3"  onChange={(e) => setUserrating(e.target.value)} >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            
        </select>
        <input type="text" className="form-control my-3" placeholder='Enter Comment' value={comment} onChange={(e) => setComment(e.target.value)} required />
        <button className="btn btn-success w-100 rounded-0">Submit</button>
    </form>
  )
}

export default Form
