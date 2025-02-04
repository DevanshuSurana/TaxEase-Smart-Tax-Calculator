# TaxEase - Smart Tax Calculator

**TaxEase** is an easy-to-use tax calculator web application designed to help users calculate their income tax liabilities under both the old and new tax regimes for the financial year 2025-2026. It provides a detailed comparison of the tax calculations based on different types of income, deductions, and capital gains. Additionally, users can visualize the differences in tax calculations through interactive charts.

## Features

- **Calculate Tax under Old and New Regimes:** Easily calculate taxes for both old and new tax regimes with detailed comparisons.
- **Income Input Form:** Users can input salary income, business income, rental income, and capital gains (short-term and long-term).
- **Tax Deduction Inputs:** Users can input any tax-saving deductions to calculate their potential savings.
- **Real-time Calculation:** Displays the calculated tax, tax savings, and take-home salary in real-time.
- **Visualization with Charts:** A chart that shows a clear comparison of tax values between the old and new regimes.

## Technologies Used

- **Frontend:**
  - React.js: JavaScript library for building user interfaces.
  - Material-UI: UI framework for React to create responsive, modern, and customizable user interfaces.
  - Chart.js: JavaScript library to visualize tax data with interactive charts.

- **Backend (Optional):**
  - Node.js (with Express): Server-side framework for handling API requests (for calculating taxes).
  
- **Version Control:**
  - Git and GitHub: Used for version control and collaboration.

## How to Run the Project

### 1. Clone the Repository:

```bash
git clone https://github.com/DevanshuSurana/TaxEase-Smart-Tax-Calculator.git
```
### 2. Navigate to the Project Directory:
cd TaxEase-Smart-Tax-Calculator

### 3. Install Dependencies:
For frontend dependencies, use npm or yarn:
```bash
npm install
```
If you’re running the backend, you can install the backend dependencies similarly:
```bash
npm install
```

## 4. Run the Application:
To start the project:
```bash
npm start
```
Now, the application will be live on http://localhost:3000/ (or any port configured).

## How It Works

### User Inputs Income Data:

- **Salary Income**
- **Business Income**
- **Rental Income**
- **Deductions** (if applicable)
- **Short-Term Capital Gains (STCG)** and **Long-Term Capital Gains (LTCG)**

### Calculation Process:

- The user’s **total income** is calculated, and taxes under both the **old** and **new** tax regimes are computed based on the 2025-2026 tax slabs.
- **Capital gains tax** is calculated separately for **STCG** and **LTCG** based on their respective tax rates.
- **Tax savings** under the old regime are computed by comparing the taxes between the old and new regimes.

### Display Results:

- The results show:
  - The taxes for both **old** and **new** regimes.
  - **Tax savings**.
  - The **take-home salary** after tax deductions.

### Visual Chart:

- A **chart** is displayed to help the user visually compare taxes under both regimes.

