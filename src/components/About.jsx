import Button from "./Button";

export default function About() {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center px-8 py-16">
      <img src="/about.jpg" className="rounded-lg" />

      <div>
        <p className="text-primary">Since 1999</p>
        <h2 className="text-3xl font-bold">We are Fruitkha</h2>
        <p className="my-4">
          We provide fresh organic fruits directly from farms.
        </p>
        <Button>Know More</Button>
      </div>
    </div>
  );
}