const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

const path = require("path");

app.use(cors());
app.use(express.json());

const packages = [
  {
    id: 1,
    title: "Everest Base Camp Trek",
    description:
      "Journey to the foot of the world's highest mountain with breathtaking Himalayan views.",
    duration: "14 Days",
    difficulty: "Challenging",
    price: 1299,
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800",
    highlights: ["Base Camp Visit", "Sherpa Culture", "Mountain Views"],
    category: "trekking",
  },
  {
    id: 2,
    title: "Annapurna Circuit",
    description:
      "Complete circuit around the Annapurna massif with diverse landscapes and cultures.",
    duration: "18 Days",
    difficulty: "Moderate",
    price: 1499,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    highlights: ["Thorong La Pass", "Hot Springs", "Diverse Terrain"],
    category: "trekking",
  },
  {
    id: 3,
    title: "Kathmandu Cultural Tour",
    description:
      "Explore ancient temples, palaces, and UNESCO World Heritage sites in the valley.",
    duration: "5 Days",
    difficulty: "Easy",
    price: 499,
    image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800",
    highlights: ["Durbar Squares", "Buddhist Stupas", "Local Cuisine"],
    category: "cultural",
  },
  {
    id: 4,
    title: "Chitwan Safari Adventure",
    description:
      "Wildlife safari in Nepal's premier national park with elephant rides and jungle walks.",
    duration: "3 Days",
    difficulty: "Easy",
    price: 399,
    image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=800",
    highlights: ["Rhino Spotting", "Elephant Safari", "Jungle Camp"],
    category: "wildlife",
  },
  {
    id: 5,
    title: "Langtang Valley Trek",
    description:
      "Beautiful valley trek with stunning mountain scenery and Tamang culture.",
    duration: "10 Days",
    difficulty: "Moderate",
    price: 899,
    image: "https://images.unsplash.com/photo-1583306411766-2ef5927f1f60?w=800",
    highlights: ["Kyanjin Gompa", "Glacier Views", "Tamang Villages"],
    category: "trekking",
  },
  {
    id: 6,
    title: "Pokhara Relaxation Retreat",
    description:
      "Peaceful lakeside retreat with boating, yoga, and mountain views.",
    duration: "4 Days",
    difficulty: "Easy",
    price: 349,
    image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800",
    highlights: ["Phewa Lake", "Peace Pagoda", "Paragliding Option"],
    category: "cultural",
  },
];

// API routes
app.get("/api/message", (req, res) => {
  res.json({ message: "This is the backend ! yk low key this is so cool." });
});

app.get("/api/packages", (req, res) => {
  res.json({ packages });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
