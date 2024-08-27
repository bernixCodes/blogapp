import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import "./index.css";

export default function Index() {
  const { blogId } = useParams();
  // console.log(blogId);

  const navigation = useNavigate();

  const [post, setDetail] = useState({});
  useEffect(() => {
    const url = `api/users/${blogId}`;

    const postDetails = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setDetail(data);
      return data;
    };
    postDetails();
  }, [blogId]);
  return (
    <>
      <Outlet />
      <div className="details-header">
        <div className="btn-div">
          <button
            className="go-back"
            onClick={() => {
              navigation(-1);
            }}
          >
            &#9664;
          </button>
        </div>
        <div className="action-btns">
          <Link to={"edit"}>
            <button>Edit</button>
          </Link>
          <Link to={"delete"}>
            <button>Delete</button>
          </Link>
        </div>
      </div>
      <div className="detail-container">
        <div className="card-detail">
          <img className="post-img" src={post.imageUrl} alt="" />
          <div className="card-body">
            <span className={`tag ${post.tagcolor}`}>{post.tag}</span>
            <h2 className="post-title">{post.title}</h2>
            <p className="post-body">{post.summary}</p>
            <p className="post-body">{post.content}</p>
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
      </div>
    </>
  );
}
