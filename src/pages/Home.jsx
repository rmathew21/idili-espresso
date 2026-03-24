import { Link } from "react-router-dom";

const HERO_IMAGE = 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1800&q=85'
const COFFEE_IMAGE = '/lattee.jpg'
const FOOD_IMAGE = '/idily.png'

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

                {/* <a href="https://www.idiliespresso.com/store" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-xs tracking-widest font-medium uppercase bg-gold text-espresso px-8 py-3 hover:bg-gold-light transition-colors duration-200">
                    Order Online
                </a> */}
                <Link 
                        to="/order-online"
                        className="mt-4 inline-block text-xs tracking-widest font-medium uppercase bg-gold text-espresso px-8 py-3 hover:bg-gold-light transition-colors duration-200">
                        Order Online
                    </Link>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/50">
                <div className="w-px h-12 bg-cream/30-animate-pulse" />
            </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-1">

            <div className="group relative overflow-hidden aspect-square md:aspect-auto md:h-80">
                    <img src={COFFEE_IMAGE} alt="Coffee drinks" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-espresso/40 group-hover:bg-espresso/55 transition-colors duration-300" />
                <div className="relative h-full flex flex-col items-center justify-end p-8 text-center">
                    <h2 className="font-display text-2xl text-cream mb-3">Order Online</h2>
                    {/* <a href="https://www.idiliespresso.com/store" target="_blank" rel="noopener noreferrer" className="text-xs tracking-widest uppercase text-cream border border-gold px-5 py-2 hover:bg-gold hover:text-espresso transition-all duration-200">
                        Order Now
                    </a> */}
                    <Link 
                        to="/order-online"
                        className="text-xs tracking-widest uppercase text-cream border border-gold px-5 py-2 hover:bg-gold hover:text-espresso transition-all duration-200">
                        Order Online
                    </Link>
                </div>
            </div>

            <div className="group-relative overflow-hidden aspect-square md:aspect-auto md:h-80 bg-mocha flex flex-col items-center justify-center p-10 text-center">
                <div className="mb-6">
                    <svg className="w-12 h-12 mx-auto text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />    
                    </svg>
                </div>
                <h2 className="font-display text-2xl text-cream mb-3">Gift Cards</h2>
                <p className="text-cream/60 text-sm mb-6">Share the warmth of a perfect cup.</p>
                <a href="https://www.idiliespresso.com/store/p/gift-cards" target="_blank" rel="noopener noreferrer" className="text-xs tracking-widest uppercase text-cream border border-gold/50 px-5 py-2 hover:bg-gold hover:text-espresso hover:border-gold transition-all duration-200">
                    Shop Gift Cards
                </a>
            </div>

            <div className="group relative overflow-hidden aspect-square md:aspect-auto md:h-80">
                <img src={FOOD_IMAGE} alt="Masala dosa" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-espresso/40 group-hover:bg-espresso/55 transition-colors duration-300" />
                <div className="relative h-full flex flex-col items-center justify-end p-8 text-center">
                    <h2 className="font-display text-2xl text-cream mb-3">Download Menu</h2>
                    <a href="https://www.idiliespresso.com/s/pdfMenu.pdf" target="_blank" rel="noopener noreferrer" className="text-xs tracking-widest uppercase text-cream border border-gold px-5 py-2 hover:bg-gold hover:text-espresso transition-all duration-200">
                        View PDF
                    </a>
                </div>
            </div>
        </section>

        <section className="bg-espresso py-20 px-6 text-center">
            <div className="max-w-2xl mx-auto">
                <p className="text-xs tracking-[0.4em] uppercase text-gold font-medium mb-6">Our Story</p>
                <p className="font-display text-3xl md:text-4xl text-cream leading-relaxed italic">
                    "Where South Indian tradition meets specialty coffee culture."
                </p>
                <div className="w-16 h-px bg-gold mx-auto mt-8" />
            </div>
        </section>

        <section className="bg-gold-light py-10 px-6">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-20 text-center">
                <div>
                    <p className="text-xs tracking-widest uppercase font-medium text-mocha mb-1">Mon - Fri</p>
                    <p className="font-display text-2xl text-espresso">6:30 AM - 3:00 PM</p>
                </div>
                <div className="w-px h-10 bg-espresso/20 hidden md:block" />
                <div>
                    <p className="text-xs tracking-widest uppercase font-medium text-mocha mb-1">Sat - Sun</p>
                    <p className="font-display text-2xl text-espresso">7:00 AM - 3:00 PM</p>
                </div>
                <div className="w-px h-10 bg-espresso/20 hidden md:block" />
                <div>
                    <Link to="/locations" className="text-xs tracking-widest uppercase font-medium text-espresso border border-espresso px-6 py-2.5 hover:bg-espresso hover:text-cream transition-all duration-200 inline-block">
                        Find a location
                    </Link>
                </div>
            </div>
        </section>
        </>
    )
}
