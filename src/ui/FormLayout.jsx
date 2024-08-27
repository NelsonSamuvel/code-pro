function FormLayout({ title, children }) {
  return (
    <div className="w-[350px] mx-auto px-2 py-4 flex flex-col">
      <h1 className="text-3xl font-sans text-center font-bold text-stone-800">
        {title}
      </h1>
      {children}
    </div>
  );
}

export default FormLayout;
