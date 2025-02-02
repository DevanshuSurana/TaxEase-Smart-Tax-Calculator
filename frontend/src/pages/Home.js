import React, { useState } from "react";
import {
  Container,
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import IncomeForm from "../components/IncomeForm";
import Chart from "../components/Chart";
import TaxResults from "../components/TaxResults";
import { calculateTax } from "../services/api";

const Home = () => {
  const [incomeData, setIncomeData] = useState({
    salaryIncome: "",
    businessIncome: "",
    rentalIncome: "",
    deductions: "",
    stcg: "",
    ltcg: "",
  });

  const [result, setResult] = useState(null);

  const handleCalculate = async () => {
    try {
      // ✅ Convert input values to numbers and remove commas
      const formattedData = {
        salaryIncome: Number(incomeData.salaryIncome.replace(/,/g, "")) || 0,
        businessIncome:
          Number(incomeData.businessIncome.replace(/,/g, "")) || 0,
        rentalIncome: Number(incomeData.rentalIncome.replace(/,/g, "")) || 0,
        deductions: Number(incomeData.deductions.replace(/,/g, "")) || 0,
        stcg: Number(incomeData.stcg.replace(/,/g, "")) || 0,
        ltcg: Number(incomeData.ltcg.replace(/,/g, "")) || 0,
      };

      console.log("Sending Data:", formattedData); // Debugging Input Data

      const response = await calculateTax(formattedData);
      const data = response.data;

      console.log("Received Data:", data); // Debugging API Response

      setResult({
        oldRegimeTax: Number(data.oldRegimeTax) || 0,
        newRegimeTax: Number(data.newRegimeTax) || 0,
        capitalGainsTax: Number(data.capitalGainsTax) || 0,
        taxSavings: Number(data.taxSavings) || 0,
        takeHomeOld: Number(data.takeHomeOld) || 0,
        takeHomeNew: Number(data.takeHomeNew) || 0,
      });
    } catch (error) {
      console.error("API Error:", error.message);
      alert("Failed to fetch tax calculation. Please try again.");
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: "50px" }}>
      <Card>
        <CardContent>
          <Typography variant="h4" align="center">
            Tax Calculator (Old vs New)
          </Typography>

          {Object.keys(incomeData).map((key) => (
            <IncomeForm
              key={key}
              label={key.replace(/([A-Z])/g, " $1")}
              value={incomeData[key]}
              setValue={(value) =>
                setIncomeData((prev) => ({ ...prev, [key]: value }))
              }
            />
          ))}

          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleCalculate}
            style={{ marginTop: "20px" }}
          >
            Calculate Tax
          </Button>

          {result && (
            <>
              <TaxResults result={result} />
              <Chart
                data={[
                  { name: "Old Regime", Tax: result.oldRegimeTax },
                  { name: "New Regime", Tax: result.newRegimeTax },
                ]}
              />
            </>
          )}
        </CardContent>
      </Card>
    </Container>
  );
};

export default Home;
