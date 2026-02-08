import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import ProductCategory from '../components/ProductCategory';
import { categories } from '../data/categories';

const CategoryPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const categoryData = categories.find(c => c.id === categoryId);

  if (!categoryData) {
    return <Navigate to="/products" replace />;
  }

  return <ProductCategory data={categoryData} />;
};

export default CategoryPage;
