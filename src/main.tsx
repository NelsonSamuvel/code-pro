//Libraries
import { StrictMode } from "react";
import { Container, createRoot } from "react-dom/client";
import App from "./App";
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
import LoginForm from "./features/authentication/LoginForm";
import ProtectedRoute from "./pages/ProtectedRoute";
import AuthLayout from "./ui/AuthLayout";
import SignupForm from "./features/authentication/SignupForm";
import TipsPage from "./pages/TipsPage";
import PageNotFound from "./ui/PageNotFound";
import AccountPage from "./pages/AccountPage";
import DashboardLayout from "./ui/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import MyTips from "./pages/MyTips";
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
        element: <MyTips />,
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

const rootElement = document.getElementById("root") as Container;

const queryClient = new QueryClient();

createRoot(rootElement).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />

      {/* <ReactQueryDevtools /> */}
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
