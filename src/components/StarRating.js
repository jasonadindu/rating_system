import { useState } from "react"
import Star from "./Star"

const StarRating = () => {

    const [rating, updateRating] = useState(0);
    const messages = ['Very poor', 'Poor', 'Fair', 'Good', 'Excellent']
    const dummyArr = [0,0,0,0,0]
    const starComponents = dummyArr.map((_, index) => {
        return <Star key={index} rating={rating} pos={index + 1} updateRating={updateRating}/>
    })

    console.log(starComponents)

    return <div className="star-rating-components">
        <div className="trigger-container">{starComponents}</div>
        <h2 className="rating">{messages[rating - 1] || "No rating yet."}</h2>
    </div>
}

export default StarRating;