# Expense Management App

Backend repo can be accessed [here](https://github.com/lee-kimmixq/expense-mgmt-app-backend)

## Project Brief

#### MVP:

- User login with JWT
- CRUD for expenses
- Expense categorisation
- Chart visualisations (likely Chart.js)

#### Comfortable:

- Use OCR to scan receipts/pdf statements and automatically logs expense

#### More Comfortable:

- Generate in-app reports on monthly/annual expenses
- Budgeting
- Shared expenses with friends - generates Telegram message to friend
- Email verification during sign up/change password
- Recurring bill payment reminders

## User Flow

![user-flow](https://user-images.githubusercontent.com/81580551/175755295-27528222-dd58-492e-84b4-291ba822bd44.png)

## Wireframes

![login](https://user-images.githubusercontent.com/81580551/175755333-70d3960d-659f-40c7-9f1d-92731165d8d9.png)
![signup](https://user-images.githubusercontent.com/81580551/175755332-e636918e-62f7-4346-b98b-6b2ba354cd8b.png)
![dashboard](https://user-images.githubusercontent.com/81580551/175755331-74080e41-21d0-4a06-9851-2dd8253f5713.png)
![txn_form](https://user-images.githubusercontent.com/81580551/175755330-5465ca6d-d8b1-45f0-bece-222e140f2fcf.png)
![txn_list](https://user-images.githubusercontent.com/81580551/175755363-12580119-ee14-4c36-884e-def93f8882ab.png)
![reports](https://user-images.githubusercontent.com/81580551/175755358-6935e137-4540-4dd7-b4e5-f4537b03bce0.png)
![category_reports](https://user-images.githubusercontent.com/81580551/175755324-b479bcaa-4bd1-4fa6-b774-86102d6a213d.png)

## ERD

![erd](https://user-images.githubusercontent.com/81580551/175755307-b6d2d7f5-9868-4933-a88f-1586ee515c46.png)

## Set up

After cloning, create .env file in root folder and paste the following line:
REACT_APP_BACKEND_URL="http://localhost:3004"
