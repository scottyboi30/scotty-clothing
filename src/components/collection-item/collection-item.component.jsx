import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';

import './collection-item.styles.scss';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <div data-test="collection-item" className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButton
        data-test="add-to-cart"
        onClick={() => addItem(item)}
        extraClasses="custom-button--inverted">
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = {
  addItem,
};

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
