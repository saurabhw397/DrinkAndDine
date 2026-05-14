import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-8xl mb-6">🍽️</div>
        <h1 className="font-serif text-4xl font-bold text-foreground mb-3">Page Not Found</h1>
        <p className="text-muted-foreground mb-8">
          Looks like this dish isn't on our menu. Let's get you back to the table.
        </p>
        <Link
          to="/"
          className="gold-gradient text-primary-foreground px-8 py-3.5 rounded-full font-semibold text-sm hover:opacity-90 transition-all duration-200"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
