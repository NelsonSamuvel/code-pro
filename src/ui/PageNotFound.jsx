import { Link } from "react-router-dom";
import Button from "./Button";

export default function PageNotFound() {
  return (
    <div className="flex h-screen flex-col gap-4 items-center justify-center">
      <h1 className="h1">Page Not Found🔍</h1>
      <Link to="/tips">
        <Button>Try Again</Button>
      </Link>
    </div>
  );
}
