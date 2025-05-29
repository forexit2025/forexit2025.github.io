import { X } from "lucide-react";

export default function MessageSent({ onClose }) {
  return (
    <div className="fixed top-5 right-5 bg-green-100 text-green-900 p-4 rounded-lg shadow-lg flex items-start gap-2 z-50">
      <div>
        <p className="font-semibold">Thanks for contacting us!</p>
      </div>
      <button onClick={onClose} className="ml-auto">
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
