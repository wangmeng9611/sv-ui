import Ktable from './main/index'
console.log(Ktable.name)
export default {
    install(Vue){
        Vue.component(Ktable.name,Ktable)
    }
}