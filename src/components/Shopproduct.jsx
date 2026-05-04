import Products from "../components/Products";

import img1 from "../assets/product-img-1.jpg";
import img2 from "../assets/product-img-2.jpg";
import img3 from "../assets/product-img-3.jpg";
import img4 from "../assets/product-img-4.jpg";
import img5 from "../assets/product-img-5.jpg";
import img6 from "../assets/product-img-6.jpg";


const shopProducts = [
  { name: "Strawberry", price: 85, category: "strawberry", img: img1 },
  { name: "Berry", price: 70, category: "berry", img: img2 },
  { name: "Lemon", price: 35, category: "lemon", img: img3 },
  { name: "Avocado", price: 50, category: "avocado", img: img4 },
  { name: "Apple", price: 45, category: "apple", img: img5 },
  { name: "Strawberry", price: 80, category: "strawberry", img: img6 },
];
export default function ShopProduct() {
  return <Products products={shopProducts} showFilter={true} />;
}
