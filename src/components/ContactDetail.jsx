import Container from "./Container";
import Button from "./Button";

export default function ContactDetail() {
  return (
    <div className="py-12">
      <Container>
        <div className="grid lg:grid-cols-[2fr_1fr] gap-10">
          {/* Left Side */}
          <div>
            <div className="mb-6">
              <h1 className="text-2xl font-bold mb-2">
                Have you any question?
              </h1>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Pariatur, ratione! Laboriosam est, assumenda.
              </p>
            </div>

            <form className="space-y-4">
              {/* Row 1 */}
              <div className="flex flex-col lg:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="pl-4 border-2 w-full py-2 rounded"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="pl-4 border-2 w-full py-2 rounded"
                />
              </div>

              {/* Row 2 */}
              <div className="flex flex-col lg:flex-row gap-4">
                <input
                  type="number"
                  placeholder="Phone"
                  className="pl-4 border-2 w-full py-2 rounded"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="pl-4 border-2 w-full py-2 rounded"
                />
              </div>

              {/* Message */}
              <textarea
                placeholder="Message"
                rows={6}
                className="pl-4 border-2 w-full py-2 rounded"
              ></textarea>

              <Button>SUBMIT</Button>
            </form>
          </div>

          {/* Right Side (empty for now) */}
          <div>
            <div className="bg-slate-300 w-full h-full py-10 px-8 space-y-8">
              {/* Address */}
              <div className="flex items-start gap-4">
                <i className="fa-solid fa-map text-xl mt-1"></i>
                <div>
                  <h1 className="text-xl font-bold">Shop Address</h1>
                  <p className="text-gray-700">
                    34/8, East Hukupara <br />
                    Gifirtok, Sadan <br />
                    Country Name
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <i className="fa-solid fa-clock text-xl mt-1"></i>
                <div>
                  <h1 className="text-xl font-bold">Shop Hours</h1>
                  <p className="text-gray-700">
                    MON - FRIDAY: 8 to 9 PM <br />
                    SAT - SUN: 10 to 8 PM
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div className="flex items-start gap-4">
                <i className="fa-solid fa-address-book text-xl mt-1"></i>
                <div>
                  <h1 className="text-xl font-bold">Contact</h1>
                  <p className="text-gray-700">
                    Phone: +00 111 222 3333 <br />
                    Email: support@fruitkha.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
