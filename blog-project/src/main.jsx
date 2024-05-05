import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import { AuthLayout, Login, AllPosts } from "./components/index.js";
import { SignUp, AddPost, EditPost, Post } from "./components";

const router = BrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/login",
        element: (
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        ),
      },

      {
        path: "/signup",
        element: (
          <AuthLayout>
            <SignUp />
          </AuthLayout>
        ),
      },

      {
        path: "/all-posts",
        element: (
          <AuthLayout>
            <AllPosts />
          </AuthLayout>
        ),
      },

      {
        path: "/add-posts",
        element: (
          <AuthLayout>
            <AddPost />
          </AuthLayout>
        ),
      },

      {
        path: "/edit-posts",
        element: (
          <AuthLayout>
            <EditPost />
          </AuthLayout>
        ),
      },

      {
        path: "/post/slug",
        element: <Post />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
