export interface TabheadProps {
  className?: string;
}

const TabHead: React.FC<TabheadProps> = (props) => {
  return <div className={`tab__head ${props.className}`}>{props.children}</div>;
};

export default TabHead;
