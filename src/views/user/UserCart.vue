<template v-if="cart.carts">
  <LoadingComp :active="isLoading" />
  <div class="container py-lg-5">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/user">首頁</router-link></li>
        <li class="breadcrumb-item">購物車</li>
      </ol>
    </nav>
    <h2><i class="bi bi-cart3 fs-3"/> 購物車</h2>
    <hr />
    <div class="text-center pb-5" :class="{ 'd-none': cart.total !== 0 }">
      <i class="bi bi-cart4" style="font-size: 150px"/>
      <p class="fs-2">購物車是空的，來去逛逛吧!</p>
      <button type="button" class="btn btn-outline-primary shadow-sm" @click="$router.push('/user/productList')">
        看看更多餅乾
      </button>
    </div>

    <div class="row">
      <div class="col-lg-8">
        <div
          class="border border-primary d-flex flex-column flex-md-row align-items-center p-3 mb-3 text-center"
          v-for="item in cart.carts"
          :key="item.id"
        >
          <img
            :src="item.product.imageUrl"
            class="productImg"
            :alt="item.product.title"
            @click="getProduct(item.product.id)"
            style="cursor:pointer;"
          />
          <p class="h6 my-3 my-md-0" style="width: 30%">
            {{ item.product.title }}
          </p>
          <div class="input-group" style="width: 150px">
            <button
              type="button"
              class="btn btn-outline-dark"
              @click="updateCart(item, item.qty - 1)"
              :disabled="item.qty == 1"
            >
              <i class="bi bi-dash" />
            </button>
            <input
              type="text"
              min="1"
              v-model.number="item.qty"
              class="form-control form-control-sm text-center border-dark"
              readonly
            />
            <button
              type="button"
              class="btn btn-outline-dark"
              @click="updateCart(item, item.qty + 1)"
            >
              <i class="bi bi-plus" />
            </button>
          </div>
          <p class="my-3 my-md-0" style="width: 20%">
            NT{{ $formatFilters.currency(item.final_total) }}
          </p>
          <button
            type="button"
            class="btn btn-primary btnCircle mx-2 rounded-circle fs-4 text-white"
            @click="removeCartItem(item, item.id)"
          >
            <i class="bi bi-trash"/>
          </button>
        </div>
      </div>
      <div class="col-lg-4 pb-5" :class="{ 'd-none': cart.total === 0 }">
        <div class="border border-primary p-3">
          <div class="d-flex justify-content-between">
            <p>商品共計:</p>
            <p>{{ $formatFilters.currency(cart.total) }}</p>
          </div>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control lh-lg border-dark"
              v-model="coupon_code"
              placeholder="輸入優惠碼"
            />
            <button type="button" class="btn btn-dark" @click="addCouponCode">
              套用
            </button>
          </div>
          <div
            class="d-flex justify-content-between"
            v-if="cart.final_total === cart.total"
          >
            <p>合計:</p>
            <p>{{ $formatFilters.currency(cart.final_total) }}</p>
          </div>
          <p class="text-success" v-if="cart.final_total !== cart.total">
            已套用優惠券
          </p>
          <div
            class="d-flex justify-content-between text-success"
            v-if="cart.final_total !== cart.total"
          >
            <p>折扣價：</p>
            <p>{{ $formatFilters.currency(cart.final_total) }}</p>
          </div>
          <button
            type="button"
            class="btn btn-outline-primary shadow-sm w-100"
            @click="this.$router.push('/user/checkout')"
            :class="{ disabled: cart.total === 0 }"
          >
            結帳
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cart: {},
      coupon_code: '',
      status: {
        loadingItem: ''
      },
      isLoading: false
    }
  },
  inject: ['emitter'],
  methods: {
    getCart () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.isLoading = true
      this.$http.get(url).then((res) => {
        this.cart = res.data.data
        this.isLoading = false
      })
    },
    updateCart (item, qty = 1) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`
      this.isLoading = true
      this.status.loadingItem = item.id
      const cart = {
        product_id: item.product_id,
        qty
      }
      this.$http.put(url, { data: cart }).then(() => {
        this.status.loadingItem = ''
        this.getCart()
      })
    },
    removeCartItem (item, id) {
      this.status.loadingItem = id
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`
      this.isLoading = true
      this.$http.delete(url).then((res) => {
        this.$httpMessageState(res, `將"${item.product.title}"移除購物車`)
        this.status.loadingItem = ''
        this.getCart()
        this.emitter.emit('update-cart', id)
      })
    },
    addCouponCode () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`
      const coupon = {
        code: this.coupon_code
      }
      this.isLoading = true
      this.$http.post(url, { data: coupon }).then((res) => {
        this.$httpMessageState(res, '加入優惠券')
        this.getCart()
        this.isLoading = false
      })
    },
    getProduct (id) {
      this.$router.push(`/user/product/${id}`)
    }
  },
  created () {
    this.getCart()
  }
}
</script>

<style lang="scss" scoped>
.productImg {
    width: 150px;
    height: 100px;
    -o-object-fit: cover;
    object-fit: cover;
}
.btnCircle {
  &:hover {
    color: white;
    background-color: #f3acc2;
    border-color: #f3acc2;
  }
}
</style>
