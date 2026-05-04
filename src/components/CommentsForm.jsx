import Button from "./Button";

export function CommentsForm() {
  return (
    <div className="mt-12">
      <h3 className="text-lg font-semibold mb-4">Leave a comment</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 border rounded-md w-full"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 border rounded-md w-full"
        />
      </div>

      <textarea
        placeholder="Your Message"
        className="w-full p-3 border rounded-md h-32 mb-4"
      />

      <Button>Submit</Button>
    </div>
  );
}
