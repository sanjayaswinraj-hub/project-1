export interface CountryCode {
  code: string;
  dial_code: string;
  name: string;
  minLength: number;
  maxLength: number;
  regex: RegExp;
}

export const countryCodes: CountryCode[] = [
  { code: 'IN', dial_code: '+91', name: 'India', minLength: 10, maxLength: 10, regex: /^[2-9]\d{9}$/ },
  { code: 'US', dial_code: '+1', name: 'United States', minLength: 10, maxLength: 10, regex: /^[2-9]\d{9}$/ },
  { code: 'GB', dial_code: '+44', name: 'United Kingdom', minLength: 10, maxLength: 11, regex: /^\d{10,11}$/ },
  { code: 'CA', dial_code: '+1', name: 'Canada', minLength: 10, maxLength: 10, regex: /^[2-9]\d{9}$/ },
  { code: 'AU', dial_code: '+61', name: 'Australia', minLength: 9, maxLength: 9, regex: /^[2-8]\d{8}$/ },
  { code: 'DE', dial_code: '+49', name: 'Germany', minLength: 10, maxLength: 11, regex: /^\d{10,11}$/ },
  { code: 'FR', dial_code: '+33', name: 'France', minLength: 9, maxLength: 9, regex: /^[1-9]\d{8}$/ },
  { code: 'AE', dial_code: '+971', name: 'United Arab Emirates', minLength: 9, maxLength: 9, regex: /^5\d{8}$/ },
  { code: 'SA', dial_code: '+966', name: 'Saudi Arabia', minLength: 9, maxLength: 9, regex: /^5\d{8}$/ },
  { code: 'CN', dial_code: '+86', name: 'China', minLength: 11, maxLength: 11, regex: /^1[3-9]\d{9}$/ },
  { code: 'JP', dial_code: '+81', name: 'Japan', minLength: 10, maxLength: 10, regex: /^\d{10}$/ },
  { code: 'SG', dial_code: '+65', name: 'Singapore', minLength: 8, maxLength: 8, regex: /^[89]\d{7}$/ },
  { code: 'MY', dial_code: '+60', name: 'Malaysia', minLength: 9, maxLength: 10, regex: /^1\d{8,9}$/ },
  { code: 'QA', dial_code: '+974', name: 'Qatar', minLength: 8, maxLength: 8, regex: /^[3567]\d{7}$/ },
  { code: 'OM', dial_code: '+968', name: 'Oman', minLength: 8, maxLength: 8, regex: /^9\d{7}$/ },
  { code: 'KW', dial_code: '+965', name: 'Kuwait', minLength: 8, maxLength: 8, regex: /^[569]\d{7}$/ },
  { code: 'BH', dial_code: '+973', name: 'Bahrain', minLength: 8, maxLength: 8, regex: /^3\d{7}$/ },
  { code: 'ZA', dial_code: '+27', name: 'South Africa', minLength: 9, maxLength: 9, regex: /^[6-8]\d{8}$/ },
  { code: 'RU', dial_code: '+7', name: 'Russia', minLength: 10, maxLength: 10, regex: /^9\d{9}$/ },
  { code: 'BR', dial_code: '+55', name: 'Brazil', minLength: 10, maxLength: 11, regex: /^[1-9]{2}9?\d{8}$/ }
];

export const getCountryByDialCode = (dialCode: string) => {
  return countryCodes.find(c => c.dial_code === dialCode) || countryCodes[0];
};
