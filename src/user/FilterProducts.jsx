import React from 'react'

function FilterProducts() {
  return (
   <div className="p-4 sticky top-0 left-0">
      <section className="flex flex-col gap-4">
        <select name="category" className="p-2 border rounded" >
          <option value="" disabled selected hidden>Category</option>
          <option value="woman">Woman</option>
          <option value="man">Man</option>
          <option value="kids">Kids</option>
        </select>

        <select name="brand" className="p-2 border rounded">

          <option value="" disabled selected hidden>Brand</option>
          <option value="nike">Nike</option>
          <option value="adidas">Adidas</option>
          <option value="puma">Puma</option>
        </select>

        <select name="price" className="p-2 border rounded">
          <option value="" disabled selected hidden>Price</option>
          <option value="less500">Less 500</option>
          <option value="500-1000">500-1000</option>
          <option value="1000-5000">1000-5000</option>
          <option value="5000-10000">5000-10000</option>
          <option value="10000 more">10000 more</option>
        </select>

        <select name="size" className="p-2 border rounded">
          <option value="" disabled selected hidden >Size</option>
          <option value="xs">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>
      </section>
    </div>
  )
}

export default FilterProducts
