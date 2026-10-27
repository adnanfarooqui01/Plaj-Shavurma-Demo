const menuUrl = "https://app.jaicome.sa/ar/s/4e7241e0-dc8d-4c79-9608-7cdf5c61d0a6";
const menuItems = {
  sandwiches: [
    { name: "على مزاج بلاج", english: "Plaj Signature", description: "150غ دجاج مشوي، جبن وصوصات بلاج الخاصة.", descriptionEnglish: "150g grilled chicken, cheese, and Plaj's signature sauces.", price: "23", image: "mazaaj.webp", item: "95e68f8e-59d0-4e1c-b5fe-4d53c23c7e62" },
    { name: "شاورما خبز لبناني", english: "Lebanese Bread Shawarma", description: "شاورما كلاسيكية بخبز لبناني خفيف.", descriptionEnglish: "Classic shawarma wrapped in light Lebanese bread.", price: "10", image: "shawarma-lebanese.webp", item: "b2290308-7899-46c7-8661-8c347378b6b0" },
    { name: "شاورما خبز عراقي", english: "Iraqi Bread Shawarma", description: "شاورما شهية بخبز عراقي طري ومميز.", descriptionEnglish: "Tasty shawarma wrapped in soft, distinctive Iraqi bread.", price: "15", image: "shawarma-saj.webp" },
    { name: "شاورما خبز صاج", english: "Saj Bread Shawarma", description: "شاورما مشوية ملفوفة بخبز الصاج الطازج.", descriptionEnglish: "Grilled shawarma wrapped in fresh saj bread.", price: "13", image: "shawarma-saj.webp", item: "f60faeae-3e5d-4b8f-87c0-f126a8489c8f" },
  ],
  meals: [
    { name: "فطيرة بلاج", english: "Plaj Pie", description: "فطيرة محشوة بشاورما الدجاج والجبن وصوصات مميزة.", descriptionEnglish: "A pie filled with chicken shawarma, cheese, and signature sauces.", price: "26", image: "fatayer.webp", item: "080a1f84-a957-4ae6-88f2-a46292c8a283" },
    { name: "شاورما عربي", english: "Arabic Shawarma", description: "شرائح شاورما مع البطاطس والصوص، تقدم مع علبتي صوص.", descriptionEnglish: "Sliced shawarma with fries and sauce, served with two sauce cups.", price: "22", image: "arabic-shawarma.webp", item: "b3afe4fe-cdb8-49b4-bea8-1fd861cb6d18" },
  ],
  fries: [
    { name: "بطاطس بلاج بالشاورما", english: "Plaj Shawarma Fries", description: "بطاطس مقلية مع صوصات بلاج الخاصة.", descriptionEnglish: "Crispy fries with Plaj's signature sauces.", price: "يبدأ من 20", priceEnglish: "From 20", image: "fries-shawarma.webp", item: "3790de6b-6cd6-450e-b91a-a7936e49b524" },
    { name: "بطاطس عادي", english: "Regular Fries", description: "بطاطس ذهبية مقرمشة وطازجة.", descriptionEnglish: "Fresh, crispy golden fries.", price: "6", image: "fries.webp", item: "c000b80c-87a1-438a-9a2c-0dd8380f25fa" },
    { name: "بطاطس صوصات", english: "Sauce Fries", description: "بطاطس مقلية مع تشكيلة من الصوصات.", descriptionEnglish: "Fries served with a selection of sauces.", price: "15", image: "fries.webp", item: "d16b8e5b-2fc1-4fdc-b9e2-180943c81e5f" },
    { name: "بطاطس بلاج ببهارات الكيجن", english: "Plaj Cajun Fries", description: "بطاطس مقلية ببهارات بلاج.", descriptionEnglish: "Fries tossed in Plaj's signature Cajun seasoning.", price: "7", image: "fries-cajun.webp", item: "dc61c3dd-aab8-46a9-8f37-c6f7d7fa0ac3" },
    { name: "بطاطس بالجبن", english: "Cheese Fries", description: "بطاطس مغطاة بصلصة الجبن الكريمية.", descriptionEnglish: "Fries topped with creamy cheese sauce.", price: "11", image: "fries-cheese.webp", item: "df7b6c82-a8e0-4662-9a78-65276f67c949" },
  ],
  drinks: [
    { name: "كينزا كولا", english: "Kinza Cola", price: "2", image: "soda-kinza-cola.webp" },
    { name: "كينزا ليمون زيرو", english: "Kinza Lemon Zero", price: "2", image: "soda-kinza-lemon-zero.webp" },
    { name: "كينزا توت العليق", english: "Kinza Raspberry", price: "2", image: "soda-kinza-raspberry.webp" },
    { name: "كينزا رمان", english: "Kinza Pomegranate", price: "2", image: "soda-kinza-pomegranate.webp" },
    { name: "كينزا برتقال", english: "Kinza Orange", price: "2", image: "soda-kinza-orange.webp" },
    { name: "كينزا دايت كولا", english: "Kinza Diet Cola", price: "2", image: "soda-kinza-diet-cola.webp" },
    { name: "كينزا ليمون", english: "Kinza Lemon", price: "2", image: "soda-kinza-lemon.webp" },
    { name: "كينزا كولا زيرو", english: "Kinza Cola Zero", price: "2", image: "soda-kinza-cola-zero.webp" },
    { name: "كينزا حمضيات", english: "Kinza Citrus", price: "2", image: "soda-kinza-citrus.webp" },
    { name: "كوكا كولا", english: "Coca-Cola", price: "2", image: "soda-coca-cola.webp" },
    { name: "كوكا كولا دايت", english: "Diet Coca-Cola", price: "2", image: "soda-coca-cola-diet.webp" },
    { name: "سبرايت", english: "Sprite", price: "2", image: "soda-sprite.webp" },
  ],
  sauces: [
    { name: "صوص الطحينية", english: "Tahini Sauce", price: "2", image: "sauce-tahini.webp" },
    { name: "صوص بلاج سبايسي", english: "Plaj Spicy Sauce", price: "2", image: "sauce-spicy.webp", badge: "حار" },
    { name: "صوص جبن شيدر", english: "Cheddar Cheese Sauce", price: "3", image: "sauce-cheese.webp" },
    { name: "صوص بلاج", english: "Plaj Sauce", price: "2", image: "sauce-plaj.webp" },
    { name: "صوص الثوم", english: "Garlic Sauce", price: "2", image: "sauce-garlic.webp" },
    { name: "صوص الرمان", english: "Pomegranate Sauce", price: "2", image: "sauce-pomegranate.webp" },
    { name: "صوص الثوم سبايسي", english: "Spicy Garlic Sauce", price: "2", image: "sauce-spicy.webp", badge: "حار" },
  ],
};

