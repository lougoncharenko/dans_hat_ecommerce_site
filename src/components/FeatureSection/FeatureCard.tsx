import React from 'react';
import {AlphaCard, Text} from '@shopify/polaris';
import {Button} from '@shopify/polaris';

export interface IFeatureCardProps {};

const FeatureCard: React.FunctionComponent<IFeatureCardProps> = props => {
  return (
    <AlphaCard padding={{xs: '4', sm: '5', md: '6', lg: '8', xl: '10'}}>
      <img
        alt=""
        width="80%"
        height="80%"
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
        }}
        src="https://burst.shopifycdn.com/photos/business-woman-smiling-in-office.jpg?width=1850"
      />
    <Text as="h2" variant="bodyMd" fontWeight='bold' alignment='center'>
      Insert Item name here
    </Text>
    <Text as="h2" variant="bodyMd" fontWeight='bold' alignment='center'>
      Insert Price name here
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