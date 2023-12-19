import { Check, X } from "lucide-react";

export function NotiFicationActions() {
  return (
    <div className="flex gap-2">
      <button className="bg-zinc-700 p-2 rounded-md">
        <X size={16} color="white" />
      </button>
      <button className="bg-violet-600 p-2 rounded-md">
        <Check size={16} color="white" />
      </button>
    </div>
  );
}
