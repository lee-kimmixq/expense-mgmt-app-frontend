const { modalUnstyledClasses } = require("@mui/material");
const {
  green,
  deepPurple,
  pink,
  amber,
  lightBlue,
  blueGrey,
  purple,
  indigo
} = require("@mui/material/colors");

const categories = [
  {
    id: 1,
    name: "Food & Drinks",
    color: '#5948D3',
    icon: "restaurant",
  },
  {
    id: 2,
    name: "Taxi",
    color: '#CF65F2',
    icon: "hail",
  },
  {
    id: 3,
    name: "Public Transport",
    color: deepPurple[500],
    icon: "directions_subway",
  },
  {
    id: 4,
    name: "Shopping",
    color: deepPurple[400],
    icon: "shopping_bag",
  },
  {
    id: 5,
    name: "Groceries",
    color: deepPurple[600],
    icon: "shopping_basket",
  },
  {
    id: 6,
    name: "Gifts & Charity",
    color: purple['A200'],
    icon: "redeem",
  },
  {
    id: 7,
    name: "Entertainment",
    color: purple['A400'],
    icon: "sports_esports",
  },
  {
    id: 8,
    name: "Others",
    color: purple['A700'],
    icon: "attach_money",
  },
  {
    id: 9,
    name: "Auto & Parking",
    color: purple[600],
    icon: "directions_car_icon",
  },
  {
    id: 10,
    name: "Bills",
    color: purple[500],
    icon: "receipt_long",
  },
  {
    id: 11,
    name: "Business",
    color: amber['A700'],
    icon: "business_center",
  },
  {
    id: 12,
    name: "Cash & Cheque",
    color: amber['A400'],
    icon: "payments",
  },
  {
    id: 13,
    name: "Education",
    color: amber[600],
    icon: "school",
  },
  {
    id: 14,
    name: "Family",
    color: amber[400],
    icon: "family_restroom",
  },
  {
    id: 15,
    name: "Fees",
    color: amber[500],
    icon: "receipt",
  },
  {
    id: 16,
    name: "Investments",
    color: lightBlue['A400'],
    icon: "show_chart",
  },
  {
    id: 17,
    name: "Fuel",
    color: lightBlue['A700'],
    icon: "local_gas_station",
  },
  {
    id: 18,
    name: "Health",
    color: lightBlue[600],
    icon: "medication_liquid",
  },
  {
    id: 19,
    name: "Insurance",
    color: lightBlue[400],
    icon: "health_and_safety",
  },
  {
    id: 20,
    name: "Kids",
    color: lightBlue[500],
    icon: "child_care",
  },
  {
    id: 21,
    name: "Loans",
    color: blueGrey['A400'],
    icon: "credit_score",
  },
  {
    id: 22,
    name: "Personal Care",
    color: blueGrey['A700'],
    icon: "self_improvement",
  },
  {
    id: 23,
    name: "Pets",
    color: blueGrey[600],
    icon: "pets",
  },
  {
    id: 24,
    name: "Rental",
    color: blueGrey[400],
    icon: "real_estate_agent",
  },
  {
    id: 25,
    name: "Subscriptions",
    color: blueGrey[500],
    icon: "event_repeat",
  },
  {
    id: 26,
    name: "Taxes",
    color: lightBlue[800],
    icon: "request_quote",
  },
  {
    id: 27,
    name: "Travel",
    color: amber[700],
    icon: "flight",
  },
  {
    id: 28,
    name: "Bonuses",
    color: green['A700'],
    icon: "military_tech",
  },
  {
    id: 29,
    name: "Deposits",
    color: green[800],
    icon: "savings",
  },
  {
    id: 30,
    name: "Investments",
    color: green[700],
    icon: "trending_up",
  },
  {
    id: 31,
    name: "Refunds",
    color: green[400],
    icon: "undo",
  },
  {
    id: 32,
    name: "Salaries",
    color: green[500],
    icon: "work",
  },
  {
    id: 33,
    name: "Other Income",
    color: green[600],
    icon: "paid",
  },
];

module.exports = categories;
