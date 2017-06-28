<template>
  <div>
    <span>选择学期</span>
    <select name="schoolyear" id="xx" :value="form['nowYear']" @change="showToCart">
      <option :value="sy.value" v-for="sy in schoolyears">{{ sy.label }}</option>
    </select>
    <span>当前选中：{{ form['nowYear'] }}</span>

    <!--<select name="schoolyear" id="xx" v-model="form">-->
      <!--<option :value="sy.value" v-for="sy in schoolyears">{{ sy.label }}</option>-->
    <!--</select>-->
    <!--<span>当前选中：{{ form }}</span>-->
  </div>
</template>


<script type="text/ecmascript-6">
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  data() {
    return {
//      form: {},
//      select1: this.myStore.allNowYear
    }
  },
  computed: {
//    ...mapGetters({schoolyears: 'allSchoolYears', nowYear: 'allNowYear'}),
    //双向绑定的计算属性
//    form: {
//      get () {
//        return this.$store.state.schoolyears.nowYear;
//      },
//      set (value) {
//        console.log('value:'+value);
//        this.$store.commit('SHOW_TO_CART', {value: value})
//      }
//    },
    //利用value绑定
    ...mapState({
//      nowYear: 'allNowYear'
      form: state => state.schoolyears.form
    }),
    schoolyears() {
      return this.$store.getters.allSchoolYears
    },
//    nowYear() {
//      return this.$store.getters.allNowYear
//    }
},
  methods: {
//    ...mapActions(['showToCart']),
    showToCart(e) {
      console.log(e.target.value);
      this.$store.commit('SHOW_TO_CART', {
        value: e.target.value,
      });
    }
  },
  created () {
    this.$store.dispatch('getAllSchoolyears');
//    console.log(this.$store.state.schoolyears.nowYear);
//    console.log(this.nowYear);
//    this.$store.dispatch('getAllProducts')
  },
  mounted() {
  }
}
</script>
