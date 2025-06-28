function ProductCard({product}) {
    if (!product) {
        return <p>Loading product...</p>;
    }

    return (
        <div className="product-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.map((p) => {
                const { id, name, price, desc, category, image, rating, brand, stock } = p;
                return (
                    <div key={id} className="product-card flex flex-col items-center justify-center border rounded-lg shadow-lg">
                        <img src={image} alt={name} className="w-full h-48 object-cover mb-4" />
                        {/* <h3 className="text-xl font-semibold mb-2">{name}</h3>
                        <p className="text-gray-600 mb-2">Brand: {brand}</p>
                        <p className="text-gray-600 mb-2">Category: {category}</p>
                        <p className="text-gray-600 mb-2">Rating: {rating}</p>
                        <p className="text-gray-600 mb-2">Stock: {stock}</p>
                        <p className="text-lg font-bold mb-2">Price: ${price}</p>
                        <p className="text-gray-700 mb-4">{desc}</p> */}

                        <div className="flex w-full item-center justify-between px-4 ">
                             <p className="text-lg font-bold text-gray-600">{name}</p>
                              <p className="text-lg font-bold text-gray-600">Price: ${price}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default ProductCard;
