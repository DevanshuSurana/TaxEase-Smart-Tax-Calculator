import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import Chart from "./Chart"; // ✅ Import Chart component

const TaxResults = ({ result }) => {
    if (!result) return null; // ✅ Prevents rendering when result is undefined

    return (
        <>
            <Card style={{ marginTop: "20px", padding: "10px" }}>
                <CardContent>
                    <Typography variant="h5" align="center">Tax Calculation Results</Typography>

                    <Grid container spacing={2} style={{ marginTop: "10px" }}>
                        <Grid item xs={6}><Typography variant="subtitle1">Old Regime Tax:</Typography></Grid>
                        <Grid item xs={6}><Typography variant="h6" align="right">₹{Number(result.oldRegimeTax).toLocaleString()}</Typography></Grid>

                        <Grid item xs={6}><Typography variant="subtitle1">New Regime Tax:</Typography></Grid>
                        <Grid item xs={6}><Typography variant="h6" align="right">₹{Number(result.newRegimeTax).toLocaleString()}</Typography></Grid>

                        <Grid item xs={6}><Typography variant="subtitle1">Capital Gains Tax:</Typography></Grid>
                        <Grid item xs={6}><Typography variant="h6" align="right">₹{Number(result.capitalGainsTax).toLocaleString()}</Typography></Grid>

                        <Grid item xs={6}><Typography variant="subtitle1" color="green">Tax Savings:</Typography></Grid>
                        <Grid item xs={6}><Typography variant="h6" color="green" align="right">₹{(result.oldRegimeTax - result.newRegimeTax).toLocaleString()}</Typography></Grid>

                        <Grid item xs={6}><Typography variant="subtitle1" color="blue">Take-Home (Old Regime):</Typography></Grid>
                        <Grid item xs={6}><Typography variant="h6" color="blue" align="right">₹{Number(result.takeHomeOld).toLocaleString()}</Typography></Grid>

                        <Grid item xs={6}><Typography variant="subtitle1" color="blue">Take-Home (New Regime):</Typography></Grid>
                        <Grid item xs={6}><Typography variant="h6" color="blue" align="right">₹{Number(result.takeHomeNew).toLocaleString()}</Typography></Grid>
                    </Grid>
                </CardContent>
            </Card>

            {/* ✅ Added Chart Below Tax Results */}
            <Chart data={[
                { name: "Old Regime", Tax: result.oldRegimeTax },
                { name: "New Regime", Tax: result.newRegimeTax }
            ]} />
        </>
    );
};

export default TaxResults;
