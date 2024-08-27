import "./index.css";
import { useEffect, useState } from "react";
import { Form, useParams } from "react-router-dom";

const handleEditPost = async (e, blogId) => {
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
    id: blogId,
  };
  await editPost(data);
};

export const editPost = async (data) => {
  try {
    const url = `api/blogs/${data.id}`;
    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const res = await response.json();
    console.log("Successfully updated:", res);
    // window.location.href = "/blog";
    return res;
  } catch (error) {
    console.log(error);
  }
};

export default function Index() {
  const { blogId } = useParams();

  const [post, setDetail] = useState({});
  useEffect(() => {
    const url = `api/blogs/${blogId}`;

    const postDetails = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setDetail(data);
      return data;
    };
    postDetails();
  }, [blogId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDetail((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="wrapper">
        <div className="modal">
          <h1>Edit Post</h1>

          <Form
            method="post"
            onSubmit={(e) => handleEditPost(e, blogId)}
            className="form"
          >
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                placeholder="Title"
                name="title"
                value={post.title}
                onChange={handleInputChange}
                required="required"
              />
            </div>

            <div className="form-group">
              <div className="select">
                <label htmlFor="tag">Tag</label>
                <select
                  name="tag"
                  value={post.tag}
                  onChange={handleInputChange}
                >
                  <option value={"Technology"}>Technology</option>
                  <option value={"Automobile"}>Automobile</option>
                  <option value={"Food"}>Food</option>
                </select>
              </div>

              <div className="select ml-1">
                <label htmlFor="tag">Tag Color</label>
                <select
                  name="tagcolor"
                  value={post.tagcolor}
                  onChange={handleInputChange}
                >
                  <option value={"tag-brown"}>Brown</option>
                  <option value={"tag-blue"}>Blue</option>
                  <option value={"tag-red"}>Red</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="summary">Summary</label>
              <textarea
                name="summary"
                value={post.summary}
                placeholder="Post Summary"
                onChange={handleInputChange}
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="content">Post Content</label>
              <textarea
                placeholder="Post Content"
                name="content"
                rows={15}
                value={post.content}
                onChange={handleInputChange}
              ></textarea>
            </div>

            <div className="form-group">
              <button type="submit">Edit Post</button>
            </div>
          </Form>
          <a href="/blog" className="modal__close">
            &times;
          </a>
          {/* </div> */}
        </div>
      </div>
    </>
  );
}
