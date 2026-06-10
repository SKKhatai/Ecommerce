function FilterProducts({ filters, onChange }) {
  function update(field, value) {
    onChange({ ...filters, [field]: value });
  }

  return (
    <aside className="filters-panel scene-3d">
      <div className="filters-panel-header">
        <i className="fa-solid fa-sliders" />
        <h3>Filters</h3>
      </div>

      <div className="filter-group">
        <label htmlFor="search">
          <i className="fa-solid fa-magnifying-glass" />
          Search
        </label>
        <input
          id="search"
          type="search"
          placeholder="Search products..."
          value={filters.search || ''}
          onChange={(e) => update('search', e.target.value)}
        />
      </div>

      <div className="filter-group">
        <label htmlFor="category">
          <i className="fa-solid fa-tags" />
          Category
        </label>
        <select
          id="category"
          value={filters.category}
          onChange={(e) => update('category', e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Shoes">Shoes</option>
          <option value="Electronics">Electronics</option>
          <option value="Mobile">Mobile</option>
          <option value="Groceries">Groceries</option>
          <option value="Dress Material">Dress Material</option>
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="brand">
          <i className="fa-solid fa-copyright" />
          Brand
        </label>
        <select id="brand" value={filters.brand} onChange={(e) => update('brand', e.target.value)}>
          <option value="">All Brands</option>
          <option value="nike">Nike</option>
          <option value="adidas">Adidas</option>
          <option value="puma">Puma</option>
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="price">
          <i className="fa-solid fa-indian-rupee-sign" />
          Price
        </label>
        <select id="price" value={filters.price} onChange={(e) => update('price', e.target.value)}>
          <option value="">Any Price</option>
          <option value="less500">Under ₹500</option>
          <option value="500-1000">₹500 – ₹1,000</option>
          <option value="1000-5000">₹1,000 – ₹5,000</option>
          <option value="5000-10000">₹5,000 – ₹10,000</option>
          <option value="10000 more">₹10,000+</option>
        </select>
      </div>

      <button
        type="button"
        className="filter-clear-btn"
        onClick={() => onChange({ category: '', brand: '', price: '', search: '' })}
      >
        <i className="fa-solid fa-rotate-left" /> Clear All Filters
      </button>
    </aside>
  );
}

export default FilterProducts;
