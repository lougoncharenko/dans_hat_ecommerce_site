import React from 'react';
import {AlphaCard, Text} from '@shopify/polaris';
import {Button} from '@shopify/polaris';

export interface IFeatureCardProps {
  name: string;
  image: string;
  price: number
};

const FeatureCard: React.FunctionComponent<IFeatureCardProps> = ({name, image, price}) => {
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
        src={image}
      />
    <Text as="h2" variant="bodyMd" fontWeight='bold' alignment='center'>
      {name}
    </Text>
    <Text as="h2" variant="bodyMd" fontWeight='bold' alignment='center'>
      ${price}
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