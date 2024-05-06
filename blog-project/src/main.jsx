import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import { AuthLayout, Login } from "./components/index.js";

import AddPost from "./pages/AddPost";
import SignUp from './pages/Signup.jsx'
import EditPost from "./pages/EditPost";

import Post from "./pages/Post";

import AllPosts from "./pages/AllPosts";

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
