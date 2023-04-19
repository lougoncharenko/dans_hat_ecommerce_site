import React from 'react'
import {VerticalStack, Box, Text, HorizontalStack} from '@shopify/polaris';
import FeatureCard from './FeatureCard';

export interface IFCProps {};

const FeatureSection: React.FunctionComponent<IFCProps> = props => {
  return (
    <VerticalStack align="center" gap="4">
      <h2
      style={{
        marginTop: '50px',
        marginBottom: '30px',
        textAlign: 'center',
        fontSize: '2.5rem',
        fontWeight: 'bold'
      }}>
      Featured Products</h2>
      <section  className='product_container'>
        <HorizontalStack gap="4" >
        <Box id="box1" padding="4" width="550px">
            <FeatureCard />
          </Box>
          <Box id="box2" padding="4" width="550px">
            <FeatureCard />
          </Box>
          <Box id="box3"padding="4" width="550px">
            <FeatureCard />
          </Box>
        </HorizontalStack>
      </section>
    </VerticalStack>
  );
}



export default FeatureSection