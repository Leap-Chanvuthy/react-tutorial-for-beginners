import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Create = () => {
    const [title , setTitle] = useState('');
    const [body , setBody] = useState('');
    const [author , setAuthor] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const article = {title , body , author} ;
        fetch ('http://localhost:4000/article' , {
            method : 'POST',
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify(article)
        })
        .then((data) => {
            console.log('Data is added' , data);
            navigate('/');
        })
        .catch((error) => {
            console.log(error);
        })

    }


    return ( 
        <form onSubmit={handleSubmit} className="custom-form">
            <label >
                Title :
                <input type="text" value={title} onChange={((e) => setTitle(e.target.value))}    />
            </label>
            <label >
                Body :
                <textarea value={body} onChange={((e) => setBody(e.target.value))} />
            </label>
           <label >
            Author :
            <select value={author} onChange={((e) => setAuthor(e.target.value))}>
                    <option value="Leap Chanvuthy">Leap Chanvuthy</option>
                    <option value="John Doe">John Doe</option>
                    <option value="Jame Henderson">Jame Henderson</option>
                    <option value="Micky Mouse">Micky Mouse</option>
                    <option value="Giant Buffon">Giant Buffon</option>
                </select>
           </label>
            <button>Submit</button>
        </form>
     );
}
 
export default Create;