import React from 'react';
import {AlphaCard, Text} from '@shopify/polaris';
import {Button} from '@shopify/polaris';

export interface IFeatureCardProps {};

const FeatureCard: React.FunctionComponent<IFeatureCardProps> = props => {
  return (
    <AlphaCard 
    background="bg-subdued" 
    padding={{xs: '4', sm: '5', md: '6', lg: '8', xl: '10'}}>
      <img
        alt=""
        width="100%"
        height="100%"
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
        }}
        src="https://cdn.shopify.com/s/files/1/0506/6774/9566/products/havana-hat-tan-front-ss20-2500px_7920e1df-9840-4fef-b414-824a1f252f60_800x.jpg?v=1630616903"
      />
    <Text as="h2" variant="bodyMd" fontWeight='bold' alignment='center'>
      Sun hat
    </Text>
    <Text as="h2" variant="bodyMd" fontWeight='bold' alignment='center'>
      $24.99
    </Text>
    <section    
    style={{
         marginTop: '15px',
          display: 'flex',
          justifyContent: 'center',
        }}>
      <Button primary>Add to Cart</Button>
    </section>

  </AlphaCard>
  )
}

export default FeatureCard