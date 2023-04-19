import React from 'react';
import { AlphaCard, VerticalStack, Image, Text } from '@shopify/polaris';
import { Product } from '../../types/types';

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
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
          <VerticalStack gap="5">
          <Text variant="bodyLg" as="p" fontWeight="semibold">${product.price}</Text>
          </VerticalStack>
        </VerticalStack>
      </div>
    </AlphaCard>
  );
};

export default ProductCard;
