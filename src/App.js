import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/main/layout";
import Blog from "./pages/blog";
import BlogDetail from "./pages/blogDetail";
import AddModal from "./components/blog/addModal/index";
import "./server";
import EditModal, { editPost } from "./components/blog/editModal/index";

const blogLoader = async () => {
  const url = "/api/blogs";
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "blog",
        element: <Blog />,
        loader: blogLoader,

        children: [
          {
            path: "create-post",
            element: <AddModal />,
          },
        ],
      },
      {
        path: "blog/:blogId",
        element: <BlogDetail />,
        children: [
          {
            path: "edit",
            element: <EditModal />,
            action: editPost,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
