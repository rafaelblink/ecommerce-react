import React from 'react';
import SHOPDATA from './shop.data';

import CollectionPreview from './../../components/colletion-preview/collection-preview.component';

class ShopPage extends React.Component {
  constructor() {
    super();

    this.state = {
      collections: SHOPDATA
    };
  }

  render() {
    const {collections} = this.state;
    return (
      <div className="shop-page">
        {
        collections
        .map(({ id, ...otherProps }) => (
          <CollectionPreview key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
