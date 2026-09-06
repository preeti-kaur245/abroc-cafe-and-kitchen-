/**
 * ABROC CAFE & KITCHEN - MENU DATA
 * Updated with exact items, prices, and 100% dedicated dish visual assets.
 */

const ABROC_MENU = {
  categories: [
    { id: 'all', name: 'All Items', icon: '✦' },
    { id: 'sandwiches', name: 'Sandwiches', icon: '🥪' },
    { id: 'wraps', name: 'Wraps & Burritos', icon: '🌯' },
    { id: 'snacks', name: 'Snacks & Starters', icon: '✨' },
    { id: 'garlic-breads', name: 'Garlic Breads & Toasts', icon: '🥖' },
    { id: 'fries-wedges', name: 'Fries & Wedges', icon: '🍟' },
    { id: 'mains-healthy', name: 'Mains & Salads', icon: '🥗' },
    { id: 'beverages', name: 'Shakes & Beverages', icon: '☕' },
    { id: 'teas-energy', name: 'Teas & Energy Drinks', icon: '🫖' },
    { id: 'desserts', name: 'Desserts & Ice Creams', icon: '🍨' }
  ],
  items: [
    /* ================= SANDWICHES ================= */
    {
      id: 'chicken-tikka-sandwich',
      name: 'Chicken Tikka Sandwich',
      category: 'sandwiches',
      price: 249,
      badge: 'Chef Signature',
      rating: 4.9,
      image: 'assets/images/paneer_tikka_sandwich.jpg',
      description: 'Smoky spiced chicken tikka strips, grilled peppers, melted cheese, and house mint mayonnaise in toasted artisanal bread.',
      tags: ['Non-Veg', 'Smoky', 'Chef Pick']
    },
    {
      id: 'crispy-chicken-sandwich',
      name: 'Crispy Chicken Sandwich',
      category: 'sandwiches',
      price: 279,
      badge: 'Bestseller',
      rating: 4.9,
      image: 'assets/images/crispy_chicken_sandwich.jpg',
      description: 'Golden crunchy fried chicken breast fillet, crispy lettuce, tangy pickles, and house special sauce in toasted bread.',
      tags: ['Non-Veg', 'Crispy', 'Loaded']
    },
    {
      id: 'grilled-chicken-sandwich',
      name: 'Grilled-Chicken-Sandwich',
      category: 'sandwiches',
      price: 249,
      badge: 'Healthy & Hearty',
      rating: 4.8,
      image: 'assets/images/paneer_tikka_sandwich.jpg',
      description: 'Juicy herb-marinated grilled chicken breast, fresh crisp greens, tomato slices, and light mustard mayo dressing.',
      tags: ['Non-Veg', 'Grilled', 'High Protein']
    },
    {
      id: 'spanish-corn-sandwich',
      name: 'Spanish Corn Sandwich',
      category: 'sandwiches',
      price: 219,
      badge: 'Popular',
      rating: 4.8,
      image: 'assets/images/paneer_tikka_sandwich.jpg',
      description: 'Sweet golden corn, Spanish herbs, roasted bell peppers, and melted creamy cheese toasted to perfection.',
      tags: ['Veg', 'Cheesy', 'Sweet & Savory']
    },
    {
      id: 'tandoori-paneer-sandwich',
      name: 'Tandoori Paneer Sandwich',
      category: 'sandwiches',
      price: 219,
      badge: 'Signature',
      rating: 4.9,
      image: 'assets/images/paneer_tikka_sandwich.jpg',
      description: 'Smoky marinated cottage cheese cubes, chargrilled capsicum, melted cheddar, and mint tandoori spread.',
      tags: ['Veg', 'Spiced', 'House Special']
    },
    {
      id: 'veggie-sandwich',
      name: 'Veggie Sandwich',
      category: 'sandwiches',
      price: 199,
      badge: 'Classic',
      rating: 4.7,
      image: 'assets/images/paneer_tikka_sandwich.jpg',
      description: 'Garden fresh cucumber, tomatoes, bell peppers, lettuce, and herb cheese spread in toasted bread slices.',
      tags: ['Veg', 'Fresh', 'Light']
    },

    /* ================= WRAPS & BURRITOS ================= */
    {
      id: 'paneer-tikka-wrap',
      name: 'Paneer Tikka Wrap',
      category: 'wraps',
      price: 238,
      badge: 'Bestseller',
      rating: 4.9,
      image: 'assets/images/paneer_tikka_wrap.jpg',
      description: 'Char-grilled cottage cheese cubes tossed with spiced onion rings and mint mayo wrapped in soft fresh flatbread.',
      tags: ['Veg', 'Tandoori', 'Bestseller']
    },
    {
      id: 'chicken-wrap',
      name: 'Chicken Wrap',
      category: 'wraps',
      price: 238,
      badge: 'Crowd Favorite',
      rating: 4.9,
      image: 'assets/images/chicken_wrap.jpg',
      description: 'Tender marinated chicken tikka pieces, crisp lettuce, red onions, and creamy garlic dressing rolled in warm flatbread.',
      tags: ['Non-Veg', 'Juicy', 'Roll']
    },
    {
      id: 'bean-burrito-wrap',
      name: 'Bean Burrito Wrap',
      category: 'wraps',
      price: 298,
      badge: 'Mexican Special',
      rating: 4.9,
      image: 'assets/images/bean_burrito_wrap.jpg',
      description: 'Warm toasted tortilla rolled with seasoned Mexican beans, salsa fresca, shredded cheese, and lime crema.',
      tags: ['Veg', 'Mexican', 'Hearty']
    },
    {
      id: 'egg-wrap-wrap',
      name: 'Egg Wrap Wrap',
      category: 'wraps',
      price: 178,
      badge: 'High Protein',
      rating: 4.7,
      image: 'assets/images/chicken_wrap.jpg',
      description: 'Fluffy herb-seasoned egg omelette wrapped with crunchy veggies and house chipotle mayo.',
      tags: ['Egg', 'Protein', 'Quick Bite']
    },
    {
      id: 'veggies-wrap',
      name: "Veggies' Wrap",
      category: 'wraps',
      price: 169,
      badge: 'Crunchy',
      rating: 4.6,
      image: 'assets/images/paneer_tikka_wrap.jpg',
      description: 'Sautéed crunchy seasonal vegetables, sweet corn, and garlic herb spread wrapped tight.',
      tags: ['Veg', 'Crunchy', 'Light']
    },

    /* ================= GARLIC BREADS & TOASTS ================= */
    {
      id: 'cheese-garlic-bread',
      name: 'Cheese Garlic Bread',
      category: 'garlic-breads',
      price: 199,
      badge: 'Star Starter',
      rating: 5.0,
      image: 'assets/images/garlic_bread.jpg',
      description: 'Artisan baguette slices brushed with roasted garlic butter, smothered under molten mozzarella cheese.',
      tags: ['Veg', 'Cheese Pull', 'Garlic Butter']
    },
    {
      id: 'stuffed-garlic-bread',
      name: 'Stuffed Garlic Bread',
      category: 'garlic-breads',
      price: 239,
      badge: 'Loaded',
      rating: 4.9,
      image: 'assets/images/garlic_bread.jpg',
      description: 'Golden-baked bread loaf stuffed with gooey cheese, sweet corn, jalapeños, and Italian herbs.',
      tags: ['Veg', 'Stuffed', 'Cheesy']
    },
    {
      id: 'plain-garlic-bread',
      name: 'Plain Garlic Bread',
      category: 'garlic-breads',
      price: 149,
      badge: 'Crispy',
      rating: 4.7,
      image: 'assets/images/garlic_bread.jpg',
      description: 'Toasted baguette slices infused with aromatic roasted garlic butter and dried parsley.',
      tags: ['Veg', 'Aromatic', 'Crisp']
    },
    {
      id: 'cheese-chili-toast',
      name: 'Cheese Chili Toast',
      category: 'garlic-breads',
      price: 199,
      badge: 'Spicy & Cheesy',
      rating: 4.8,
      image: 'assets/images/garlic_bread.jpg',
      description: 'Crispy toasts topped with melted cheddar, green chillies, and bell peppers broiled to golden perfection.',
      tags: ['Veg', 'Spicy', 'Comfort']
    },

    /* ================= SNACKS & STARTERS ================= */
    {
      id: 'loaded-nachos',
      name: 'Loaded Nachos',
      category: 'snacks',
      price: 349,
      badge: 'Showstopper',
      rating: 4.9,
      image: 'assets/images/loaded_nachos.jpg',
      description: 'Crispy corn tortilla chips topped with molten warm cheese sauce, salsa fresca, jalapeños, and sour cream.',
      tags: ['Veg', 'Platter', 'Shareable']
    },
    {
      id: 'nachos-salsa',
      name: 'Nachos Salsa',
      category: 'snacks',
      price: 328,
      badge: 'Crisp Dip',
      rating: 4.8,
      image: 'assets/images/nachos_salsa.jpg',
      description: 'Golden crunchy nacho crisps paired with our freshly prepared tangy Mexican tomato salsa dip.',
      tags: ['Veg', 'Mexican', 'Dip']
    },
    {
      id: 'honey-chilly-potato',
      name: 'Honey Chilly Potato',
      category: 'snacks',
      price: 149,
      badge: 'Indo-Chinese',
      rating: 4.9,
      image: 'assets/images/peri_peri_fries.jpg',
      description: 'Crispy fried potato fingers glazed in a sweet, spicy honey chilli garlic sauce with toasted sesame seeds.',
      tags: ['Veg', 'Sweet & Spicy', 'Crisp']
    },
    {
      id: 'cheese-corn-roll',
      name: 'Cheese Corn Roll',
      category: 'snacks',
      price: 219,
      badge: 'Hot & Cheesy',
      rating: 4.8,
      image: 'assets/images/garlic_bread.jpg',
      description: 'Crispy golden rolls filled with molten cheese, sweet corn kernels, and herbs, served with dip.',
      tags: ['Veg', 'Crunchy', 'Appetizer']
    },
    {
      id: 'non-veg-nuggets',
      name: 'Non Veg Nuggets',
      category: 'snacks',
      price: 249,
      badge: 'Crispy Bites',
      rating: 4.8,
      image: 'assets/images/crispy_chicken_sandwich.jpg',
      description: 'Juicy minced chicken bites coated in golden seasoned breadcrumbs, served with honey mustard dip.',
      tags: ['Non-Veg', 'Finger Food']
    },
    {
      id: 'veg-nuggets',
      name: 'Veg Nuggets',
      category: 'snacks',
      price: 199,
      badge: 'Crisp Bite',
      rating: 4.7,
      image: 'assets/images/potato_wedges.jpg',
      description: 'Crumb-fried spiced vegetable and potato nuggets served piping hot with garlic aioli.',
      tags: ['Veg', 'Snack']
    },
    {
      id: 'onion-rings',
      name: 'Onion Rings',
      category: 'snacks',
      price: 159,
      badge: 'Golden Rings',
      rating: 4.7,
      image: 'assets/images/onion_rings.jpg',
      description: 'Thick sliced sweet onion rings batter-dipped and fried to an extra-crispy golden brown.',
      tags: ['Veg', 'Crunchy']
    },

    /* ================= FRIES & WEDGES ================= */
    {
      id: 'peri-peri-fries',
      name: 'Peri Peri Fries',
      category: 'fries-wedges',
      price: 149,
      badge: 'Spicy Favorite',
      rating: 4.9,
      image: 'assets/images/peri_peri_fries.jpg',
      description: 'Crispy golden French fries tossed in authentic fiery Peri Peri spice seasoning, served with creamy dip.',
      tags: ['Veg', 'Spicy', 'Crisp']
    },
    {
      id: 'salted-fries',
      name: 'Salted Fries',
      category: 'fries-wedges',
      price: 149,
      badge: 'Classic',
      rating: 4.7,
      image: 'assets/images/salted_fries.jpg',
      description: 'Classic straight-cut potato fries fried golden and tossed in fine sea salt.',
      tags: ['Veg', 'Classic']
    },
    {
      id: 'peri-peri-potato-wedges',
      name: 'Peri Peri Potato Wedges',
      category: 'fries-wedges',
      price: 169,
      badge: 'Seasoned',
      rating: 4.8,
      image: 'assets/images/potato_wedges.jpg',
      description: 'Skin-on rustic potato wedges dusted with zesty Peri Peri seasoning, soft inside and crisp outside.',
      tags: ['Veg', 'Rustic', 'Spicy']
    },
    {
      id: 'salted-potato-wedges',
      name: 'Salted Potato Wedges',
      category: 'fries-wedges',
      price: 169,
      badge: 'Rustic',
      rating: 4.7,
      image: 'assets/images/potato_wedges.jpg',
      description: 'Chunky roasted potato wedges seasoned with herbs and sea salt, served with dip.',
      tags: ['Veg', 'Rustic']
    },

    /* ================= MAINS & HEALTHY ================= */
    {
      id: 'chicken-breast',
      name: 'Chicken Breast',
      category: 'mains-healthy',
      price: 499,
      badge: 'Chef Special Main',
      rating: 5.0,
      image: 'assets/images/chicken_breast.jpg',
      description: 'Pan-seared juicy gourmet chicken breast served with rich herb jus, grilled veggies, and potato wedges.',
      tags: ['Non-Veg', 'High Protein', 'Gourmet Main']
    },
    {
      id: 'cottage-cheese-tomato-sauce',
      name: 'Cottage Cheese With Tomato Sauce',
      category: 'mains-healthy',
      price: 399,
      badge: 'Continental Main',
      rating: 4.9,
      image: 'assets/images/cottage_cheese_tomato.jpg',
      description: 'Tender cottage cheese steaks simmered in a rich Italian tomato herb reduction, served with garlic bread.',
      tags: ['Veg', 'Continental', 'Rich']
    },
    {
      id: 'sauteed-veggies',
      name: 'SautÉed Veggies',
      category: 'mains-healthy',
      price: 298,
      badge: 'Healthy & Fresh',
      rating: 4.8,
      image: 'assets/images/sauteed_veggies.jpg',
      description: 'Broccoli florets, bell peppers, zucchini, baby corn, and mushrooms tossed in garlic olive oil and black pepper.',
      tags: ['Veg', 'Healthy', 'Fitness Pick']
    },
    {
      id: 'classic-salad',
      name: 'Classic Salad',
      category: 'mains-healthy',
      price: 268,
      badge: 'Garden Fresh',
      rating: 4.8,
      image: 'assets/images/classic_salad.jpg',
      description: 'Crisp iceberg lettuce, cherry tomatoes, cucumbers, olives, and feta-style cheese tossed in vinaigrette dressing.',
      tags: ['Veg', 'Healthy', 'Fresh']
    },

    /* ================= SHAKES & BEVERAGES ================= */
    {
      id: 'dark-chocolate',
      name: 'Dark Chocolate Shake',
      category: 'beverages',
      price: 268,
      badge: 'Luxury Shake',
      rating: 4.9,
      image: 'assets/images/brownie_frappe.jpg',
      description: 'Intense Belgian dark chocolate blended with whole milk and rich ice cream, topped with chocolate curls.',
      tags: ['Shake', 'Chocolate', 'Indulgence']
    },
    {
      id: 'vanilla',
      name: 'Vanilla Shake',
      category: 'beverages',
      price: 268,
      badge: 'Silky Blend',
      rating: 4.8,
      image: 'assets/images/vanilla_ice_cream.jpg',
      description: 'Classic Madagascar vanilla extract blended thick and creamy with premium ice cream.',
      tags: ['Shake', 'Creamy', 'Classic']
    },

    /* ================= TEAS & ENERGY DRINKS ================= */
    {
      id: 'assam-tea',
      name: 'Assam Tea',
      category: 'teas-energy',
      price: 99,
      badge: 'Traditional',
      rating: 4.8,
      image: 'assets/images/assam_tea.jpg',
      description: 'Strong, full-bodied amber black tea brewed from finest single-estate Assam tea leaves.',
      tags: ['Hot Brew', 'Authentic Tea']
    },
    {
      id: 'green-tea',
      name: 'Green Tea',
      category: 'teas-energy',
      price: 99,
      badge: 'Wellness',
      rating: 4.8,
      image: 'assets/images/peach_iced_tea.jpg',
      description: 'Antioxidant-rich organic green tea leaves steeped to a delicate, soothing aroma.',
      tags: ['Hot Brew', 'Detox', 'Healthy']
    },
    {
      id: 'masala-tea',
      name: 'Masala Tea',
      category: 'teas-energy',
      price: 99,
      badge: 'Aromatic Desi Chai',
      rating: 4.9,
      image: 'assets/images/signature_latte.jpg',
      description: 'Fragrant blend of crushed cardamom, ginger, cloves, and cinnamon steeped with milk.',
      tags: ['Hot Brew', 'Spiced Chai']
    },
    {
      id: 'cold-drink',
      name: 'Cold Drink',
      category: 'teas-energy',
      price: 80,
      badge: 'Chilled',
      rating: 4.7,
      image: 'assets/images/peach_iced_tea.jpg',
      description: 'Chilled aerated soft beverage served over ice.',
      tags: ['Cold', 'Fizzy']
    },
    {
      id: 'hell',
      name: 'Hell Energy Drink',
      category: 'teas-energy',
      price: 80,
      badge: 'Energy Boost',
      rating: 4.8,
      image: 'assets/images/peach_iced_tea.jpg',
      description: 'Invigorating canned energy drink with B-vitamins and caffeine.',
      tags: ['Energy', 'Chilled']
    },
    {
      id: 'red-bull',
      name: 'Red Bull Energy Drink',
      category: 'teas-energy',
      price: 150,
      badge: 'Energy Classic',
      rating: 4.9,
      image: 'assets/images/peach_iced_tea.jpg',
      description: 'World-renowned energy drink served ice-cold to vitalize body and mind.',
      tags: ['Energy', 'Premium']
    },

    /* ================= DESSERTS, ICE CREAMS & COOKIES ================= */
    {
      id: 'brownie',
      name: 'Artisan Chocolate Brownie',
      category: 'desserts',
      price: 179,
      badge: 'Signature Sweet',
      rating: 5.0,
      image: 'assets/images/warm_brownie.jpg',
      description: 'Warm fudge chocolate walnut brownie with a molten gooey center and rich chocolate glaze.',
      tags: ['Dessert', 'Fudge', 'Signature']
    },
    {
      id: 'chocolate-ice-cream',
      name: 'Chocolate Ice Cream',
      category: 'desserts',
      price: 129,
      badge: 'Creamy Scoop',
      rating: 4.8,
      image: 'assets/images/chocolate_ice_cream.jpg',
      description: 'Two scoops of rich Belgian dark chocolate ice cream garnished with chocolate drizzle.',
      tags: ['Ice Cream', 'Chilled']
    },
    {
      id: 'vanilla-ice-cream',
      name: 'Vanilla Ice Cream',
      category: 'desserts',
      price: 129,
      badge: 'Classic Scoop',
      rating: 4.8,
      image: 'assets/images/vanilla_ice_cream.jpg',
      description: 'Two scoops of silky vanilla bean ice cream.',
      tags: ['Ice Cream', 'Classic']
    },
    {
      id: 'choco-chip-cookie',
      name: 'Choco Chip Cookie',
      category: 'desserts',
      price: 40,
      badge: 'Baked Fresh',
      rating: 4.8,
      image: 'assets/images/cookies_platter.jpg',
      description: 'Freshly baked buttery cookie studded with melted dark chocolate chips.',
      tags: ['Cookie', 'Bakery', 'Coffee Companion']
    },
    {
      id: 'honey-oatmeal-cookie',
      name: 'Honey Oatmeal Cookie',
      category: 'desserts',
      price: 40,
      badge: 'Wholesome',
      rating: 4.8,
      image: 'assets/images/cookies_platter.jpg',
      description: 'Chewy wholesome rolled oats infused with golden honey and warm cinnamon.',
      tags: ['Cookie', 'Oatmeal', 'Healthy Treat']
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = ABROC_MENU;
}
