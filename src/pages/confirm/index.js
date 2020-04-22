import Confirm from './src/confirm'
export default {
    install(Vue) {
        let ConfirmObj=Vue.extend(Confirm);
        Vue.prototype.$confirm=function (msg,btns) {
            console.log(msg,btns);
            let ConfirmInit = new ConfirmObj().$mount(document.createElement("div"));
            document.body.appendChild(ConfirmInit.$el);
            ConfirmInit.msg =msg;
            if (btns && btns.length>0){
                ConfirmInit.btns=btns;
            }
        }
    }
}