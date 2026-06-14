import { img } from "./site";

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number; // in Rwandan Franc
  category: string;
  image: string;
  tags?: string[];
  signature?: boolean;
  spicy?: boolean;
  vegetarian?: boolean;
};

export const categories = [
  "All",
  "Signatures",
  "Starters",
  "Mains",
  "Pasta",
  "Sharing",
  "Sides",
  "Desserts",
  "Drinks",
] as const;

export const menuItems: MenuItem[] = [
  {
    id: "pepper-steak",
    name: "Peppered Beef Steak",
    description:
      "Grilled-to-order tenderloin crusted in cracked black pepper, finished with a glossy red-wine jus and charred greens.",
    price: 9500,
    category: "Signatures",
    image: img.steakMicro,
    tags: ["Chef's pick", "Grilled"],
    signature: true,
  },
  {
    id: "roast-pork-chopsuey",
    name: "Roast Pork Chop Suey",
    description:
      "Wok-tossed slow-roasted pork with crisp bean sprouts, spring onion and a savoury dark soy glaze over jasmine rice.",
    price: 8500,
    category: "Signatures",
    image: img.stirBeef,
    tags: ["Wok-fired", "Pan-Asian"],
    signature: true,
    spicy: true,
  },
  {
    id: "carbonara",
    name: "Spaghetti Carbonara",
    description:
      "Silky egg-yolk and Pecorino emulsion folded through al dente spaghetti with crisp pancetta and cracked pepper.",
    price: 7500,
    category: "Pasta",
    image: img.carbonara,
    tags: ["Italian"],
    signature: true,
  },
  {
    id: "signature-meatballs",
    name: "XOXO Signature Meatballs",
    description:
      "Hand-rolled beef & herb meatballs simmered in a slow-roasted tomato sugo, finished with basil oil and shaved Parmesan.",
    price: 7000,
    category: "Mains",
    image: img.meatballs,
    tags: ["House classic"],
  },
  {
    id: "herb-chicken",
    name: "Herb-Grilled Chicken",
    description:
      "Marinated half-chicken char-grilled until golden, brushed with fresh chimichurri and served with seasonal greens.",
    price: 8000,
    category: "Mains",
    image: img.chicken,
    tags: ["Guest favourite", "Gluten-free"],
  },
  {
    id: "feast-platter",
    name: "Tasty Bites Feast Platter",
    description:
      "A generous sharing board of grilled meats, sticky wings, loaded fries and dips — built for the whole table.",
    price: 18000,
    category: "Sharing",
    image: img.platter,
    tags: ["Serves 3–4", "Sharing"],
  },
  {
    id: "wok-selection",
    name: "Wok Stir-Fry Selection",
    description:
      "Your choice of chicken or beef flash-fried with rainbow vegetables and glossy noodles in our house wok sauce.",
    price: 9500,
    category: "Sharing",
    image: img.stirNoodles,
    tags: ["Pan-Asian"],
    spicy: true,
  },
  {
    id: "crispy-bites",
    name: "Crispy Chicken Bites",
    description:
      "Buttermilk-marinated bites double-fried until shatteringly crisp, tossed in our sweet chilli XOXO dust.",
    price: 5500,
    category: "Starters",
    image: img.chicken2,
    tags: ["Sharing", "Fried"],
  },
  {
    id: "garlic-bread",
    name: "Garlic Butter Flatbread",
    description:
      "Stone-baked flatbread brushed with roasted garlic butter and confit herbs, served warm from the oven.",
    price: 3500,
    category: "Starters",
    image: img.breadMeal,
    tags: ["Vegetarian"],
    vegetarian: true,
  },
  {
    id: "truffle-fries",
    name: "Truffle Salted Fries",
    description:
      "Twice-cooked golden fries showered with black truffle salt, parmesan and torn parsley.",
    price: 4000,
    category: "Sides",
    image: img.fries,
    tags: ["Vegetarian", "Best seller"],
    vegetarian: true,
  },
  {
    id: "loaded-fries",
    name: "XOXO Loaded Fries",
    description:
      "Crisp fries smothered in melted cheese, pulled beef and a drizzle of house smoky aioli.",
    price: 5500,
    category: "Sides",
    image: img.friesBasket,
    tags: ["Indulgent"],
  },
  {
    id: "molten-choc",
    name: "Molten Chocolate Dream",
    description:
      "Warm dark-chocolate fondant with a flowing centre, salted-caramel gelato and a gold-dusted tuile.",
    price: 5000,
    category: "Desserts",
    image: img.dessertFlower,
    tags: ["Chef's pick"],
  },
  {
    id: "dessert-tower",
    name: "Choco-Berry Tower",
    description:
      "Layers of silky chocolate ganache, fresh seasonal berries and a crisp praline crunch.",
    price: 5500,
    category: "Desserts",
    image: img.dessertTower,
    tags: ["Vegetarian"],
    vegetarian: true,
  },
  {
    id: "signature-cocktail",
    name: "XOXO Signature Cocktails",
    description:
      "Our rotating list of craft cocktails — bright, botanical and built to pair with the grill.",
    price: 6000,
    category: "Drinks",
    image: img.cocktail,
    tags: ["Bar menu"],
  },
  {
    id: "tropical-mocktail",
    name: "Fresh Tropical Mocktails",
    description:
      "Cold-pressed local fruit blended with sparkling citrus and garden mint — zero-proof, full flavour.",
    price: 4000,
    category: "Drinks",
    image: img.mocktail,
    tags: ["Non-alcoholic"],
    vegetarian: true,
  },
];

export const rf = (n: number) => "RF " + n.toLocaleString("en-US");
