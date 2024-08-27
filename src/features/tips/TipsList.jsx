import TipsItem from "./TipsItem";

function TipsList({ tips }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
      {tips.map((tip) => (
        <TipsItem key={tip.id} tip={tip} />
      ))}
    </ul>
  );
}

export default TipsList;