const translations = {
  en: {
    brand: "Plaj Shavurma<small lang=\"en\">PLAJ SHAVURMA</small>",
    "brand.logoAlt": "Plaj Shavurma logo",
    "nav.home": "Home",
    "nav.menu": "Menu",
    "nav.story": "Our Story",
    "nav.location": "Location",
    "nav.order": "Order Now",
    "hero.eyebrow": "PLAJ SHAVURMA · AL QATIF",
    "hero.title": "Real shawarma,<br><span>the Plaj way.</span>",
    "hero.subtitle": "Shawarma with real flavor, made fresh.",
    "hero.description": "Toasted sandwiches, hearty meals, and our signature sauces.",
    "hero.order": "Order Pickup",
    "hero.viewMenu": "Explore the Menu",
    "hero.location": "Al Shati, Al Qatif",
    "hero.hours": "Open until 11:59 PM",
    "hero.scroll": "Scroll to menu",
    "orders.label": "Order options",
    "orders.pickup": "Order pickup now",
    "orders.pickupDetail": "Order pickup on Jaicome",
    "orders.curbside": "Order curbside pickup",
    "orders.curbsideDetail": "Order curbside on Jaicome",
    "orders.instagram": "Follow us on Instagram",
    "orders.download": "Download Jaicome",
    "orders.downloadDetail": "Order on Jaicome",
    "menu.number": "01 / MENU",
    "menu.eyebrow": "PICK YOUR FAVORITE",
    "menu.title": "The Plaj Menu",
    "menu.full": "Full menu &amp; ordering on Jaicome ↗",
    "menu.categories": "Menu categories",
    "category.sandwiches": "Sandwiches",
    "category.meals": "Meals",
    "category.fries": "Fries",
    "category.drinks": "Drinks",
    "category.sauces": "Sauces",
    "menu.note": "Prices are in Saudi riyals. Prices and availability may change; confirm when ordering.",
    "signature.eyebrow": "A CUSTOMER FAVORITE",
    "signature.title": "Plaj Signature",
    "signature.description": "Chargrilled chicken shawarma in fresh saj bread, with sliced cheese, mozzarella, cheddar sauce, Plaj spicy sauce, garlic, and pickles. Toasted golden and packed with flavor.",
    currency: "SAR",
    "signature.order": "Order Plaj Signature ↗",
    "signature.imageAlt": "Plaj signature shawarma sandwich",
    "story.number": "02 / OUR STORY",
    "story.eyebrow": "MADE WITH LOVE IN QATIF",
    "story.title": "Shawarma has a tradition.<br>This is the original.",
    "story.description": "At Plaj, our shawarma is grilled and toasted to arrive hot and full of flavor. Choose your sandwich, add your favorite sauce, and leave the rest to us.",
    "story.instagram": "See what's new at @plajshawarma ↗",
    "story.imageAlt": "Plaj Shavurma - Real shawarma, made the Plaj way",
    "gallery.eyebrow": "MADE TO MAKE YOU HUNGRY",
    "gallery.title": "A Taste of Plaj",
    "gallery.more": "More on Instagram ↗",
    "gallery.arabic": "Arabic shawarma from Plaj",
    "gallery.fries": "Plaj shawarma fries",
    "gallery.pie": "Plaj pie",
    "gallery.saj": "Saj bread shawarma",
    "location.number": "03 / VISIT US",
    "location.eyebrow": "SEE YOU IN QATIF",
    "location.title": "Plaj is closer than you think.",
    "location.address": "Hamzah ibn Abdul Muttalib Street, Al Shati, Al Qatif",
    "location.hours": "Hours",
    "location.hoursValue": "Daily · Until 11:59 PM",
    "location.phone": "Call us",
    "location.instagram": "Instagram",
    "location.directions": "Open in Maps ↗",
    "location.whatsapp": "WhatsApp ↗",
    "location.mapLabel": "Open Plaj Shavurma in Google Maps",
    "location.map": "Al Shati, Al Qatif",
    "location.mapAction": "Open in Google Maps ↗",
    "final.eyebrow": "GOOD FOOD CAN'T WAIT",
    "final.title": "Pick your order.<br>We'll make it fresh.",
    "final.order": "Order now on Jaicome ↗",
    "footer.tagline": "Real shawarma. Made the Plaj way.<span lang=\"en\">Real shawarma. Made the Plaj way.</span>",
    "footer.copyright": "Plaj Shavurma · All rights reserved",
    "dish.order": "Order ↗",
    "dish.orderLabel": "Order {name} on Jaicome",
    "dish.hot": "Hot",
    "language.label": "English",
    "language.aria": "Switch to Arabic",
    "nav.label": "Main navigation",
    "mobile.open": "Open menu",
  },
  ar: {
    brand: "بلاج شاورما<small lang=\"en\">PLAJ SHAVURMA</small>",
    "brand.logoAlt": "شعار بلاج شاورما",
    "nav.home": "الرئيسية",
    "nav.menu": "المنيو",
    "nav.story": "عن بلاج",
    "nav.location": "موقعنا",
    "nav.order": "اطلب الآن",
    "hero.eyebrow": "بلاج شاورما · القطيف",
    "hero.title": "طعم الشاورما<br><span>على أصوله</span>",
    "hero.subtitle": "شاورما بنكهات أصيلة وتحضير طازج.",
    "hero.description": "سندوتشات محمّصة، وجبات تشبعك، وصوصاتنا الخاصة.",
    "hero.order": "اطلب للاستلام",
    "hero.viewMenu": "اكتشف المنيو",
    "hero.location": "حي الشاطئ، القطيف",
    "hero.hours": "مفتوح حتى 11:59 م",
    "hero.scroll": "انتقل إلى المنيو",
    "orders.label": "خيارات الطلب",
    "orders.pickup": "اطلب الآن للاستلام",
    "orders.pickupDetail": "اطلب للاستلام عبر جايكم",
    "orders.curbside": "اطلب واستلم من السيارة",
    "orders.curbsideDetail": "استلام جانبي عبر جايكم",
    "orders.instagram": "تابع جديدنا على إنستغرام",
    "orders.download": "حمّل تطبيق جايكم",
    "orders.downloadDetail": "اطلب عبر جايكم",
    "menu.number": "01 / المنيو",
    "menu.eyebrow": "اختار اللي على مزاجك",
    "menu.title": "منيو بلاج",
    "menu.full": "المنيو والطلب الكامل على جايكم ↗",
    "menu.categories": "أقسام المنيو",
    "category.sandwiches": "السندوتشات",
    "category.meals": "الوجبات",
    "category.fries": "البطاطس",
    "category.drinks": "المشروبات",
    "category.sauces": "الصوصات",
    "menu.note": "الأسعار بالريال السعودي. قد تختلف الأسعار أو التوفر؛ تأكد من المنيو عند الطلب.",
    "signature.eyebrow": "الأكثر طلباً",
    "signature.title": "على مزاج بلاج",
    "signature.description": "شاورما دجاج مشوية بخبز الصاج الطازج، جبن سلايس وموزاريلا، صوص شيدر، صوص بلاج سبايسي، ثوم ومخلل. ساندوتش محمّص يجمع كل اللي تحبه.",
    currency: "ريال",
    "signature.order": "اطلب على مزاج بلاج ↗",
    "signature.imageAlt": "ساندوتش على مزاج بلاج",
    "story.number": "02 / عن بلاج",
    "story.eyebrow": "من القطيف وبكل حب",
    "story.title": "الشاورما لها<br>أصول… وهذا أصلها.",
    "story.description": "في بلاج، الشاورما تنشوي وتتحمّص لتوصلك ساخنة وغنية بالنكهة. اختار سندوتشك، زوّد صوصك المفضل، وخلي الباقي علينا.",
    "story.instagram": "شوف جديدنا على @plajshawarma ↗",
    "story.imageAlt": "بلاج شاورما - طعم الشاورما على أصوله",
    "gallery.eyebrow": "لقطات تفتح النفس",
    "gallery.title": "من مطبخ بلاج",
    "gallery.more": "المزيد على إنستغرام ↗",
    "gallery.arabic": "شاورما عربي من بلاج",
    "gallery.fries": "بطاطس بلاج بالشاورما",
    "gallery.pie": "فطيرة بلاج",
    "gallery.saj": "شاورما خبز صاج",
    "location.number": "03 / زورونا",
    "location.eyebrow": "نلقاكم في القطيف",
    "location.title": "بلاج قريب منك.",
    "location.address": "شارع حمزة بن عبدالمطلب، حي الشاطئ، القطيف",
    "location.hours": "أوقاتنا",
    "location.hoursValue": "يومياً · حتى 11:59 مساءً",
    "location.phone": "اتصل بنا",
    "location.instagram": "إنستغرام",
    "location.directions": "افتح الموقع في الخرائط ↗",
    "location.whatsapp": "واتساب ↗",
    "location.mapLabel": "افتح موقع بلاج شاورما في خرائط Google",
    "location.map": "حي الشاطئ، القطيف",
    "location.mapAction": "افتح في خرائط Google ↗",
    "final.eyebrow": "الجوع ما ينتظر",
    "final.title": "اختار طلبك،<br>وبلاج يجهزه لك.",
    "final.order": "اطلب الآن من جايكم ↗",
    "footer.tagline": "طعم الشاورما على أصوله<span lang=\"en\">Real shawarma. Made the Plaj way.</span>",
    "footer.copyright": "بلاج شاورما · جميع الحقوق محفوظة",
    "dish.order": "اطلب ↗",
    "dish.orderLabel": "اطلب {name} عبر جايكم",
    "dish.hot": "حار",
    "language.label": "العربية",
    "language.aria": "Switch to English",
    "nav.label": "القائمة الرئيسية",
    "mobile.open": "فتح القائمة",
  },
};

