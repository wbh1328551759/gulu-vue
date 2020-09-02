import Toast from './toast'

let currentToast

export default {
  install(Vue, options) {
    Vue.prototype.$toast = function (message, toastOaptions) {
      if(currentToast){
        currentToast.close()
      }
      currentToast = createToast({
        Vue,
        message,
        propsData: toastOaptions,
        onClose: () => {
          currentToast = null
        }
      })
    }
  }
}

function createToast({Vue, message, propsData, onClose}){
  let Constructor = Vue.extend(Toast)
  let toast = new Constructor({propsData})
  toast.$slots.default = [message]
  toast.$mount()
  toast.$on('close', onClose)
  document.body.appendChild(toast.$el)
  return toast
}