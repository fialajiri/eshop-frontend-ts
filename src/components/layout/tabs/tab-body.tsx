export interface TabBodyProps {
  className?: string;
}

const TabBody: React.FC<TabBodyProps> = (props) => {
  return <div className={`tab__body ${props.className}`}>{props.children}</div>;
};

export default TabBody;
