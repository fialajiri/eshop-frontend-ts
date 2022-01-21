import MainNavigation from "../navigation/main-navigation";
import { useActions } from "../../../hooks/use-actions";
import { useEffect } from "react";

const Header: React.FC = () => {
  

  return (
    <header className="header">
      <MainNavigation />
    </header>
  );
};

export default Header;
