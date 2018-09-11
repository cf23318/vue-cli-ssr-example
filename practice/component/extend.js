import Vue from 'vue'

const compoent = {
  props: {
    active: Boolean,
    propOne: String
  },
  template: `
    <div>
      <input type="text" v-model="text">
      <span @click="handleChange">{{propOne}}</span>
      <span v-show="active">see me if active</span>
      <slot :text="text"></slot>
    </div>
  `,
  data () {
    return {
      text: 0
    }
  },
  mounted () {
    console.log(this.$scopedSlots)
    // console.log('comp mounted')
  },
  methods: {
    handleChange () {
      this.$emit('change')
    }
  }
}

// const parent = new Vue({
//   name: 'parent'
// })

// const componet2 = {
//   extends: compoent,
//   data () {
//     return {
//       text: 1
//     }
//   },
//   mounted () {
//     // console.log(this.$parent.$options.name)
//   }
// }

// const CompVue = Vue.extend(compoent)

// new CompVue({
//   el: '#root',
//   propsData: {
//     propOne: 'xxx'
//   },
//   data: {
//     text: '123'
//   },
//   mounted () {
//     console.log('instance mounted')
//   }
// })

new Vue({
  name: 'Root',
  el: '#root',
  mounted () {
    // console.log(this.$parent.$options.name)
    // console.log(this.$children)
  },
  components: {
    Comp: compoent
  },
  data: {
    text: 23333
  },
  template: `
    <div>
      <span>{{text}}</span>
      <comp>
        <div slot-scope="props">{{props.text}} {{props.a}}</div>
      </comp>
    </div>
  `
})
