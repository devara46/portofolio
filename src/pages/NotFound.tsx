import { ButtonLink } from "../components/ButtonLink";

export function NotFound() {
  return (
    <div className="prose">
      <p className="eyebrow">404</p>
      <h1>Page not found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <div className="button-row">
        <ButtonLink to="/" variant="primary">
          Back to Home
        </ButtonLink>
      </div>
    </div>
  );
}
