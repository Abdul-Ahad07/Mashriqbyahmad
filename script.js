// Complete Official Menu Database with exact categories and prices
const menuData = [
    // MASHRIQ SIGNATURES
    { name: "Royal Platter", price: "Rs. 14,999", desc: "A generous feast of Mashriq grills, lamb shank, lamb chops, fish tikka, whole chicken mandi, served with rice, bread, mezze, and sides.", category: "signatures" },
    { name: "Chicken Mandi", price: "Rs. 2,299", desc: "Traditional aromatic Arabian rice topped with tender slow-cooked spiced chicken.", category: "signatures" },
    { name: "Steamed Mutton Shank", price: "Rs. 3,999", desc: "Tender, melt-in-the-mouth mutton shank steamed to perfection with rich authentic spices.", category: "signatures" },
    { name: "Lamb Rosh", price: "Rs. 4,545", desc: "Slow-cooked traditional mutton shank and lamb in a kujja with whole garlic, potatoes, and minimal spices.", category: "signatures" },
    { name: "Hummus Bil Dajaj", price: "Rs. 1,199", desc: "Creamy hummus topped with Arabic-spiced chicken, olive oil and warm khubz.", category: "signatures" },
    { name: "Mashriq Special Kunafa", price: "Rs. 1,499", desc: "Authentic Middle Eastern dessert layered with sweet cheese and topped with crushed pistachios.", category: "signatures" },

    // STARTERS & APPETIZERS
    { name: "Hummus Bil Dajaj", price: "Rs. 1,199", desc: "Creamy hummus topped with Arabic-spiced chicken, olive oil and warm khubz.", category: "starters" },
    { name: "Chargrilled Fiery Wings", price: "Rs. 999", desc: "Grilled chicken wings finished with a bold house chilli glaze.", category: "starters" },
    { name: "Crispy Dynamite Chicken", price: "Rs. 1,099", desc: "Crispy chicken bites tossed in our tangy dynamite sauce.", category: "starters" },
    { name: "Buttermilk Chicken Strips", price: "Rs. 999", desc: "Buttermilk-marinated chicken strips fried crisp and served with dipping sauce.", category: "starters" },
    { name: "Crispy Fish Strips with Fries", price: "Rs. 1,499", desc: "Golden fried fish strips accompanied by seasoned fries.", category: "starters" },
    { name: "Tempura Prawns", price: "Rs. 2,199", desc: "Crispy Japanese-style battered prawns served with special dip.", category: "starters" },
    { name: "Levantine Chicken Tacos", price: "Rs. 1,199", desc: "Fusion tacos loaded with spiced chicken and Levantine flavours.", category: "starters" },
    { name: "Peri Peri Chicken Bites", price: "Rs. 999", desc: "Juicy chicken bites tossed in fiery peri peri sauce.", category: "starters" },
    { name: "Masala Fries", price: "Rs. 599", desc: "Crispy french fries tossed in special aromatic spice mix.", category: "starters" },

    // SALADS
    { name: "Classic Caesar Salad", price: "Rs. 1,049", desc: "Crisp romaine lettuce, parmesan cheese, croutons with creamy Caesar dressing.", category: "salads" },
    { name: "Mashriq Summer Salad", price: "Rs. 1,199", desc: "Refreshing blend of seasonal greens, fruits, nuts, and signature house dressing.", category: "salads" },
    { name: "Fattoush Salad", price: "Rs. 1,099", desc: "Traditional Levantine salad with toasted pita bread, fresh vegetables, and sumac.", category: "salads" },
    { name: "Aegean Greek Salad", price: "Rs. 1,049", desc: "Cubes of feta cheese, olives, cucumbers, tomatoes, and crisp bell peppers.", category: "salads" },
    { name: "Fresh Green Salad", price: "Rs. 399", desc: "Simple platter of garden-fresh seasonal raw vegetables.", category: "salads" },

    // SOUPS
    { name: "Soup of the Day", price: "Rs. 599", desc: "Chef's special warm comforting soup prepared fresh daily.", category: "soups" },
    { name: "Cream of Broccoli Soup", price: "Rs. 599", desc: "Velvety smooth broccoli soup enriched with cream.", category: "soups" },
    { name: "Hot & Sour Soup", price: "Half: Rs. 999 | Family: Rs. 1,799", desc: "Classic spicy and tangy Asian soup with chicken and vegetables.", category: "soups" },
    { name: "Mashriq 19-B Soup", price: "Half: Rs. 1,149 | Family: Rs. 1,999", desc: "Signature rich broth loaded with premium ingredients and bold spices.", category: "soups" },

    // FROM THE GRILL - KEBABS
    { name: "Chicken Seekh Kebab", price: "Rs. 1,199", desc: "Minced chicken skewers infused with herbs and traditional spices.", category: "grill-kebabs" },
    { name: "Chicken Reshmi Kebab", price: "Rs. 1,399", desc: "Ultra-soft, melt-in-mouth chicken kebabs with cream and mild spices.", category: "grill-kebabs" },
    { name: "Chicken Cheese Kebab", price: "Rs. 1,499", desc: "Juicy chicken kebabs stuffed with gooey melted cheese.", category: "grill-kebabs" },
    { name: "Mutton Seekh Kebab", price: "Rs. 1,799", desc: "Rich minced mutton skewers cooked over glowing charcoal.", category: "grill-kebabs" },
    { name: "Turkish Kebab", price: "Rs. 1,999", desc: "Authentic Turkish-spiced signature grilled meat skewers.", category: "grill-kebabs" },
    { name: "Beef Seekh Kebab", price: "Rs. 1,499", desc: "Flavorful minced beef skewers seasoned with aromatic herbs.", category: "grill-kebabs" },

    // FROM THE GRILL - BONELESS
    { name: "Chicken Shish Taouk", price: "Rs. 1,599", desc: "Middle Eastern garlic-marinated boneless grilled chicken skewers.", category: "grill-boneless" },
    { name: "Chicken Malai Boti", price: "Rs. 1,699", desc: "Creamy, tender boneless chicken chunks grilled to perfection.", category: "grill-boneless" },
    { name: "Anari Chicken Boti", price: "Rs. 1,599", desc: "Juicy chicken boti infused with a tangy pomegranate twist.", category: "grill-boneless" },
    { name: "Chilli & Lime Chicken Boti", price: "Rs. 1,499", desc: "Zesty chicken chunks spiced with green chillies and fresh lime.", category: "grill-boneless" },

    // FROM THE GRILL - WITH BONES
    { name: "Mutton Champ", price: "Rs. 2,999", desc: "Tender grilled mutton chops marinated in secret spices.", category: "grill-bones" },
    { name: "Namkeen Mutton Tikka", price: "Rs. 2,899", desc: "Traditional salt-based authentic-flavored mutton tikka.", category: "grill-bones" },
    { name: "Chicken Tikka Leg", price: "Rs. 599", desc: "Classic charcoal-grilled chicken leg piece.", category: "grill-bones" },
    { name: "Chicken Tikka Breast", price: "Rs. 699", desc: "Juicy charcoal-grilled chicken breast piece.", category: "grill-bones" },
    { name: "Qalmi Tikka", price: "Rs. 1,299", desc: "Special large portion marinated traditional chicken tikka.", category: "grill-bones" },
    { name: "Chicken Tikka Boti", price: "Rs. 1,199", desc: "Classic bone-in or boneless succulent chicken tikka chunks.", category: "grill-bones" },

    // ARABIAN SIGNATURES
    { name: "Chicken Shawarma Wrap", price: "Rs. 599", desc: "Classic wrap filled with garlic sauce, pickles, and tender chicken shawarma.", category: "arabian" },
    { name: "Chicken Shawarma Platter", price: "Rs. 1,099", desc: "Open platter with shawarma chicken, fries, garlic dip, and khubz.", category: "arabian" },
    { name: "Chicken Mandi", price: "Rs. 2,299", desc: "Traditional aromatic Arabian rice topped with tender slow-cooked spiced chicken.", category: "arabian" },
    { name: "Steamed Mutton Shank", price: "Rs. 3,999", desc: "Tender, melt-in-the-mouth mutton shank steamed with rich spices.", category: "arabian" },

    // KHYBER & KARAHIS
    { name: "Mutton Karahi", price: "Half: Rs. 2,800 | Full: Rs. 4,500", desc: "Traditional tomato and ginger based fresh mutton karahi.", category: "karahis" },
    { name: "Chicken Karahi", price: "Half: Rs. 1,400 | Full: Rs. 2,400", desc: "Classic desi chicken karahi cooked in pure butter and tomatoes.", category: "karahis" },
    { name: "Chicken White Karahi", price: "Half: Rs. 1,500 | Full: Rs. 2,500", desc: "Creamy yogurt and black pepper based rich chicken karahi.", category: "karahis" },
    { name: "Dumba Karahi", price: "Half: Rs. 3,200 | Full: Rs. 5,800", desc: "Authentic fat-tail lamb karahi prepared with pure traditional spices.", category: "karahis" },

    // HANDI SELECTIONS
    { name: "Chicken Handi", price: "Rs. 1,499", desc: "Boneless chicken cooked slowly in a clay handi with rich gravy.", category: "handi" },
    { name: "Chicken Rajasthani Handi", price: "Rs. 1,599", desc: "Spicy and flavorful royal-style Rajasthani chicken handi.", category: "handi" },
    { name: "Chicken Chilli & Lime Handi", price: "Rs. 1,599", desc: "Tangy and spicy chicken handi finished with lime and green chillies.", category: "handi" },
    { name: "Chicken Patiala Handi", price: "Rs. 1,599", desc: "Rich gravy handi with boiled eggs and special Punjabi spices.", category: "handi" },
    { name: "Chicken Hara Masala Handi", price: "Rs. 1,499", desc: "Fresh green herb and mint based aromatic chicken handi.", category: "handi" },

    // CONTINENTAL SIGNATURES
    { name: "Chicken Cordon Bleu", price: "Rs. 2,199", desc: "Stuffed chicken breast with cheese and deli meat, crumbed and fried.", category: "continental" },
    { name: "Chicken Parmigiana", price: "Rs. 1,999", desc: "Crispy breaded chicken topped with marinara sauce and melted cheese.", category: "continental" },
    { name: "Swiss Polo Chicken", price: "Rs. 1,999", desc: "Grilled chicken topped with mushroom sauce and melted cheese.", category: "continental" },
    { name: "Grilled Stuffed Chicken", price: "Rs. 1,899", desc: "Juicy chicken stuffed with herbs and cheese, served with rich sauce.", category: "continental" },
    { name: "Tarragon Chicken Steak", price: "Rs. 1,699", desc: "Grilled chicken steak served with creamy tarragon sauce.", category: "continental" },
    { name: "Tangier Grilled Chicken", price: "Rs. 1,799", desc: "Moroccan-inspired spiced grilled chicken with distinct aromatic notes.", category: "continental" },

    // PAN-ASIAN SELECTION
    { name: "Cashew Nut Chicken", price: "Rs. 1,199", desc: "Stir-fried chicken with crunchy cashew nuts in savoury brown sauce.", category: "pan-asian" },
    { name: "Roasted Peanut Chicken", price: "Rs. 1,149", desc: "Crispy chicken tossed with roasted peanuts and oriental spices.", category: "pan-asian" },
    { name: "Broccoli & Mushrooms Stir-fry", price: "Rs. 1,099", desc: "Fresh broccoli florets and mushrooms sautéed in garlic soy sauce.", category: "pan-asian" },
    { name: "Thai Fiery Chicken", price: "Rs. 1,249", desc: "Spicy Thai-style stir-fried chicken with bird's eye chillies and basil.", category: "pan-asian" },
    { name: "Chilli Dry Chicken", price: "Rs. 1,199", desc: "Crispy strips of chicken tossed in dry chilli garlic sauce.", category: "pan-asian" },
    { name: "Chicken Chow Mein", price: "Rs. 999", desc: "Stir-fried noodles tossed with chicken, crisp vegetables, and wok sauces.", category: "pan-asian" }
];

