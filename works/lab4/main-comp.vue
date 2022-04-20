<template>
  <div class="center-part">
    <div class="search">
      <img id="glass" src="./img/Search.png">
      <input id="text-field" type="text" placeholder="Search anything">
    </div>

    <div class="success-man">
      <div class="text-block">
        <div class="assign">
          <b font-size="36px">Assign expert to Manage Portfolio</b>
        </div>
        <div class="expert-btn">
          <b font-size="18px">Find expert</b>
        </div>
      </div>
      <div class="man-cont">
        <img id="man" src="./img/nftowner.png">
      </div>
    </div>

    <div class="portfolio">
      <div class="my-portfolio">
        <b id="high">My Portfolio</b>
      </div>
      <div class="crypto-list">
        <div class="btc-course">
          <div class="btc-cur-pic">
            <img id="bi-curr" src="./img/bi_currency-bitcoin.png">
          </div>
          <div class="box-crypto-text">
            <div class="line-box">
              <b>BTC</b>
              <i>/USDT</i>
            </div>
            <i id="medium-low">Bitcoin</i>
          </div>
          <div class="box-crypto-course">
            <p font-size="18px">$135,25</p>
            <div class="red-line">
              <div class="red-red">
                <img id="crypto-arrow" src="./img/ArrowDown2.png">
                <p id="very-low">$32 (2%)</p>
              </div>
            </div>
          </div>
        </div>

        <div class="eth-course">
          <div class="eth-cur-pic">
            <img id="curr-eth" src="./img/ph_currency-eth.png">
          </div>
            <div class="box-crypto-text">
              <div class="line-box">
                <b>ETH</b>
                <i>/USDT</i>
              </div>
              <i id="medium-low">Ethereum</i>
            </div>
          <div class="box-crypto-course">
            <p font-size="18px">$215,00</p>
            <div class="green-line">
              <div class="green-green">
                <img id="crypto-arrow" src="./img/ArrowUp2.png">
                <p id="very-low">$32 (2%)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <img id="graph" src="./img/Group7.png">
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>

</style>
