import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/main/layout";
import Blog from "./pages/blog";
import AddModal from "./components/blog/addModal/index";
import "./server";

const blogLoader = async () => {
  const url = "/api/users";
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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
