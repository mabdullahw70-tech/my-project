export default function ContactLocation() {
  return (
    <div>
      
      {/* Header */}
      <div className="bg-blue-950 w-full h-64 flex justify-center items-center text-3xl md:text-5xl text-white">
        <i className="fa-solid fa-location-arrow mr-4"></i>
        <h1>Find Our Location</h1>
      </div>

      {/* Map */}
      <div className="w-full h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6987.375285816269!2d72.69471879090136!3d32.08188679383919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1777970375951!5m2!1sen!2s"
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

    </div>
  );
}