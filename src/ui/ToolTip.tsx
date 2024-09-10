type PropsType = {
  toolName: string;
};

const ToolTip = ({ toolName }: PropsType) => {
  return <div className="absolute">{toolName}</div>;
};

export default ToolTip;
