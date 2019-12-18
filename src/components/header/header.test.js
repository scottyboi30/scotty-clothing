import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../../test/testUtils';
import { auth } from '../../firebase/firebase.utils';
import { Header } from './header.component';

auth.signOut = jest.fn();

const defaultProps = {
    hidden: true,
    currentUser: { id: '1234' },
}

/**
* Factory function to create a ShallowWrapper for the MenuItem component.
* @function setup
* @param {object} props - Component props specific to this setup.
* @returns {ShallowWrapper}
*/
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Header {...setupProps} />)
};

describe('Header component', () => {
  let wrapper;
  let signout;
  describe('when there is a current user', () => {
    beforeEach(() => {
      wrapper = setup();
      signout = findByTestAttr(wrapper, 'signout');
    });

    it('displays the signout button', () => {
      expect(signout).toBeTruthy();
    });

    describe('when signout button is clicked', () => {
      beforeEach(() => {
        signout.simulate('click');
      });
      it('makes a call to signout', () => {
        expect(auth.signOut).toHaveBeenCalled();
      });
    });
  });
});
