import { Link } from "react-router-dom";
import Button from "./Button";

export default function PageNotFound() {
  return (
    <div className="flex flex-col gap-4 items-center mt-24">
      <h1 className="h1">Page Not Found🔍</h1>
      <Link to="/tips">
        <Button>Try Again</Button>
      </Link>
    </div>
  );
}
