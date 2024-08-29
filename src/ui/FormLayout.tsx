interface FormLayoutType {
  title: string;
  children: React.ReactNode;
  type: string;
}

function FormLayout({ title, children, type = "primary" }: FormLayoutType) {
  const formLayoutStyle: any = {
    primary: "w-[350px] mx-auto px-2 py-4 flex flex-col",
    modal: "w-[350px] mx-auto mt-10 p-4 flex flex-col bg-white rounded-md",
  };

  return (
    <div className={formLayoutStyle[type]}>
      <h1 className="text-3xl font-sans text-center font-bold text-stone-800 leading-relaxed">
        {title}
      </h1>
      {children}
    </div>
  );
}

export default FormLayout;
