import React from "react";
import Avatar from '@mui/material/Avatar';
import GenerateIcon from "../atoms/GenerateIcon";
import { green, deepPurple, pink, amber, lightBlue, blueGrey } from '@mui/material/colors';

export default function CategoryAvatar ({categoryId}) {

  const categories = [
        {
            id: 1,
            name: "Food & Drinks",
            color: deepPurple[100],
            icon: 'restaurant',
        },
        {
            id: 2,
            name: "Taxi",
            color: deepPurple[200],
            icon: 'hail',
        },
        {
            id: 3,
            name: "Public Transport",
            color: deepPurple[300],
            icon: 'directions_subway',
        },
        {
            id: 4,
            name: "Shopping",
            color: deepPurple[400],
            icon: 'shopping_bag',
        },
        {
            id: 5,
            name: "Groceries",
            color: deepPurple[50],
            icon: 'shopping_basket',
        },
        {
            id: 6,
            name: "Gifts & Charity",
            color: pink[100],
            icon: 'redeem',
        },
        {
            id: 7,
            name: "Entertainment",
            color: pink[200],
            icon: 'sports_esports',
        },
        {
            id: 8,
            name: "Others",
            color: pink[300],
            icon: 'attach_money',
        },
        {
            id: 9,
            name: "Auto & Parking",
            color: pink[400],
            icon: 'directions_car_icon',
        },
        {
            id: 10,
            name: "Bills",
            color: pink[500],
            icon: 'receipt_long',
        },
        {
            id: 11,
            name: "Business",
            color: amber[100],
            icon: 'business_center',
        },
        {
            id: 12,
            name: "Cash & Cheque",
            color: amber[200],
            icon: 'payments',
        },
        {
            id: 13,
            name: "Education",
            color: amber[300],
            icon: 'school',
        },
        {
            id: 14,
            name: "Family",
            color: amber[400],
            icon: 'family_restroom',
        },
        {
            id: 15,
            name: "Fees",
            color: amber[500],
            icon: 'receipt',
        },
        {
            id: 16,
            name: "Investments",
            color: lightBlue[100],
            icon: 'show_chart',
        },
        {
            id: 17,
            name: "Fuel",
            color: lightBlue[200],
            icon: 'local_gas_station',
        },
        {
            id: 18,
            name: "Health",
            color: lightBlue[300],
            icon: 'medication_liquid',
        },
        {
            id: 19,
            name: "Insurance",
            color: lightBlue[400],
            icon: 'health_and_safety',
        },
        {
            id: 20,
            name: "Kids",
            color: lightBlue[500],
            icon: 'child_care',
        },
        {
            id: 21,
            name: "Loans",
            color: blueGrey[100],
            icon: 'credit_score',
        },
        {
            id: 22,
            name: "Personal Care",
            color: blueGrey[200],
            icon: 'self_improvement',
        },
        {
            id: 23,
            name: "Pets",
            color: blueGrey[300],
            icon: 'pets',
        },
        {
            id: 24,
            name: "Rental",
            color: blueGrey[400],
            icon: 'real_estate_agent',
        },
        {
            id: 25,
            name: "Subscriptions",
            color: blueGrey[500],
            icon: 'event_repeat',
        },
        {
            id: 26,
            name: "Taxes",
            color: lightBlue[600],
            icon: 'request_quote',
        },
        {
            id: 27,
            name: "Travel",
            color: amber[600],
            icon: 'flight',
        },
        {
            id: 28,
            name: "Bonuses",
            color: green[100],
            icon: 'military_tech',
        },
        {
            id: 29,
            name: "Deposits",
            color: green[200],
            icon: 'savings',
        },
        {
            id: 30,
            name: "Investments",
            color: green[300],
            icon: 'trending_up',
        },
        {
            id: 31,
            name: "Refunds",
            color: green[400],
            icon: 'undo',
        },
        {
            id: 32,
            name: "Salaries",
            color: green[500],
            icon: 'work',
        },
        {
            id: 33,
            name: "Other Income",
            color: green[600],
            icon: 'paid',
        }
    ];

  const category = categories.filter(category => category.id == categoryId); // not strict equals

  return (
      <Avatar sx={{ bgcolor: category[0].color }}>
        <GenerateIcon name={category[0].icon} />
      </Avatar>
  );
}
