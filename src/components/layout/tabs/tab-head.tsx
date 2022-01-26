export interface TabheadProps {
  className?: string;
}

const Tabhead: React.FC<TabheadProps> = (props) => {
  return <div className={`tab__head ${props.className}`}>{props.children}</div>;
};

export default Tabhead;
