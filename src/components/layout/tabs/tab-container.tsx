export interface TabContainerProps {
  className?: string;
}

const TabContainer: React.FC<TabContainerProps> = (props) => {
  return <div className={`tab__container ${props.className}`}>{props.children}</div>;
};

export default TabContainer;
