import React from "react";
import "./footer.css";


const FooterPage = () => {
  return (
   <>
  <footer>
   <div className="content ">
     <div className="left box">
       <div className="upper">
         <div className="topic">About us</div>
         <p>Shoppkart is an Ecommerce Website</p>
       </div>
       <div className="lower">
         <div className="topic">Contact us</div>
         <div className="phone">
           <a href="#"><i className="fas fa-phone-volume"></i>+007 9089 6767</a>
         </div>
         <div className="email">
           <a href="#"><i className="fas fa-envelope"></i>shoppkart@gmail.com</a>
         </div>
       </div>
     </div>
     <div className="middle box">
       <div className="topic">Our Products</div>
       <div><a href="/products">Laptop</a></div>
       <div><a href="/products">T-Shirt</a></div>
       <div><a href="/Products">Phone</a></div>
       
     </div>
     <div className="right box">
       <div className="topic">Subscribe us</div>

         <div className="media-icons">
           <a href="#"><i className="fab fa-facebook-f"></i></a>
           <a href="#"><i className="fab fa-instagram"></i></a>
           <a href="#"><i className="fab fa-twitter"></i></a>
           <a href="#"><i className="fab fa-youtube"></i></a>
           <a href="#"><i className="fab fa-linkedin-in"></i></a>
         </div>
      
     </div>
   </div>
   <div className="bottom">
     <p>Copyright © 2020 <a href="/">Shoppkart</a> All rights reserved</p>
   </div>
   </footer>
   </>
  );
}

export default FooterPage;