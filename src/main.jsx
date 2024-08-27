//Libraries
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

//Pages
import LoginForm from "./features/authentication/LoginForm.jsx";
import DashBoard from "./adminPages/DashBoard.jsx";
import ProtectedRoute from "./adminPages/ProtectedRoute.jsx";
import LoginPage from "./pages/AuthLayout.jsx";
import AuthLayout from "./pages/AuthLayout.jsx";
import SignupForm from "./features/authentication/SignupForm.jsx";
import TipsPage from "./pages/TipsPage.jsx";
import { loader as tipsLoader } from "./pages/TipsPage.jsx";

const router = createBrowserRouter([
  {
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Navigate to="/tips" />,
      },
      {
        path: "/tips",
        element: <TipsPage />,
        loader: tipsLoader,
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/signup",
        element: <SignupForm />,
      },
      {
        path: "/login",
        element: <LoginForm />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
      <ReactQueryDevtools />
      <Toaster
        position="top-center"
        gutter={8}
        containerStyle={{
          marginTop: "12px",
        }}
        toastOptions={{
          success: { duration: 3000 },
          error: { duration: 5000 },
        }}
      />
    </QueryClientProvider>
  </StrictMode>
);
