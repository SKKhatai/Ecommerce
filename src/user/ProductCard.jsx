import ProductTile from '../components/ProductTile';

function ProductCard({ products, onClearFilters }) {
  if (!products?.length) {
    return (
      <div className="products-empty scene-3d">
        <i className="fa-solid fa-box-open" />
        <h3>No products found</h3>
        <p>Try adjusting your filters or search term.</p>
        {onClearFilters && (
          <button type="button" onClick={onClearFilters}>
            Clear Filters
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="product-grid scene-3d">
      {products.map((p) => (
        <ProductTile key={p.id} product={p} showAddToCart />
      ))}
    </div>
  );
}

export default ProductCard;
