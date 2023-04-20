import React, { useState, useCallback } from 'react';
import { AlphaCard, Button, VerticalStack, Image, Text, TextField } from '@shopify/polaris';
import { Product } from '../../types/types';

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const [quantity, setQuantity] = useState('1');

  const handleQuantityChange = useCallback(
    (newValue: string) => setQuantity(newValue),
    [],
  );

  return (
    // <AlphaCard>
    //   <div style={{ padding: '16px' }}>
    //     <Image
    //       alt={product.name}
    //       source={product.image}
    //       style={{ maxHeight: '200px', objectFit: 'contain' }}
    //     />
    //     <VerticalStack inlineAlign="center">
    //       <Text variant="headingXl" as="h2">{product.name}</Text>
    //       <Text variant="bodySm" as="p">{product.description}</Text>
    //       <Text variant="bodyLg" as="p" fontWeight="semibold">${product.price}</Text>
    //       <VerticalStack gap="5">
    //         <TextField
    //           label="Quantity"
    //           type="number"
    //           value={quantity}
    //           onChange={handleQuantityChange}
    //           autoComplete="off"
    //         />
    //       </VerticalStack>
    //       <Button primary fullWidth>Add to Cart</Button>
    //       <Button plain>View Full Details</Button>
    //     </VerticalStack>
    //   </div>
    // </AlphaCard>

    <AlphaCard
    background="bg-subdued"
    padding={{xs: '4', sm: '5', md: '6', lg: '8', xl: '10'}}>
      <img
        alt={product.name}
        width="100%"
        height="100%"
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
        }}
        src={product.image}
      />
    <Text as="h2" variant="headingMd" alignment='start'>
    {product.name}
    </Text>
    <Text as="h2" variant="bodyLg" fontWeight='bold' alignment='center'>
    ${product.price}
    </Text>
    <VerticalStack gap="5">
             <TextField
              label="Quantity"
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              autoComplete="off"
            />
          <Button primary fullWidth>Add to Cart</Button>
          <Button plain>View Full Details</Button>
          </VerticalStack>

    </AlphaCard>
  );
};

export default ProductCard;
