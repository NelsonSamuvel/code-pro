type PropsType = {
  content: string;
};

const TrimContent = ({ content }: PropsType) => {
  const splitContent = content.split(" ");

  const trimContent = splitContent.length > 20;

  const spanBtn = (
    <span className="text-sm text-blue-700 hover:underline">Show more...</span>
  );

  return (
    <p className="text-lg leading-7  text-gray-700">
      {trimContent ? `${splitContent.slice(0, 20).join(" ")} ` : content}
      {trimContent && spanBtn}
    </p>
  );
};

export default TrimContent;
