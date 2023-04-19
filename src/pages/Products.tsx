// import React from 'react';

// export interface IProductsPageProps {};

// const ProductsPage: React.FunctionComponent<IProductsPageProps> = props => {
//   return <div>Products</div>
// }

// export default ProductsPage

import React from 'react';
import { Layout, AlphaCard, Grid } from '@shopify/polaris';
import ProductCard from '../components/ProductCard/ProductCard';
import { Product } from '../types/types';
import productsData from '../data/products.json';

interface Props {
  products: Product[];
}

// const ProductList: React.FC<Props> = ({ products }) => {
//   return (
//       <Grid columns={{ xs: 1, sm: 2, md: 3 }}>
//   {products.map((product) => (
//     <div key={product.name}>
//       <ProductCard product={product} />
//     </div>
//   ))}
// </Grid>
//   );
// };


const ProductList: React.FC<Props> = ({ products }) => {
  return (
    <Layout>
      <Layout.Section>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <AlphaCard>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              {products.map((product) => (
                <div key={product.name} style={{ padding: '8px', width: '100%', maxWidth: '400px' }}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
            </AlphaCard>
        </div>
      </Layout.Section>
    </Layout>
  );
};

const products = productsData.hats;

export default () => <ProductList products={products} />;
