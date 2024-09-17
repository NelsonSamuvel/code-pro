import { ReactNode } from "react";

type ChildrenType = {
  children: ReactNode;
};

const Tag = ({ children }: ChildrenType) => {
  return (
    <div className="text-sm bg-blue-50 pl-2 pr-3 py-1 text-blue-600 rounded-full flex items-center gap-2 w-max">
      {children}
    </div>
  );
};

export default Tag;
