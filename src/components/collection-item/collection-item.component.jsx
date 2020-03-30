import React from 'react';

import './collection-item.styles.scss';

const CollectionItem = ({ id, name, price, imageUrl }) => (
  <div className="collection-item">
    <div
      className="image"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className="collection-footer">
      <span className="name">{name}</span>
      <spn className="price">{price}</spn>
    </div>
  </div>
);

export default CollectionItem;
