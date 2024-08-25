import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import homeIcon from '../images/home.png'; 
const Header = () => {
  const { t } = useTranslation();
  const user = useSelector((state) => state.user);

  return (
    <header>
    <nav>
      <ul>
        <li>
        <Link to="/" className="homeicon">
        <img src={homeIcon} alt="Home" className="home-icon-img" />
          </Link>
        </li>
        <li>
          <Link to="/">{t('Home')}</Link>
        </li>
          {!user.isAuthenticated && (
            <>
              <li>
                <Link to="/login">{t('Login')}</Link>
              </li>
              <li>
                <Link to="/signup">{t('Sign Up')}</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
