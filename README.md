# Eazie - Your Easy and Secure Banking Solution

Eazie is a comprehensive financial SaaS platform built with Next.js. It offers seamless connectivity to multiple bank accounts, real-time transaction display, user-to-user money transfers, and intuitive finance management.

🌐 [Try Eazie Now](https://eazie.vercel.app/)

📣 Need help or have questions? Join our thriving Discord community with over 34,000 members where users help each other out!

## 🚀 Key Features

- **🔐 Secure Authentication**: SSR authentication with robust validations and authorization
- **🏦 Multi-Bank Integration**: Connect multiple bank accounts using Plaid
- **📊 Dashboard Overview**: Total balance, recent transactions, and spending categories at a glance
- **💼 Bank Account Management**: Comprehensive list of connected banks with account details
- **📜 Transaction History**: Paginated and filterable transaction logs
- **🔄 Real-time Updates**: Instant reflection of new bank connections across the platform
- **💸 Fund Transfers**: Easy money transfers to other users via Dwolla
- **📱 Responsive Design**: Seamless experience across desktop, tablet, and mobile devices
- **🧱 Clean Architecture**: Emphasis on code reusability and maintainability

## ⚙️ Tech Stack

- **Framework**: Next.js
- **Language**: TypeScript
- **Backend Services**: Appwrite, Plaid, Dwolla
- **Form Handling**: React Hook Form, Zod
- **Styling**: TailwindCSS, ShadCN
- **Data Visualization**: Chart.js

## 🛠️ Getting Started

### Prerequisites

Ensure you have the following installed:
- Git
- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/eazie.git
   cd eazie

2. Install dependencies:

   ```bash
   npm install
3. Set up environment variables:
   Create a .env file in the root directory of your project and add the following variables:

   ```bash
   # NEXT
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   
   # APPWRITE
   NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
   NEXT_PUBLIC_APPWRITE_PROJECT=
   APPWRITE_DATABASE_ID=
   APPWRITE_USER_COLLECTION_ID=
   APPWRITE_ITEM_COLLECTION_ID=
   APPWRITE_BANK_COLLECTION_ID=
   APPWRITE_TRANSACTION_COLLECTION_ID=
   NEXT_APPWRITE_KEY=
   
   # PLAID
   PLAID_CLIENT_ID=
   PLAID_SECRET=
   PLAID_ENV=
   PLAID_PRODUCTS=
   PLAID_COUNTRY_CODES=
   
   # DWOLLA
   DWOLLA_KEY=
   DWOLLA_SECRET=
   DWOLLA_BASE_URL=
   DWOLLA_ENV=
  
5. Run the development server:
   
   ```bash
    npm run dev
