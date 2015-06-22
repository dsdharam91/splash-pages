import React from 'react';
import ProductComparisonEn from './product-comparison.en';
import ProductComparisonFr from './product-comparison.fr';
import ProductComparisonDe from './product-comparison.de';

export default class ProductComparison extends React.Component {
  displayName = 'ProductComparison'

  render() {
    return (
      <div>
        <ProductComparisonEn />
        <ProductComparisonFr />
        <ProductComparisonDe />
      </div>
    );
  }
}
