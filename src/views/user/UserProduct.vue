<template>
  <LoadingComp :active="isLoading" />
  <div class="container py-5">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/user">首頁</router-link></li>
        <li class="breadcrumb-item">
          <router-link to="/user/productList">產品列表</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          {{ product.title }}
        </li>
      </ol>
    </nav>
    <div class="row row-cols-1 justify-content-center">
      <div class="col col-md-7">
        <div class="position-relative">
          <img
            :src="product.imageUrl"
            :alt="product.title"
            class="img-fluid mb-3"
          />
          <button
            type="button"
            class="btn btn-primary btnCircle rounded-circle fs-4 text-white position-absolute favBtn"
            :class="{ active: favorite.includes(product.id) }"
            @click="toggleFavorite(product)"
          >
            <i class="bi bi-suit-heart" />
          </button>
        </div>
      </div>
      <div class="col col-md-5">
        <h2 class="d-flex align-items-center text-primary fw-bold">
          {{ product.title }}
          <span class="badge bg-warning rounded-pill fs-5 ms-3 text-dark">
            {{ product.category }}
          </span>
        </h2>
        <hr />
        <div class="fs-4">{{ product.description }}</div>
        <div class="py-3 text-secondary" style="white-space: pre-line">
          {{ product.content }}
        </div>
        <div class="h5" v-if="product.price === product.origin_price">
          {{ $formatFilters.currency(product.origin_price) }} 元
        </div>
        <del class="h6" v-if="product.price !== product.origin_price"
          >原價 {{ $formatFilters.currency(product.origin_price) }} 元</del
        >
        <div
          class="h5 text-danger"
          v-if="product.price !== product.origin_price"
        >
          現在只要 {{ $formatFilters.currency(product.price) }} 元
        </div>
        <div class="input-group pb-3" style="width: 200px">
          <input type="number" min="1" class="form-control border-dark"  v-model="qty" />
          <button
            type="button"
            class="btn btn-outline-dark"
            @click="addToCart(product.title, product.id, qty)"
          >
            加入購物車
          </button>
        </div>
      </div>
    </div>
    <ul class="nav nav-tabs pt-3" id="myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <button
          class="nav-link active"
          id="first-tab"
          data-bs-toggle="tab"
          data-bs-target="#first"
          type="button"
          role="tab"
          aria-controls="first"
          aria-selected="true"
        >
          關於產品
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="second-tab"
          data-bs-toggle="tab"
          data-bs-target="#second"
          type="button"
          role="tab"
          aria-controls="second"
          aria-selected="false"
        >
          關於出貨
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="third-tab"
          data-bs-toggle="tab"
          data-bs-target="#third"
          type="button"
          role="tab"
          aria-controls="third"
          aria-selected="false"
        >
          關於物流
        </button>
      </li>
    </ul>
    <div class="tab-content py-3" id="myTabContent">
      <div
        class="tab-pane fade active show"
        id="first"
        role="tabpanel"
        aria-labelledby="first-tab"
      >
        <ul>
          <li>所有的展示詳細尺寸材質以及商品描述均有詳細說明。</li>
          <li>
            如果產品在架上就是代表有貨，但是偶爾有貨在路上的情況，遇上此情況還望見諒，靜心等待。
          </li>
          <li>
            關於退換貨，請見<a
              class="link"
              @click.prevent="$router.push('/user/faq')"
              style="cursor: pointer"
              >常見問題</a
            >。
          </li>
        </ul>
      </div>
      <div
        class="tab-pane fade"
        id="second"
        role="tabpanel"
        aria-labelledby="second-tab"
      >
        <ul>
          <li>正常情況我們會在48小時內發貨，如果未能及時出貨，請聯繫客服。</li>
          <li>
            如遇節日，訂單量多時，可能會延後出貨，還請見諒。我們希望每個人都能收到正確的玩具!
          </li>
        </ul>
      </div>
      <div
        class="tab-pane fade"
        id="third"
        role="tabpanel"
        aria-labelledby="third-tab"
      >
        <ul>
          <li>
            我們與白貓宅急便合作，發貨後通常會於1至2天內送到您手上，請耐心等待。
          </li>
          <li>
            如需查詢物流進度，歡迎至白貓宅急便官網的「訂單查詢」頁面進行查詢。
          </li>
        </ul>
      </div>
    </div>
    <hr />

  </div>
</template>


<style lang="scss"  scoped>
.favBtn {
    top: 10px;
    right: 10px;
}

</style>

<script>
import favorite from '@/methods/favorite'

export default {
  data () {
    return {
      products: [],
      product: {},
      id: '',
      qty: 1,
      isLoading: false,
      favorite: favorite.getFavorite() || []
    }
  },
  inject: ['emitter'],
  methods: {
    getProduct () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`
      this.isLoading = true
      this.$http.get(api).then((response) => {
        if (response.data.success) {
          this.product = response.data.product
        }
        this.isLoading = false
      })
    },
    goToProduct (id) {
      this.$router.push(`/productsList/${id}`)
    },
    getProducts () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.isLoading = true
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          this.products = res.data.products
        }
        this.isLoading = false
      })
    },
    addToCart (item, id, qty = 1) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      const cart = {
        product_id: id,
        qty
      }
      this.isLoading = true
      this.$http.post(url, { data: cart }).then((res) => {
        this.emitter.emit('update-cart', id)
        this.$httpMessageState(res, `將"${item}"加入購物車`)
        this.isLoading = false
      })
    },
    toggleFavorite (item) {
      if (this.favorite.includes(item.id)) {
        this.favorite.splice(this.favorite.indexOf(item.id), 1)
        this.$httpMessageState(
          {
            data: {
              success: true
            }
          },
          `將"${item.title}"移除我的最愛`
        )
      } else {
        this.favorite.push(item.id)
        this.$httpMessageState(
          {
            data: {
              success: true
            }
          },
          `將"${item.title}"加入我的最愛`
        )
      }
      favorite.addToFavorite(this.favorite)
      this.emitter.emit('update-favorite', this.favorite)
    }
  },
  created () {
    this.id = this.$route.params.productId
    this.getProduct()
    this.getProducts()
  }
}
</script>
