import React from 'react'
import {VerticalStack, Box, Text, HorizontalStack} from '@shopify/polaris';
import FeatureCard from './FeatureCard';

export interface IFCProps {};

const FeatureSection: React.FunctionComponent<IFCProps> = props => {
  return (
    <VerticalStack gap="4">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: 'var(--p-color-bg-info-strong)',
          width: '506px',
        }}
      >
      </div>
      <h2
      style={{
        marginTop: '50px',
        marginBottom: '30px',
        textAlign: 'center',
        fontSize: '2.5rem',
        fontWeight: 'bold'
      }}>
      Featured Products</h2>
      <section    
      style={{
          display: 'flex',
          justifyContent: 'center',
        }}>
        <HorizontalStack gap="4" >
        <Box padding="4" width="550px">
            <FeatureCard />
          </Box>
          <Box padding="4" width="550px">
            <FeatureCard />
          </Box>
          <Box padding="4" width="550px">
            <FeatureCard />
          </Box>
        </HorizontalStack>
      </section>
    </VerticalStack>
  );
}



export default FeatureSection