export interface TabButtonProps {
  title: string;
  isSelected: boolean;
  onClick: () => void;
  className?: string;
}

const TabButton: React.FC<TabButtonProps> = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`tab__button ${props.className} ${
        props.isSelected ? "tab__button--selected" : ""
      }`}
    >
      {props.title}
    </button>
  );
};

export default TabButton;
