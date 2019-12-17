import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import './header.styles.scss';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({ currentUser, hidden }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <nav className='nav'>
      <Link className='nav__item' to='/shop'>
        SHOP
      </Link>
      <Link className='nav__item' to='/shop'>
        CONTACT
      </Link>
      {
        currentUser ?
          <div className='nav__item' onClick={() => auth.signOut()}>SIGN OUT</div>
          :
          <Link className='nav__item' to='/signin'>SIGN IN</Link>
      }
      <CartIcon />
    </nav>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
