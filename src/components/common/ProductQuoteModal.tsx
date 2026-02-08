import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import type { Product } from '../../types';
import '../../styles/products.css';
import { Link } from 'react-router-dom';

interface ProductQuoteModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductQuoteModal: React.FC<ProductQuoteModalProps> = ({ product, isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Close on outside click
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  const generateProductText = (product: Product) => {
    const specs = product.specifications && product.specifications.length > 0
      ? product.specifications.map(s => `${s.label}: ${s.value}`).join('\n')
      : 'N/A';
    
    const features = product.tags && product.tags.length > 0
      ? product.tags.map(t => `• ${t}`).join('\n')
      : '• High Quality Industrial Product';

    return `FR EXIMS - PRODUCT INFORMATION SHEET
=====================================

Product: ${product.name}
Category: Export Product
Date: ${new Date().toLocaleDateString()}

DESCRIPTION
-----------
${product.description || 'High-quality industrial product engineered for durability and performance.'}

TECHNICAL SPECIFICATIONS
------------------------
${specs}

KEY FEATURES
------------
${features}

CONTACT INFORMATION
-------------------
Company: FR EXIMS
Website: ${window.location.origin}
Email: info@frexims.com
Phone: +91 (555) 123-4567

For quotes and detailed specifications, please contact us.

=====================================
This document is generated automatically and contains the latest product information.`;
  };

  const handleDownload = () => {
    if (!product) return;
    const text = generateProductText(product);
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${product.name.replace(/\s+/g, '_')}_Details.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  if (!isOpen || !product) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-container" ref={modalRef}>
        <button className="modal-close-btn" onClick={onClose}>&times;</button>
        
        <div className="modal-content">
          <div className="modal-header">
            <h3>Product Details</h3>
            <p>Comprehensive specifications and information for {product.name}</p>
          </div>

          <div className="modal-body-grid">
            {/* Left Column: Product Info & Image */}
            <div className="modal-product-info">
              <div className="modal-product-image">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/400x300?text=Image+Not+Found'; }}
                />
              </div>
              <h4 className="modal-product-title">{product.name}</h4>
              <p className="modal-product-desc" style={{color: '#475569', marginBottom: '1.5rem', lineHeight: '1.6'}}>
                High-quality {product.name} engineered for durability and performance. Meets international quality standards for industrial applications.
              </p>
            </div>

            {/* Right Column: Detailed Specs */}
            <div className="modal-specs-section">
               {product.specifications && product.specifications.length > 0 ? (
                <div className="modal-specs-full">
                  <h5 style={{fontSize: '1.1rem', color: '#0a192f', marginBottom: '1rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem'}}>Technical Specifications</h5>
                  <ul style={{listStyle: 'none', padding: 0}}>
                    {product.specifications.map((spec, idx) => (
                      <li key={idx} style={{display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid #f1f5f9'}}>
                        <strong style={{color: '#64748b', width: '40%'}}>{spec.label}</strong>
                        <span style={{color: '#0f172a', width: '55%', textAlign: 'right'}}>{spec.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div className="modal-specs-full">
                  <h5 style={{fontSize: '1.1rem', color: '#0a192f', marginBottom: '1rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem'}}>Product Features</h5>
                  <ul style={{listStyle: 'none', padding: 0}}>
                      <li style={{display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid #f1f5f9'}}>
                        <strong style={{color: '#64748b', width: '40%'}}>Product Name</strong>
                        <span style={{color: '#0f172a', width: '55%', textAlign: 'right'}}>{product.name}</span>
                      </li>
                      <li style={{display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid #f1f5f9'}}>
                        <strong style={{color: '#64748b', width: '40%'}}>Quality Grade</strong>
                        <span style={{color: '#0f172a', width: '55%', textAlign: 'right'}}>Premium Industrial / Commercial</span>
                      </li>
                      <li style={{display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid #f1f5f9'}}>
                        <strong style={{color: '#64748b', width: '40%'}}>Application</strong>
                        <span style={{color: '#0f172a', width: '55%', textAlign: 'right'}}>Construction, Manufacturing, Industrial</span>
                      </li>
                      <li style={{display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid #f1f5f9'}}>
                        <strong style={{color: '#64748b', width: '40%'}}>Availability</strong>
                        <span style={{color: '#0f172a', width: '55%', textAlign: 'right'}}>In Stock / Custom Order</span>
                      </li>
                  </ul>
                  <p style={{fontSize: '0.9rem', color: '#64748b', marginTop: '1rem', fontStyle: 'italic'}}>
                    * Specific technical data sheets available upon request.
                  </p>
                </div>
              )}
              
              <div className="modal-actions" style={{marginTop: '2rem', display: 'flex', gap: '1rem'}}>
                 <Link to="/contact" className="btn-submit-quote" style={{display: 'block', textAlign: 'center', textDecoration: 'none', flex: 1}}>
                    Contact Us for Quote
                 </Link>
                 <button 
                    onClick={handleDownload}
                    className="btn-download-details"
                    style={{
                        display: 'flex', 
                        alignItems: 'center',
                        justifyContent: 'center',
                        flex: 1, 
                        background: '#fff', 
                        color: '#0a192f', 
                        border: '1px solid #0a192f',
                        padding: '0.75rem',
                        borderRadius: '6px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        fontSize: '0.9rem',
                        transition: 'all 0.2s ease'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = '#f1f5f9';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = '#fff';
                    }}
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px'}}>
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                    Download Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ProductQuoteModal;
