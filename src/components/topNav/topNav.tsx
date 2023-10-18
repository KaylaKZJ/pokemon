import { Link, useLocation } from 'react-router-dom';
import css from './topNav.module.scss';
import { useMemo } from 'react';
import { BROWSER_ROUTES } from 'common/constants/browserRoutes';

export default TopNav;

function TopNav() {
  const location = useLocation();
  const currentPath = useMemo(() => location.pathname, [location]);
  return (
    <nav className={css.topNav}>
      <ul>
        {BROWSER_ROUTES.map((route) => (
          <li key={route.path}>
            <Link
              className={currentPath === route.path ? css.active : ''}
              to={route.path}
            >
              {route.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
