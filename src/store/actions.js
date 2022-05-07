export default {
  addToCart(context,payload) {
    return new Promise((resolve,reject) => {
      let oldProduct = null;
      for (let item of context.state.cartList){
        if(item.iid ===  payload.iid){
          oldProduct = item;
        }
      }
      if(oldProduct) {
        context.commit("addCounter",oldProduct)
        resolve("商品+1")
      }else {
        payload.count = 1;
        context.commit("addCart",payload)
        resolve("加入购物车")
      }
    })
  }
}