const dishGrid = document.querySelector("#dish-grid");
const categoryTabs = [...document.querySelectorAll(".category-tab")];
const languageToggle = document.querySelector("#language-toggle");
let currentLanguage = "en";
let currentCategory = "sandwiches";

function createDishCard(dish) {
  const card = document.createElement("article");
  card.className = "dish-card";

  const image = document.createElement("img");
  image.src = `assets/${dish.image}`;
  image.alt = currentLanguage === "en" ? dish.english : dish.name;
  image.loading = "lazy";

  const details = document.createElement("div");
  details.className = "dish-details";
  const title = document.createElement("h3");
  title.textContent = currentLanguage === "en" ? dish.english : dish.name;
  const english = document.createElement("p");
  english.className = "dish-english";
  english.lang = "en";
  english.textContent = dish.english;
  details.append(title, english);

  if (dish.description) {
    const description = document.createElement("p");
    description.className = "dish-description";
    description.textContent = currentLanguage === "en"
      ? dish.descriptionEnglish ?? dish.description ?? ""
      : dish.description;
    details.append(description);
  }

  const footer = document.createElement("div");
  footer.className = "dish-footer";
  const price = document.createElement("strong");
  price.className = "dish-price";
  price.textContent = `${currentLanguage === "en" ? dish.priceEnglish ?? dish.price : dish.price} ${translations[currentLanguage].currency}`;
  footer.append(price);

  const orderLink = document.createElement("a");
  orderLink.className = "dish-order";
  orderLink.href = dish.item ? `${menuUrl}/item/${dish.item}` : menuUrl;
  orderLink.target = "_blank";
  orderLink.rel = "noreferrer";
  orderLink.textContent = translations[currentLanguage]["dish.order"];
  orderLink.setAttribute(
    "aria-label",
    translations[currentLanguage]["dish.orderLabel"].replace(
      "{name}",
      currentLanguage === "en" ? dish.english : dish.name,
    ),
  );
  footer.append(orderLink);
  details.append(footer);

  card.append(image, details);
  if (dish.badge) {
    const badge = document.createElement("span");
    badge.className = "dish-badge";
    badge.textContent = translations[currentLanguage]["dish.hot"];
    card.append(badge);
  }
  return card;
}

