import type { CategoryData } from '../types';

export const categories: CategoryData[] = [
  {
    id: 'iron-steel',
    title: 'Iron, Steel & Hardware Products',
    description: 'Premium quality stainless steel, galvanized steel, and hardware components for industrial and construction applications.',
    coverImage: '/img/products/fr exims/Stainless Steel (SS316  SS304) – Fasteners & Fixings/matias-santana-2ykXqiKHNfk-unsplash.jpg',
    subcategories: [
      {
        title: 'Reinforcement Steel',
        products: [
          { 
            name: 'Deformed - TMT Bars 12mm', 
            image: '/img/products/fr exims/Reinforcement Steel/Deformed - TMT Bars 12mm.png',
            tags: ['Structural', 'Concrete'],
            specifications: [
              { label: 'Diameter', value: '12mm' }, 
              { label: 'Standard Length', value: '12 Meters' }, 
              { label: 'Grade', value: 'Fe500 / BS4449' },
              { label: 'Type', value: 'Thermo Mechanically Treated' }
            ]
          },
          { 
            name: 'Deformed - TMT Bars 10mm', 
            image: '/img/products/fr exims/Reinforcement Steel/Deformed -TMT Bars 10mm.png',
            tags: ['Structural', 'Concrete'],
            specifications: [
              { label: 'Diameter', value: '10mm' }, 
              { label: 'Standard Length', value: '12 Meters' }, 
              { label: 'Grade', value: 'Fe500 / BS4449' },
              { label: 'Type', value: 'Thermo Mechanically Treated' }
            ]
          },
          { 
            name: 'Deformed - TMT Bars 8mm', 
            image: '/img/products/fr exims/Reinforcement Steel/Deformed -TMT Bars 8mm.png',
            tags: ['Structural', 'Concrete'],
            specifications: [
              { label: 'Diameter', value: '8mm' }, 
              { label: 'Standard Length', value: '12 Meters' }, 
              { label: 'Grade', value: 'Fe500 / BS4449' },
              { label: 'Type', value: 'Thermo Mechanically Treated' }
            ]
          },
          { 
            name: 'Deformed and TMT Bars', 
            image: '/img/products/fr exims/Reinforcement Steel/Deformed and TMT Bars.jpg',
            tags: ['Structural', 'Concrete'],
            specifications: [
              { label: 'Product Range', value: '8mm - 32mm' },
              { label: 'Type', value: 'High Yield Strength Deformed Bars' }
            ]
          },
          { 
            name: 'Deformed - TMT Bars 16mm', 
            image: '/img/products/fr exims/Reinforcement Steel/Deformed-TMT Bars 16mm.png',
            tags: ['Structural', 'Concrete'],
            specifications: [
              { label: 'Diameter', value: '16mm' }, 
              { label: 'Standard Length', value: '12 Meters' }, 
              { label: 'Grade', value: 'Fe500 / BS4449' },
              { label: 'Type', value: 'Thermo Mechanically Treated' }
            ]
          },
          { 
            name: 'Deformed - TMT Bars 20mm', 
            image: '/img/products/fr exims/Reinforcement Steel/Deformed-TMT Bars 20mm.png',
            tags: ['Structural', 'Concrete'],
            specifications: [
              { label: 'Diameter', value: '20mm' }, 
              { label: 'Standard Length', value: '12 Meters' }, 
              { label: 'Grade', value: 'Fe500 / BS4449' },
              { label: 'Type', value: 'Thermo Mechanically Treated' }
            ]
          }
        ]
      },
      {
        title: 'Stainless Steel (SS316/SS304) – Fasteners & Fixings',
        products: [
          { 
            name: 'U Bolt Nut Washer', 
            image: '/img/products/fr exims/Stainless Steel (SS316  SS304) – Fasteners & Fixings/U Bolt Nut Washer.png',
            tags: ['Industrial', 'Fasteners', 'Marine Grade'],
            specifications: [
              { label: 'Material Grade', value: 'SS316 / SS304' }, 
              { label: 'Corrosion Resistance', value: 'High' },
              { label: 'Kit Components', value: 'U-Bolt, 2 Nuts, 2 Washers' },
              { label: 'Application', value: 'Pipe Support, Marine' }
            ]
          },
          { 
            name: 'SS316 Threaded Rods (M10, M12)', 
            image: '/img/products/fr exims/Stainless Steel (SS316  SS304) – Fasteners & Fixings/SS316 Threaded Rods (M10, M12).png',
            tags: ['Industrial', 'Structural', 'Fasteners'],
            specifications: [
              { label: 'Material', value: 'Stainless Steel 316' }, 
              { label: 'Thread Size', value: 'M10, M12' },
              { label: 'Standard', value: 'DIN 975 / DIN 976' },
              { label: 'Length', value: '1m, 2m, 3m' }
            ]
          },
          { 
            name: 'SS316 Flat Washers (M6, M10, M12)', 
            image: '/img/products/fr exims/Stainless Steel (SS316  SS304) – Fasteners & Fixings/SS316 Flat Washers (M6, M10, M12).png',
            tags: ['Fasteners', 'Hardware'],
            specifications: [
              { label: 'Material', value: 'SS316 Marine Grade' }, 
              { label: 'Sizes Available', value: 'M6, M10, M12' },
              { label: 'Standard', value: 'DIN 125' },
              { label: 'Type', value: 'Form A Flat Washer' }
            ]
          },
          { 
            name: 'SS316 Nuts (M10, M12)', 
            image: '/img/products/fr exims/Stainless Steel (SS316  SS304) – Fasteners & Fixings/SS316 Nuts (M10, M12).png',
            tags: ['Fasteners', 'Hardware'],
            specifications: [
              { label: 'Material', value: 'SS316' }, 
              { label: 'Size', value: 'M10, M12' },
              { label: 'Standard', value: 'DIN 934' },
              { label: 'Type', value: 'Hexagon Nut' }
            ]
          },
          { 
            name: 'SS316 U-Bolts (¼", ⅜" – all sizes)', 
            image: '/img/products/fr exims/Stainless Steel (SS316  SS304) – Fasteners & Fixings/SS316 U-Bolts.png',
            tags: ['Fasteners', 'Piping'],
            specifications: [
              { label: 'Material', value: 'SS316' }, 
              { label: 'Sizes', value: '¼", ⅜" & Custom Sizes' },
              { label: 'Thread Type', value: 'UNC / Metric' },
              { label: 'Finish', value: 'Passivated' }
            ]
          },
          { 
            name: 'SS316 Anchor Bolts (M10, M12)', 
            image: '/img/products/fr exims/Stainless Steel (SS316  SS304) – Fasteners & Fixings/SS316 Anchor Bolts (M10, M12).png',
            tags: ['Anchors', 'Construction', 'Concrete'],
            specifications: [
              { label: 'Material', value: 'SS316' }, 
              { label: 'Bolt Size', value: 'M10, M12' },
              { label: 'Application', value: 'Concrete Fixing' },
              { label: 'Type', value: 'Through Bolt' }
            ]
          },
          { 
            name: 'SS316 Wedge Anchor Bolts (10mm, 12mm)', 
            image: '/img/products/fr exims/Stainless Steel (SS316  SS304) – Fasteners & Fixings/SS316 Wedge Anchor Bolts (10mm, 12mm).jpg',
            tags: ['Anchors', 'Heavy Duty'],
            specifications: [
              { label: 'Material', value: 'SS316' }, 
              { label: 'Diameter', value: '10mm, 12mm' },
              { label: 'Mechanism', value: 'Expansion Wedge' },
              { label: 'Load Capacity', value: 'Heavy Duty' }
            ]
          },
          { 
            name: 'SS316 Hex Head Self Tapping Screws', 
            image: '/img/products/fr exims/Stainless Steel (SS316  SS304) – Fasteners & Fixings/SS316 Hex Head Self Tapping Screws.jpg',
            tags: ['Screws', 'Roofing'],
            specifications: [
              { label: 'Material', value: 'SS316' }, 
              { label: 'Head Type', value: 'Hex Washer Head' }, 
              { label: 'Point Type', value: 'Self Tapping' },
              { label: 'Washer', value: 'EPDM Bonded Washer' }
            ]
          },
          { 
            name: 'SS316 Scotch Screws', 
            image: '/img/products/fr exims/Stainless Steel (SS316  SS304) – Fasteners & Fixings/SS316 Scotch Screw.png',
            tags: ['Screws', 'Construction'],
            specifications: [
              { label: 'Material', value: 'SS316' }, 
              { label: 'Type', value: 'Scotch / Yoke Screw' },
              { label: 'Corrosion Resistance', value: 'Excellent' }
            ]
          },
          { 
            name: 'Hexagonal Screws', 
            image: '/img/products/fr exims/Stainless Steel (SS316  SS304) – Fasteners & Fixings/Hexagonal Screws.png',
            tags: ['Screws', 'General Purpose'],
            specifications: [
              { label: 'Head Type', value: 'Hexagonal' }, 
              { label: 'Material', value: 'Stainless Steel / HDG' },
              { label: 'Standard', value: 'DIN 933 / DIN 931' }
            ]
          },
          { 
            name: 'Concrete Nails – Heavy Duty', 
            image: '/img/products/fr exims/Stainless Steel (SS316  SS304) – Fasteners & Fixings/Concrete Nails – Heavy Duty.jpg',
            tags: ['Nails', 'Construction', 'Masonry'],
            specifications: [
              { label: 'Type', value: 'Fluted Concrete Nail' }, 
              { label: 'Material', value: 'High Carbon Steel' },
              { label: 'Hardness', value: 'HRC 50+' },
              { label: 'Finish', value: 'Galvanized' }
            ]
          },
          { 
            name: 'Binding Wire (All Gauges)', 
            image: '/img/products/fr exims/Stainless Steel (SS316  SS304) – Fasteners & Fixings/Binding Wire (All Gauges).png',
            tags: ['Construction', 'Rebar'],
            specifications: [
              { label: 'Material', value: 'Annealed Steel Wire' }, 
              { label: 'Gauge', value: '16G, 18G, 20G, 22G' },
              { label: 'Packaging', value: 'Coils' },
              { label: 'Application', value: 'Rebar Tying' }
            ]
          }
        ]
      },
      {
        title: 'Stainless Steel – Clamps & Sections',
        products: [
          { 
            name: 'SS316 Quick Fit Insulated Clamps (25mm–160mm)', 
            image: '/img/products/fr exims/Stainless Steel – Clamps & Sections/SS316 Quick Fit Insulated Clamps (25mm–160mm).jpg',
            tags: ['Clamps', 'HVAC', 'Piping'],
            specifications: [
              { label: 'Material', value: 'SS316' }, 
              { label: 'Diameter Range', value: '25mm – 160mm' }, 
              { label: 'Lining', value: 'EPDM Rubber Insulation' },
              { label: 'Mechanism', value: 'Quick Locking' }
            ]
          },
          { 
            name: 'SS316 Angle Bars (30×30×3, 35×35×3, 50×50×5)', 
            image: '/img/products/fr exims/Stainless Steel – Clamps & Sections/SS316 Angle Bars (30×30×3, 35×35×3, 50×50×5).jpg',
            tags: ['Structural', 'Fabrication'],
            specifications: [
              { label: 'Material', value: 'SS316' }, 
              { label: 'Dimensions', value: '30×30×3, 35×35×3, 50×50×5 mm' },
              { label: 'Finish', value: 'Hot Rolled / Pickled' },
              { label: 'Length', value: '6 Meters' }
            ]
          },
          { 
            name: 'SS304 Sheet Corner Angles', 
            image: '/img/products/fr exims/Stainless Steel – Clamps & Sections/SS304 Sheet Corner Angles.png',
            tags: ['Fabrication', 'Finishing'],
            specifications: [
              { label: 'Material', value: 'SS304' }, 
              { label: 'Type', value: 'Folded Sheet Angle' },
              { label: 'Thickness', value: '1.0mm - 2.0mm' },
              { label: 'Finish', value: 'Brushed / Mirror' }
            ]
          },
          { 
            name: 'SS304 Flat Corner Radius Sections', 
            image: '/img/products/fr exims/Stainless Steel – Clamps & Sections/SS304 Flat Corner Radius Sections.png',
            tags: ['Fabrication', 'Architectural'],
            specifications: [
              { label: 'Material', value: 'SS304' }, 
              { label: 'Profile', value: 'Flat Corner Radius' },
              { label: 'Finish', value: 'Satin Finish' }
            ]
          }
        ]
      },
      {
        title: 'Galvanized Steel (GI/HDG) – Structural Steel',
        products: [
          { 
            name: 'GI Pipe 40mm × 1.6mm × 5.8m', 
            image: '/img/products/fr exims/GI  HDG Structural Steel/GI Pipe 40mm × 1.6mm × 5.8m.png',
            tags: ['Standard', 'Piping'],
            specifications: [
              { label: 'Outer Diameter', value: '40MM' },
              { label: 'Wall Thickness', value: '1.60MM' },
              { label: 'Length', value: '5.80 Meters' },
              { label: 'Coating', value: 'Pre-Galvanized Z180' }
            ]
          },
          { 
            name: 'GI Corrugated Sheets', 
            image: '/img/products/fr exims/GI  HDG Structural Steel/GI Corrugated Sheets.png',
            tags: ['Roofing', 'Cladding'],
            specifications: [
              { label: 'Material', value: 'Galvanized Iron' }, 
              { label: 'Profile', value: 'Sinusoidal Corrugated' },
              { label: 'Thickness', value: '0.30mm - 0.70mm' },
              { label: 'Coating', value: 'Zinc Coated' }
            ]
          },
          { 
            name: 'Galvanized Chequered Plate – 6mm', 
            image: '/img/products/fr exims/GI  HDG Structural Steel/Galvanized Chequered Plate – 6mm.png',
            tags: ['Flooring', 'Industrial', 'Safety'],
            specifications: [
              { label: 'Base Material', value: 'Mild Steel' }, 
              { label: 'Plate Thickness', value: '6mm (Base)' }, 
              { label: 'Finish', value: 'Hot Dip Galvanized' },
              { label: 'Pattern', value: 'Teardrop / Diamond' }
            ]
          },
          { 
            name: 'Galvanized Steel Angle Bars', 
            image: '/img/products/fr exims/GI  HDG Structural Steel/large-steel-factory-warehouse.jpg',
            tags: ['Structural', 'Framing'],
            specifications: [
              { label: 'Material', value: 'Galvanized Steel' }, 
              { label: 'Type', value: 'Equal / Unequal Angle' },
              { label: 'Coating Standard', value: 'BS EN ISO 1461' }
            ]
          },
          { 
            name: 'GI Hot Dip Galvanized Angles (50×3, 50×4, 50×5, 40×5)', 
            image: '/img/products/fr exims/GI  HDG Structural Steel/GI Hot Dip Galvanized Angles (50×3, 50×4, 50×5, 40×5).jpg',
            tags: ['Structural', 'Heavy Duty'],
            specifications: [
              { label: 'Material', value: 'HDG Steel' }, 
              { label: 'Sizes', value: '50×50×3, 50×50×4, 50×50×5, 40×40×5 mm' },
              { label: 'Zinc Coating', value: '>85 microns (avg)' }
            ]
          },
          { 
            name: 'HDG Steel Plates – 3mm/4mm/5mm/10mm', 
            image: '/img/products/fr exims/GI  HDG Structural Steel/HDG Steel Plates – 3mm.jpg',
            tags: ['Industrial', 'Fabrication'],
            specifications: [
              { label: 'Material', value: 'Hot Dip Galvanized Steel' }, 
              { label: 'Thickness Range', value: '3mm, 4mm, 5mm, 10mm' },
              { label: 'Grade', value: 'S275JR / S355JR' }
            ]
          },
          { 
            name: 'HDG H-Beam 8" × 6.5"', 
            image: '/img/products/fr exims/GI  HDG Structural Steel/HDG H-Beam 8 × 6.5.png',
            tags: ['Structural', 'Heavy Duty'],
            specifications: [
              { label: 'Profile', value: 'H-Beam / Universal Column' }, 
              { label: 'Dimensions', value: '8" × 6.5" (Approx 200x165mm)' },
              { label: 'Finish', value: 'Hot Dip Galvanized' }
            ]
          },
          { 
            name: 'HDG Lightning Poles (Type 2–6m, Type 3–10m, Type 4–2m)', 
            image: '/img/products/fr exims/GI  HDG Structural Steel/HDG Lightning Poles (Type 2 – 6m, Type 3 – 10m, Type 4 – 2m).png',
            tags: ['Electrical', 'Safety', 'Earthing'],
            specifications: [
              { label: 'Material', value: 'HDG Steel' }, 
              { label: 'Available Lengths', value: '2m, 6m, 10m' }, 
              { label: 'Pole Types', value: 'Type 2, 3, 4' },
              { label: 'Application', value: 'Lightning Protection System' }
            ]
          }
        ]
      },
      {
        title: 'Galvanized Steel – Accessories',
        products: [
          { 
            name: 'GI Coupler', 
            image: '/img/products/fr exims/GI Accessories/GI Coupler.png', 
            tags: ['Piping', 'Fittings'],
            specifications: [
              { label: 'Material', value: 'Malleable Iron' }, 
              { label: 'Finish', value: 'Galvanized' },
              { label: 'Thread', value: 'BSP / NPT' } 
            ] 
          },
          { 
            name: 'Clamps for 1 1/2 GI Pipe', 
            image: '/img/products/fr exims/GI Accessories/Clamps for 1 GI Pipe.png',
            tags: ['Industrial', 'Piping'],
            specifications: [
              { label: 'Pipe Size Compatibility', value: '1 1/2 inch' },
              { label: 'Material', value: 'GI (Galvanized Iron)' },
              { label: 'Type', value: 'Two-Bolt Pipe Clamp' }
            ]
          }
        ]
      },
      {
        title: 'Mild Steel (MS) – Structural & Formwork',
        products: [
          { 
            name: 'Adjustable Base Jacks', 
            image: '/img/products/fr exims/Mild Steel (MS) – Structural & Formwork/Adjustable Base Jacks.jpg',
            tags: ['Scaffolding', 'Formwork'],
            specifications: [
              { label: 'Stem Material', value: 'ERW MS Pipe' },
              { label: 'Pipe Thickness', value: '4mm' },
              { label: 'Total Length', value: '430mm' },
              { label: 'Adjustment Range', value: '300mm' }
            ]
          },
          { 
            name: 'Adjustable Shoring Jacks', 
            image: '/img/products/fr exims/Mild Steel (MS) – Structural & Formwork/Adjustable Shoring Jacks.jpg',
            tags: ['Scaffolding', 'Support'],
            specifications: [
              { label: 'Type', value: 'Telescopic Prop / Jack' },
              { label: 'Material', value: 'MS ERW Pipes' },
              { label: 'Grade', value: 'Heavy Duty' },
              { label: 'Finish', value: 'Painted / Galvanized' }
            ]
          },
          { 
            name: 'C-Purlins 50×100×2×5800mm', 
            image: '/img/products/fr exims/Mild Steel (MS) – Structural & Formwork/C-Purlins 50×100×2×5800mm.jpg',
            tags: ['Structural', 'Roofing'],
            specifications: [
              { label: 'Profile', value: 'C-Section' }, 
              { label: 'Dimensions', value: '100mm (Web) x 50mm (Flange)' }, 
              { label: 'Thickness', value: '2.0mm' },
              { label: 'Length', value: '5800mm' }
            ]
          },
          { 
            name: 'T-Truss Frame (Fabricated & HDG)', 
            image: '/img/products/fr exims/Mild Steel (MS) – Structural & Formwork/T-Truss Frame (Fabricated & HDG).png',
            tags: ['Structural', 'Prefab'],
            specifications: [
              { label: 'Type', value: 'T-Truss Frame' }, 
              { label: 'Fabrication', value: 'Welded MS Sections' },
              { label: 'Finish', value: 'Hot Dip Galvanized' }
            ]
          }
        ]
      },
      
    ]
  },
  {
    id: 'concrete-blocks',
    title: 'Concrete, Blocks & Masonry Products',
    description: 'High-quality concrete blocks, machinery, and masonry solutions for robust construction.',
    coverImage: '/img/products/fr exims/Hydraulic Tools/Hand Operated Hydraulic Pump.jpg',
    subcategories: [
      {
        title: 'Hydraulic Tools',
        products: [
          { 
            name: 'Hand Operated Hydraulic Pump', 
            image: '/img/products/fr exims/Hydraulic Tools/Hand Operated Hydraulic Pump.jpg', 
            tags: ['Tools', 'Hydraulic'],
            specifications: [
              { label: 'Operation', value: 'Manual / Hand Operated' }, 
              { label: 'Max Pressure', value: '700 Bar (10,000 PSI)' },
              { label: 'Oil Capacity', value: '600cc - 2000cc' },
              { label: 'Hose Connection', value: '3/8" NPT' }
            ] 
          },
          { 
            name: 'Hydraulic Crimping Head', 
            image: '/img/products/fr exims/Hydraulic Tools/Hydraulic Crimping Head.jpg', 
            tags: ['Tools', 'Electrical'],
            specifications: [
              { label: 'Crimping Range', value: '16 - 400mm²' },
              { label: 'Force', value: '12 Tons' },
              { label: 'Type', value: 'Hexagonal Crimping' }
            ] 
          },
          { 
            name: 'Hydraulic Cable Cutter', 
            image: '/img/products/fr exims/Hydraulic Tools/Hydraulic Cable Cutter.jpg', 
            tags: ['Tools', 'Electrical'],
            specifications: [
              { label: 'Cutting Capacity', value: 'Up to 50mm Cable' },
              { label: 'Cutting Force', value: '8 Tons' },
              { label: 'Mechanism', value: 'Hydraulic Scissor Action' }
            ] 
          }
        ]
      },
      {
        title: 'Concrete Machinery',
        products: [
          { 
            name: '1 Bag Hydraulic Hopper Concrete Mixer', 
            image: '/img/products/fr exims/Concrete Machinery/1 Bag Hydraulic Hopper Concrete Mixer.jpg', 
            tags: ['Machinery', 'Construction'],
            specifications: [
              { label: 'Mixing Capacity', value: '10/7 CFT (1 Bag)' }, 
              { label: 'Hopper Type', value: 'Hydraulic Operated' },
              { label: 'Power Source', value: 'Diesel Engine / Electric Motor' }
            ] 
          },
          { 
            name: '3 Bag Hydraulic Hopper Concrete Mixer', 
            image: '/img/products/fr exims/Concrete Machinery/3 Bag Hydraulic Hopper Concrete Mixer.jpg', 
            tags: ['Machinery', 'Heavy Duty'],
            specifications: [
              { label: 'Mixing Capacity', value: '3 Bags Cement' }, 
              { label: 'Hopper Type', value: 'Hydraulic Operated' },
              { label: 'Chassis', value: 'Heavy Duty Steel' }
            ] 
          },
          { 
            name: 'Electric Concrete Mixer – 3 Bag', 
            image: '/img/products/fr exims/Concrete Machinery/Electric Concrete Mixer – 3 Bag.jpg', 
            tags: ['Machinery', 'Electric'],
            specifications: [
              { label: 'Capacity', value: '3 Bag' }, 
              { label: 'Motor Power', value: '5HP / 7.5HP' },
              { label: 'Operation', value: 'Electric Motor Driven' }
            ] 
          }
        ]
      },
      {
        title: 'Block & Brick Manufacturing',
        products: [
          { 
            name: 'Hydraulic Concrete Block Making Machine', 
            image: '/img/products/fr exims/Block & Brick Manufacturing/Hydraulic Concrete Block Making Machine.jpg', 
            tags: ['Machinery', 'Manufacturing'],
            specifications: [
              { label: 'Type', value: 'Stationary / Egg Laying' }, 
              { label: 'Operation', value: 'Hydraulic Press' },
              { label: 'Production Capacity', value: '1000-1500 Blocks/Shift' }
            ] 
          },
          { 
            name: 'Fly Ash Bricks', 
            image: '/img/products/fr exims/Block & Brick Manufacturing/Fly Ash Bricks.jpg', 
            tags: ['Building Material', 'Eco-Friendly'],
            specifications: [
              { label: 'Composition', value: 'Fly Ash, Cement, Sand' },
              { label: 'Compressive Strength', value: '7.5 - 10 N/mm²' },
              { label: 'Size', value: '230 x 110 x 75 mm' }
            ] 
          },
          { 
            name: 'Bricks', 
            image: '/img/products/fr exims/Block & Brick Manufacturing/Bricks.jpg', 
            tags: ['Building Material', 'Standard'],
            specifications: [
              { label: 'Type', value: 'Red Clay / Cement Brick' },
              { label: 'Size', value: 'Standard Modular' },
              { label: 'Application', value: 'Wall Construction' }
            ] 
          },
          { 
            name: 'Refractory Fire Bricks', 
            image: '/img/products/fr exims/Block & Brick Manufacturing/Refractory Fire Bricks.jpg', 
            tags: ['Industrial', 'Thermal'],
            specifications: [
              { label: 'Temp Resistance', value: 'Up to 1400°C' },
              { label: 'Alumina Content', value: '30% - 40%' },
              { label: 'Application', value: 'Furnaces, Kilns, Ovens' }
            ] 
          }
        ]
      },
      {
        title: 'Pavers & Precast Products',
        products: [
          { 
            name: 'Concrete Pavers 300×300×60mm', 
            image: '/img/products/fr exims/Pavers & Precast Products/Concrete Pavers 300×300×60mm.jpg',
            tags: ['Paving', 'Outdoor'],
            specifications: [
              { label: 'Dimensions', value: '300×300mm' }, 
              { label: 'Thickness', value: '60mm' },
              { label: 'Material', value: 'High Strength Concrete' },
              { label: 'Finish', value: 'Shot Blasted / Smooth' }
            ]
          },
          { 
            name: 'Interlocking Paver Blocks', 
            image: '/img/products/fr exims/Pavers & Precast Products/Interlocking Paver Blocks.jpg', 
            tags: ['Paving', 'Roads'],
            specifications: [
              { label: 'Shape', value: 'Zig-Zag / Dumbbell' },
              { label: 'Thickness', value: '60mm / 80mm' },
              { label: 'Grade', value: 'M30 / M40 / M50' }
            ] 
          },
          { 
            name: 'Colorado Paver Blocks', 
            image: '/img/products/fr exims/Pavers & Precast Products/Colorado Paver Blocks.jpg', 
            tags: ['Paving', 'Decorative'],
            specifications: [
              { label: 'Style', value: 'Colorado Texture' },
              { label: 'Application', value: 'Walkways, Patios' },
              { label: 'Color', value: 'Multicolor Options' }
            ] 
          },
          { 
            name: 'Combi Paver Blocks', 
            image: '/img/products/fr exims/Pavers & Precast Products/Combi Paver Blocks.jpg', 
            tags: ['Paving', 'Modern'],
            specifications: [
              { label: 'Pattern', value: 'Combination Sizes' },
              { label: 'Look', value: 'Cobblestone Effect' }
            ] 
          },
          { 
            name: 'Flexi Paver Blocks', 
            image: '/img/products/fr exims/Pavers & Precast Products/Flexi Paver Blocks.jpg', 
            tags: ['Paving'],
            specifications: [
              { label: 'Feature', value: 'Flexible Interlocking' },
              { label: 'Application', value: 'Heavy Traffic Areas' }
            ] 
          },
          { 
            name: 'Designer Paving Blocks', 
            image: '/img/products/fr exims/Pavers & Precast Products/Designer Paving Blocks.jpg', 
            tags: ['Paving', 'Landscape'],
            specifications: [
              { label: 'Design', value: 'Custom Geometric' },
              { label: 'Finish', value: 'Textured Surface' }
            ] 
          },
          { 
            name: 'Paving Blocks', 
            image: '/img/products/fr exims/Pavers & Precast Products/Paving Blocks.jpg', 
            tags: ['Paving', 'Standard'],
            specifications: [
              { label: 'Type', value: 'Rectangular / Square' },
              { label: 'Usage', value: 'Driveways, Pathways' }
            ] 
          }
        ]
      }
    ]
  },
  {
    id: 'flooring-tiles',
    title: 'Flooring, Tiles, Marble & Stone',
    description: 'Premium quality tiles, marble, granite and outdoor flooring solutions for elegant spaces.',
    coverImage: '/img/products/fr exims/Tiles & Flooring/top-view-boards-mdf-material.jpg',
    subcategories: [
      {
        title: 'Tiles & Flooring',
        products: [
          { 
            name: 'Earth Matt 295×600 (R10)', 
            image: '/img/products/fr exims/Tiles & Flooring/Earth Matt 295×600 (R10).png',
            tags: ['Tiles', 'Ceramic'],
            specifications: [
              { label: 'Finish', value: 'Earth Matt' }, 
              { label: 'Size', value: '295mm × 600mm' }, 
              { label: 'Slip Rating', value: 'R10 (Anti-Slip)' },
              { label: 'Application', value: 'Bathroom, Kitchen' }
            ]
          },
          { 
            name: 'Pulpis Matt 600×600 (R10)', 
            image: '/img/products/fr exims/Tiles & Flooring/top-view-boards-mdf-material.jpg',
            tags: ['Tiles', 'Porcelain'],
            specifications: [
              { label: 'Design', value: 'Pulpis Marble Look' }, 
              { label: 'Size', value: '600mm × 600mm' }, 
              { label: 'Surface', value: 'Matt R10' },
              { label: 'Material', value: 'Glazed Porcelain' }
            ]
          },
          { 
            name: 'Raw Slate Grey 295×600 (R10)', 
            image: '/img/products/fr exims/Tiles & Flooring/Raw Slate Grey 295×600 (R10).jpg',
            tags: ['Tiles', 'Stone Look'],
            specifications: [
              { label: 'Texture', value: 'Raw Slate' }, 
              { label: 'Color', value: 'Grey' }, 
              { label: 'Size', value: '295mm × 600mm' },
              { label: 'Slip Resistance', value: 'R10' }
            ]
          },
          { 
            name: 'Raw Slate Grey 600×600 (R10)', 
            image: '/img/products/fr exims/Tiles & Flooring/Raw Slate Grey 600×600 (R10).jpg',
            tags: ['Tiles', 'Stone Look'],
            specifications: [
              { label: 'Texture', value: 'Raw Slate' }, 
              { label: 'Size', value: '600mm × 600mm' }, 
              { label: 'Rating', value: 'R10' }
            ]
          },
          { 
            name: 'Snow White 295×600 (Polished)', 
            image: '/img/products/fr exims/Tiles & Flooring/Snow White 295×600 (Polished).png',
            tags: ['Tiles', 'Wall'],
            specifications: [
              { label: 'Color', value: 'Snow White' }, 
              { label: 'Size', value: '295mm × 600mm' }, 
              { label: 'Finish', value: 'High Gloss Polished' },
              { label: 'Usage', value: 'Wall Cladding' }
            ]
          }
        ]
      },
      {
        title: 'Marble',
        products: [
          { 
            name: 'Marble – Dolomine', 
            image: '/img/products/fr exims/Marble/Marble – Dolomine.jpg', 
            tags: ['Natural Stone', 'Luxury'],
            specifications: [
              { label: 'Material', value: 'Natural Dolomite Marble' }, 
              { label: 'Color', value: 'White with Grey Veins' },
              { label: 'Finish', value: 'Polished / Honed' }
            ] 
          },
          { 
            name: 'Marble – Pulipis', 
            image: '/img/products/fr exims/Marble/Marble – Pulipis.jpg', 
            tags: ['Natural Stone', 'Luxury'],
            specifications: [
              { label: 'Material', value: 'Pulpis Marble' }, 
              { label: 'Tone', value: 'Warm Brown / Tobacco' },
              { label: 'Origin', value: 'Imported' }
            ] 
          },
          { 
            name: 'Marble – Slate Grey', 
            image: '/img/products/fr exims/Marble/Marble – Slate Grey.jpg', 
            tags: ['Natural Stone', 'Modern'],
            specifications: [
              { label: 'Material', value: 'Grey Marble' }, 
              { label: 'Texture', value: 'Slate Effect' },
              { label: 'Application', value: 'Flooring, Countertops' }
            ] 
          }
        ]
      },
      {
        title: 'Granite',
        products: [
          { 
            name: 'Polished Color Granite 300×99cm', 
            image: '/img/products/fr exims/Granite/Polished Color Granite 300×99cm.jpg',
            tags: ['Granite', 'Countertops'],
            specifications: [
              { label: 'Material', value: 'Natural Granite' }, 
              { label: 'Finish', value: 'Mirror Polish' }, 
              { label: 'Slab Size', value: '300cm × 99cm' },
              { label: 'Thickness', value: '18mm - 20mm' }
            ]
          }
        ]
      },
      {
        title: 'Steps & Outdoor Flooring',
        products: [
          { 
            name: 'Rock Slate Grey – Grooved Step', 
            image: '/img/products/fr exims/Steps & Outdoor Flooring/Rock Slate Grey – Grooved Step.jpg', 
            tags: ['Stairs', 'Outdoor'],
            specifications: [
              { label: 'Type', value: 'Stair Step' }, 
              { label: 'Feature', value: 'Anti-Slip Grooves' },
              { label: 'Look', value: 'Rock Slate Grey' }
            ] 
          },
          { 
            name: 'Rock Slate Grey – Non-Grooved Riser', 
            image: '/img/products/fr exims/Steps & Outdoor Flooring/Rock Slate Grey – Non-Grooved Riser.jpg', 
            tags: ['Stairs', 'Outdoor'],
            specifications: [
              { label: 'Type', value: 'Stair Riser' }, 
              { label: 'Surface', value: 'Smooth / Textured' },
              { label: 'Match', value: 'Matches Slate Grey Step' }
            ] 
          }
        ]
      }
    ]
  },
  {
    id: 'electricals',
    title: 'Electricals, Electronics & Power Systems',
    description: 'Complete cable management and power distribution solutions for industrial infrastructure.',
    coverImage: '/img/products/fr exims/Cable Management/Cable Trays (Perforated with Cover).png',
    subcategories: [
      {
        title: 'Cable Management',
        products: [
          { 
            name: 'Cable Tray Fittings (Tee Bend, Reducer)', 
            image: '/img/products/fr exims/Cable Management/Cable Tray Fittings (Tee Bend, Reducer).jpg', 
            tags: ['Electrical', 'Industrial'],
            specifications: [
              { label: 'Material', value: 'Pre-Galvanized / HDG' }, 
              { label: 'Components', value: 'Horizontal Tee, Reducer, Bend' },
              { label: 'Application', value: 'Cable Routing Turns' }
            ] 
          },
          { 
            name: 'Cable Trays (Perforated with Cover)', 
            image: '/img/products/fr exims/Cable Management/Cable Trays (Perforated with Cover).png', 
            tags: ['Electrical', 'Cable Support'],
            specifications: [
              { label: 'Type', value: 'Perforated Cable Tray' }, 
              { label: 'Includes', value: 'Snap-on / Screw-on Cover' },
              { label: 'Finish', value: 'Hot Dip Galvanized / Powder Coated' },
              { label: 'Widths', value: '50mm - 600mm' }
            ] 
          }
        ]
      }
    ]
  },
  {
    id: 'hvac',
    title: 'HVAC, Ducting & Air Systems',
    description: 'Professional ducting and air distribution components for efficient climate control.',
    coverImage: '/img/products/fr exims/Ducting & Supports/Profile Ducting with Fittings.jpg',
    subcategories: [
      {
        title: 'Ducting & Supports',
        products: [
          { 
            name: 'Duct Supporting Materials', 
            image: '/img/products/fr exims/Ducting & Supports/Duct Supporting Materials.jpg', 
            tags: ['HVAC', 'Hardware'],
            specifications: [
              { label: 'Components', value: 'Threaded Rods, C-Channels, Clamps' }, 
              { label: 'Material', value: 'Galvanized Steel' },
              { label: 'Application', value: 'Hanging Air Ducts' }
            ] 
          },
          { 
            name: 'Profile Ducting with Fittings', 
            image: '/img/products/fr exims/Ducting & Supports/Profile Ducting with Fittings.jpg', 
            tags: ['HVAC', 'Ductwork'],
            specifications: [
              { label: 'Type', value: 'Rectangular Ductwork' }, 
              { label: 'Material', value: 'GI Sheet (Zinc Coated)' },
              { label: 'Connection', value: 'Flange Joint' },
              { label: 'Fabrication', value: 'CNC Plasma Cut' }
            ] 
          }
        ]
      }
    ]
  },
  {
    id: 'plumbing-drainage',
    title: 'Plumbing, Drainage & Water Infrastructure',
    description: 'Comprehensive piping, drainage, and water management systems.',
    coverImage: '/img/products/fr exims/HDPE Piping Systems/high-voltage-infrastructure.jpg',
    subcategories: [
      {
        title: 'HDPE Piping Systems',
        products: [
          { 
            name: 'HDPE Bends', 
            image: '/img/products/fr exims/HDPE Piping Systems/HDPE Bends.jpg', 
            tags: ['Plumbing', 'Drainage'],
            specifications: [
              { label: 'Material', value: 'High Density Polyethylene' }, 
              { label: 'Angle', value: '45° / 90°' },
              { label: 'Connection', value: 'Butt Fusion / Electrofusion' }
            ] 
          },
          { 
            name: 'HDPE Couplers', 
            image: '/img/products/fr exims/HDPE Piping Systems/HDPE Couplers.jpg', 
            tags: ['Plumbing', 'Fittings'],
            specifications: [
              { label: 'Material', value: 'HDPE' }, 
              { label: 'Type', value: 'Straight Coupler' },
              { label: 'Pressure Rating', value: 'PN10 / PN16' }
            ] 
          },
          { 
            name: 'HDPE Pipes', 
            image: '/img/products/fr exims/HDPE Piping Systems/high-voltage-infrastructure.jpg', 
            tags: ['Plumbing', 'Infrastructure'],
            specifications: [
              { label: 'Material', value: 'PE100 / PE80' }, 
              { label: 'Application', value: 'Water Supply / Drainage' },
              { label: 'Diameters', value: '20mm - 630mm' }
            ] 
          },
          { 
            name: 'HDPE Tees', 
            image: '/img/products/fr exims/HDPE Piping Systems/HDPE Tees.jpg', 
            tags: ['Plumbing', 'Fittings'],
            specifications: [
              { label: 'Configuration', value: 'Equal / Reducing Tee' }, 
              { label: 'Material', value: 'HDPE' },
              { label: 'Joint Type', value: 'Fusion Weld' }
            ] 
          }
        ]
      },
      {
        title: 'Drain Covers',
        products: [
          { 
            name: 'DI Drain Covers B125 (All Sizes)', 
            image: '/img/products/fr exims/Drain Covers/DI Drain Covers B125 (All Sizes).jpg',
            tags: ['Drainage', 'Infrastructure'],
            specifications: [
              { label: 'Material', value: 'Ductile Iron (DI)' }, 
              { label: 'Load Class', value: 'B125 (12.5 Tonnes)' }, 
              { label: 'Application', value: 'Car Parks, Pedestrian Areas' },
              { label: 'Standard', value: 'EN 124' }
            ]
          }
        ]
      },
      {
        title: 'Manhole Covers',
        products: [
          { 
            name: 'B125 DS Solid Top', 
            image: '/img/products/fr exims/Manhole Covers/B125 DS Solid Top.jpg', 
            tags: ['Drainage', 'Heavy Duty'],
            specifications: [
              { label: 'Load Class', value: 'B125' }, 
              { label: 'Seal Type', value: 'Double Seal (DS)' },
              { label: 'Surface', value: 'Solid Top Anti-Slip' }
            ] 
          },
          { 
            name: 'B125 SS Solid Top', 
            image: '/img/products/fr exims/Manhole Covers/B125 SS Solid Top.jpg', 
            tags: ['Drainage'],
            specifications: [
              { label: 'Load Class', value: 'B125' }, 
              { label: 'Seal Type', value: 'Single Seal (SS)' },
              { label: 'Material', value: 'Ductile Iron' }
            ] 
          },
          { 
            name: 'D400 SS Solid Top (With -Without GRP)', 
            image: '/img/products/fr exims/Manhole Covers/D400 SS Solid Top (With -Without GRP).jpg', 
            tags: ['Drainage', 'Heavy Duty'],
            specifications: [
              { label: 'Load Class', value: 'D400 (40 Tonnes)' }, 
              { label: 'Application', value: 'Main Roads / Highways' }, 
              { label: 'Option', value: 'GRP Sealing Plate Available' }
            ] 
          }
        ]
      },
      {
        title: 'Plastic & Polymer Products',
        products: [
          { 
            name: 'Plastic Cable Protection Covers', 
            image: '/img/products/fr exims/Plastic & Polymer Products/Plastic Cable Protection Covers.jpg', 
            tags: ['Utilities', 'Safety'],
            specifications: [
              { label: 'Material', value: 'Heavy Duty Polyethylene' }, 
              { label: 'Color', value: 'Red (Electric) / Blue (Water)' },
              { label: 'Feature', value: 'Interlocking Ends' }
            ] 
          },
          { 
            name: 'Polythene Membrane (All Gauges)', 
            image: '/img/products/fr exims/Plastic & Polymer Products/Polythene Membrane (All Gauges).jpg', 
            tags: ['Construction', 'Waterproofing'],
            specifications: [
              { label: 'Material', value: 'LDPE / HDPE' }, 
              { label: 'Gauges', value: '500, 1000, 1200 Gauge' },
              { label: 'Use', value: 'Damp Proof Membrane (DPM)' }
            ] 
          }
        ]
      },
      {
        title: 'Waterproofing Materials',
        products: [
          { 
            name: 'Waterproof Fiberglass Mesh', 
            image: '/img/products/fr exims/Waterproofing Materials/Waterproof Fiberglass Mesh.jpeg', 
            tags: ['Waterproofing', 'Reinforcement'],
            specifications: [
              { label: 'Material', value: 'Alkali Resistant Fiberglass' }, 
              { label: 'Weight', value: '45g/m² - 160g/m²' },
              { label: 'Application', value: 'Reinforcing Waterproof Coats' }
            ] 
          }
        ]
      }
    ]
  },
  {
    id: 'machinery',
    title: 'Construction Machinery & Site Equipment',
    description: 'Heavy-duty machinery and equipment for construction sites.',
    coverImage: '/img/products/fr exims/Heavy Equipment/heavy-machinery-used-construction-industry-engineering (1).jpg',
    subcategories: [
      {
        title: 'Heavy Equipment',
        products: [
          { 
            name: 'Fleet Guard Genset', 
            image: '/img/products/fr exims/Heavy Equipment/Fleet Guard Genset.png', 
            tags: ['Power Generation', 'Industrial'],
            specifications: [
              { label: 'Type', value: 'Diesel Generator Set' }, 
              { label: 'Filtration', value: 'Fleetguard Filtration System' },
              { label: 'Power Output', value: 'Various kVA Ratings' }
            ] 
          },
          { 
            name: 'Forklift', 
            image: '/img/products/fr exims/Heavy Equipment/Forklift.jpg', 
            tags: ['Material Handling'],
            specifications: [
              { label: 'Load Capacity', value: '3 Ton / 5 Ton' }, 
              { label: 'Fuel Type', value: 'Diesel / Electric' },
              { label: 'Lift Height', value: '3m - 6m' }
            ] 
          },
          { 
            name: 'Tractors & Implements', 
            image: '/img/products/fr exims/Heavy Equipment/Tractors & Implements.png', 
            tags: ['Agriculture', 'Construction'],
            specifications: [
              { label: 'Engine Power', value: '50 HP - 90 HP' }, 
              { label: 'Drive', value: '2WD / 4WD' },
              { label: 'Attachments', value: 'Loader, Plough, Trailer' }
            ] 
          },
          { 
            name: 'JCB', 
            image: '/img/products/fr exims/Heavy Equipment/jcb.png', 
            tags: ['Construction', 'Earthmoving'],
            specifications: [
              { label: 'Type', value: 'Backhoe Loader' }, 
              { label: 'Engine Power', value: '74 HP' },
              { label: 'Operating Weight', value: '7,460 kg' },
              { label: 'Dig Depth', value: '4.77m' }
            ] 
          }
        ]
      },
      {
        title: 'Lifting & Handling',
        products: [
          { 
            name: 'Lifting Winch Machine', 
            image: '/img/products/fr exims/Lifting & Handling/Lifting Winch Machine.jpg', 
            tags: ['Lifting', 'Construction'],
            specifications: [
              { label: 'Capacity', value: '1 Ton - 5 Ton' }, 
              { label: 'Power', value: 'Electric Motor' },
              { label: 'Wire Rope', value: 'Steel Core' }
            ] 
          }
        ]
      },
      {
        title: 'Filters & Consumables',
        products: [
          { 
            name: 'Air Filter', 
            image: '/img/products/fr exims/Filters & Consumables/Air Filter.jpg', 
            tags: ['Maintenance'],
            specifications: [
              { label: 'Type', value: 'Heavy Duty Air Filter' }, 
              { label: 'Efficiency', value: '99.9%' },
              { label: 'Application', value: 'Engines / Compressors' }
            ] 
          },
          { 
            name: 'Fuel Filter', 
            image: '/img/products/fr exims/Filters & Consumables/Fuel Filter.jpg', 
            tags: ['Maintenance'],
            specifications: [
              { label: 'Type', value: 'Spin-on Fuel Filter' }, 
              { label: 'Media', value: 'Synthetic / Cellulose' },
              { label: 'Function', value: 'Water Separator' }
            ] 
          },
          { 
            name: 'Oil Filter', 
            image: '/img/products/fr exims/Filters & Consumables/Oil Filter.jpg', 
            tags: ['Maintenance'],
            specifications: [
              { label: 'Type', value: 'Lube Oil Filter' }, 
              { label: 'Micron Rating', value: '10 - 30 Microns' },
              { label: 'Durability', value: 'High Pressure Resistant' }
            ] 
          }
        ]
      },
      {
        title: 'Tyres & Accessories',
        products: [
          { 
            name: 'Front Tyre with Tube', 
            image: '/img/products/fr exims/Tyres & Accessories/Front Tyre with Tube.jpg', 
            tags: ['Tyres', 'JCB'],
            specifications: [
              { label: 'Position', value: 'Front Axle' }, 
              { label: 'Pattern', value: 'Rib / Lug' },
              { label: 'Includes', value: 'Tyre, Tube, Flap' }
            ] 
          },
          { 
            name: 'Rear Tyre Kit (JCB)', 
            image: '/img/products/fr exims/Tyres & Accessories/Rear Tyre Kit (JCB).jpg', 
            tags: ['Tyres', 'JCB'],
            specifications: [
              { label: 'Size', value: '16.9-28 / 14-25' }, 
              { label: 'Ply Rating', value: '12PR / 16PR' },
              { label: 'Traction', value: 'Heavy Duty Grip' }
            ] 
          }
        ]
      }
    ]
  },
  {
    id: 'wood-timber',
    title: 'Wood, Boards & Timber Products',
    description: 'High-quality natural wood and engineered boards for construction and furniture.',
    coverImage: '/img/products/fr exims/Engineered Wood Boards/Plywood.jpg',
    subcategories: [
      {
        title: 'Natural Wood',
        products: [
          { 
            name: 'Hardwood', 
            image: '/img/products/fr exims/Natural Wood/Hardwood.webp', 
            tags: ['Timber', 'Construction'],
            specifications: [
              { label: 'Type', value: 'Tropical Hardwood' }, 
              { label: 'Density', value: 'High' },
              { label: 'Usage', value: 'Structural / Joinery' }
            ] 
          },
          { 
            name: 'Timber', 
            image: '/img/products/fr exims/Natural Wood/Timber.jpg', 
            tags: ['Timber', 'Lumber'],
            specifications: [
              { label: 'Type', value: 'Sawn Timber' }, 
              { label: 'Grade', value: 'Construction Grade' },
              { label: 'Treatment', value: 'Untreated / Treated' }
            ] 
          }
        ]
      },
      {
        title: 'Engineered Wood Boards',
        products: [
          { 
            name: 'Film Faced Plywood', 
            image: '/img/products/fr exims/Engineered Wood Boards/Film Faced Plywood.png', 
            tags: ['Plywood', 'Formwork'],
            specifications: [
              { label: 'Surface', value: 'Phenolic Film' }, 
              { label: 'Core', value: 'Hardwood / Combi' },
              { label: 'Reuse', value: 'Multiple Uses (Shuttering)' }
            ] 
          },
          { 
            name: 'Laminated Plywood', 
            image: '/img/products/fr exims/Engineered Wood Boards/Laminated Plywood.jpg', 
            tags: ['Plywood', 'Furniture'],
            specifications: [
              { label: 'Finish', value: 'High Pressure Laminate' }, 
              { label: 'Core', value: 'MR / BWR Grade' },
              { label: 'Pattern', value: 'Wood Grain / Solid Color' }
            ] 
          },
          { 
            name: 'MDF Board', 
            image: '/img/products/fr exims/Engineered Wood Boards/MDF Board.jpg', 
            tags: ['Boards', 'Interior'],
            specifications: [
              { label: 'Material', value: 'Medium Density Fiberboard' }, 
              { label: 'Thickness', value: '2.5mm - 25mm' },
              { label: 'Surface', value: 'Smooth Sanded' }
            ] 
          },
          { 
            name: 'Marine Plywood', 
            image: '/img/products/fr exims/Engineered Wood Boards/Marine Plywood.jpg', 
            tags: ['Plywood', 'Waterproof'],
            specifications: [
              { label: 'Grade', value: 'BWP (Boiling Water Proof)' }, 
              { label: 'Standard', value: 'IS 710' },
              { label: 'Application', value: 'Wet Areas, Marine' }
            ] 
          },
          { 
            name: 'Ordinary Plywood', 
            image: '/img/products/fr exims/Engineered Wood Boards/Ordinary Plywood.jpg', 
            tags: ['Plywood', 'General'],
            specifications: [
              { label: 'Grade', value: 'MR (Moisture Resistant)' }, 
              { label: 'Usage', value: 'Furniture, Packaging' },
              { label: 'Core', value: 'Poplar / Eucalyptus' }
            ] 
          },
          { 
            name: 'Plywood', 
            image: '/img/products/fr exims/Engineered Wood Boards/Plywood.jpg', 
            tags: ['Plywood', 'Standard'],
            specifications: [
              { label: 'Type', value: 'Commercial Plywood' }, 
              { label: 'Thickness', value: '6mm, 12mm, 18mm' }
            ] 
          },
          { 
            name: 'Pre-Laminated Plywood', 
            image: '/img/products/fr exims/Engineered Wood Boards/Pre-Laminated Plywood.png', 
            tags: ['Plywood', 'Ready to Use'],
            specifications: [
              { label: 'Finish', value: 'Melamine Faced' }, 
              { label: 'Colors', value: 'Various Options' },
              { label: 'Time Saving', value: 'No Painting Required' }
            ] 
          }
        ]
      }
    ]
  },
  {
    id: 'safety',
    title: 'Safety, Warning & Site Protection',
    description: 'Essential safety gear and warning systems for site protection.',
    coverImage: '/img/products/fr exims/Safety & Utility/Safety Gloves.jpg',
    subcategories: [
      {
        title: 'Safety & Utility',
        products: [
          { 
            name: 'Jute Cloth', 
            image: '/img/products/fr exims/Safety & Utility/Jute Cloth.jpg', 
            tags: ['Utility', 'Curing'],
            specifications: [
              { label: 'Material', value: '100% Natural Jute' }, 
              { label: 'Usage', value: 'Concrete Curing / Packaging' },
              { label: 'GSM', value: 'Various Densities' }
            ] 
          },
          { 
            name: 'Safety Gloves', 
            image: '/img/products/fr exims/Safety & Utility/Safety Gloves.jpg', 
            tags: ['Safety', 'PPE'],
            specifications: [
              { label: 'Type', value: 'Cotton Knitted / Dipped' }, 
              { label: 'Protection', value: 'General Handling' },
              { label: 'Grip', value: 'Dotted / Latex Coated' }
            ] 
          }
        ]
      },
      {
        title: 'Warning & Identification',
        products: [
          { 
            name: 'Custom Printed Warning Tape (All Sizes)', 
            image: '/img/products/fr exims/Warning & Identification/Custom Printed Warning Tape (All Sizes).png', 
            tags: ['Safety', 'Warning'],
            specifications: [
              { label: 'Material', value: 'LDPE' }, 
              { label: 'Text', value: 'Customizable (Danger/Caution)' },
              { label: 'Colors', value: 'Red/White, Yellow/Black' },
              { label: 'Length', value: '100m / 200m / 500m' }
            ] 
          },
          { 
            name: 'Underground Warning Tape', 
            image: '/img/products/fr exims/Warning & Identification/Underground Warning Tape.png', 
            tags: ['Safety', 'Utility'],
            specifications: [
              { label: 'Application', value: 'Buried Cable/Pipe Marking' }, 
              { label: 'Material', value: 'Rot Resistant Polyethylene' },
              { label: 'Detectability', value: 'Detectable / Non-Detectable' },
              { label: 'Standards', value: 'Utility Color Codes' }
            ] 
          }
        ]
      }
    ]
  }
];
