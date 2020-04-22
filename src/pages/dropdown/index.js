import Dropdown from './src/dropdown'

export default{
    install(Vue){
        console.log(Dropdown.name)
        Vue.component(Dropdown.name,Dropdown)
    }
}