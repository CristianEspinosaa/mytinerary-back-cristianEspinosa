import 'dotenv/config.js'
import '../../config/dataBase.js'
import Itinerarie from '../Itinerarie.js'

const itinerariesList = [
    {
      photo: "https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2016/09/569465-whatsapp-que-tus-contactos-ponen-rana-perfil.jpg?tf=3840x",
      name: "Paris City Lights Tour",
      price: 4,
      duration: 3,
      likes: 0,
      hashtags: ["#romantic", "#cityscape", "#nightlife"]
    },
    {
      photo: "https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2016/09/569465-whatsapp-que-tus-contactos-ponen-rana-perfil.jpg?tf=3840x",
      name: "Tokyo Cherry Blossom Walk",
      price: 3,
      duration: 2,
      likes: 0,
      hashtags: ["#nature", "#cherryblossom", "#Tokyo"]
    },
    {
      photo: "https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2016/09/569465-whatsapp-que-tus-contactos-ponen-rana-perfil.jpg?tf=3840x",
      name: "Dubai Desert Safari",
      price: 5,
      duration: 5,
      likes: 0,
      hashtags: ["#desert", "#adventure", "#Dubai"]
    },
    {
      photo: "https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2016/09/569465-whatsapp-que-tus-contactos-ponen-rana-perfil.jpg?tf=3840x",
      name: "New York Food Crawl",
      price: 4,
      duration: 4,
      likes: 0,
      hashtags: ["#foodie", "#citytours", "#NewYork"]
    },
    {
      photo: "https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2016/09/569465-whatsapp-que-tus-contactos-ponen-rana-perfil.jpg?tf=3840x",
      name: "Rome Ancient Wonders",
      price: 3,
      duration: 6,
      likes: 0,
      hashtags: ["#history", "#architecture", "#Rome"]
    },
    {
      photo: "https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2016/09/569465-whatsapp-que-tus-contactos-ponen-rana-perfil.jpg?tf=3840x",
      name: "Bangkok Night Markets",
      price: 2,
      duration: 3,
      likes: 0,
      hashtags: ["#shopping", "#nightlife", "#Bangkok"]
    },
    {
      photo: "https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2016/09/569465-whatsapp-que-tus-contactos-ponen-rana-perfil.jpg?tf=3840x",
      name: "Sydney Opera House Tour",
      price: 3,
      duration: 2,
      likes: 0,
      hashtags: ["#culture", "#iconic", "#Sydney"]
    },
    {
      photo: "https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2016/09/569465-whatsapp-que-tus-contactos-ponen-rana-perfil.jpg?tf=3840x",
      name: "Cape Town Wildlife Safari",
      price: 5,
      duration: 8,
      likes: 0,
      hashtags: ["#wildlife", "#safari", "#CapeTown"]
    },
    {
      photo: "https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2016/09/569465-whatsapp-que-tus-contactos-ponen-rana-perfil.jpg?tf=3840x",
      name: "Barcelona Gaudi Tour",
      price: 4,
      duration: 3,
      likes: 0,
      hashtags: ["#art", "#Gaudi", "#Barcelona"]
    },
    {
      photo: "https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2016/09/569465-whatsapp-que-tus-contactos-ponen-rana-perfil.jpg?tf=3840x",
      name: "Amsterdam Canal Cruise",
      price: 3,
      duration: 2,
      likes: 0,
      hashtags: ["#canals", "#relaxing", "#Amsterdam"]
    },
    {
      photo: "https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2016/09/569465-whatsapp-que-tus-contactos-ponen-rana-perfil.jpg?tf=3840x",
      name: "Istanbul Spice Bazaar",
      price: 2,
      duration: 2,
      likes: 0,
      hashtags: ["#spices", "#shopping", "#Istanbul"]
    },
    {
      photo: "https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2016/09/569465-whatsapp-que-tus-contactos-ponen-rana-perfil.jpg?tf=3840x",
      name: "Seoul Palace Tour",
      price: 3,
      duration: 4,
      likes: 0,
      hashtags: ["#history", "#culture", "#Seoul"]
    },
    {
      photo: "https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2016/09/569465-whatsapp-que-tus-contactos-ponen-rana-perfil.jpg?tf=3840x",
      name: "Prague Castle Tour",
      price: 3,
      duration: 3,
      likes: 0,
      hashtags: ["#castle", "#architecture", "#Prague"]
    },
    {
      photo: "https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2016/09/569465-whatsapp-que-tus-contactos-ponen-rana-perfil.jpg?tf=3840x",
      name: "Marrakech Medina Market",
      price: 2,
      duration: 3,
      likes: 0,
      hashtags: ["#market", "#authentic", "#Marrakech"]
    },
    {
      photo: "https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2016/09/569465-whatsapp-que-tus-contactos-ponen-rana-perfil.jpg?tf=3840x",
      name: "Rio de Janeiro Beach Day",
      price: 4,
      duration: 6,
      likes: 0,
      hashtags: ["#beach", "#sunny", "#RioDeJaneiro"]
    }
  ]

  
  Itinerarie.insertMany(itinerariesList)