import Button from "./Button";

export default function Banner() {
  return (
    <div className="bg-[url('/banner.jpg')] bg-cover bg-center py-20 text-left px-8">
      <h2 className="text-3xl font-bold">
        December sale is on!
      </h2>
      <p className="text-xl text-primary">Up to 50% off</p>
      <Button>Shop Now</Button>
    </div>
  );
}