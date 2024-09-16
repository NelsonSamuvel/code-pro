import { ReactNode } from "react";

type ChildrenType = {
  children: ReactNode;
};

const Tag = ({ children }: ChildrenType) => {
  return <div className="text-sm bg-blue-50 px-2 py-1 text-blue-600 rounded-full flex items-center gap-2 w-max">
    {children}
  </div>;
};

export default Tag;
