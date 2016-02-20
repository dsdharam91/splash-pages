import React from 'react';
import ProductComparisonEn from './product-comparison.en';
import ProductComparisonFr from './product-comparison.fr';
import ProductComparisonDe from './product-comparison.de';
import ProductComparisonEs from './product-comparison.es';
import ProductComparisonNl from './product-comparison.nl';

export default class ProductComparison extends React.Component {
  displayName = 'ProductComparison'

  render() {
    return (
      <div>
        <ProductComparisonEn />
        <ProductComparisonFr />
        <ProductComparisonDe />
        <ProductComparisonEs />
        <ProductComparisonNl />
      </div>
    );
  }
}
