type PropsType = {
  name: string;
};

const EmptyData = ({ name }: PropsType) => {
  return (
    <div className="flex flex-col items-center gap-4 justify-center h-[75dvh]">
      <img
        src="/assets/svg/no-data.svg"
        alt=""
        className="w-[200px]  opacity-70"
      />
      <p className="text-stone-400 font-semibold">No {name} Found</p>
    </div>
  );
};

export default EmptyData;
