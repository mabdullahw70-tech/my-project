import Button from "./Button";
import Container from "./Container";

const products = [
  { name: "Strawberry", price: 85, img: "src\\assets\\product-img-1.jpg" },
  { name: "Berry", price: 70, img: "src\\assets\\product-img-2.jpg" },
  { name: "Lemon", price: 35, img: "src\\assets\\product-img-3.jpg" },
];

export default function Products() {
  return (
    <Container>
      <div className="py-16 text-center">
        <h2 className="text-[#1a202c] text-3xl font-bold">
          <span className="text-orange-500">Our</span> Product
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-24 ">
          {products.map((p) => (
            <div
              key={p.name}
              className=" w-full max-w-sm rounded-lg hover:scale-105 hover:shadow-xl   transition"
            >
              <img src={p.img} className="mx-auto h-auto" />
              <h1 className="mt-8 text-2xl font-bold">{p.name}</h1>
              <p className="mt-3 mb-4 text-xl font-semibold">${p.price}</p>
              <Button>Add to Cart</Button>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
