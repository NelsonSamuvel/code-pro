type PropTypes = {
  name: string;
};

export default function NotFound({ name }: PropTypes) {
  return (
    <div className="flex justify-center mt-24 items-center">
      <p className="text-xl font-semibold">{name} Not Found😵</p>
    </div>
  );
}
