import pottery from "../images/pottery.jpg";
import jewelry from "../images/jewelry.jpg";
import zarbya from "../images/zarbya.jpg";
export const artisans = [
  {
    id: 0,
    name: "Syrine Eladeb",
    bio: "A passionate artisan with a love for creating unique handcrafted products.",
    address: "laouina",
    image: "frontend/src/profile.jpg",
    phoneNumber: "26893856",
    email: "syrine@gmail.com",
  },
  {
    
    id: 1,
    name: "rym lara ",
    bio: "A passionate artisan with a love for creating unique handcrafted products.",
    address: "sokra",
    image: "frontend/src/profile.jpg",
    phoneNumber: "96893876",
    email: "rym@gmail.com",},
  {
    id: 2,
    name: "ahmad bacha",
    bio: "A passionate artisan with a love for creating unique handcrafted products.",
    address: "tunis",
    image: "frontend/src/profile.jpg",
    phoneNumber: "26845856",
    email: "ahmad@gmail.com"
  },
  // Add more artisans as needed
];
export const products = [
  {
    id: 0,
    name: "Handmade Pottery",
    description: "Beautiful ceramic pottery handcrafted with care.",
    price: 55,
    qte: 0,
    image: pottery,
    region: "kairouan",
    category:"pottery",
    artisanId: 0, 
    comments: [
      { _id: 1, user: { username: 'Salma.Chikh' }, text: 'Great product!' },
      { _id: 2, user: { username: 'Amir.Ali' }, text: 'I love it <3 !' },
    ],
  },
  {
    id: 1,
    name: "Artisanal Jewelry",
    description: "One-of-a-kind jewelry pieces that stand out.",
    price: 55,
    qte: 0,
    image:jewelry,
    region:"tatouine",
    category:"jewelry",
    artisanId: 1, 
    comments: [
      { _id: 3, user: { username: 'laila' }, text: 'Amazing craftsmanship!' },
      { _id: 4, user: { username: 'ahmed' }, text: 'Unique designs!' },
    ],
  },
  {
    id: 2,
    name: "Zarbya",
    description: "One-of-a-kind jewelry pieces that stand out.",
    price: 88,
    qte: 0,
    region:"tunis",
    category:"zarbya",
    image:zarbya,
    artisanId: 2, 
    comments: [
      { _id: 3, user: { username: 'laila' }, text: 'Amazing craftsmanship!' },
      { _id: 4, user: { username: 'ahmed' }, text: 'Unique designs!' },
    ],
  },
  // Add more products as needed
];


export const buyers = [
  {
    id: 0,
    name: "John Doe",
    email: "john.doe@example.com",
    phoneNumber: "1234567890",
    address: "123 Main St",
    cardNumber: "**** **** **** 1234",
  },
  {
    id: 1,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phoneNumber: "9876543210",
    address: "456 Oak St",
    cardNumber: "**** **** **** 5678",
  },
  // Add more buyers as needed
];
