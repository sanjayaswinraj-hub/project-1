import React, { useState } from 'react';
import type { CategoryData, Product } from '../types';
import { Link } from 'react-router-dom';
import '../styles/products.css';
import ProductQuoteModal from './common/ProductQuoteModal';

interface ProductCategoryProps {
  data: CategoryData;
}

const ProductCategory: React.FC<ProductCategoryProps> = ({ data }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <>
      <ProductQuoteModal 
        product={selectedProduct} 
        isOpen={!!selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
      {/* Hero Section */}
      <section 
        className="products-page-hero" 
        style={{ 
          backgroundImage: data.coverImage 
            ? `linear-gradient(rgba(248, 250, 252, 0.7), rgba(248, 250, 252, 0.6)), url("${data.coverImage.replace(/\\/g, '/')}")` 
            : 'linear-gradient(135deg, #f8fafc, #e2e8f0)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container">
          <span className="products-hero-badge">Premium Collection</span>
          <h1>{data.title}</h1>
          <p>{data.description}</p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="category-breadcrumb" style={{background: '#f8fafc', padding: '1.5rem 0', borderBottom: '1px solid #e2e8f0'}}>
        <div className="container">
          <p className="breadcrumb-text" style={{margin:0, color: '#64748b', fontSize: '0.95rem'}}>
            <Link to="/" className="breadcrumb-link" style={{color: '#0a192f', fontWeight: 600, textDecoration: 'none'}}>Home</Link> 
            <span style={{margin: '0 0.5rem'}}>&gt;</span>
            <Link to="/products" className="breadcrumb-link" style={{color: '#0a192f', fontWeight: 600, textDecoration: 'none'}}>Products</Link> 
            <span style={{margin: '0 0.5rem'}}>&gt;</span>
            <span className="breadcrumb-current" style={{color: '#0a192f', fontWeight: 600}}>{data.title}</span>
          </p>
        </div>
      </div>

      {/* Content Section */}
      <section className="products-grid-section">
        <div className="container">
          
          {data.subcategories.map((subcat, index) => (
            <div key={index} className="subcategory-section" style={{marginBottom: '5rem'}}>
              {subcat.title && (
                <div className="section-header" style={{marginBottom: '2.5rem', borderLeft: '5px solid #0a192f', paddingLeft: '1.5rem'}}>
                   <h2 className="subcategory-title" style={{color: '#0a192f', fontSize: '2rem', fontWeight: 800, margin: 0}}>{subcat.title}</h2>
                </div>
              )}
              
              <div className="products-grid-custom">
                {subcat.products.map((product, pIndex) => (
                  <div key={pIndex} className="product-card-detailed">
                    <div className="product-card-image-wrapper">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        loading="lazy"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://placehold.co/400x300?text=Image+Not+Found';
                        }}
                      />
                      {product.tags && product.tags.length > 0 && (
                        <div className="product-card-badge">
                            {product.tags[0]}
                        </div>
                      )}
                    </div>
                    <div className="product-card-body">
                      <h4 className="product-title">{product.name}</h4>
                      
                      {/* Specifications List */}
                      {product.specifications && product.specifications.length > 0 ? (
                        <div className="product-specs-list" style={{marginBottom: '1.5rem', background: '#f8fafc', padding: '1.2rem', borderRadius: '8px', border: '1px solid #f1f5f9'}}>
                            {product.specifications.map((spec, sIndex) => (
                                <div key={sIndex} className="spec-item" style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem', fontSize: '0.9rem', borderBottom: sIndex !== product.specifications!.length -1 ? '1px dashed #cbd5e1' : 'none', paddingBottom: sIndex !== product.specifications!.length -1 ? '0.75rem' : '0'}}>
                                    <span style={{color: '#64748b', fontWeight: 600}}>{spec.label}:</span>
                                    <span style={{color: '#0f172a', fontWeight: 600}}>{spec.value}</span>
                                </div>
                            ))}
                        </div>
                      ) : (
                        <p className="product-description" style={{marginBottom: '1.5rem'}}>
                           Premium quality {product.name} designed for industrial and commercial applications. Durable and reliable.
                        </p>
                      )}

                      <div className="product-card-footer" style={{display: 'flex', gap: '1rem'}}>
                        <Link to="/contact" className="btn-get-quote" style={{flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', textDecoration: 'none'}}>
                            <span>Get Quotes</span>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                        </Link>
                        <button 
                          className="btn-view-details" 
                          onClick={() => setSelectedProduct(product)}
                          style={{flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: '0.9rem'}}
                        >
                            View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ProductCategory;
