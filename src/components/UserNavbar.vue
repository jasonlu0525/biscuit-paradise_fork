<template>
  <div
    class="bg-light sticky-top"
    style="box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2)"
  >
    <div class="container">
      <nav class="navbar navbar-expand-lg bg-transparent">
        <div class="container-fluid">
          <router-link class="navbar-brand fs-3 fw-bold" to="/user">
            <img
              src="../assets/images/logo.png"
              alt="logo"
              width="30"
              height="30"
              class="d-inline-block align-text-top"
            />餅乾天堂
          </router-link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-between"
            id="navbarNavAltMarkup"
          >
            <div class="navbar-nav">
              <router-link to="/user/productList" class="nav-link fs-5"
                >產品列表</router-link
              >
              <router-link to="/user/about" class="nav-link fs-5"
                >關於我們</router-link
              >
              <router-link to="/user/faq" class="nav-link fs-5"
                >常見問題</router-link
              >
            </div>
            <ul class="nav fs-5 navbar-nav">
              <li class="nav-item position-relative">
                <router-link to="/user/favorite" class="nav-link">
                  <span
                    class="position-absolute top-25 end-0 badge rounded-pill bg-danger badgeNum"
                    :class="{ 'd-none': favNum === 0 }"
                    style="font-size: 10px"
                    >{{ favNum }}</span
                  >
                  <i class="bi bi-suit-heart-fill fs-3"/>
                  <span class="d-lg-none fs-5"> 我的最愛</span>
                </router-link>
              </li>
              <li class="nav-item position-relative">
                <router-link to="/user/cart" class="nav-link"
                  ><span
                    class="position-absolute top-25 end-0 badge rounded-pill bg-danger badgeNum"
                    style="font-size: 10px"
                    :class="{ 'd-none': cartNum === 0 }"
                    >{{ cartNum }}</span
                  ><i class="bi bi-cart3 fs-3"></i
                  ><span class="d-lg-none fs-5"> 購物車</span></router-link
                >
              </li>
              <li class="nav-item">
                <router-link to="/login" class="nav-link"
                  ><i class="bi bi-person-circle fs-3"></i
                  ><span class="d-lg-none fs-5"> 後臺登入</span></router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import favorite from '@/methods/favorite'

export default {
  data () {
    return {
      favorite: favorite.getFavorite() || [],
      cartNum: 0,
      favNum: 0,
    }
  },
  inject: ['emitter'],
  methods: {
    getCart () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(url).then((res) => {
        this.cartNum = res.data.data.carts.length
      })
    },
    getFavorite () {
      this.favorite = favorite.getFavorite() 
      if (this.favorite == null) {
        this.favorite = {}
      }
// bug
      this.favNum = this.favorite.length
    }
  },
  created () {
    this.getCart()
    this.getFavorite()
  },
  mounted () {
    this.emitter.on('update-cart', this.getCart)
    this.emitter.on('update-favorite', this.getFavorite)
  }
}
</script>