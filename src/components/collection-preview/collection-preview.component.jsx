import React from 'react'

import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="collection-preview__title">
      {title.toUpperCase()}
    </h1>
    <div className="collection-preview__items">
      {
        items
          .filter((items, idx) => idx < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))
      }
    </div>
  </div>
);

export default CollectionPreview
