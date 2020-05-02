<template functional>
<div class='scorecard'>
  <div class='header flex'>
    <h1 id=node2>Yahtzee</h1>
    <div class='players-name'>
      <label>Player's Name:</label>
      <div class='name-line'></div>
    </div>
  </div>
  <div class='upper'>
    <h2>Upper Section</h2>
    <table class='top'>
      <thead>
        <tr>
          <th style='width:330px'>Minimum Required For Bonus</th>
          <th class='w-56'>How To Score</th>
          <th class='w-24 ' v-for='i in 6'>Round {{ i }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for='(number, idx) of $options.topTable' :key=idx class='top-row'>
          <td>
            <div class='flex items-center justify-between'>
              <span class='thing-to-get'>{{number}}</span>
              <div class='dice flex w=100 items-center'>
                <face :number='idx+1' :width=50 />
                <face :number='idx+1' :width=50 />
                <face :number='idx+1' :width=50 />
                <span>= {{ (idx+1) * 3 }}</span>
              </div>
            </div>
          </td>
          <td><span>count and add <strong>only {{number.toLowerCase()}}</strong></span></td>
          <td v-for='i in 6'>&nbsp;</td>
        </tr>
        <tr class='top-row py-2 total-row'>
          <td><div class='flex justify-between'><span>Total</span><span>= 63</span></div></td>
          <td class='blocked'></td>
          <td v-for='i in 6'>&nbsp;</td>
        </tr>
        <tr class='top-row py-2 total-row'>
          <td><div class='flex justify-between'><span class='bolder'>Bonus</span><span>If total is 63 or over</span></div></td>
          <td><span>Add 35</span></td>
          <td v-for='i in 6'>&nbsp;</td>
        </tr>
        <tr class='top-row py-2 total-row'>
          <td><div class='flex justify-between'><span>Upper Total</span></div></td>
          <td class='blocked'></td>
          <td v-for='i in 6'>&nbsp;</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class='lower'>
    <h2>Lower Section</h2>
    <table>
      <thead>
        <tr>
          <th>
          </th>
          <th></th>
          <th class='w-24' v-for='i in 6'>Round {{ i }}</th>
        </tr>
      </thead>
    <tbody>
        <tr v-for='(how, key) of $options.bottomTable' :key=key class='bottom-row'>
          <td style='width:330px'>
            <div>
              <span class='thing-to-get flex items-baseline justify-between' v-html="key"></span>
            </div>
          </td>
          <td class='w-56'><span v-html='how'></span></td>
          <td class='w-24'>&nbsp;</td>
          <td class='w-24'>&nbsp;</td>
          <td class='w-24'>&nbsp;</td>
          <td class='w-24'>&nbsp;</td>
          <td class='w-24'>&nbsp;</td>
          <td class='w-24'>&nbsp;</td>
        </tr>
        <tr class='top-row py-2 total-row'>
          <td><div class='flex justify-between'><span>Lower Total</span></div></td>
          <td class='blocked'></td>
          <td v-for='i in 6'>&nbsp;</td>
        </tr>
        <tr class='top-row py-2 total-row'>
          <td><div class='flex justify-between'><span>Upper Total</span></div></td>
          <td class='blocked'></td>
          <td v-for='i in 6'>&nbsp;</td>
        </tr>
        <tr class='top-row py-2 total-row'>
          <td><div class='flex justify-between'><span>Grand Total</span></div></td>
          <td class='blocked'></td>
          <td v-for='i in 6'>&nbsp;</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</template>
<script>
import Face from './Face'

export default {
  topTable: ['Aces', 'Twos', 'Threes', 'Fours', 'Fives', 'Sixes'],
  bottomTable: {
    '3 of a kind': 'Add total of <strong>all dice</strong>',
    '4 of a kind': 'Add total of <strong>all dice</strong>',
    'Full House': 'Add <strong>25</strong>',
    '<b>Small Straight</b> <em>(4 in sequence)</em>': 'Add <strong>30</strong>',
    '<b>Large Straight</b> <em>(5 in sequence)</em>': 'Add <strong>40</strong>',
    '<b>Yahtzee</b> <em>(5 of a kind)</em>': 'Add <strong>50</strong>',
    '<b>Chance</b>': 'Add total of <strong>all dice</strong>'
  },
  components: {
    Face
  }
}
</script>
<style lang="scss">
.lower {

  h2 {
    margin-top: 50px;
    margin-bottom: -50px;
  }
}
.upper {
  padding-bottom:2px;
}

td,th {
  white-space: nowrap;
}

.thing-to-get {
  font-size: 2rem !important;

  > em {
    font-size: 1.3rem !important;
    line-height: 2rem;
    display: inline-block;
  }

}

.scorecard {
  font-family: dosis;
  background: #eee;
  padding: 2rem;

  h1 {
    font-family: 'Press Start 2P';
    font-size: 6em;
  }
}
table {
  background: white;
  margin-bottom: 2rem;
}
tbody tr {
  font-size: 1.3rem;
}

h2 {
  font-weight: bolder;
}
th h2 {
  text-align: left;
}

tr td:nth-child(2) {
  width: 260px !important;
  border-right-width: 5px !important;
}

tbody tr.top-row:nth-child(6) {
  border-bottom: solid 5px #aaa !important;
}
tbody tr.bottom-row:nth-child(7) {
  border-bottom: solid 5px #aaa !important;
}

td.blocked {
  background: #eee url('/src/dice/yahtzee/food.png');
  background-size: 50%;
}
thead {
  font-size: 1.5em;
  background: #eee;
}
thead th {
  white-space: none;
}
.top-row span, .bottom-row span {
  padding: 1rem;
  white-space: nowrap;
}
tbody tr > td:nth-child(2) {
  border-right: solid 3px #aaa;
}
.top-row > td:first-child span,
.bottom-row > td:first-child span {
  font-weight: bold;
  font-size: 1.3rem;
}
.bottom-row > td:first-child span {
  width: 100%;
}

.bottom-row > td:first-child em {
  float: right;
}

.players-name {
  background: white;
  border: solid 1px #aaa;
  border-radius: 5px;
  overflow: hidden;
  padding: 1rem;
  width: 100%;
  height: 50%;
  margin-top: 20px;
  margin-left:2rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

tr > td:first-child {
  background: white url('/src/dice/yahtzee/food.png');
  background-size: 50%;
  width: 360px !important;
}
.dice {
  display: flex;
  align-self:flex-end;

  > div {
    border: solid 1px #ccc !important;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    margin: 10px 0 10px 10px;
  }
}
th {
  padding: 1rem;
}

td {
  border: solid 1px #aaa;
}
</style>
