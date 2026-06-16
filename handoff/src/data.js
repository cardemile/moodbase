// data.js — mock library grounded in the real Moodbase content.
// Replace these arrays with your Supabase queries in production.
//
// Placeholder visuals use warm "analog" gradient pairs (`grad`) seeded per save
// so the board reads as a cohesive moodboard. In production, give each save an
// `imageUrl` and render it instead of the gradient (see Card.jsx).

export const PROJECTS = [
  { key: "all",      name: "All Saves",          count: 57, dot: "#E8C266" },
  { key: "women",    name: "Modern Women Bali",  count: 0,  dot: "#E27D9B" },
  { key: "brand",    name: "Brand Identity",     count: 2,  dot: "#E8C266" },
  { key: "water",    name: "Bali Water",         count: 16, dot: "#62C7D6" },
  { key: "tutorial", name: "Tutorials",          count: 2,  dot: "#B58CE0" },
  { key: "texture",  name: "Textures",           count: 10, dot: "#E8A66B" },
  { key: "websites", name: "Websites",           count: 5,  dot: "#7FB98A" },
  { key: "uncat",    name: "Uncategorized",      count: 22, dot: "#9A8F82" },
];

export const TAGS = [
  "inspiration","photography","visual-reference","vintage","pinterest","design",
  "lifestyle","branding","art","texture","design-reference","travel","beer",
  "packaging","nostalgia","childhood","aesthetic","memories","beach","historical",
  "people","abstract","digital-art","film",
];

