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
      image: "https://images2.alphacoders.com/546/546391.jpg"
    },
    {
      name: "Bangkok",
      country: "Thailand",
      language: "Thai",
      currency: "Baht",
      religion: "Buddhism",
      image: "https://images7.alphacoders.com/472/472347.jpg"
    },
    {
      name: "Dubai",
      country: "United Arab Emirates",
      language: "Arabic",
      currency: "Dirham",
      religion: "Islam",
      image: "https://wallpapers.com/images/hd/urbanscape-under-blue-sky-dubai-4k-90qnobig9lkqhizg.jpg"
    },
    {
      name: "Tokyo",
      country: "Japan",
      language: "Japanese",
      currency: "Yen",
      religion: "Shintoism/Buddhism",
      image: "https://wallpapers.com/images/featured/tokio-dxva6ho3h8x6m3xb.jpg"
    },
    {
      name: "Rome",
      country: "Italy",
      language: "Italian",
      currency: "Euro",
      religion: "Christianity",
      image: "https://images2.alphacoders.com/132/1321981.jpeg"
    },
    {
      name: "New York",
      country: "United States",
      language: "English",
      currency: "US Dollar",
      religion: "Christianity",
      image: "https://wallpapers.com/images/hd/new-york-city-4k-ultra-hd-59x1sxl6wiyy4brl.jpg"
    },
    {
      name: "Istanbul",
      country: "Turkey",
      language: "Turkish",
      currency: "Turkish Lira",
      religion: "Islam",
      image: "https://i.pinimg.com/originals/0a/e4/9c/0ae49c35f97762181beb393caf6434ba.png"
    },
    {
      name: "Barcelona",
      country: "Spain",
      language: "Spanish/Catalan",
      currency: "Euro",
      religion: "Christianity",
      image: "https://i.pinimg.com/originals/ba/72/f4/ba72f40b0868b536956ab050d1ad086c.jpg"
    },
    {
      name: "London",
      country: "United Kingdom",
      language: "English",
      currency: "Pound Sterling",
      religion: "Christianity",
      image: "https://i.pinimg.com/originals/14/6e/86/146e8630088ea5a21edc1ea02a81fb37.jpg"
    },
    {
      name: "Singapore",
      country: "Singapore",
      language: "English/Malay/Mandarin/Tamil",
      currency: "Singapore Dollar",
      religion: "Buddhism/Islam/Christianity",
      image: "https://images2.alphacoders.com/456/456142.jpg"
    },
    {
      name: "Kuala Lumpur",
      country: "Malaysia",
      language: "Malay",
      currency: "Malaysian Ringgit",
      religion: "Islam",
      image: "https://images.pexels.com/photos/94420/pexels-photo-94420.jpeg?cs=srgb&dl=pexels-umaraffan499-94420.jpg&fm=jpg"
    },
    {
      name: "Hong Kong",
      country: "China",
      language: "Cantonese",
      currency: "Hong Kong Dollar",
      religion: "Buddhism/Taoism/Christianity",
      image: "https://i.pinimg.com/originals/89/3d/17/893d172520a0f6a7522f7312f3e97bbe.jpg"
    },
    {
      name: "Los Angeles",
      country: "United States",
      language: "English",
      currency: "US Dollar",
      religion: "Christianity",
      image: "https://wallpapers.com/images/featured/los-angeles-4k-3uzx5ntjhsb53jqq.jpg"
    },
    {
      name: "Delhi",
      country: "India",
      language: "Hindi/English",
      currency: "Indian Rupee",
      religion: "Hinduism",
      image: "https://images.pexels.com/photos/1542620/pexels-photo-1542620.jpeg"
    },
    {
      name: "Marrakech",
      country: "Morocco",
      language: "Arabic",
      currency: "Moroccan Dirham",
      religion: "Islam",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT731advLzjUhODThRi56MHFwV43t5HV3R9vA&s"
    },
    {
      name: "Prague",
      country: "Czech Republic",
      language: "Czech",
      currency: "Czech Koruna",
      religion: "Christianity",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqSBkFvOSNdyKrffX9h_JW4ksmNDDASeTWsg&s"
    },
    {
      name: "Amsterdam",
      country: "Netherlands",
      language: "Dutch",
      currency: "Euro",
      religion: "Christianity",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxGkhrAFzmdnZhx2IB-cQXP3O1HdBTVl0yoA&s"
    },
    {
      name: "Milan",
      country: "Italy",
      language: "Italian",
      currency: "Euro",
      religion: "Christianity",
      image: "https://images.pond5.com/milan-aerial-skyline-milano-italy-089393646_prevstill.jpeg"
    },
    {
      name: "Vienna",
      country: "Austria",
      language: "German",
      currency: "Euro",
      religion: "Christianity",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD4_uxZxOyYqMquldxNA_XdtseRvuv4oq1kA&s"
    },
    {
      name: "Venice",
      country: "Italy",
      language: "Italian",
      currency: "Euro",
      religion: "Christianity",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF2rhauk3kqHgeVTtxVfHGE3Ibmu8zTG8__w&s"
    },
    {
      name: "Seoul",
      country: "South Korea",
      language: "Korean",
      currency: "South Korean Won",
      religion: "Buddhism/Christianity",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Hj7Qw4O_2SY07zo0RfYDbU3Z-clyTGArjw&s"
    },
    {
      name: "Sydney",
      country: "Australia",
      language: "English",
      currency: "Australian Dollar",
      religion: "Christianity",
      image: "https://images5.alphacoders.com/555/thumb-1920-555091.jpg"
    },
    {
      name: "Mexico City",
      country: "Mexico",
      language: "Spanish",
      currency: "Mexican Peso",
      religion: "Christianity",
      image: "https://media.es.wired.com/photos/66d6abbcc9c4519b5ef5aec2/16:9/w_2112,h_1188,c_limit/Ciudad%20de%20Me%CC%81xico%2034.jpg"
    },
    {
      name: "Rio de Janeiro",
      country: "Brazil",
      language: "Portuguese",
      currency: "Brazilian Real",
      religion: "Christianity",
      image: "https://i.ytimg.com/vi/GrHSFO9OINY/maxresdefault.jpg"
    },
    {
      name: "Buenos Aires",
      country: "Argentina",
      language: "Spanish",
      currency: "Argentine Peso",
      religion: "Christianity",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuOC1mkV32EG-moC3Y02Eh763LbS9S5nVSdA&s"
    }
  ];

City.insertMany(touristCities)