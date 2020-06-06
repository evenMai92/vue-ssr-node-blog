<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div v-for="(item, index) in items" :key="index">{{ item.title }}</div>
  </div>
</template>

<script>
export default {
  asyncData ({ store, route }) {
    // 触发 action 后，会返回 Promise
    return store.dispatch('fetchItem', route.query.id)
  },
  computed: {
    // 从 store 的 state 对象中的获取 item。
    items () {
      return this.$store.state.items[this.$route.query.id]
    }
  }
}
</script>
