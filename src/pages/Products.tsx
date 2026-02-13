import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/products.css';

// Custom data structure to match the reference website's content and layout
const productCategories = [
  {
    id: 'construction-structural',
    targetLink: '/products/iron-steel',
    title: 'Construction and Stainless Steel Structural materials',
    description: 'Premium quality stainless steel structural materials, reinforced concrete components, steel beams, columns, and high-grade construction materials for robust infrastructure and building projects.',
    tags: ['Cement & Concrete', 'Steel & Rebar', 'Bricks & Blocks', 'Structural Materials'],
    image: '/img/products/fr exims/Stainless Steel (SS316  SS304) – Fasteners & Fixings/matias-santana-2ykXqiKHNfk-unsplash.jpg'
  },
  {
    id: 'manufacturing-construction',
    targetLink: '/products/machinery',
    title: 'Manufacturing / Construction Material',
    description: 'Premium quality manufacturing and construction materials including metal sheets, structural steel, fabricated components, and industrial-grade materials for diverse manufacturing and construction projects.',
    tags: ['Metal Fabrication Materials', 'Steel Products & Sheets', 'Industrial Components', 'Manufacturing Supplies'],
    image: '/img/products/fr exims/Heavy Equipment/heavy-machinery-used-construction-industry-engineering (1).jpg'
  },
  {
    id: 'tiles-stone',
    targetLink: '/products/flooring-tiles',
    title: 'Tiles & Natural Stone',
    description: 'Premium ceramic tiles, porcelain, natural marble, granite, and stone products for elegant flooring and wall applications in residential and commercial spaces.',
    tags: ['Ceramic & Porcelain Tiles', 'Marble & Granite', 'Natural Stone', 'Designer Tiles'],
    image: '/img/products/fr exims/Tiles & Flooring/top-view-boards-mdf-material.jpg'
  },
  {
    id: 'structural-steel',
    targetLink: '/products/iron-steel',
    title: 'Structural Steel / Steel Angles',
    description: 'High-quality structural steel angles, L-beams, galvanised chequered plates, and angle iron profiles for construction frameworks, industrial structures, and fabrication projects.',
    tags: ['Steel Angle Bars & L-Beams', 'Galvanised Chequered Plate 6mm', 'Structural Angle Profiles', 'Heavy-Duty Steel Sections'],
    image: '/img/products/fr exims/GI  HDG Structural Steel/large-steel-factory-warehouse.jpg'
  },
  {
    id: 'water-treatment',
    targetLink: '/products/plumbing-drainage',
    title: 'Water Treatment and Purification',
    description: 'Advanced water treatment systems, purification equipment, and filtration solutions for industrial and residential use.',
    tags: ['Water Filtration Systems', 'Treatment Chemicals', 'Purification Equipment', 'Industrial Systems'],
    image: '/img/products/fr exims/HDPE Piping Systems/high-voltage-infrastructure.jpg'
  },
  {
    id: 'warning-tapes',
    targetLink: '/products/safety',
    title: 'Warning Tapes',
    description: 'High-visibility warning and caution tapes for safety applications, hazard marking, construction sites, and industrial facility demarcation with durable adhesive backing.',
    tags: ['Barricade Caution Tapes', 'Floor Marking Tapes', 'Safety Hazard Tapes'],
    image: '/img/products/fr exims/Warning & Identification/Custom Printed Warning Tape (All Sizes).png'
  }
];

const Products: React.FC = () => {
  return (
    <>
      {/* Page Header */}
      <section className="products-page-hero">
        <div className="container text-center">
          <span className="products-hero-badge">Our Catalog</span>
          <h1>Product Categories</h1>
          <p>We specialize in sourcing and trading high-quality products across multiple categories, ensuring compliance with international standards and regulations.</p>
        </div>
      </section>

      {/* Products Grid Section */}
      <section className="section products-grid-section">
        <div className="container">
          <div className="products-grid-custom">
            {productCategories.map((category) => (
              <div key={category.id} className="product-card-detailed">
                <div className="product-card-image-wrapper">
                  <img src={category.image} alt={category.title} loading="lazy" />
                  <div className="product-card-badge">Premium Quality</div>
                </div>
                
                <div className="product-card-body">
                  <h3 className="product-title">{category.title}</h3>
                  <p className="product-description">{category.description}</p>
                  
                  <div className="product-tags">
                    {category.tags.map((tag, index) => (
                      <span key={index} className="product-tag">{tag}</span>
                    ))}
                  </div>
                  
                  <div className="product-card-footer">
                    <Link to={category.targetLink} className="btn-get-quote" style={{ width: '100%', textAlign: 'center' }}>
                      View Catalogue
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
