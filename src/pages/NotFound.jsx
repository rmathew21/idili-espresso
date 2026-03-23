import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-cream">
            <p className="text-xs tracking-[0.4em] uppercase text-gold font-medium mb-4">404</p>
            <h1 className="font-display text-5xl md:text-6xl text-espresso mb-4">Page Not Found</h1>
            <div className="w-16 h-px bg-gold mx-auto mb-8" />
            <p className="text-espresso/60 text-sm max-w-sm mb-10">
                Looks like this page wandered off. Head back and grab a coffee instead.
            </p>
            <Link to="/" className="text-xs tracking-widest font-medium uppercase bg-espresso text-cream px-8 py-3 hover:bg-mocha transition-colors duration-200">
                Back to Home
            </Link>
        </section>
    )
}