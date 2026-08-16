import { Link } from "react-router-dom";
import type { ReactNode } from "react";

interface ButtonLinkProps {
  to: string;
  variant?: "primary" | "secondary";
  children: ReactNode;
}

export function ButtonLink({ to, variant = "secondary", children }: ButtonLinkProps) {
  const className = variant === "primary" ? "btn btn--primary" : "btn";
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}
