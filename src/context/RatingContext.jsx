import { createContext, useState } from "react";

const RatingContext = createContext();

export const RatingProvider = ({children}) =>{

    const websiteName = "Rating App Context";
    // send static data
    const [ratings,setRatings] = useState([])
    const [edit,setEdit] = useState({
         rating:{}, 
        isEdit: false
    }
        )
     // delete rating
     const deleteRating = (getid) =>{
        setRatings(ratings.filter((rating) => rating.id != getid))
     }   
     // save rating
     const saveRating = (userrating,comment) =>{
        const newRatings = {
            id: crypto.randomUUID(),
            userrating: userrating,
            comment: comment
        }
        setRatings([newRatings, ...ratings])
     }

     // edit Rating
        const editRating = (rating) =>{
            setEdit({rating: rating, isEdit: true})
        }

        const updateRating = (id,comment) =>{
            setRatings(ratings.map(rating => rating.id === id ? {...rating , comment:comment } : rating ))   
            setEdit({rating: rating, isEdit: false })
        }

    return (
        <RatingContext.Provider value ={{websiteName,ratings,deleteRating,saveRating,editRating,edit,updateRating}}>{children}</RatingContext.Provider>
    )
}
export default RatingContext