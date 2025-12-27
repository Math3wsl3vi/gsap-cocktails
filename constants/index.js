const navLinks = [
 {
	id: "cocktails",
	title: "Our Coffee Drinks",
 },
 {
	id: "about",
	title: "About Us",
 },
 {
	id: "work",
	title: "The Art",
 },
 {
	id: "contact",
	title: "Contact",
 },
];

const cocktailLists = [
 {
    name: "Ethiopian Yirgacheffe",
    country: "ET",
    detail: "Light Roast",
    price: "Ksh 1800",
 },
 {
    name: "Colombian Supremo",
    country: "CO",
    detail: "Medium Roast",
    price: "Ksh 1200",
 },
 {
    name: "Sumatra Mandheling",
    country: "ID",
    detail: "Dark Roast",
    price: "Ksh 2000",
 },
 {
    name: "Guatemalan Antigua",
    country: "GT",
    detail: "French Press",
    price: "Ksh 2900",
 },
];

const mockTailLists = [
 {
    name: "Caramel Macchiato",
    country: "IT",
    detail: "Double Shot",
    price: "Ksh 1800",
 },
 {
    name: "Vanilla Oat Latte",
    country: "US",
    detail: "Plant-Based",
    price: "Ksh 1200",
 },
 {
    name: "Hazelnut Cortado",
    country: "ES",
    detail: "4 oz Pour",
    price: "Ksh 2000",
 },
 {
    name: "Honey Lavender Latte",
    country: "FR",
    detail: "Signature",
    price: "Ksh 2900",
 },
];

const profileLists = [
 {
	imgPath: "/images/profile1.png",
 },
 {
	imgPath: "/images/profile2.png",
 },
 {
	imgPath: "/images/profile3.png",
 },
 {
	imgPath: "/images/profile4.png",
 },
];

const featureLists = [
  "Perfectly balanced blends",
  "Finished with silky latte art",
  "Served hot — or iced to perfection",
  "Expertly brewed and poured",
];

const goodLists = [
  "Hand-selected coffee beans",
  "Signature brewing techniques",
  "Barista craftsmanship in action",
  "Freshly ground, rich aromas",
];


const storeInfo = {
 heading: "Where to Find Us",
 address: "456, Raq Blvd. #404, Los Angeles, CA 90210",
 contact: {
	phone: "(555) 987-6543",
	email: "hello@jsmcocktail.com",
 },
};

const openingHours = [
 { day: "Mon–Thu", time: "11:00am – 12am" },
 { day: "Fri", time: "11:00am – 2am" },
 { day: "Sat", time: "9:00am – 2am" },
 { day: "Sun", time: "9:00am – 1am" },
];

const socials = [
 {
	name: "Instagram",
	icon: "/images/insta.png",
	url: "#",
 },
 {
	name: "X (Twitter)",
	icon: "/images/x.png",
	url: "#",
 },
 {
	name: "Facebook",
	icon: "/images/fb.png",
	url: "#",
 },
];

const allCocktails = [
  {
    id: 1,
    name: "Classic Latte",
    image: "/images/coffee-menu-8.png",
    title: "Simple Ingredients, Rich Flavor",
    description:
      "Made with freshly pulled espresso and steamed milk, our latte is smooth, creamy, and perfectly balanced — great any time of day.",
  },
  {
    id: 2,
    name: "Iced Caramel Latte",
    image: "/images/coffee-menu-10.png",
    title: "A Sweet Favorite That Never Fails",
    description:
      "Chilled espresso, milk, and caramel come together for a refreshing pick-me-up. Lightly sweet, silky, and incredibly satisfying.",
  },
  {
  id: 3,
  name: "Mocha Cappuccino",
  image: "/images/coffee3.png",
  title: "Rich, Smooth & Indulgent",
  description:
    "Bold espresso meets creamy foam and smooth chocolate, creating a comforting cappuccino with deep flavor, balance, and a touch of indulgence.",
},

  {
    id: 4,
    name: "Classic Americano",
    image: "/images/coffee-menu-9.png",
    title: "Crafted With Care, Brewed With Passion",
    description:
      "Brewed slowly to highlight natural flavors — bright, clean, and nuanced. Each cup celebrates the unique story of its beans.",
  },
];


export {
 navLinks,
 cocktailLists,
 mockTailLists,
 profileLists,
 featureLists,
 goodLists,
 openingHours,
 storeInfo,
 socials,
 allCocktails,
};
