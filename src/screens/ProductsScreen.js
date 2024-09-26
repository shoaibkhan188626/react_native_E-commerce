/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { SafeAreaView } from 'react-native';
import ProductList from '../components/ProductList';

const ProductsScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ProductList />
    </SafeAreaView>
  );
};

export default ProductsScreen;
