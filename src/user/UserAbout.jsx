import UserNavbar from './UserNavbar'

function UserAbout() {
  return (
    <div>
      <UserNavbar/>
      <div className="px-6 py-12 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">About eKart</h1>
      
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <img
            src="https://images.pexels.com/photos/4464487/pexels-photo-4464487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="eKart Delivery"
            className="rounded-2xl shadow-md"
          />
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Your One-Stop Shop for Everything!</h2>
          <p className="text-gray-600 mb-4">
            At <strong>eKart</strong>, we bring you a wide range of products from electronics, fashion, home essentials,
            and more — all at the best prices. Our mission is to provide a smooth and reliable shopping experience for customers across India.
          </p>
          <p className="text-gray-600 mb-4">
            With secure payment methods, fast delivery, easy returns, and 24/7 customer support, we ensure your satisfaction with every purchase.
          </p>
          <p className="text-gray-600">
            Whether you're shopping from your home or on the go, eKart is here to make your online shopping easier, faster, and more affordable.
          </p>
        </div>
      </div>

      
    </div>
    </div>
  )
}

export default UserAbout
