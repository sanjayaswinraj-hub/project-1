import React, { useState, useRef } from 'react';
// import emailjs from '@emailjs/browser';
import '../styles/contact.css';
import { countryCodes } from '../data/countryCodes';
import CustomSelect from '../components/common/CustomSelect';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    countryCode: '+91', // Default to India
    company: '',
    category: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    email: '',
    phone: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone: string, dialCode: string) => {
    const country = countryCodes.find(c => c.dial_code === dialCode);
    if (!country) return phone.length >= 10; // Fallback

    const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
    // Check if it's numeric
    if (!/^[0-9]+$/.test(cleanPhone)) return false;
    
    // Use regex validation if available
    if (country.regex) {
      return country.regex.test(cleanPhone);
    }
    
    return cleanPhone.length >= country.minLength && cleanPhone.length <= country.maxLength;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Real-time validation
    if (name === 'email') {
      if (value && !validateEmail(value)) {
        setErrors(prev => ({ ...prev, email: 'Please enter a valid email address' }));
      } else {
        setErrors(prev => ({ ...prev, email: '' }));
      }
    }

    if (name === 'phone' || name === 'countryCode') {
      const phoneToCheck = name === 'phone' ? value : formData.phone;
      const codeToCheck = name === 'countryCode' ? value : formData.countryCode;
      
      if (phoneToCheck && !validatePhone(phoneToCheck, codeToCheck)) {
        const country = countryCodes.find(c => c.dial_code === codeToCheck);
        setErrors(prev => ({ 
          ...prev, 
          phone: country 
            ? `Invalid phone number format for ${country.name}`
            : 'Please enter a valid phone number' 
        }));
      } else {
        setErrors(prev => ({ ...prev, phone: '' }));
      }
    }
  };

  // Check if form is valid for submission
  const isFormValid = () => {
    // Required fields must be filled
    if (!formData.name || !formData.email || !formData.message) return false;
    
    // Validations must pass
    if (formData.email && !validateEmail(formData.email)) return false;
    if (formData.phone && !validatePhone(formData.phone, formData.countryCode)) return false;
    
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSending(true);
    setSubmitStatus('idle');

    try {
      // Using FormSubmit.co which requires only the destination email and no API keys
      // The first time you submit this form, you will receive an activation email at sanjayaswinraj@gmail.com
      const response = await fetch("https://formsubmit.co/ajax/frexims@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `New Quote Request - ${formData.category || 'General'}`,
          name: formData.name,
          email: formData.email, // User's email for Reply-To
          phone: `${formData.countryCode} ${formData.phone}`,
          company: formData.company || 'N/A',
          inquiry_type: formData.category,
          message: formData.message,
          _template: 'table', // Formats the email data in a nice table
          _captcha: 'false'   // Disable captcha for smoother UX
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', countryCode: '+91', company: '', category: '', message: '' });

        // Auto-hide success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
      } else {
        console.error('FormSubmit Error:', await response.text());
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Submission Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSending(false);
    }
  };

  const countryOptions = countryCodes.map(c => ({
    value: c.dial_code,
    label: `${c.code} (${c.dial_code})`,
    displayLabel: c.dial_code
  }));

  const inquiryOptions = [
    { value: "General Inquiry", label: "General Inquiry" },
    { value: "Product Sourcing", label: "Product Sourcing" },
    { value: "Logistics & Shipping", label: "Logistics & Shipping" },
    { value: "Partnership", label: "Partnership" }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <h1>Contact FR EXIMS</h1>
          <p>Ready to expand your business globally? Let's discuss your export requirements.</p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            
            {/* Left Column: Quote Form */}
            <div className="contact-form-wrapper">
              <div className="contact-form-header">
                <h2>Get Your Custom Quote</h2>
                <p>Fill out the form below with your requirements, and our experts will provide you with a detailed quote within 24 hours.</p>
              </div>
              
              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-floating">
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      placeholder=" " 
                      required 
                      value={formData.name}
                      onChange={handleChange}
                    />
                    <label htmlFor="name">Full Name *</label>
                  </div>
                  <div className="form-floating">
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      placeholder=" " 
                      required 
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <label htmlFor="email">Email Address *</label>
                    {errors.email && <span className="error-message">{errors.email}</span>}
                  </div>
                </div>

                <div className="form-row">
                  <div className="phone-group">
                    <div className="country-select-wrapper">
                      <CustomSelect
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleChange as any}
                        options={countryOptions}
                        label="Code"
                        className="country-select"
                      />
                    </div>
                    <div className="form-floating phone-input">
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        placeholder=" " 
                        value={formData.phone}
                        onChange={handleChange}
                        className={errors.phone ? 'error' : ''}
                      />
                      <label htmlFor="phone">Phone Number</label>
                    </div>
                    {errors.phone && <span className="error-message">{errors.phone}</span>}
                  </div>
                  <div className="form-floating">
                    <input 
                      type="text" 
                      id="company" 
                      name="company" 
                      placeholder=" " 
                      value={formData.company}
                      onChange={handleChange}
                    />
                    <label htmlFor="company">Company Name</label>
                  </div>
                </div>

                <div className="form-floating-custom">
                  <CustomSelect
                    name="category"
                    value={formData.category}
                    onChange={handleChange as any}
                    options={inquiryOptions}
                    label="Inquiry Type"
                  />
                </div>

                <div className="form-floating">
                  <textarea 
                    id="message" 
                    name="message" 
                    placeholder=" " 
                    required
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  <label htmlFor="message">Your Message *</label>
                </div>

                <button 
                  type="submit" 
                  className="btn-submit" 
                  disabled={isSending || !isFormValid()}
                  style={{ opacity: isFormValid() ? 1 : 0.6, cursor: isFormValid() ? 'pointer' : 'not-allowed' }}
                >
                  {isSending ? 'Sending...' : 'Request Quote'}
                </button>

                {submitStatus === 'success' && (
                  <div style={{ marginTop: '1.5rem', padding: '1rem', background: '#d4edda', color: '#155724', borderRadius: '8px', textAlign: 'center' }}>
                    Thank you! Your quote request has been received. We will contact you shortly.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div style={{ marginTop: '1.5rem', padding: '1rem', background: '#f8d7da', color: '#721c24', borderRadius: '8px', textAlign: 'center' }}>
                    Something went wrong. Please try again later.
                  </div>
                )}
              </form>
            </div>

            {/* Right Column: FAQ */}
            <div className="contact-faq">
              <div className="faq-header">
                <h3>Quote Process FAQ</h3>
                <p>Common questions about our quote process and pricing</p>
              </div>
              
              <div className="faq-list">
                <div className="faq-item">
                  <h4>What does your quote include?</h4>
                  <p>Our quotes include comprehensive breakdowns covering all service fees, documentation costs, shipping charges, insurance, customs duties (estimates), and any additional services. You'll receive a transparent, itemized quote with no hidden costs.</p>
                </div>

                <div className="faq-item">
                  <h4>How long is the quote valid?</h4>
                  <p>Our quotes are valid for 30 days from the date of issue. Prices may vary due to currency fluctuations, shipping rate changes, or regulatory updates. We'll inform you of any changes before proceeding with services.</p>
                </div>

                <div className="faq-item">
                  <h4>What are your payment terms?</h4>
                  <p>We offer flexible payment terms including advance payments, letters of credit, and milestone-based payments. Specific terms are discussed based on the project scope and our assessment of requirements.</p>
                </div>

                <div className="faq-item">
                  <h4>Can I change my requirements?</h4>
                  <p>Yes, you can modify your requirements anytime before we start processing your shipment. Simply contact us with the changes, and we'll provide a revised quote accordingly.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
