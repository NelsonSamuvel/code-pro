import { useLoaderData } from "react-router-dom";
import Searchbar from "../features/tips/Searchbar";
import TipsList from "../features/tips/TipsList";
import { getTips } from "../services/apiTips";
import Spinner from "../ui/Spinner";

export default function TipsPage() {
  const tips = useLoaderData();

  return (
    <div className="p-4">
      <Searchbar />
      <TipsList tips={tips}/>
    </div>
  );
}

export async function loader() {
  const data = await getTips();
  return data;
}
