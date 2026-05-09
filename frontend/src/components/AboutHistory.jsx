import { useState } from "react";
import Button from "./Button";
import Container from "./Container";

export default function AboutHistory() {
  // State to track if the video has been clicked
  const [isPlaying, setIsPlaying] = useState(false);

  // Replace this with the actual path to your vegetable basket image
  const thumbnailUrl = "src/assets/image2.png";

  return (
    <Container>
      <div className="grid md:grid-cols-2 gap-8 items-center py-16">
        {/* Left Column: Custom Video Player Facade */}
        <div>
          <div
            className="relative w-full aspect-square rounded-lg overflow-hidden shadow-md cursor-pointer group bg-gray-200"
            onClick={() => setIsPlaying(true)}
          >
            {!isPlaying ? (
              <>
                {/* Background Thumbnail Image */}
                <img
                  src={thumbnailUrl}
                  alt="Video thumbnail"
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-90"
                />

                {/* Custom Orange Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20   bg-[#F58220] hover:bg-[#1a202c]  rounded-full flex items-center justify-center shadow-lg shadow-white transition-transform duration-300 group-hover:scale-110">
                    
                    <i className=" text-black  text-2xl ml-1 fa-solid fa-play"></i>
                  </div>
                </div>
              </>
            ) : (
              /* The actual iframe, which loads and autoplays only after clicking */
              <iframe
                src="https://www.youtube.com/embed/05MLwuGVZhE?si=1iuyYeDG_i7dVn55&autoplay=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>

        {/* Right Column: Original Text Content */}
        <div>
          <p className="text-gray-400">Since Year 1999</p>
          <h2 className="text-5xl font-bold">
            We are <span className="text-orange-500">Fruitkha</span>
          </h2>
          <p className="my-4">
            Etiam vulputate ut augue vel sodales. In sollicitudin neque et massa
            porttitor vestibulum ac vel nisi. Vestibulum placerat eget dolor sit
            amet posuere. In ut dolor aliquet, aliquet sapien sed, interdum
            velit. Nam eu molestie lorem. <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
            facilis illo repellat veritatis minus, et labore minima mollitia qui
            ducimus.
          </p>
          <Button>Know More</Button>
        </div>
      </div>
    </Container>
  );
}
