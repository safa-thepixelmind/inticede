import ProductSection from './fabrics';
const fabrics = [
  { src: '/images/products/fabric1.jpg', name: 'Lycra blend' },
  { src: '/images/products/fabric2.jpg', name: 'Bamboo fabric' },
  { src: '/images/products/fabric3.jpg', name: 'Polyamide fabric' },
  { src: '/images/products/fabric4.jpg', name: 'Cotton Spandex' },
  { src: '/images/products/fabric5.jpg', name: 'DTY' },
  { src: '/images/products/fabric6.jpg', name: 'Power mesh' },
  { src: '/images/products/fabric7.jpg', name: 'Satin' },
  { src: '/images/products/fabric8.jpg', name: 'Jersey knit' },
  { src: '/images/products/fabric9.jpg', name: 'Mesh' },
];

const Trims = [
  { src: '/images/products/Trims1.jpg', name: 'Hook and eye' },
  { src: '/images/products/Trims2.png', name: 'Bows' },
  { src: '/images/products/Trims3.jpg', name: 'Ring sliders' },
  { src: '/images/products/Trims4.png', name: 'Elastics/laces' },
  { src: '/images/products/Trims5.jpg', name: 'Pearl bra straps' },
  { src: '/images/products/Trims6.jpg', name: 'Bra cllips' },
];

const Accessories = [
  { src: '/images/products/Accessories1.jpg', name: 'Stick on bras' },
  { src: '/images/products/Accessories2.jpg', name: 'Nipple pasties' },
  { src: '/images/products/Accessories3.png', name: 'Disposable bras' },
  { src: '/images/products/Accessories4.jpg', name: 'Stick on bras' },
  { src: '/images/products/Accessories5.png', name: 'Nipple pasties' },
  { src: '/images/products/Accessories6.jpg', name: 'Disposable bras' },
];

const Menswear = [
  { src: '/images/products/Menswear1.jpg', name: 'Stick on bras' },
  { src: '/images/products/Menswear2.png', name: 'Nipple pasties' },
  { src: '/images/products/Menswear3.jpg', name: 'Disposable bras' },

];

const Intimate = [
  { src: '/images/products/Intimate1.jpg', name: 'Stick on bras' },
  { src: '/images/products/Intimate2.jpg', name: 'Nipple pasties' },
  { src: '/images/products/Intimate3.jpg', name: 'Disposable bras' },

];

const Loungewear = [
  { src: '/images/products/Loungewear1.jpg', name: 'Stick on bras' },
  { src: '/images/products/Loungewear2.jpg', name: 'Nipple pasties' },
  { src: '/images/products/Loungewear3.jpg', name: 'Disposable bras' },

];

const Shapewear = [
  { src: '/images/products/Shapewear1.png', name: 'Stick on bras' },
  { src: '/images/products/Shapewear2.png', name: 'Nipple pasties' },
  { src: '/images/products/Shapewear3.png', name: 'Disposable bras' },

];

export default function Home() {
  return (
    <div className="bg-white">

      <ProductSection title='fabrics' description='From concept to creation, we provide all kinds of fabrics required for your production needs sourced with precision and reliability' images={fabrics} />
      <ProductSection title='Trims and finishes' description='From detailing to durability, we offer a complete range of trims and finishes—sourced with care to enhance both function and aesthetics in every garment' images={Trims} />
      <ProductSection title='Lingerie Accessories' description='Subtle yet essential, our lingerie accessories are carefully selected to enhance comfort, support, and confidence in every intimate piece' images={Accessories} />
      <ProductSection title='Menswear' description="Designed to move with you, our men's essentials combine fit, function, and a focus on all-day ease" images={Menswear} />
      <ProductSection title='Intimate wear' description='From fabric to fit, our intimate wear can be custom-designed to align perfectly with your vision and requirements' images={Intimate} />
      <ProductSection title='Loungewear' description="Whether you're after laid-back luxury or functional comfort, our loungewear can be custom-crafted to reflect your exact vision" images={Loungewear} />
      <ProductSection title='Shapewear' description="Designed to smooth, shape, and support, our shapewear can be custom-crafted to meet your specific fit, function, and fabric requirements." images={Shapewear} />
    </div>
  );
}  