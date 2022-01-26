import Link from "next/link";
import { useTypedSelector } from "../../../hooks/use-types-selector";
import { useRouter } from "next/router";
import { ShoppingCartSimple, User } from "phosphor-react";


interface NavigationLinksProps {
  openCart: () => void;
}

const NavigationLinks: React.FC<NavigationLinksProps> = (props) => {
  const router = useRouter();
  const {user} = useTypedSelector(state => state.userLogin)

  const userLink = (user && user.isAdmin)? '/admin': user? '/user' : 'user/signin'

  

  const getClass = (pathName: string): string => {
    if (router.pathname === pathName) return "nav__list__item nav__list__item--active";
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
        <ShoppingCartSimple weight="light" className='nav__list__icon' onClick={props.openCart} />
      </li>
      <li className={getClass("/login")}>
        <Link href={userLink}>
          <User weight="light" className='nav__list__icon' />
        </Link>
      </li>
    </ul>
  );
};

export default NavigationLinks;
