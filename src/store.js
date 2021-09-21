import { reactive } from 'vue'

const store = reactive({
  page: 'PageHome',
  visited: ['intro'],
})

export {store}
