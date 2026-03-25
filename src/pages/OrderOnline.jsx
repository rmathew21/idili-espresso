import { Link } from "react-router-dom";

export default function OrderOnline() {
  return (
    <div className="min-h-screen bg-espresso flex flex-col items-center justify-center text-center px-6">
      <p className="text-gold text-xs tracking-widest uppercase font-medium mb-4">
        Coming Soon
      </p>
      <h1 className="font-display text-4xl md:text-5xl text-cream mb-6">
        Online Ordering & Gift Cards
      </h1>
      <p className="text-cream/70 text-sm tracking-wide max-w-sm mb-10">
        We're working on bringing our South Indian flavors and specialty coffee
        straight to you. Check back soon.
      </p>
      <Link
        to="/"
        className="text-xs tracking-widest font-medium uppercase border border-gold text-gold px-8 py-3 hover:bg-gold hover:text-espresso transition-all duration-200"
      >
        Back to Home
      </Link>
    </div>
  );
}