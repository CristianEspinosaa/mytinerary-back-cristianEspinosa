import 'dotenv/config.js'
import '../../config/dataBase.js'
import City from '../City.js'

const touristCities = [
  {
    name: "Paris",
    country: "France",
    language: "French",
    currency: "Euro",
    religion: "Christianity",
    image: "https://images2.alphacoders.com/546/546391.jpg",
    description: "The city of love, known for its iconic landmarks like the Eiffel Tower, world-class art at the Louvre, and charming streets and cafés.",
    itinerarie: "672a659c3d3b18d8865880c8"
  },
  {
    name: "Bangkok",
    country: "Thailand",
    language: "Thai",
    currency: "Baht",
    religion: "Buddhism",
    image: "https://images7.alphacoders.com/472/472347.jpg",
    description: "A vibrant city bustling with life, famous for its ornate temples, street food markets, and the Chao Phraya River.",
    itinerarie: '672a659c3d3b18d8865880cd' 
  },
  {
    name: "Dubai",
    country: "United Arab Emirates",
    language: "Arabic",
    currency: "Dirham",
    religion: "Islam",
    image: "https://wallpapers.com/images/hd/urbanscape-under-blue-sky-dubai-4k-90qnobig9lkqhizg.jpg",
    description: "A city of luxury, known for its futuristic skyscrapers, luxury shopping, and the iconic Burj Khalifa.",
    itinerarie: '672a659c3d3b18d8865880ca' 
  },
  {
    name: "Tokyo",
    country: "Japan",
    language: "Japanese",
    currency: "Yen",
    religion: "Shintoism/Buddhism",
    image: "https://wallpapers.com/images/featured/tokio-dxva6ho3h8x6m3xb.jpg",
    description: "An ultra-modern city with ancient traditions, famous for its neon-lit skyscrapers, bustling streets, and historic temples.",
    itinerarie: '672a659c3d3b18d8865880c9'
  },
  {
    name: "Rome",
    country: "Italy",
    language: "Italian",
    currency: "Euro",
    religion: "Christianity",
    image: "https://images2.alphacoders.com/132/1321981.jpeg",
    description: "The Eternal City, rich in history with landmarks like the Colosseum, the Vatican, and a timeless charm in every corner.",
    itinerarie: '672a659c3d3b18d8865880cc'
  },
  {
    name: "New York",
    country: "United States",
    language: "English",
    currency: "US Dollar",
    religion: "Christianity",
    image: "https://wallpapers.com/images/hd/new-york-city-4k-ultra-hd-59x1sxl6wiyy4brl.jpg",
    description: "The city that never sleeps, famous for its iconic skyline, Broadway shows, diverse neighborhoods, and Central Park.",
    itinerarie: '672a659c3d3b18d8865880cb'
  },
  {
    name: "Istanbul",
    country: "Turkey",
    language: "Turkish",
    currency: "Turkish Lira",
    religion: "Islam",
    image: "https://i.pinimg.com/originals/0a/e4/9c/0ae49c35f97762181beb393caf6434ba.png",
    description: "A city straddling two continents, known for its historical sites like the Hagia Sophia, vibrant bazaars, and rich culture.",
    itinerarie: '672a659c3d3b18d8865880d2'
  },
  {
    name: "Barcelona",
    country: "Spain",
    language: "Spanish/Catalan",
    currency: "Euro",
    religion: "Christianity",
    image: "https://i.pinimg.com/originals/ba/72/f4/ba72f40b0868b536956ab050d1ad086c.jpg",
    description: "A coastal city famed for its unique architecture by Gaudí, beautiful beaches, and lively cultural scene.",
    itinerarie: '672a659c3d3b18d8865880d0'
  },
  {
    name: "London",
    country: "United Kingdom",
    language: "English",
    currency: "Pound Sterling",
    religion: "Christianity",
    image: "https://i.pinimg.com/originals/14/6e/86/146e8630088ea5a21edc1ea02a81fb37.jpg",
    description: "A city of history and modernity, known for landmarks like Big Ben, the Tower of London, and its diverse culture."
  },
  {
    name: "Singapore",
    country: "Singapore",
    language: "English/Malay/Mandarin/Tamil",
    currency: "Singapore Dollar",
    religion: "Buddhism/Islam/Christianity",
    image: "https://images2.alphacoders.com/456/456142.jpg",
    description: "A global city with a mix of cultures, known for its stunning Marina Bay Sands, clean streets, and world-class dining."
  },
  {
    name: "Kuala Lumpur",
    country: "Malaysia",
    language: "Malay",
    currency: "Malaysian Ringgit",
    religion: "Islam",
    image: "https://images.pexels.com/photos/94420/pexels-photo-94420.jpeg?cs=srgb&dl=pexels-umaraffan499-94420.jpg&fm=jpg",
    description: "A city known for its iconic Petronas Twin Towers, diverse culture, and vibrant food scene.",
    itinerarie: '672a659c3d3b18d8865880cf'
    
  },
  {
    name: "Hong Kong",
    country: "China",
    language: "Cantonese",
    currency: "Hong Kong Dollar",
    religion: "Buddhism/Taoism/Christianity",
    image: "https://i.pinimg.com/originals/89/3d/17/893d172520a0f6a7522f7312f3e97bbe.jpg",
    description: "A bustling metropolis with a stunning skyline, famous for its vibrant markets, modern architecture, and harbor views."
  },
  {
    name: "Los Angeles",
    country: "United States",
    language: "English",
    currency: "US Dollar",
    religion: "Christianity",
    image: "https://wallpapers.com/images/featured/los-angeles-4k-3uzx5ntjhsb53jqq.jpg",
    description: "The entertainment capital, home to Hollywood, beautiful beaches, and diverse neighborhoods."
  },
  {
    name: "Delhi",
    country: "India",
    language: "Hindi/English",
    currency: "Indian Rupee",
    religion: "Hinduism",
    image: "https://images.pexels.com/photos/1542620/pexels-photo-1542620.jpeg",
    description: "A city of ancient history and vibrant culture, known for its monuments, bustling markets, and rich heritage."
  },
  {
    name: "Marrakech",
    country: "Morocco",
    language: "Arabic",
    currency: "Moroccan Dirham",
    religion: "Islam",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT731advLzjUhODThRi56MHFwV43t5HV3R9vA&s",
    description: "Known for its vibrant souks, historic palaces, and rich traditions, set against the backdrop of the Atlas Mountains.",
    itinerarie: '672a659c3d3b18d8865880d5'
  },
  {
    name: "Prague",
    country: "Czech Republic",
    language: "Czech",
    currency: "Czech Koruna",
    religion: "Christianity",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqSBkFvOSNdyKrffX9h_JW4ksmNDDASeTWsg&s",
    description: "A fairy-tale city with medieval architecture, charming bridges, and a historic Old Town.",
    itinerarie: '672a659c3d3b18d8865880d4'
  },
  {
    name: "Amsterdam",
    country: "Netherlands",
    language: "Dutch",
    currency: "Euro",
    religion: "Christianity",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxGkhrAFzmdnZhx2IB-cQXP3O1HdBTVl0yoA&s",
    description: "Famous for its canals, museums, and a lively cultural scene, offering a laid-back yet dynamic atmosphere.",
    itinerarie: '672a659c3d3b18d8865880d1'
  },
  {
    name: "Milan",
    country: "Italy",
    language: "Italian",
    currency: "Euro",
    religion: "Christianity",
    image: "https://images.pond5.com/milan-aerial-skyline-milano-italy-089393646_prevstill.jpeg",
    description: "Italy’s fashion capital, known for its stylish boutiques, historic architecture, and the stunning Duomo."
  },
  {
    name: "Vienna",
    country: "Austria",
    language: "German",
    currency: "Euro",
    religion: "Christianity",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD4_uxZxOyYqMquldxNA_XdtseRvuv4oq1kA&s",
    description: "A city of classical music and imperial history, known for its grand palaces, coffeehouses, and artistic heritage."
  },
  {
    name: "Venice",
    country: "Italy",
    language: "Italian",
    currency: "Euro",
    religion: "Christianity",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF2rhauk3kqHgeVTtxVfHGE3Ibmu8zTG8__w&s",
    description: "A city built on canals, known for its romantic gondolas, stunning architecture, and the famous Piazza San Marco."
  },
  {
    name: "Seoul",
    country: "South Korea",
    language: "Korean",
    currency: "South Korean Won",
    religion: "Buddhism/Christianity",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Hj7Qw4O_2SY07zo0RfYDbU3Z-clyTGArjw&s",
    description: "A vibrant city that blends tradition and modernity, known for its skyscrapers, palaces, and vibrant street markets.",
    itinerarie: '672a659c3d3b18d8865880d3'
  },
  {
    name: "Sydney",
    country: "Australia",
    language: "English",
    currency: "Australian Dollar",
    religion: "Christianity",
    image: "https://images5.alphacoders.com/555/thumb-1920-555091.jpg",
    description: "Known for its beautiful harbor, the iconic Opera House, and stunning beaches like Bondi Beach.",
    itinerarie: '672a659c3d3b18d8865880ce' 
  },
  {
    name: "Mexico City",
    country: "Mexico",
    language: "Spanish",
    currency: "Mexican Peso",
    religion: "Christianity",
    image: "https://media.es.wired.com/photos/66d6abbcc9c4519b5ef5aec2/16:9/w_2112,h_1188,c_limit/Ciudad%20de%20Me%CC%81xico%2034.jpg",
    description: "A vibrant metropolis with a rich history, famous for its Aztec heritage, museums, and culinary scene."
  },
  {
    name: "Rio de Janeiro",
    country: "Brazil",
    language: "Portuguese",
    currency: "Brazilian Real",
    religion: "Christianity",
    image: "https://i.ytimg.com/vi/GrHSFO9OINY/maxresdefault.jpg",
    description: "Known for its stunning beaches, Christ the Redeemer statue, and the world-famous Carnival.",
    itinerarie: '672a659c3d3b18d8865880d6'
  },
  {
    name: "Buenos Aires",
    country: "Argentina",
    language: "Spanish",
    currency: "Argentine Peso",
    religion: "Christianity",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuOC1mkV32EG-moC3Y02Eh763LbS9S5nVSdA&s",
    description: "The Paris of South America, known for its European architecture, tango culture, and vibrant nightlife."
  }
]


City.insertMany(touristCities)