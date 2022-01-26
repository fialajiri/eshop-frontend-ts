export interface TabFooterProps {
  className?: string;
}

const TabFooter: React.FC<TabFooterProps> = (props) => {
  return <div className={`tab__footer ${props.className}`}>{props.children}</div>;
};

export default TabFooter;
