import Face from '../src/themes/first-try/Face'
import DiceTemplate from '../src/themes/first-try/DiceTemplate'
import ScoreCard from '../src/themes/first-try/ScoreCard'
import Thumb from '../src/themes/first-try/Thumb'
import RenderButton from './RenderButton'

import Vue from 'vue'

// Set up the values for all stories in this file
export default {
    title: 'Dice/First Try',
    component: DiceTemplate
}

Vue.component('RenderButton', RenderButton)

export const dice = () => ({
  components: {
    DiceTemplate,
    Face
  },
  methods: {
    render() {
      renderNode()
    }
  },
  template: `
  <div>
    <div class='inline-block' id=node>
      <dice-template />
    </div>
    <render-button selector='#node' name='yahtzee-dice' />
  </div>`
})

export const scoreCard = () => ({
  components: {
    ScoreCard,
    Face
  },
  methods: {
    render() {
      renderNode()
    }
  },
  template: `
  <div>
    <div class='inline-block' id=node>
      <score-card />
    </div>
    <render-button selector='#node' name='yahtzee-scorecard' />
  </div>`
})
export const thumb = () => ({
  components: {
    Thumb,
    Face,
    RenderButton
  },
  methods: {
    render() {
      renderNode()
    }
  },
  template: `
  <div>
    <div class='inline-block' id=node>
      <Thumb />
    </div>
    <render-button selector='#node' name='yahtzee-thumbnail' />
  </div>`
})
