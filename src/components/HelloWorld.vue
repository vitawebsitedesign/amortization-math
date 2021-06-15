<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
//import RepaymentCalculator from '../classes/RepaymentCalculator';
import Component from 'vue-class-component'

@Component
export default class HelloWorld {
  mounted() {
    /* const providersBase = [
        {
            name: 'anz',
            rate: 0.12,
            minMonthlyPaymentAmt: null,
            balance: null
        },
        {
            name: 'cba',
            rate: 0.11,
            minMonthlyPaymentAmt: null,
            balance: null
        },
        {
            name: 'nab',
            rate: 0.1,
            minMonthlyPaymentAmt: null,
            balance: null
        },
        {
            name: 'wbc',
            rate: 0.09,
            minMonthlyPaymentAmt: null,
            balance: null
        },
        {
            name: 'aussieLoans',
            rate: 0.08,
            minMonthlyPaymentAmt: null,
            balance: null
        },
        {
            name: 'stGeorge',
            rate: 0.07,
            minMonthlyPaymentAmt: null,
            balance: null
        },
        {
            name: 'boq',
            rate: 0.06,
            minMonthlyPaymentAmt: null,
            balance: null
        },
        {
            name: 'exampleProvider',
            rate: null,
            minMonthlyPaymentAmt: null,
            balance: null
        }
    ];

    const termMonths = 12 * 5;
    const interestRate = 0.05;
    const balance = 50000;
    const extraPaymentAmt = 400;
    const extraPaymentStartMonth = 0;

    const calculator = new RepaymentCalculator(providersBase);

    console.log(calculator.getDataPoints(
        termMonths,
        interestRate,
        balance,
        extraPaymentAmt,
        extraPaymentStartMonth
    ));
    */
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