function renderMenu(category) {
  dishGrid.replaceChildren(...menuItems[category].map(createDishCard));
}

function setLanguage(language) {
  currentLanguage = language;
  const translation = translations[language];
  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  document.title = language === "en"
    ? "Plaj Shavurma | Real shawarma, made the Plaj way"
    : "بلاج شاورما | طعم الشاورما على أصوله";
  document.querySelector('meta[name="description"]').content = language === "en"
    ? "Plaj Shavurma in Al Shati, Al Qatif. Authentic shawarma, meals, fries, and signature sauces. Order pickup now."
    : "بلاج شاورما في حي الشاطئ بالقطيف. شاورما على أصولها، وجبات، بطاطس وصوصات خاصة. اطلب استلامك الآن.";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = translation[element.dataset.i18n];
    if (value !== undefined) element.innerHTML = value;
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const value = translation[element.dataset.i18nAlt];
    if (value !== undefined) element.alt = value;
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const value = translation[element.dataset.i18nAria];
    if (value !== undefined) element.setAttribute("aria-label", value);
  });

  document.querySelector("#language-name").textContent = translation["language.label"];
  languageToggle.setAttribute("aria-label", translation["language.aria"]);
  languageToggle.lang = language;
  document.querySelector(".main-nav").setAttribute("aria-label", translation["nav.label"]);
  document.querySelector(".menu-toggle").setAttribute("aria-label", translation["mobile.open"]);
  renderMenu(currentCategory);
}

categoryTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    currentCategory = tab.dataset.category;
    categoryTabs.forEach((item) => {
      const selected = item === tab;
      item.classList.toggle("active", selected);
      item.setAttribute("aria-pressed", String(selected));
    });
    renderMenu(tab.dataset.category);
  });
});

languageToggle.addEventListener("click", () => {
  setLanguage(currentLanguage === "en" ? "ar" : "en");
});

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

mainNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});

document.querySelector("#year").textContent = new Date().getFullYear();
setLanguage("en");
