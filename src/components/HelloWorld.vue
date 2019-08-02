<template>
  <div class="hello">
    <ul>
      <li v-for="(account, index) in ethAccounts" :key="index">{{account}}</li>
    </ul>
  </div>
</template>

<script>
// setting up the provider
const Web3 = require("web3");
const web3 = new Web3("ws://80.158.47.134:7546");
export default {
  name: "HelloWorld",
  data() {
    return {
      ethAccounts: []
    };
  },
  methods: {
    getAccounts() {
      web3.eth.getAccounts().then(accounts => {
        accounts.forEach(account => {
          this.ethAccounts.push(account);
        });
      });
    }
  },
  created() {
    this.getAccounts();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
  padding: 1rem;
}
</style>
