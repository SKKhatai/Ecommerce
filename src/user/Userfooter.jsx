

function Userfooter() {
    return (
        <div className="adminfooter" style={{
            backgroundColor:"#092e52", padding:"20px", color:"white", display:"flex", 
            flexDirection:"row", alignItems:"center",
            justifyContent:"space-around", marginTop:"10rem", height:"30vh"
        }} >
            <div className="para1">
                <h3>Company</h3>
                <h4>About us</h4>
                <h4>Our Services</h4>
                <h4>Privacy Policy</h4>
                <h4>Contact Us</h4>
            </div>

            <div className="para1">
                <h3>Get Help</h3>
                <h4>FAQ</h4>
                <h4>Shopping</h4>
                <h4>Returns</h4>
                <h4>Order Status</h4>
                <h4>Payment Option</h4>
            </div>

            <div className="para1">
                <h3>Online Shop</h3>
                <h4>Watch</h4>
                <h4>Blog</h4>
                <h4>Shoes</h4>
                <h4>Dress</h4>
            </div>

            <div className="para1">
                <h3>Follow US</h3>
                <i className="fa-brands fa-facebook" href='#'></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-youtube"></i>
            </div>
        </div>
    )
}

export default Userfooter
