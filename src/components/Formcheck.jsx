export default function Formcheck({ type }) {
  return (
    <div className="space-y-4">
      <input className="input" placeholder="Name" />
      <input className="input" placeholder="Email" />
      <input className="input" placeholder="Address" />
      <input className="input" placeholder="Phone" />

      {type === "billing" && (
        <textarea className="input h-28" placeholder="Say Something" />
      )}
    </div>
  );
}