// DOM Elements
const menuGrid = document.getElementById('menuGrid');
const categoryTabs = document.getElementById('categoryTabs');
const menuSearch = document.getElementById('menuSearch');
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const currentYearSpan = document.getElementById('currentYear');

// Set Current Year in Footer
currentYearSpan.textContent = new Date().getFullYear();

// Toggle Mobile Menu
hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});

// Render Menu Function
function displayMenuItems(items) {
    if (items.length === 0) {
        menuGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 40px;">No dishes found matching your search.</p>`;
        return;
    }

    menuGrid.innerHTML = items.map(item => `
        <div class="menu-item-card">
            <div>
                <div class="menu-item-header">
                    <h4>${item.name}</h4>
                    <span class="item-price">${item.price}</span>
                </div>
                <p>${item.desc}</p>
            </div>
            <span class="item-category-tag">${item.category.replace('-', ' ')}</span>
        </div>
    `).join('');
}

// Initial Load
displayMenuItems(menuData);

// Category Filter Tab Click Event
categoryTabs.addEventListener('click', (e) => {
    if (e.target.classList.contains('tab-btn')) {
        // Remove active class from all buttons
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');

        const selectedCategory = e.target.getAttribute('data-category');

        if (selectedCategory === 'all') {
            displayMenuItems(menuData);
        } else {
            const filteredItems = menuData.filter(item => item.category === selectedCategory);
            displayMenuItems(filteredItems);
        }
    }
});

// Live Search Filter Functionality
menuSearch.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase().trim();

    const filteredItems = menuData.filter(item => 
        item.name.toLowerCase().includes(searchTerm) || 
        item.desc.toLowerCase().includes(searchTerm)
    );

    displayMenuItems(filteredItems);

    // Reset tab active state when searching
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector('.tab-btn[data-category="all"]').classList.add('active');
});
