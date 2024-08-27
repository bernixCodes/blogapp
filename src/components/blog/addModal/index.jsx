import { Form, useNavigate } from "react-router-dom";
import "./index.css";

export default function Index() {
  const navigate = useNavigate();

  const handleAddPost = async (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    let data = {
      title: formData.get("title"),
      summary: formData.get("summary"),
      content: formData.get("content"),
      tagcolor: formData.get("tagcolor"),
      tag: formData.get("tag"),
      imageUrl:
        "https://cdn.europosters.eu/image/750/posters/cars-characters-i33475.jpg",
      authorImg: "https://i.pravatar.cc/40?img=1",
    };

    await fetch("/api/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    console.log("data", data);
    navigate("/blog");
  };

  return (
    <>
      <div className="wrapper">
        <div className="modal">
          <h1>Add Post</h1>

          <Form
            method="post"
            action="/blog/create-post"
            onSubmit={handleAddPost}
            className="form"
          >
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                placeholder="Title"
                name="title"
                required="required"
              />
            </div>

            <div className="form-group">
              <div className="select">
                <label htmlFor="tag">Tag</label>
                <select name="tag">
                  <option value={"Technology"}>Technology</option>
                  <option value={"Automobile"}>Automobile</option>
                  <option value={"Food"}>Food</option>
                </select>
              </div>

              <div className="select ml-1">
                <label htmlFor="tag">Tag Color</label>
                <select name="tagcolor">
                  <option value={"tag-brown"}>Brown</option>
                  <option value={"tag-blue"}>Blue</option>
                  <option value={"tag-red"}>Red</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="summary">Summary</label>
              <textarea name="summary" placeholder="Post Summary"></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="content">Post Content</label>
              <textarea
                placeholder="Post Content"
                name="content"
                rows={8}
              ></textarea>
            </div>

            <div className="form-group">
              <button type="submit">Add Post</button>
            </div>
          </Form>
          <a href="/blog" className="modal__close">
            &times;
          </a>
        </div>
      </div>
    </>
  );
}
