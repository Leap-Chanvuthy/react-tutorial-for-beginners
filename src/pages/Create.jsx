

const Create = () => {
  return (
    <form className="custom-form">
      <label>
        Title:
        <input type="text" name="title" />
      </label>

      <label>
        Body:
        <textarea name="body"></textarea>
      </label>

      <label>
        Author:
        <select name="author">
          <option value="">Select an author</option>
          <option value="John Doe">John Doe</option>
          <option value="Jane Smith">Jane Smith</option>
          <option value="Alice Johnson">Alice Johnson</option>
        </select>
      </label>

      <button>Submit</button>
    </form>
  );
};

export default Create;
