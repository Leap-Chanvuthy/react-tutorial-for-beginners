const Create = () => {
    return ( 
        <form className="custom-form">
            <label >
                Title :
                <input type="text"  />
            </label>
            <label >
                Body :
                <textarea ></textarea>
            </label>
           <label >
            Author :
            <select >
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