export const SAVES = [
  {
    id: "s1", project: "uncat", cat: "Uncategorized",
    title: "Truly flies, this is where I'd rather be",
    dek: "A nostalgic image evoking childhood memories with vintage 80s and 90s aesthetic — a CRT glowing in a dim room at golden hour.",
    tags: ["vintage","nostalgia","childhood","aesthetic"],
    source: "i.pinimg.com", days: 44, aspect: "tall", featured: true,
    grad: ["#2A2438","#C86A3E"], vibe: "warm analog nostalgic dusk interior glow film",
  },
  {
    id: "s2", project: "uncat", cat: "Uncategorized",
    title: "Image from Pin on 2026",
    dek: "Sun-bleached beachside warung — palms, a parked bicycle cart, handpainted signage in the midday haze.",
    tags: ["travel","beach","lifestyle","photography"],
    source: "i.pinimg.com", days: 51, aspect: "square",
    grad: ["#E8A24C","#3C7C8C"], vibe: "tropical beach warm sun travel analog haze",
  },
  {
    id: "s3", project: "texture", cat: "Textures",
    title: "Image treatments — DES",
    dek: "A Pinterest image showcasing motion-blur treatment techniques and visual design approaches. Long-exposure smear, dragged light.",
    tags: ["texture","image-treatment","visual-design","design-reference"],
    source: "i.pinimg.com", days: 52, aspect: "wide",
    grad: ["#7A5236","#D8B27A"], vibe: "motion blur texture abstract smear analog",
  },
  {
    id: "s4", project: "water", cat: "Bali Water",
    title: "Mountain Hippie Soda Co.",
    dek: "Brand identity design for Mountain Hippie Soda Co., showcasing logo and visual system — wavy 70s sun motif on orange cream.",
    tags: ["beverage-branding","logo-design","packaging","branding"],
    source: "i.pinimg.com", days: 52, aspect: "tall", featured: true,
    grad: ["#E0641F","#F4C77A"], vibe: "retro 70s packaging warm orange branding handmade",
  },
  {
    id: "s5", project: "uncat", cat: "Uncategorized",
    title: "Parapat-Samosir, North Sumatera :: Behance",
    dek: "A Behance portfolio showcasing photography work from the Parapat-Samosir region in North Sumatra — rainbow analog cassettes stacked.",
    tags: ["photography","travel","indonesia","film"],
    source: "behance.net", days: 52, aspect: "square",
    grad: ["#C23B6A","#E8923C"], vibe: "colorful cassettes retro analog photography saturated",
  },
  {
    id: "s6", project: "water", cat: "Bali Water",
    title: "Wildflower field, long exposure",
    dek: "Dragged-shutter meadow — pinks and greens streaked into painterly motion. Saved for the Bali Water campaign mood.",
    tags: ["abstract","nature","texture","aesthetic"],
    source: "i.pinimg.com", days: 53, aspect: "tall",
    grad: ["#6E8F4E","#E2A6C0"], vibe: "wildflower motion blur green pink nature painterly",
  },
  {
    id: "s7", project: "uncat", cat: "Uncategorized",
    title: "An Old Video Footage Of People Enjoying Their Day",
    dek: "Grainy Super-8 transfer — figures on a boardwalk, sun flare, the particular softness of degraded film stock.",
    tags: ["film","vintage","people","memories"],
    source: "vimeo.com", days: 55, aspect: "square",
    grad: ["#8A5A2B","#D9C18E"], vibe: "super 8 film grain vintage people nostalgic warm",
  },
  {
    id: "s8", project: "brand", cat: "Brand Identity",
    title: "Risograph zine spread",
    dek: "Two-color riso print, fluorescent pink over warm grey. Misregistration as texture. Reference for the handmade print direction.",
    tags: ["branding","design-reference","texture","art"],
    source: "are.na", days: 58, aspect: "wide",
    grad: ["#D7456E","#7C7466"], vibe: "risograph print handmade pink texture editorial",
  },
  {
    id: "s9", project: "texture", cat: "Textures",
    title: "Sun-faded paper scan",
    dek: "High-res scan of foxed, sun-yellowed paper. The kind of warmth that's hard to fake digitally.",
    tags: ["texture","vintage","historical","design-reference"],
    source: "i.pinimg.com", days: 60, aspect: "square",
    grad: ["#D8B673","#A88A50"], vibe: "paper texture sun faded warm analog scan",
  },
  {
    id: "s10", project: "websites", cat: "Websites",
    title: "Editorial portfolio, big serif",
    dek: "A photographer's site — oversized Caslon headlines, generous margins, the work doing the talking.",
    tags: ["design","visual-reference","inspiration","art"],
    source: "cargo.site", days: 61, aspect: "tall",
    grad: ["#2B2B2B","#C9A24B"], vibe: "editorial website serif typography minimal portfolio",
  },
  {
    id: "s11", project: "water", cat: "Bali Water",
    title: "Glass bottle, condensation macro",
    dek: "Cold glass, beading water, a single shaft of warm light. Product photography reference for the still range.",
    tags: ["photography","packaging","beverage-branding","lifestyle"],
    source: "i.pinimg.com", days: 62, aspect: "square",
    grad: ["#3C7C8C","#E8C266"], vibe: "glass bottle water product photography warm light",
  },
  {
    id: "s12", project: "tutorial", cat: "Tutorials",
    title: "Halation & bloom in Resolve",
    dek: "Walkthrough on recreating filmic halation — that red glow around highlights — in DaVinci. Saved to study later.",
    tags: ["tutorial","film","design-reference","texture"],
    source: "youtube.com", days: 64, aspect: "wide",
    grad: ["#9A2D2D","#E8923C"], vibe: "halation film glow tutorial color grading warm",
  },
  {
    id: "s13", project: "uncat", cat: "Uncategorized",
    title: "Market stall, color study",
    dek: "Stacked fruit under a striped awning — a ready-made palette of warm reds and shaded blues.",
    tags: ["travel","photography","aesthetic","people"],
    source: "i.pinimg.com", days: 66, aspect: "tall",
    grad: ["#C24B3A","#2F6E7E"], vibe: "market color study warm red travel palette",
  },
  {
    id: "s14", project: "brand", cat: "Brand Identity",
    title: "Hand-painted ghost sign",
    dek: "Weathered wall lettering, decades of fade. The lettering imperfection is the whole point.",
    tags: ["branding","historical","vintage","art"],
    source: "flickr.com", days: 70, aspect: "square",
    grad: ["#9E7B4F","#D9C9A8"], vibe: "ghost sign hand painted lettering weathered vintage",
  },
  {
    id: "s15", project: "websites", cat: "Websites",
    title: "Soft-grain landing page",
    dek: "Cream background, one big image, a noise overlay you can almost feel. Bookmarking the texture trick.",
    tags: ["design","inspiration","texture","visual-reference"],
    source: "godly.website", days: 72, aspect: "wide",
    grad: ["#E4D6BC","#B98A55"], vibe: "cream grain noise landing page soft warm minimal",
  },
  {
    id: "s16", project: "texture", cat: "Textures",
    title: "Anodized metal gradient",
    dek: "Oil-slick sheen across brushed aluminum — cool counterpoint to all the warm saves.",
    tags: ["texture","abstract","digital-art","design-reference"],
    source: "i.pinimg.com", days: 74, aspect: "square",
    grad: ["#5A6B8C","#C77E9A"], vibe: "anodized metal gradient iridescent cool abstract",
  },
];

// Recurring motifs the AI "extracted" — drives the Taste Signature band.
export const SIGNATURE = {
  line: "This month your taste leans into sun-bleached analog warmth, handmade packaging, and the soft imperfection of degraded film.",
  motifs: ["warm analog","nostalgia","handmade print","golden hour","film grain","70s packaging"],
  palette: ["#C86A3E","#E0641F","#E8C266","#3C7C8C","#9A2D2D","#D9C18E"],
  newThisWeek: 7,
};
