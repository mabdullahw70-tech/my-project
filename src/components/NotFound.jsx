import Button from "./Button";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
       <div className="flex flex-col justify-center items-center my-32">
            <div><i className="text-9xl fa-regular fa-face-sad-cry mb-8"></i></div>
            <h2 className="text-5xl mb-8 text-center">Oops! Not Found.</h2>
            <p className="mb-8
            ">The page you requested not found.</p>
            <Link to="/">
          <Button>
            Back to Home
          </Button>
        </Link>
       </div>
    </>
  )
}
