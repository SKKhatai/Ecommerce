import { useContext, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';
import ProductCard from './ProductCard';
import FilterProducts from './FilterProducts';
import Userfooter from './Userfooter';
import '../Style/Userviewproducts.css';

const defaultFilters = { category: '', brand: '', price: '', search: '' };

function Userviewproducts() {
  const { products, loading } = useContext(ProductContext);
  const [filters, setFilters] = useState(defaultFilters);
  const [sort, setSort] = useState('default');
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    let result = products.filter((p) => {
      if (filters.search && !p.name?.toLowerCase().includes(filters.search.toLowerCase())) {
        return false;
      }
      if (filters.category && p.category?.toLowerCase() !== filters.category.toLowerCase()) {
        return false;
      }
      if (filters.brand && !p.name?.toLowerCase().includes(filters.brand.toLowerCase())) {
        return false;
      }
      if (filters.price) {
        const price = Number(p.price);
        const ranges = {
          less500: [0, 500],
          '500-1000': [500, 1000],
          '1000-5000': [1000, 5000],
          '5000-10000': [5000, 10000],
          '10000 more': [10000, Infinity],
        };
        const [min, max] = ranges[filters.price] || [0, Infinity];
        if (price < min || price > max) return false;
      }
      return true;
    });

    if (sort === 'price-low') result = [...result].sort((a, b) => Number(a.price) - Number(b.price));
    if (sort === 'price-high') result = [...result].sort((a, b) => Number(b.price) - Number(a.price));
    if (sort === 'name') result = [...result].sort((a, b) => a.name.localeCompare(b.name));

    return result;
  }, [products, filters, sort]);

  return (
    <div className="products-page">
      <div className="orb orb-red" />
      <div className="orb orb-blue" />

      <div className="products-inner">
        <header className="products-hero">
          <span className="products-hero-badge">Shop Now</span>
          <h1>
            Explore Our <span>Products</span>
          </h1>
          <p>Discover deals on electronics, fashion, groceries and more — all in one place.</p>
        </header>

        <nav className="products-breadcrumb">
          <Link to="/">Home</Link>
          <span>›</span>
          <span className="current">Products</span>
        </nav>

        <button
          type="button"
          className="filter-toggle-btn"
          onClick={() => setFiltersOpen((o) => !o)}
        >
          <i className={`fa-solid ${filtersOpen ? 'fa-xmark' : 'fa-filter'}`} />
          {filtersOpen ? 'Hide Filters' : 'Show Filters'}
        </button>

        <div className="products-layout">
          <div className={`filters-panel-wrap ${filtersOpen ? 'open' : ''}`}>
            <FilterProducts filters={filters} onChange={setFilters} />
          </div>

          <div className="products-main">
            <div className="products-toolbar">
              <p className="products-count">
                Showing <strong>{filtered.length}</strong> of <strong>{products.length}</strong>{' '}
                products
              </p>
              <div className="products-sort">
                <label htmlFor="sort">Sort by</label>
                <select id="sort" value={sort} onChange={(e) => setSort(e.target.value)}>
                  <option value="default">Default</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name A–Z</option>
                </select>
              </div>
            </div>

            {loading ? (
              <div className="products-loading">
                <div className="products-loading-spinner" />
                <p>Loading products...</p>
              </div>
            ) : (
              <ProductCard
                products={filtered}
                onClearFilters={() => setFilters(defaultFilters)}
              />
            )}
          </div>
        </div>
      </div>

      <Userfooter />
    </div>
  );
}

export default Userviewproducts;
