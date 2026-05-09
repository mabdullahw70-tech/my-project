import  Container  from "./Container.jsx";

export default function Features() {
  return (
    <div className="bg-gray-100">
    <Container >
      <div className=" py-20 grid md:grid-cols-3 gap-16 text-center  ">
        <div className="flex items-center justify-start gap-4">
          <div className="border-2 border-dashed border-orange-500 rounded-full w-24 h-24 aspect-square flex items-center justify-center">
            <i className="text-2xl fa-solid fa-truck-fast"></i>
          </div>
          <div className="text-left">
            <h3 className="font-semibold">Free Shipping</h3>
            <p>when order over $75</p>
          </div>
        </div>
        <div className="flex items-center justify-start gap-4">
          <div className="border-2 border-dashed border-orange-500 rounded-full w-24 h-24 aspect-square flex items-center justify-center">
            <i class="text-2xl fa-solid fa-phone-volume"></i>
          </div>
          <div className="text-left">
            <h3 className="font-semibold">24/7 Support</h3>
            <p>Get Support all day</p>
          </div>
        </div>
        <div className="flex items-center justify-start gap-4">
          <div className="border-2 border-dashed border-orange-500 rounded-full w-24 h-24 aspect-square flex items-center justify-center">
            <i class="text-2xl fa-solid fa-rotate"></i>
          </div>
          <div className="text-left">
            <h3 className="font-semibold">Refund</h3>
            <p>Get Refund within 30 days</p>
          </div>
        </div>
      </div>
    </Container>
    </div>
  );
}
