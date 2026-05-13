// src/data/data.js

export const customers = [
  { id: "CUST001", name: "Budi Santoso", email: "budi.s@example.com", phone: "081234567890", loyalty: "Gold" },
  { id: "CUST002", name: "Siti Aminah", email: "siti.a@example.com", phone: "082198765432", loyalty: "Silver" },
  { id: "CUST003", name: "Andi Wijaya", email: "andi.w@example.com", phone: "081122334455", loyalty: "Bronze" },
  { id: "CUST004", name: "Dewi Lestari", email: "dewi.l@example.com", phone: "085266778899", loyalty: "Gold" },
  { id: "CUST005", name: "Eko Prasetyo", email: "eko.p@example.com", phone: "081344556677", loyalty: "Silver" },
  { id: "CUST006", name: "Rina Permata", email: "rina.p@example.com", phone: "087788990011", loyalty: "Bronze" },
  { id: "CUST007", name: "Fajar Nugraha", email: "fajar.n@example.com", phone: "081900112233", loyalty: "Gold" },
  { id: "CUST008", name: "Maya Indah", email: "maya.i@example.com", phone: "081255667788", loyalty: "Silver" },
  { id: "CUST009", name: "Hendra Kurniawan", email: "hendra.k@example.com", phone: "085311223344", loyalty: "Bronze" },
  { id: "CUST010", name: "Sari Devi", email: "sari.d@example.com", phone: "082233445566", loyalty: "Gold" },
  { id: "CUST011", name: "Rizky Ramadhan", email: "rizky.r@example.com", phone: "081199887766", loyalty: "Silver" },
  { id: "CUST012", name: "Indah Putri", email: "indah.p@example.com", phone: "087855443322", loyalty: "Bronze" },
  { id: "CUST013", name: "Denny Caknan", email: "denny.c@example.com", phone: "081200998877", loyalty: "Gold" },
  { id: "CUST014", name: "Lusiana", email: "lusiana@example.com", phone: "081377665544", loyalty: "Silver" },
  { id: "CUST015", name: "Bambang Pamungkas", email: "bambang.p@example.com", phone: "085211224455", loyalty: "Bronze" }
];

export const orders = [
  { id: "ORD001", customerName: "Budi Santoso", status: "Completed", totalPrice: 150000, orderDate: "2024-03-01" },
  { id: "ORD002", customerName: "Siti Aminah", status: "Pending", totalPrice: 75000, orderDate: "2024-03-02" },
  { id: "ORD003", customerName: "Andi Wijaya", status: "Cancelled", totalPrice: 200000, orderDate: "2024-03-02" },
  { id: "ORD004", customerName: "Dewi Lestari", status: "Completed", totalPrice: 350000, orderDate: "2024-03-03" },
  { id: "ORD005", customerName: "Eko Prasetyo", status: "Completed", totalPrice: 120000, orderDate: "2024-03-04" },
  { id: "ORD006", customerName: "Rina Permata", status: "Pending", totalPrice: 50000, orderDate: "2024-03-05" },
  { id: "ORD007", customerName: "Fajar Nugraha", status: "Completed", totalPrice: 450000, orderDate: "2024-03-05" },
  { id: "ORD008", customerName: "Maya Indah", status: "Cancelled", totalPrice: 85000, orderDate: "2024-03-06" },
  { id: "ORD009", customerName: "Hendra Kurniawan", status: "Completed", totalPrice: 175000, orderDate: "2024-03-07" },
  { id: "ORD010", customerName: "Sari Devi", status: "Pending", totalPrice: 95000, orderDate: "2024-03-08" },
  { id: "ORD011", customerName: "Rizky Ramadhan", status: "Completed", totalPrice: 210000, orderDate: "2024-03-09" },
  { id: "ORD012", customerName: "Indah Putri", status: "Completed", totalPrice: 300000, orderDate: "2024-03-10" },
  { id: "ORD013", customerName: "Denny Caknan", status: "Pending", totalPrice: 125000, orderDate: "2024-03-11" },
  { id: "ORD014", customerName: "Lusiana", status: "Completed", totalPrice: 500000, orderDate: "2024-03-12" },
  { id: "ORD015", customerName: "Bambang Pamungkas", status: "Cancelled", totalPrice: 60000, orderDate: "2024-03-13" }
];
export const products = [
  {
    id: 1,
    name: "Nasi Goreng Special",
    price: "Rp 25.000",
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 2,
    name: "Burger Beef Premium",
    price: "Rp 35.000",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 3,
    name: "Pizza Italian",
    price: "Rp 55.000",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop",
  },

  {
  id: 4,
  name: "Ramen Jepang",
  price: "Rp 22.000",
  image:
    "https://images.unsplash.com/photo-1617093727343-374698b1b08d?q=80&w=1200&auto=format&fit=crop",
},

{
  id: 5,
  name: "Chicken Crispy Steak",
  price: "Rp 40.000",
  image:
    "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=1200&auto=format&fit=crop",
},

  {
    id: 6,
    name: "Sate Padang",
    price: "Rp 30.000",
    image:
      "https://images.unsplash.com/photo-1529563021893-cc83c992d75d?q=80&w=1200&auto=format&fit=crop",
  },
];
export const testimonials = [
  {
    id: 1,
    name: "Amanda Putri",
    avatar: "https://i.pravatar.cc/150?img=32",
    review:
      "Makanannya enak banget dan tampilannya premium. Pengirimannya juga cepat!",
  },

  {
    id: 2,
    name: "Rizky Saputra",
    avatar: "https://i.pravatar.cc/150?img=12",
    review:
      "Website Foodies sangat modern dan mudah digunakan untuk pesan makanan.",
  },

  {
    id: 3,
    name: "Nabila Aulia",
    avatar: "https://i.pravatar.cc/150?img=48",
    review:
      "Menu makanannya banyak dan semuanya terlihat fresh serta berkualitas.",
  },

  {
    id: 4,
    name: "Kevin Jonathan",
    avatar: "https://i.pravatar.cc/150?img=15",
    review:
      "Pelayanannya sangat ramah dan proses order sangat praktis.",
  },

  {
    id: 5,
    name: "Salsa Maharani",
    avatar: "https://i.pravatar.cc/150?img=25",
    review:
      "Recommended banget buat pesan makanan sehari-hari. Desain aplikasinya keren!",
  },
];