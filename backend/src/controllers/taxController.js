exports.calculateTax = (req, res) => {
  console.log("Received Data:", req.body); // ✅ Debug Input Data

  const { salaryIncome, businessIncome, rentalIncome, deductions, stcg, ltcg } =
    req.body;

  if (!salaryIncome) {
    return res.status(400).json({ error: "Salary income is required." });
  }

  // ✅ Ensure all inputs are numbers (avoid undefined or NaN)
  const salary = Number(salaryIncome) || 0;
  const business = Number(businessIncome) || 0;
  const rental = Number(rentalIncome) || 0;
  const deduction = Number(deductions) || 0;
  const shortTermGains = Number(stcg) || 0;
  const longTermGains = Number(ltcg) || 0;

  // ✅ Total income calculation
  let totalIncome = salary + business + rental * 0.7;

  // ✅ Capital Gains Tax
  let capitalGainsTax =
    shortTermGains * 0.15 +
    (longTermGains > 100000 ? (longTermGains - 100000) * 0.1 : 0);

  // ✅ Old Regime Tax Calculation
  let taxableIncomeOld = totalIncome - deduction;
  let oldRegimeTax = 0;
  if (taxableIncomeOld > 250000) {
    oldRegimeTax += Math.min(250000, taxableIncomeOld - 250000) * 0.05;
  }
  if (taxableIncomeOld > 500000) {
    oldRegimeTax += Math.min(500000, taxableIncomeOld - 500000) * 0.2;
  }
  if (taxableIncomeOld > 1000000) {
    oldRegimeTax += (taxableIncomeOld - 1000000) * 0.3;
  }

  // ✅ New Regime Tax Calculation (No Deductions)
  let newRegimeTax = 0;
  if (totalIncome > 1200000) {
    if (totalIncome <= 1500000) {
      newRegimeTax += (totalIncome - 1200000) * 0.1;
    } else if (totalIncome <= 2400000) {
      newRegimeTax += 300000 * 0.1 + (totalIncome - 1500000) * 0.15;
    } else {
      newRegimeTax +=
        300000 * 0.1 + 900000 * 0.15 + (totalIncome - 2400000) * 0.3;
    }
  }

  // ✅ Take-home salary calculation
  let takeHomeOld = totalIncome - oldRegimeTax - capitalGainsTax;
  let takeHomeNew = totalIncome - newRegimeTax - capitalGainsTax;

  console.log("Calculated Tax Data:", {
    oldRegimeTax,
    newRegimeTax,
    capitalGainsTax,
    takeHomeOld,
    takeHomeNew,
  });

  res.json({
    oldRegimeTax: oldRegimeTax.toFixed(2),
    newRegimeTax: newRegimeTax.toFixed(2),
    capitalGainsTax: capitalGainsTax.toFixed(2),
    taxSavings: (oldRegimeTax - newRegimeTax).toFixed(2),
    takeHomeOld: takeHomeOld.toFixed(2),
    takeHomeNew: takeHomeNew.toFixed(2),
  });
};
