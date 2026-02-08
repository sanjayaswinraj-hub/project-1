import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/about.css';
import CountUpAnimation from '../components/common/CountUpAnimation';

const About: React.FC = () => {
  return (
    <>
      {/* About Hero */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <span className="about-hero-badge">Global Trade Experts</span>
            <h1 className="about-hero-title">Bridging Markets with <br/>Unwavering Trust</h1>
            <p className="about-hero-description">
              FR EXIMS is a premier export house dedicated to connecting Indian manufacturing excellence with global demand. 
              We redefine international trade through transparency, quality assurance, and seamless logistics.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story - Split Layout */}
      <section className="about-story-section">
        <div className="container">
          <div className="story-grid">
            <div className="story-content">
              <span className="section-subtitle">Our Journey</span>
              <h2>From Local Roots to <br/>Global Reach</h2>
              <div className="story-highlight">
                "We don't just export products; we export the promise of Indian quality to the world."
              </div>
              <p className="story-text">
                Founded with a vision to streamline the complex world of international trade, FR EXIMS has evolved into a trusted partner for businesses across 50+ countries. Our journey began with a simple belief: that reliability is the currency of global business.
              </p>
              <p className="story-text">
                Today, we stand at the forefront of the export industry, managing intricate supply chains for diverse sectors including Industrial Machinery, Construction Materials, and Electrical Systems. Our team of experts works tirelessly to ensure that every shipment not only meets but exceeds international standards.
              </p>
              <div className="about-stats-row">
                <div className="about-stat-item">
                  <CountUpAnimation target={15} suffix="+" className="stat-num" />
                  <span className="stat-desc">Years of Excellence</span>
                </div>
                <div className="about-stat-item">
                  <CountUpAnimation target={500} suffix="+" className="stat-num" />
                  <span className="stat-desc">Global Partners</span>
                </div>
              </div>
            </div>
            <div className="story-image-wrapper">
              <div className="story-pattern"></div>
              <img 
                src="/img/Hero/shipment2.jpg" 
                alt="FR EXIMS Team" 
                style={{height:"500px"}}
                className="story-image" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="vision-mission-section">
        <div className="container">
          <div className="vm-grid">
            <div className="vm-box vm-vision">
              <div className="vm-icon-large">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
              </div>
              <h3 style={{color:"white"}}>Our Vision</h3>
              <p>To be the world's most trusted gateway for Indian exports, setting the benchmark for quality, transparency, and ethical trade practices across borders.</p>
            </div>
            <div className="vm-box vm-mission">
              <div className="vm-icon-large">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              </div>
              <h3 style={{color:"white"}}>Our Mission</h3>
              <p>To empower global businesses by providing seamless access to high-quality Indian products, backed by robust logistics, rigorous quality control, and unwavering customer support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="values-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-subtitle">Our Principles</span>
            <h2 className="section-title-modern">Core Values That Drive Us</h2>
            <p className="section-description-centered">The pillars of our corporate identity and business conduct</p>
          </div>
          
          <div className="values-grid">
            {/* Integrity */}
            <div className="value-card">
              <div className="value-icon-box">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <h3>Uncompromised Integrity</h3>
              <p>We believe in absolute transparency. Every transaction, negotiation, and partnership is built on the foundation of honesty and ethical conduct.</p>
            </div>

            {/* Quality */}
            <div className="value-card">
              <div className="value-icon-box">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              </div>
              <h3>Excellence in Quality</h3>
              <p>Quality is not just a metric; it's our promise. We enforce strict quality control measures at every stage, from sourcing to final shipment.</p>
            </div>

            {/* Reliability */}
            <div className="value-card">
              <div className="value-icon-box">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              </div>
              <h3>Steadfast Reliability</h3>
              <p>In global trade, time is money. We are committed to on-time deliveries and consistent performance, ensuring your supply chain never falters.</p>
            </div>

            {/* Customer Centricity */}
            <div className="value-card">
              <div className="value-icon-box">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <h3>Client-Centric Approach</h3>
              <p>We don't just serve clients; we build relationships. We tailor our solutions to meet your specific requirements and business goals.</p>
            </div>
            
             {/* Innovation */}
             <div className="value-card">
              <div className="value-icon-box">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
              </div>
              <h3>Adaptive Innovation</h3>
              <p>The global market is ever-changing. We stay ahead by adopting the latest technologies and market trends to provide cutting-edge solutions.</p>
            </div>

             {/* Sustainability */}
             <div className="value-card">
              <div className="value-icon-box">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>
              </div>
              <h3>Sustainable Growth</h3>
              <p>We are committed to responsible trade practices that promote economic growth while respecting environmental and social standards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Summary */}
      <section className="expertise-section">
        <div className="container">
           <div className="expertise-content">
             <span className="section-subtitle">Our Expertise</span>
             <h2 className="section-title-modern">Mastery Across Industries</h2>
             <p className="lead-text">
               With deep domain knowledge in key sectors, we navigate the complexities of product specifications, compliance, and handling requirements.
             </p>
             <div className="expertise-tags">
               <span className="expertise-tag">Industrial Machinery</span>
               <span className="expertise-tag">Construction Materials</span>
               <span className="expertise-tag">Electrical Systems</span>
               <span className="expertise-tag">Flooring Solutions</span>
               <span className="expertise-tag">HVAC Components</span>
               <span className="expertise-tag">Iron & Steel</span>
               <span className="expertise-tag">Custom Sourcing</span>
               <span className="expertise-tag">Logistics Management</span>
             </div>
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="cta-background"></div>
        <div className="cta-overlay"></div>
        <div className="container relative-container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: 700, color: '#fff', position: 'relative', zIndex: 3 }}>Ready to Scale Your Business?</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2.5rem', opacity: 0.9, maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto', color: '#fff', position: 'relative', zIndex: 3 }}>
            Partner with FR EXIMS for a seamless, reliable, and profitable international trade experience.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', position: 'relative', zIndex: 3 }}>
            <Link to="/contact" className="btn" style={{ background: '#fff', color: '#1e3a5f', padding: '14px 32px', textDecoration: 'none', borderRadius: '50px', fontWeight: 600, transition: 'all 0.3s ease', fontSize: '0.9rem', boxShadow: '0 6px 20px rgba(0,0,0,0.2)' }}>
              Get Free Consultation
            </Link>
            <Link to="/products" className="btn btn-outline-white" style={{ background: 'transparent', color: 'white', border: '2px solid white', padding: '14px 32px', textDecoration: 'none', borderRadius: '50px', fontWeight: 600, transition: 'all 0.3s ease', fontSize: '0.9rem' }}>
              Explore Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
