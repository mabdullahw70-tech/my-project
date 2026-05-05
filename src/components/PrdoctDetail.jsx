import Button from "./Button";
import Container from "./Container";
import Products from "./Products";

export default function ProductDetail() {
  const homeProducts = [
    { name: "Strawberry", price: 85, img: "src/assets/product-img-1.jpg" },
    { name: "Berry", price: 70, img: "src/assets/product-img-2.jpg" },
    { name: "Lemon", price: 35, img: "src/assets/product-img-3.jpg" },
  ];

  return (
    <div className="overflow-x-hidden">
      <Container>
        <div className="grid md:grid-cols-[40%_60%] gap-10 py-20">
          
          {/* LEFT SIDE IMAGE */}
          <div>
            <div className="bg-slate-100 shadow-lg rounded-lg overflow-hidden">
              <img
                src="src/assets/product-img-5.jpg"
                alt="Product"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div>
            <div className="space-y-4">
              <h1 className="text-3xl font-semibold">
                Green apples have polyphenols
              </h1>

              <p>Per Kg</p>

              <h2 className="text-3xl font-bold">$50</h2>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
                sint dignissimos, rem commodi cum voluptatem quae reprehenderit
                repudiandae ea tempora incidunt ipsa.
              </p>

              {/* QUANTITY */}
              <input
                type="number"
                min={1}
                defaultValue={1}
                className="border w-24 h-12 text-center rounded-lg outline-none"
              />

              {/* BUTTON */}
              <div>
                <Button>Add to Cart</Button>
              </div>

              {/* CATEGORY */}
              <p>
                <span className="font-bold">Categories:</span> Fruits, Organic
              </p>

              {/* SHARE */}
              <h2 className="font-bold text-2xl">Share:</h2>
              <div className="flex gap-4 text-lg">
                <i className="fa-brands fa-facebook-f hover:text-orange-400 transition"></i>
                <i className="fa-brands fa-twitter hover:text-orange-400 transition"></i>
                <i className="fa-brands fa-google-plus-g hover:text-orange-400 transition"></i>
                <i className="fa-brands fa-linkedin hover:text-orange-400 transition"></i>
              </div>
            </div>
          </div>

        </div>
      </Container>

      {/* RELATED PRODUCTS */}
      <Products
        products={homeProducts}
        productHeading={
          <>
            <span className="text-orange-500">Related</span> Product
          </>
        }
      />
    </div>
  );
}