<template>
  <header class="container pt-3">
    <div class="text-center header px-4 py-5">
      <div class="text-white text-center p-3 cover d-inline-block">
        <p class="mb-0">探索餅乾的美味，發現美味的幸福！！</p>
        <h1 class="fw-bold my-3">獨一無二的甜蜜滋味</h1>
        <p class="mb-0">在這片甜蜜的土地上，快樂是我們共同的語言。</p>
      </div>
    </div>
  </header>

  <section class="container py-5">
    <h2 class="text-center lh-lg">—— 主要服務項目 ——</h2>
    <div class="row row-cols-1 row-cols-md-3">
      <div class="col">
        <div class="card border-0 ">
          <div class="card-body text-center">
            <h5 class="card-title fs-1"><i class="bi bi-globe"/></h5>
            <h5 class="card-title fw-bold">美味的餅乾</h5>
            <p class="card-text">
              我們的餅乾精心烘焙，最頂級的原料！<br>
               保證每一口都帶來滿滿的幸福感，為您打造最美味的<br>
               餅乾體驗。
            </p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card border-0 ">
          <div class="card-body text-center">
            <h5 class="card-title fs-1"><i class="bi bi-truck"/></h5>
            <h5 class="card-title fw-bold">快速的出貨</h5>
            <p class="card-text">
              各大物流皆有配合，確保最新鮮的風味！<br>
              下單後，我們將第一時間出貨，讓美味隨時隨地<br>
              陪伴著您。
            </p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card border-0 ">
          <div class="card-body text-center">
            <h5 class="card-title fs-1"><i class="bi bi-people"/></h5>
            <h5 class="card-title fw-bold">客製化服務</h5>
            <p class="card-text">
              您的需求,我們的動力！<br>
               提供多樣化選擇，貼心客製化需求。無論活動禮盒或獨特口味，歡迎聯絡<a
                href="mailto:example@support.com"
                class="text-decoration-none"
                >客服</a>。
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="container py-5">
    <div class="row flex-row-reverse g-3 ">
      <div class="col-lg-6 d-flex align-items-center">
        <div>
          <h2 class="fw-bold">餅乾天堂 <br />幸福的秘密都在這！</h2>
          <p class="lh-lg text-secondary mb-0">
            不只是小朋友的天堂，這裡有各種口味的餅乾等你來探險。從經典到前衛，每一口都是獨特的滋味。讓我們一同探索，讓餅乾成為生活中最美味的冒險！
          </p>
          <p class="text-end text-secondary">一「我們都應該享受美味」</p>
          <div class="text-center">
            <button
            type="button"
            class="btn btn-outline-primary rounded-pill px-3"
            @click.prevent="$router.push('/user/productList')"
          >
            點我看看餅乾
          </button>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <img src="../../assets/images/img/products.jpg" alt="餅乾" class="w-100" />
      </div>
    </div>
  </section>


  <section class="container py-5">
    <div class="row flex-row g-3 ">
      <div class="col-lg-6 d-flex justify-content-center align-items-center mb-3 mb-lg-0">
        <div class="text-center">
          <h2 class="fs-1 fw-bold">
            <i class="bi bi-cash-coin text-success"/>
            專屬優惠
            <i class="bi bi-cash-coin text-success"/>
          </h2>
          <p class="fs-3">
          立即領取!<br class="d-lg-none" />
          輸入專屬優惠碼"<span class="text-danger fw-bold">Welcome</span>"<br
            class="d-lg-none"
          />享88折優惠!
          </p>
          <button type="button" class="btn btn-outline-primary rounded-pill px-3 shadow-sm" @click="copy">
            點擊領取
          </button>
        </div>
      </div>
      <div class="col-lg-6">
        <img src="../../assets/images/img/coupon.jpg" alt="買玩具" class="w-100" />
      </div>
    </div>
  </section>

  <section class="container pb-5 py-3">
    <!-- subscribe 是 bg-image 和bg 設定 -->
    <div
      class="subscribe d-flex align-items-center p-5 row-cols-1 "
    >
      <div class="col p-md-4 text-center ">
        <h4 class="fw-bold lh-base">訂閱「餅乾天堂」<br />獲得最新的專屬優惠資訊!</h4>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control lh-base"
            placeholder="請輸入Email"
          />
          <button class="btn btn-dark" type="button">訂閱</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss"  scoped>
.cover{
  background-image: linear-gradient(rgba(0,0,0,.3),rgba(0,0,0,.3));
};
.header {
  height: 650px;
  background-image: url("../../assets/images/img/main.jpg");
  background-position: center;
  background-size: cover;
};

.subscribe {
    background-image: url("../../assets/images/img/subscribe.jpg");
    background-position: center;
    background-size: cover;
    height: 200px;
}
</style>

<script>

export default {
  methods: {
    copy () {
      navigator.clipboard.writeText('Welcome')
      alert('已複製專屬優惠碼!')
    },
  },
}
</script>