import { Link } from "react-router-dom";

const HERO_IMAGE = 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1800&q=85'
const COFFEE_IMAGE = 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=900&q=80'
const FOOD_IMAGE = 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=900&q=80'

export default function Home() {
    return (
        <>
        <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
            <img src={HERO_IMAGE} alt="Café atmosphere" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-espresso/50" />

            <div className="relative z-10 text-center px-6 flex flex-col items-center gap-6">

                <div className="flex flex-col items-center gap-2">
                    <p className="tex-xs tracking-[0.4em] uppercase text-gold font-medium">Specialty Café</p>
                    <h1 className="font-display text-5xl md:text-7xl text-cream leading-tight">
                        Idili &amp; Espresso
                    </h1>
                    <div className="w-16 h-px bg-gold mt-1" />
                </div>

                <p className="text-cream/80 text-sm tracking-widest uppercase font-light max-w-xs">
                    South Indian flavors · Specialty coffee · Colorado
                </p>

                <a href="https://www.idiliespresso.com/store" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-xs tracking-widest font-medium uppercase bg-gold text-espresso px-8 py-3 hover:bg-gold-light transition-colors duration-200">
                    Order Online
                </a>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/50">
                <div className="w-px h-12 bg-cream/30-animate-pulse" />
            </div>
        </section>
        
        </>
    )
}
