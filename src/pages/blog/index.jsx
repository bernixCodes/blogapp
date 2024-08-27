import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLoaderData } from "react-router-dom";

import { Link, Outlet } from "react-router-dom";
export default function Index() {
  const { users } = useLoaderData();

  return (
    <>
      <Outlet />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar
        closeOnClick
        draggable
        pauseOnHover
        theme="dark"
      />
      <Link to={"create-post"}>
        <h3 className="addpost">Add Post</h3>
      </Link>

      <div className="post-container">
        {users.map((post) => (
          <Link to={`/blog/${post.id}`} key={post.id}>
            <div className="card">
              <img className="post-img" src={post.imageUrl} alt="" />
              <div className="card-body">
                <span className={`tag ${post.tagcolor}`}>{post.tag}</span>
                <h2 className="post-title">{post.title}</h2>
                <p className="post-body">{post.summary}</p>
              </div>
              <div className="card-footer">
                <div className="user">
                  <img src={post.authorImg} alt="" className="user__image" />
                  <div className="user__info">
                    <h5>Jane Doe</h5>
                    <small>2h ago</small>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
