import StarRating from "./starRating";
import {FaTrash} from 'react-icons/fa'
const Color = ({id,title,color,rating, onRemove =f=>f, onRateStar=f=>f}) => {
    console.log(id,title,color)
    return ( <section>
        <h1 style={{display:'inline', padding: '5px'}}>{title}</h1>
        <button onClick={()=>onRemove(id)}><FaTrash></FaTrash></button>
        <div style={{height:50, backgroundColor:color}}></div>
        <StarRating 
        selectedStars = {rating}
        onRate = {(rating)=>onRateStar(rating,id)}
         />
    </section> );
}
 
