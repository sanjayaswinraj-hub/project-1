import React, { useState, useRef, useEffect } from 'react';
import '../../styles/customSelect.css';

interface Option {
  value: string;
  label: string;
  displayLabel?: string;
}

interface CustomSelectProps {
  name: string;
  value: string;
  onChange: (e: { target: { name: string; value: string } }) => void;
  options: Option[];
  label: string;
  className?: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ 
  name, 
  value, 
  onChange, 
  options, 
  label, 
  className = '' 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (optionValue: string) => {
    onChange({ target: { name, value: optionValue } });
    setIsOpen(false);
  };

  const selectedOption = options.find(opt => opt.value === value);

  return (
    <div 
      className={`custom-select-container ${isOpen ? 'open' : ''} ${value ? 'has-value' : ''} ${className}`} 
      ref={containerRef}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="custom-select-trigger">
        <span className="custom-select-value">
          {selectedOption ? (selectedOption.displayLabel || selectedOption.label) : ''}
        </span>
        <svg 
          className="custom-select-arrow" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
      <label className="custom-select-label">{label}</label>

      <div className="custom-select-options">
        {options.map((option, index) => (
          <div 
            key={`${option.value}-${index}`} 
            className={`custom-option ${option.value === value ? 'selected' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              handleSelect(option.value);
            }}
          >
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomSelect;
