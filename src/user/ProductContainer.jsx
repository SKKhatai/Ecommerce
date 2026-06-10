import { useState } from 'react';

function ProductContainer({ singleProduct }) {
  if (!singleProduct) {
    return <p>Loading product...</p>;
  }

  const { name, price, desc, description, category, image, rating, brand, stock, imgArray } =
    singleProduct;
  const details = desc || description || '';
  const thumbnails = imgArray?.length ? imgArray : [image];
  const [heroImg, setHeroImg] = useState(image || thumbnails[0]);

  return (
    <div className="glass-panel p-6 sm:p-10 flex flex-col lg:flex-row gap-8 lg:gap-12 items-start card-3d">
      <div className="imgs flex flex-col sm:flex-row gap-4 w-full lg:w-1/2">
        {thumbnails.length > 1 && (
          <div className="flex sm:flex-col gap-2 order-2 sm:order-1">
            {thumbnails.map((img, imgId) => (
              <img
                src={img}
                key={imgId}
                alt=""
                className="h-16 w-16 sm:h-20 sm:w-20 object-cover rounded-xl cursor-pointer border-2 border-transparent hover:border-[#EB4235] transition-colors"
                onClick={() => setHeroImg(img)}
              />
            ))}
          </div>
        )}
        <div className="flex-1 flex items-center justify-center order-1 sm:order-2">
          <img
            src={heroImg}
            alt={name}
            className="float-3d max-h-64 sm:max-h-80 w-auto object-contain rounded-2xl"
          />
        </div>
      </div>

      <div className="content flex flex-col gap-3 flex-1">
        <span className="text-sm text-[#EB4235] font-medium uppercase tracking-wide">{category}</span>
        <h2 className="text-2xl sm:text-3xl font-bold">{name}</h2>
        {brand && <p className="text-gray-400">Brand: {brand}</p>}
        {rating && <p className="text-yellow-400">★ {rating}</p>}
        {stock != null && <p className="text-green-400 text-sm">In stock: {stock}</p>}
        <div className="text-3xl font-extrabold text-[#EB4235] my-2">₹{price}</div>
        <p className="text-gray-300 leading-relaxed">{details}</p>
      </div>
    </div>
  );
}

export default ProductContainer;
