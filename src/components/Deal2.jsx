import Container from "./Container";
import Button from "./Button";
import dealImg from "../assets/deal2image.png";

export default function Deal2() {
  return (
    <div className="overflow-hidden"
    style={{ backgroundImage: `url(${dealImg})` }}
    >
      
     

      <Container>
        <div className=" flex items-center min-h-[360px] md:min-h-[490px]"
        
        >
          
          {/* Left Content */}
          <div className="w-full md:w-1/2 px-6 sm:px-10 py-10">
            
            <h1 className="font-extrabold leading-tight text-[#1a2332] text-2xl sm:text-4xl md:text-5xl mb-4">
              December sale is on!
              <br />
              with big <span className="text-orange-500">Discount...</span>
            </h1>

            <div className="flex items-center gap-3 mb-6">
              <p className="text-sm text-gray-500 leading-tight">
                Sale!
                <br />
                Upto
              </p>

              <span className="text-5xl md:text-6xl font-black text-[#1a2332]">
                50%
              </span>

              <span className="text-base text-gray-500 font-medium">
                off
              </span>
            </div>

            <Button>
              Shop Now
            </Button>

          </div>
        </div>
      </Container>
    </div>
  );
}