import type { ReactNode } from "react";

interface PlaceholderProps {
  label: string;
  children: ReactNode;
}

export function Placeholder({ label, children }: PlaceholderProps) {
  return (
    <div className="placeholder">
      <span className="placeholder__label">{label}</span>
      <div>{children}</div>
    </div>
  );
}
