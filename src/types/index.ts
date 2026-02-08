export interface ProductSpecification {
  label: string;
  value: string;
}

export interface Product {
  name: string;
  image: string;
  description?: string;
  tags?: string[];
  specifications?: ProductSpecification[];
}

export interface SubCategory {
  title: string;
  products: Product[];
}

export interface CategoryData {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  heroImage?: string;
  heroStyle?: React.CSSProperties;
  subcategories: SubCategory[]; // Array of subcategories, if only one list, we can have one subcategory with empty title or "All Products"
}
