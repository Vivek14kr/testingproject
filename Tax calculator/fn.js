function taxcalculator(income) {
    var saving = 0;
    var ans = ""

    var tax
    if (income <= 250000) {
        tax = 0
        saving = 0
        ans = "Tax:" + " " + tax + " " + "Income:" + " " + income
        return ans
        //   return tax, saving;
    } else if (income <= 500000) {
        tax = (income - 250000) * 0.10;
        saving = income - tax
        income = income - (saving * 0.50);
        ans = "Tax:" + " " + tax + " " + "Income:" + " " + income
        return ans
        //    return tax, saving;

    } else if (income <= 1000000) {
        tax = (income - 500000) * 0.20
        saving = income - tax
        income = income - (saving * 0.30);
        ans = "Tax:" + " " + tax + " " + "Income:" + " " + income
        return ans
    } else {
        tax = (income - 1000000) * 0.30
        saving = income - tax
        income = income - (saving * 0.30);
        
        ans = "Tax:" + " " + tax + " " + "Income:" + " " + income
        return ans
    }
}

module.exports = {
    taxcalculator
}

