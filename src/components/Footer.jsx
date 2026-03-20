import { Link } from "react-router-dom";

const locations = [
    { name: 'Aurora', address: '15290 E Iliff Ave', city: 'Aurora, CO 80014', phone: '(303) 369-3111' },
    { name: 'Denver', address: '3504 E 12th Ave.', city: 'Denver, CO 80206', phone: '(303) 284-3062' },
    { name: 'Greenwood Village', address: '4668 S. Yosemite St', city: 'Greenwood Village, CO 80111', phone: '(303) 770-2244' },
    { name: 'Lakewood', address: '7323 W. Alaska Dr.', city: 'Lakewood, CO 80226', phone: '(303) 984-5447' },
]

export default function Footer() {
    return (
        <footer className="bg-espresso text-cream/80 pt-16 pb-8">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

                    <div>
                        <h3 className="font-display text-2xl text-cream-mb-3">Idili &amp; Espresso</h3>
                        <p className="text-sm leading-relaxed text-cream/60">
                            South Indian-inspired café culture meets specialty coffee. Crafted with care in Colorado.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-xs tracking-widest uppercase font-medium text-gold mb-4">Hours</h4>
                        <p className="text-sm mb-1">Monday-riday</p>
                        <p className="text-cream text-sm/60 mb-3">6:30 AM - 3:00 PM</p>
                        <p className="text-sm mb-1">Saturday-Sunday</p>
                        <p className="text-cream/60 text-sm">7:00 AM - 3:00 PM</p>
                    </div>

                    <div>
                        <h4 className="text-xs tracking-widest uppercase font-medium text-gold mb-4">Locations</h4>
                        <div className="grid grid-cols-2 gap-4">
                            {locations.map((loc) => (
                                <div key={loc.name}>
                                    <p className="text-sm font-medium text-cream">{loc.name}</p>
                                    <p className="text-xs text-cream/60 leading-relaxed">{loc.address}<br />{loc.city}</p>
                                    </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-t border-cream/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-cream/40">
                    <p>&copy; {new Date().getFullYear()} Idili &amp; Espresso. All rights reserved.</p>
                    <p>
                        Built by {' '}
                        <a href="https://robowebsolutions.com" target="_blank" rel="noopener noreferrer" className="text-gold/70 hover:text-gold transition-colors">
                            Robo Web Solutions
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    )
}