import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  // 状态值：这里存放的属性就可以在多个组件之间进行共享！
  state:{
    uid:sessionStorage.getItem("uid"),
    uname:sessionStorage.getItem("uname"),
    phone:sessionStorage.getItem("phone"),
    // imgURL:'http://127.0.0.1:5050/images/product/',
    imgURL:'http://nonominiback.applinzi.com/images/product/',
  },
  // 一些方法，组件可以调用这些方法来操作状态值
  mutations:{
    updateUser(state,user){
      // sessionStorage：其中存储的值可以在页面刷新时，依然存在
      sessionStorage.setItem("uname",user.uname);
      sessionStorage.setItem("uid",user.uid);
      sessionStorage.setItem("phone",user.phone);
      state.phone = user.phone;
      state.uname = user.uname;
      state.uid = user.uid;
    }
  },
})