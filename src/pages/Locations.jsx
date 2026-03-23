const locations = [
    {
        name: 'Denver',
        address: '3504 E. 12th Ave.',
        city: 'Denver, CO 80206',
        phone: '(303) 284-3062',
        mapURL: 'https://maps.google.com/?q=3504+E+12th+Ave+Denver+CO+80206',
    },
    {
        name: 'Aurora',
        address: '15290 E Iliff Ave.',
        city: 'Aurora, CO 80014',
        phone: '(303) 369-3111',
        mapURL: 'https://maps.google.com/?q=15290+E+Iliff+Ave+Aurora+CO+80014',
    },
    {
        name: 'Greenwood Village',
        address: '4668 S. Yosemite St.',
        city: 'Greenwood Village, CO 80111',
        phone: '(303) 770-2244',
        mapURL: 'https://maps.google.com/?q=4668+S+Yosemite+St+Greenwood+Village+CO+80111',
    },
    {
        name: 'Lakewood',
        address: '7323 W. Alaska Dr.',
        city: 'Lakewood, CO 80226',
        phone: '(303) 984-5447',
        mapURL: 'https://maps.google.com/?q=7323+W+Alaska+Dr+Lakewood+CO+80226',
    },
]

function LocationCard({ location }) {
    return (
        <div className="border border-gold-light p-8 flex flex-col gap-4 hover:border:border-gold transition-colors duration-300 group">
            <div>
                <p className="text-xs tracking-widest uppercase text-gold font-medium mb-2">Colorado</p>
                <h3 className="font-display text-3xl text-espresso group-hover:text-mocha transition-colors duration-200">
                    {location.name}
                </h3>
                <div className="w-8 h-0.5 bg-gold mt-3" />
            </div>

            <div className="text-espresso/70 text-sm leading-relaxed">
                <p>{location.address}</p>
                <p>{location.city}</p>
            </div>

            <a href={`tel:${location.phone.replace(/\D/g, '')}`} className="text-sm text-mocha hover:text-gold transition-colors duration-200 font-medium">{location.phone}</a>

            <div className="pt-2">
                <a href={location.mapUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs tracking-widest uppercase font-medium text-espresso border border-espresso px-5 py-2.5 hover:bg-espresso hover:text-cream transition-all duration-200">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Get Directions
                </a>
            </div>
        </div>
    )
}

export default function Location() {
    return (
        <>
        <section className="pt-32 pb-16 px-6 bg-espresso text-center">
            <p className="text-xs tracking-[0.4em] uppercase text-gold font-medium mb-3">Find Us</p>
            <h1 className="font-display text-5xl md:text-6xl text-cream">Our Locations</h1>
            <div className="w-16 h-px bg-gold mx-auto mt-6" />
        </section>

        <section className="bg-mocha py-6 px-6 text-center">
            <p className="text-xs tracking-widest uppercase text-gold font-medium">
                Mon - Fri: 6:30 AM - 3:00 PM &nbsp;&nbsp;|&nbsp;&nbsp; Sat - Sun: 7:00 AM - 3:00 PM
            </p>
        </section>

        <section className="max-w-5xl mx-auto px-6 py-16">
            <div className="grid sm:grid-cols-2 gap-6">
                {locations.map((loc) => (
                    <LocationCard key={loc.name} location={loc} />
                ))}
            </div>
        </section>
        </>
    )
}