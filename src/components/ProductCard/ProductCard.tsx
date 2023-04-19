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
    <AlphaCard>
      <div style={{ padding: '16px' }}>
        <Image
          alt={product.name}
          source={product.image}
          style={{ maxHeight: '200px', objectFit: 'contain' }}
        />
        <VerticalStack inlineAlign="center">
          <Text variant="headingXl" as="h2">{product.name}</Text>
          <Text variant="bodySm" as="p">{product.description}</Text>
          <Text variant="bodyLg" as="p" fontWeight="semibold">${product.price}</Text>
          <VerticalStack gap="5">
            <TextField
              label="Quantity"
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              autoComplete="off"
            />
          </VerticalStack>
          <Button primary fullWidth>Add to Cart</Button>
          <Button plain>View Full Details</Button>
        </VerticalStack>
      </div>
    </AlphaCard>
  );
};

export default ProductCard;
