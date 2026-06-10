import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import ProductTile from '../components/ProductTile';

function ProductFeature() {
  const { products } = useContext(ProductContext);
  const featured = products.filter((p) => p.featured === true);

  if (!featured.length) return null;

  return (
    <section className="featured-section w-full bg-[#0e1420] px-4 sm:px-8 py-10">
      <div className="featured-section-header">
        <h2>Featured Products</h2>
        <p>Hand-picked deals — hover to explore</p>
      </div>
      <div className="product-grid scene-3d max-w-6xl mx-auto">
        {featured.map((p) => (
          <ProductTile key={p.id} product={p} showAddToCart />
        ))}
      </div>
    </section>
  );
}

export default ProductFeature;
