import { reactive, watch } from 'vue'

const store = reactive({
  app: {
    page: 'PageHome',
    settings: {
      font: 'arial',
      size: 14,
      light: true,
    },
  },
  save: {
    history: ['intro'],
    notes: false,
  }
})

export {store}




// Load store on startup
const assignStore = (saved) => {
  store.app      = saved.app        || store.app
  store.save     = saved.save       || store.save
}

const time = ms => new Promise(resolve => setTimeout(resolve, ms))
;(async () => {
  await time(20)
  if(localStorage['mage-data']) assignStore(JSON.parse(localStorage['mage-data']))
})()


// Save store on change
watch( store, (_, newStore) => {
  localStorage['mage-data'] = JSON.stringify(newStore)
})

