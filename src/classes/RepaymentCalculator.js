import {bankersRounding} from './MathRoundingUtil';

export default class RepaymentCalculator {
    constructor(providersBase) {
        this.providersBase = providersBase;
    }

    providerNames = () => this.providersBase.map(p => p.name);

    getInterest = (rate, balance) => bankersRounding(balance * rate / 12, 2);

    getBalanceForProvider = (rate, balance, monthlyPaymentAmt, interest) => bankersRounding(balance + interest - monthlyPaymentAmt, 2);

    getMinMonthlyPaymentAmt = (i, p, n) => p * i * (Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);

    getDataPoint = (providers, extraPaymentAmt, isFinalMonth) => providers.map(p => {
        const paidMonthlyPaymentAmt = p.minMonthlyPaymentAmt + extraPaymentAmt;
        const interest = this.getInterest(p.rate, p.balance);
        let balance = this.getBalanceForProvider(p.rate, p.balance, paidMonthlyPaymentAmt, interest);
        const isFinalPayment = isFinalMonth || balance <= 0;
        
        if (isFinalPayment) {
            // Final payment is always adjusted to clear remaining balance
            return {
                ...p,
                interest,
                paidMonthlyPaymentAmt: bankersRounding(paidMonthlyPaymentAmt + balance, 2),
                balance: 0,
                minMonthlyPaymentAmt: 0
            };
        }

        return {
            ...p,
            interest,
            paidMonthlyPaymentAmt,
            balance
        };
    });

    getDataPoints = (
        termMonths,
        interestRate,
        balance,
        extraPaymentAmt,
        extraPaymentStartMonth
        ) => {
        const months = [...Array(termMonths).keys()];
        const providersClone = JSON.parse(JSON.stringify(this.providersBase));

        const provider = providersClone.find(p => p.name === 'exampleProvider');
        if (!provider)
            throw new Error('exampleProvider not found as a provider');

        provider.rate = interestRate;

        let providers = providersClone.map(provider => {
            const minMonthlyPaymentAmtUnrounded = this.getMinMonthlyPaymentAmt(provider.rate / 12, balance, termMonths);
            const minMonthlyPaymentAmt = bankersRounding(minMonthlyPaymentAmtUnrounded, 2);

            return {
                ...provider,
                balance,
                minMonthlyPaymentAmt
            };
        }, {});

        const balances = providers.map(p => p.balance);
        const rates = providers.map(provider => provider.rate);
        const dataPoints = [];
        for (let month of months) {
            const isExtraPayment = month >= extraPaymentStartMonth;
            const isFinalMonth = month === months[months.length - 1];

            providers = this.getDataPoint(
                providers,
                isExtraPayment ? extraPaymentAmt : 0,
                isFinalMonth
                );

            dataPoints.push(providers);
        }

        return dataPoints;
    };
}
