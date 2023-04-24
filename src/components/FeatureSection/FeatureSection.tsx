import React from 'react'
import {VerticalStack, Box, Text, HorizontalStack} from '@shopify/polaris';
import FeatureCard from './FeatureCard';

export interface IFCProps {};

const featureProducts = [
  {
    "id": 7,
    "name": "Knit Hat",
    "description": "A warm knit hat made of soft acrylic yarn.",
    "price": 19.99,
    "image": "https://images.unsplash.com/photo-1510598969022-c4c6c5d05769?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmVhbmllJTIwaGF0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
  },
  {
    "id": 2,
    "name": "Beanie",
    "description": "A cozy beanie made of soft acrylic yarn.",
    "price": 19.99,
    "image": "https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmVhbmllJTIwaGF0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
  },
  {
    "id": 9,
    "name": "Bucket Hat",
    "description": "A trendy bucket hat made of cotton twill.",
    "price": 24.99,
    "image": "https://images.unsplash.com/photo-1600074178688-c7a0a748a3e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJ1Y2tldCUyMGhhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
  },
]

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
        {featureProducts.map((product)=>{
          return  (
            <Box id="box1" padding="4" width="550px">
              <FeatureCard name={product.name} image={product.image} price={product.price}/>
            </Box>
          )
        })}
          
      
        
          {/* <Box id="box2" padding="4" width="550px">
            <FeatureCard />
          </Box>
          <Box id="box3"padding="4" width="550px">
            <FeatureCard />
          </Box> */}
        </HorizontalStack>
      </section>
    </VerticalStack>
  );
}



export default FeatureSection