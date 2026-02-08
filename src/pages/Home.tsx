import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/categories';
import '../styles/home.css';
import CountUpAnimation from '../components/common/CountUpAnimation';

// Hero Images for Preloading
const heroImages = [
  '/img/Hero/hero1.jpg',
  '/img/Hero/hero2.jpg',
  '/img/Hero/hero3.jpg',
  '/img/Hero/hero4.jpg'
];

const Home: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Preload hero images to prevent loading delays
  useEffect(() => {
    heroImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);
  
  // Double the categories for infinite loop illusion
  const doubledCategories = [...categories, ...categories];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const intervalId = setInterval(() => {
      // Check if we've scrolled past the first set of items (halfway)
      // If so, seamlessly jump back to the start of the first set
      // The content is identical, so the jump is invisible
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2 - 50) {
         scrollContainer.scrollLeft = 0;
      }
      
      // Scroll to the next item
      scrollContainer.scrollBy({ left: 382, behavior: 'smooth' }); // 350px width + 32px gap
    }, 3000); // Rotate every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 382; // 350px width + 32px gap
      
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* Section 1: Hero */}
      <section className="hero hero-slider">
        <div className="hero-bg hero-bg-1"></div>
        <div className="hero-bg hero-bg-2"></div>
        <div className="hero-bg hero-bg-3"></div>
        <div className="hero-bg hero-bg-4"></div>
        <div className="hero-overlay"></div>
        <div className="container hero-slider-content animate-fade-in-up">
          <div className="content-wrap">
            <h1>Delivering Beyond Borders</h1>
            <p>India-based export company delivering a diverse range of quality products to international markets with reliable sourcing, efficient logistics, and strict quality control</p>
            <div className="cta">
              <Link to="/contact" className="btn btn-primary btn-large">Get Quote</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Who We Are */}
      <section className="section who-we-are-section">
        <div className="container">
           <div className="who-we-are-grid">
              <div className="who-we-are-image-wrapper">
                 <img 
                   src="/img/Hero/businessman-and-technicians-or-engineer-working-at-2026-01-06-10-48-57-utc.jpg" 
                   alt="Who We Are" 
                   className="who-we-are-img"
                 />
              </div>
              <div className="who-we-are-content animate-fade-in-up">
                 <div className="topic-highlight-box">
                    <span className="section-subtitle">Who We Are</span>
                    <h2 className="section-title-modern">Grow Mindfully, Grow Together</h2>
                 </div>
                 <p className="lead-text">
                   We are a multidimensional export conglomerate, spanning diverse industries across multiple global geographies.
                 </p>
                 <div className="divider-line"></div>
                 <p className="body-text">
                   Across our various businesses and locations, a common belief binds us: to grow mindfully and to grow together, 
                   carrying everyone along as a family in our pursuit of success. We are headquartered in India, with a presence 
                   in global markets.
                 </p>
                 <Link to="/about" className="btn-text-arrow">
                   Discover Our Story
                   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                 </Link>
              </div>
           </div>
        </div>
      </section>

      {/* Section 3: Business Verticals (Carousel Layout) */}
      <section className="section business-verticals-section">
        <div className="container">
           <div className="section-header-professional">
              <span className="section-subtitle">Our Expertise</span>
              <h2 className="section-title-modern">Reliable Products for Assured Success</h2>
              <div className="header-divider"></div>
              <p className="section-description-centered">Diverse industries, singular commitment to quality</p>
           </div>
           
           <div className="carousel-wrapper">
              <button className="carousel-btn prev-btn" onClick={() => scroll('left')} aria-label="Previous slide">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
              </button>
              
              <div className="carousel-track" ref={scrollRef}>
                 {doubledCategories.map((category, index) => (
                   <Link to={`/products/${category.id}`} key={`${category.id}-${index}`} className="carousel-card flip-card">
                      <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <div className="carousel-image-container">
                                <img src={category.coverImage} alt={category.title} />
                            </div>
                            <div className="carousel-content-front">
                                <h3>{category.title}</h3>
                            </div>
                        </div>
                        <div className="flip-card-back">
                            <div className="carousel-content-back">
                                <h3>{category.title}</h3>
                                <p>{category.description}</p>
                                <span className="read-more-link">Explore <span className="arrow">→</span></span>
                            </div>
                        </div>
                      </div>
                   </Link>
                 ))}
              </div>

              <button className="carousel-btn next-btn" onClick={() => scroll('right')} aria-label="Next slide">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </button>
           </div>
           
           <div className="verticals-cta">
              <Link to="/products" className="btn btn-secondary">View All Verticals</Link>
           </div>
        </div>
      </section>

      {/* Section 4: How It Works (New Module) */}
      <section className="section process-section">
        <div className="container">
           <div className="section-header-professional">
              <span className="section-subtitle">Our Process</span>
              <h2 className="section-title-modern">How We Work</h2>
              <div className="header-divider"></div>
              <p className="section-description-centered">Our streamlined process ensures your import and export operations are efficient, compliant, and cost-effective</p>
           </div>
           
           <div className="process-grid">
              {/* Step 1 */}
              <div className="process-step">
                 <div className="step-icon-wrapper">
                    <div className="step-number">01</div>
                    <svg className="step-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                 </div>
                 <h3>Consultation</h3>
                 <p>We understand your trade requirements, assess your needs, and develop a customized solution strategy.</p>
              </div>

              {/* Step 2 */}
              <div className="process-step">
                 <div className="step-icon-wrapper">
                    <div className="step-number">02</div>
                    <svg className="step-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                 </div>
                 <h3>Documentation</h3>
                 <p>We prepare and verify all necessary documentation ensuring compliance with international trade regulations.</p>
              </div>

              {/* Step 3 */}
              <div className="process-step">
                 <div className="step-icon-wrapper">
                    <div className="step-number">03</div>
                    <svg className="step-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
                 </div>
                 <h3>Transportation</h3>
                 <p>We coordinate with our global network to ensure secure and timely transportation of your goods.</p>
              </div>

              {/* Step 4 */}
              <div className="process-step">
                 <div className="step-icon-wrapper">
                    <div className="step-number">04</div>
                    <svg className="step-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.5 12H16c-.7 2-2 3-4 3s-3.3-1-4-3H2.5"></path><path d="M5.5 5.1L2 12v6c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2v-6l-3.5-6.9A2 2 0 0 0 16.7 3H7.3a2 2 0 0 0-1.8 1.1z"></path></svg>
                 </div>
                 <h3>Delivery</h3>
                 <p>Final delivery with customs clearance and comprehensive support to ensure your goods arrive safely.</p>
              </div>
           </div>
        </div>
      </section>

      {/* Section 4: Our Clientele (Hidden as per request) */}
      {/* <section className="section clientele-section">
        <div className="container">
           <div className="section-header text-center">
              <span className="section-subtitle">Trusted Partners</span>
              <h2 className="section-title-modern">Our Clientele</h2>
              <p className="section-description-centered">Building lasting relationships with global leaders across industries</p>
           </div>
           
           <div className="clientele-grid">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                 <div key={item} className="client-logo-box">
                    <div className="client-logo-placeholder">
                       <span>Client {item}</span>
                    </div>
                 </div>
              ))}
           </div>
        </div>
      </section> */}

      {/* Section 5: Why Our Process Works (New Module) */}
      <section className="section why-us-section">
         <div className="container">
            <div className="why-us-content">
               <div className="why-us-text">
                  <div className="topic-highlight-box">
                     <span className="section-subtitle">The FR Advantage</span>
                     <h2 className="section-title-modern">Why Our Process Works</h2>
                  </div>
                  <p className="lead-text">
                     Our success is built on a foundation of trust, expertise, and an unwavering commitment to quality.
                  </p>
                  
                  <ul className="benefits-list">
                     <li>
                        <div className="check-icon">✓</div>
                        <div>
                           <strong>Global Reach, Local Expertise</strong>
                           <p>Navigating international regulations with the precision of local knowledge.</p>
                        </div>
                     </li>
                     <li>
                        <div className="check-icon">✓</div>
                        <div>
                           <strong>Rigorous Quality Control</strong>
                           <p>100% quality assurance on every shipment, guaranteed.</p>
                        </div>
                     </li>
                     <li>
                        <div className="check-icon">✓</div>
                        <div>
                           <strong>End-to-End Transparency</strong>
                           <p>Real-time updates and clear communication at every stage.</p>
                        </div>
                     </li>
                  </ul>
               </div>

               <div className="why-us-stats">
                  <div className="stat-card primary-stat">
                     <CountUpAnimation target={15} suffix="+" className="stat-value" />
                     <span className="stat-label">Years of Experience</span>
                  </div>
                  <div className="stat-grid-small">
                     <div className="stat-card-small">
                        <CountUpAnimation target={50} suffix="+" className="stat-value-small" />
                        <span className="stat-label-small">Countries</span>
                     </div>
                     <div className="stat-card-small">
                        <CountUpAnimation target={500} suffix="+" className="stat-value-small" />
                        <span className="stat-label-small">Clients</span>
                     </div>
                     <div className="stat-card-small">
                        <CountUpAnimation target={100} suffix="%" className="stat-value-small" />
                        <span className="stat-label-small">Success</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Section 6: CTA Section - Ready to Trade */}
      <section className="section cta-section">
         <div className="cta-background"></div>
         <div className="cta-overlay"></div>
         <div className="container relative-container text-center">
            <h2 className="cta-title">Ready to Trade Globally?</h2>
            <p className="cta-subtitle">Connect with FR EXIMS today and let us handle your import-export needs with precision and care.</p>
            <div className="cta-actions">
               <Link to="/contact" className="btn btn-outline-white btn-large btn-phone">
                  Get Free Consultation
               </Link>
               <a href="tel:+915551234567" className="btn btn-white btn-large btn-phone">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  Make a Call
               </a>
            </div>
         </div>
      </section>

      {/* Section 7: Global Presence (Stats Box - Hidden as integrated above) */}
      {/* <section className="section stats-section-box">
         <div className="container">
            <div className="stats-grid-box">
               <div className="stat-box">
                  <span className="stat-number">15+</span>
                  <span className="stat-label">Years of Experience</span>
               </div>
               <div className="stat-box">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Countries Served</span>
               </div>
               <div className="stat-box">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Global Clients</span>
               </div>
               <div className="stat-box">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Quality Assurance</span>
               </div>
            </div>
         </div>
      </section> */}
    </>
  );
};

export default Home;
