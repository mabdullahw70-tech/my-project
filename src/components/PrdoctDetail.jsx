import Button from "./Button";
import Container from "./Container";
import Products from "./Products";

export default function PrdoctDetail() {
    
  const homeProducts = [
    { name: "Strawberry", price: 85, img: "src/assets/product-img-1.jpg" },
    { name: "Berry", price: 70, img: "src/assets/product-img-2.jpg" },
    { name: "Lemon", price: 35, img: "src/assets/product-img-3.jpg" },
  ];
  return (
    <div>
      <Container>
        <div className="grid md:grid-cols-[40%_60%] gap-10 py-40">
          <div>
            <div className="bg-slate-100 shadow-lg ">
              <img src="src\assets\product-img-5.jpg" alt="Product image" />
            </div>
          </div>
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
                repudiandae ea tempora incidunt ipsa, quisquam animi perferendis
                eos eum modi! Tempora, earum.
              </p>
              <input
                type="number"
                className="border w-24 h-12 text-center rounded-lg"
              />
              <div>
                <Button>Add to Cart</Button>
              </div>
              <p>
                <span className="font-bold">Categories:</span> Fruits , Orgnaic
              </p>
              <h2 className="font-bold text-2xl">Share:</h2>
              <div className="flex gap-3">
                <i class="fa-brands fa-facebook-f hover:text-orange-400 transition"></i>
                <i class="fa-brands fa-twitter hover:text-orange-400 transition"></i>
                <i class="fa-brands fa-google-plus-g hover:text-orange-400 transition"></i>
                <i class="fa-brands fa-linkedin hover:text-orange-400 transition"></i>
              </div>
            </div>
          </div>
        </div>
        <Products products={homeProducts} productHeading=<><span className="text-orange-500">Related</span> Product</>/>
      </Container>
    </div>
  );
}
