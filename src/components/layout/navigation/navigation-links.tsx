import Link from "next/link";
import { useRouter } from "next/router";

import Button from "../../ui-elements/button";

interface NavigationLinksProps {
  openCart: () => void;
}

const NavigationLinks: React.FC<NavigationLinksProps> = (props) => {
  const router = useRouter();

  const getClass = (pathName: string): string => {
    if (router.pathname === pathName)
      return "nav__list__item nav__list__item--active";
    return "nav__list__item";
  };

  return (
    <ul className="nav__list">
      <li className={getClass("/")}>
        <Link href="/">Domů</Link>
      </li>
      <li className={getClass("/produkty")}>
        <Link href="/produkty">Katalog</Link>
      </li>
      <li className={getClass("/cart")}>
        <Button unstyled className="nav__button" onClick={props.openCart}>
          Košík
        </Button>
      </li>
      <li className={getClass("/login")}>
        <Link href="/user/signin">Přihlásit se</Link>
      </li>
    </ul>
  );
};

export default NavigationLinks;
