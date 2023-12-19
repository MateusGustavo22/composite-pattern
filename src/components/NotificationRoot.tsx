import { ReactNode } from "react";

interface NotificationRootProps {
  children: ReactNode;
}

export default function NotificationRoot({ children }: NotificationRootProps) {
  return (
    <div className="flex px-6 gap-6 items-center py-4 rounded-md bg-zinc-900">
      {children}
    </div>
  );
}
