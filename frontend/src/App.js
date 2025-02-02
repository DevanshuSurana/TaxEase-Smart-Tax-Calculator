import React, { useState } from "react";
import { Container, Button, Typography, Card, CardContent } from "@mui/material";
import IncomeForm from "./components/IncomeForm";
import Chart from "./components/Chart";
import Home from "./pages/Home";
import TaxResults from "./components/TaxResults";
import { calculateTax } from "./services/api";

const App = () => {
    const [incomeData, setIncomeData] = useState({ salaryIncome: "", businessIncome: "", rentalIncome: "", deductions: "", stcg: "", ltcg: "" });
    const [result, setResult] = useState(null);

    const handleCalculate = async () => {
        try {
            console.log("Sending Data:", incomeData); // ✅ Check input before sending
    
            const response = await calculateTax(incomeData);
    
            console.log("Received Data:", response); // ✅ Check API response
    
            if (!response) {
                console.error("No response from API");
                return;
            }
    
            // ✅ Ensure response values are properly set
            setResult((prev) => {
                const updatedResult = {
                    oldRegimeTax: Number(response.data.oldRegimeTax) || 0,
                    newRegimeTax: Number(response.data.newRegimeTax) || 0,
                    capitalGainsTax: Number(response.data.capitalGainsTax) || 0,
                    taxSavings: Number(response.data.taxSavings) || 0,
                    takeHomeOld: Number(response.data.takeHomeOld) || 0,
                    takeHomeNew: Number(response.data.takeHomeNew) || 0
                };
            
                console.log("Updated result state:", updatedResult);
                return updatedResult;
            });
    
            console.log("Updated result state:", result); // ✅ Verify state update
        } catch (error) {
            console.error("API Error:", error.message);
            alert("Failed to fetch tax calculation. Please try again.");
        }
    };
    
    return (
        <Container maxWidth="sm" style={{ marginTop: "50px" }}>
            <Card>
                <CardContent>
                    <Typography variant="h4" align="center">Tax Calculator (Old vs New)</Typography>
                    
                    {Object.keys(incomeData).map((key) => (
                        <IncomeForm key={key} label={key.replace(/([A-Z])/g, " $1")} value={incomeData[key]} setValue={(value) => setIncomeData((prev) => ({ ...prev, [key]: value }))} />
                    ))}

                    <Button variant="contained" color="primary" fullWidth onClick={handleCalculate} style={{ marginTop: "20px" }}>Calculate Tax</Button>

                    {result && (
                        <>
                            <TaxResults result={result} />
                            <Chart data={[{ name: "Old Regime", Tax: result.oldRegimeTax }, { name: "New Regime", Tax: result.newRegimeTax }]} />
                        </>
                    )}
                </CardContent>
            </Card>
        </Container>
    );
};

export default App;
