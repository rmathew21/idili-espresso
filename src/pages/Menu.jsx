const menuData = [
    {
        category: 'Coffee',
        items: [
            { name: 'Drip Coffee', description: 'includes one refill', price: '$3.55' },
            { name: 'Espresso', description: '~2 oz of coffee extraction', price: '$3.25' },
            { name: 'Cortado', description: 'equal parts espresso + milk', price: '$4.77' },
            { name: 'Flat White', description: '8 oz | espresso + milk', price: '$4.77' },
            { name: 'Cappuccino', description: '8 oz | espresso + milk', price: '$4.77' },
            { name: 'Latte', description: '12 oz | espresso + milk', price: '$5.77' },
            { name: 'Cold Brew', description: 'cold brewed extraction', price: '$5.47' },
        ],
    },
    {
        category: 'Not Coffee',
        items: [
            { name: 'Chai Latte', description: '36 hour brewed chai', price: '$5.47' },
            { name: 'Matcha Latte', description: 'Japanese green tea + milk', price: '$5.77' },
            { name: 'Kadak Chai', description: 'traditional masala chai', price: '$5.77' },
            { name: 'London Fog', description: 'Earl Grey + steamed milk + lavender', price: '$5.77' },
        ],
    },
    {
        category: 'Idili Lattes',
        note: 'available hot or over ice · $6.77',
        items: [
            { name: 'Ube Hawaiian', description: 'coconut cream + cane syrup' },
            { name: 'Pistachio', description: 'pistachio + cardamom + cane syrup' },
            { name: 'Butterfly', description: 'ginger + chocolate' },
            { name: 'Seasonal Latte', description: 'ask the crew what\'s new' },
        ],
    },
    {
        category: 'Tacos',
        items: [
            {
                name: 'Korean BBQ Tacos',
                description: 'Korean BBQ inspired seasoned vegetables, chicken, cabbage, cilantro, onion, and a cashew cream sauce.',
                price: '$5.47',
            },
            {
                name: 'Just Egg & Potato',
                description: "Vegan 'just egg' & roasted red potato, homemade chimichurri sauce, with onions and cilantro.",
                price: '$5.47',
            },
            {
                name: "Jackfruit Chick'n",
                description: 'Sautéed jackfruit with fajita seasoning topped with cilantro, onion, and red salsa.',
                price: '$5.47',
            },
        ],
    },
]

function MenuItem({ item }) {
    return (
        <div className="flex items-start justify-between gap-4 py-4 border-b border-gold-light last:border-0">
            <div className="flex-1">
                <p className="font-medium text-espresso">{item.name}</p>
                {item.description && (
                    <p className="text-sm text-espresso/50 mt-0.5">{item.description}</p>
                )}
            </div>
            {item.price && (
                <span className="text-sm font-medium text-gold shrink-0">{item.price}</span>
            )}
        </div>
    )
}

export default function Menu() {
    return (
        <>
            <section className="pt-32 pb-16 px-6 bg-espresso text-center">
                <p className="text-xs tracking-[0.4em] uppercase text-gold font-medium mb-3">Discover</p>
                <h1 className="font-display text-5xl md:text-6xl text-cream">Our Menu</h1>
                <div className="w-16 h-px bg-gold mx-auto mt-6" />
            </section>

            <section className="max-w-4xl mx-auto px-6 py-16">
                <div className="grid md:grid-cols-2 gap-12">
                    {menuData.map((section) => (
                        <div key={section.category}>
                            <div className="mb-6">
                                <h2 className="font-display text-3xl text-espresso">{section.category}</h2>
                                {section.note && (
                                    <p className="text-xs text-mocha tracking-wide mt-1">{section.note}</p>
                                )}
                                <div className="w-10 h-0.5 bg-gold mt-2" />
                            </div>
                            <div>
                                {section.items.map((item) => (
                                    <MenuItem key={item.name} item={item} />
                                ))}
                            </div>
                            </div>
                    ))}
                </div>

                <div className="mt-16 bg-espresso text-center py-12 px-6">
                    <p className="text-xs tracking-[0.4em] uppercase text-gold font-medium mb-4">Full Menu</p>
                    <p className="font-display text-2xl text-cream mb-6">Want the complete menu?</p>
                    <a href="https://idiliespresso.com/idili_espresso_menu.pdf" target="_blank" rel="noopener noreferrer" className="inline-block text-xs-tracking-widest uppercase bg-gold text-expresso px-8 py-3 hover:bg-gold-light transition-colors duration-200 font-medium">Download PDF Menu</a>
                </div>

            </section>
        </>
    )
}

