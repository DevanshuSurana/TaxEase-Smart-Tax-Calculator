exports.calculateNewRegimeTax = (income) => {
    if (income <= 700000) return 0;
    if (income <= 1000000) return (income - 700000) * 0.10;
    if (income <= 1500000) return (300000 * 0.10) + (income - 1000000) * 0.15;
    if (income <= 2400000) return (300000 * 0.10) + (500000 * 0.15) + (income - 1500000) * 0.20;
    return (300000 * 0.10) + (500000 * 0.15) + (900000 * 0.20) + (income - 2400000) * 0.30;
};

exports.calculateOldRegimeTax = (income, deductions) => {
    let taxableIncome = income - deductions;
    if (taxableIncome <= 250000) return 0;
    if (taxableIncome <= 500000) return (taxableIncome - 250000) * 0.05;
    if (taxableIncome <= 1000000) return (250000 * 0.05) + (taxableIncome - 500000) * 0.20;
    return (250000 * 0.05) + (500000 * 0.20) + (taxableIncome - 1000000) * 0.30;
};

exports.calculateCapitalGainsTax = (stcg, ltcg) => {
    let stcgTax = stcg * 0.15; 
    let ltcgTax = ltcg > 100000 ? (ltcg - 100000) * 0.10 : 0; 
    return stcgTax + ltcgTax;
};
