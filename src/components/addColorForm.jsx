import { useState } from "react";

const AddColorForm = ({onNewColor=f=>f}) => {
    const [title, setTitle] = useState('')
    const [color,setColor] = useState("#000000")
const submitForm = (event)=>{
    event.preventDefault();
    onNewColor(title,color);
    setTitle('Hello world');
    setColor('#000000')
}

    return ( <form onSubmit = {submitForm}>
        <input
        type="text"
        value={title}
        placeholder ="Add a new Title .."
        onChange = {(event)=>setTitle(event.target.value)}
        />
        <input
        type="color"
        value={color}
        onChange = {(event)=>setColor(event.target.value)}
        />
        <button>ADD</button>
    </form>

     );
}
 
export default AddColorForm;