//Libraries
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
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
import LoginForm from "./features/authentication/LoginForm.tsx";
import ProtectedRoute from "./pages/ProtectedRoute.tsx";
import AuthLayout from "./ui/AuthLayout.tsx";
import SignupForm from "./features/authentication/SignupForm.jsx";
import TipsPage from "./pages/TipsPage.tsx";
import PageNotFound from "./ui/PageNotFound.jsx";
import AccountPage from "./pages/AccountPage.tsx";
import DashboardLayout from "./ui/DashboardLayout.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import MyTipsList from "./features/dashboard/MyTipsList.tsx";
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
      },
      {
        path: "/account",
        element: <AccountPage />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "userDashboard",
        element: <Dashboard />,
      },
      {
        path: "userTips",
        element: <MyTipsList />,
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
