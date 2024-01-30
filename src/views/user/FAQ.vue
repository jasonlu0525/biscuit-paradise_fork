<template>
  <div class="container py-lg-5">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/user">首頁</router-link></li>
        <li class="breadcrumb-item">常見問題</li>
      </ol>
    </nav>
    <div class="faq text-center px-4 py-5">
      <div class="text-white text-center p-3 cover d-inline-block">
        <p class="mb-0">餅乾天堂，品味自己的甜蜜世界</p>
        <h1 class="fw-bold my-3">常見問題</h1>
        <p class="mb-0">放心選購，開心品味！讓您的甜蜜之旅更加順心。</p>
      </div>
    </div>
    <div class="accordion py-5" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"    
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            餅乾天堂的餅乾有哪些口味？
          </button>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body text-muted">
            <i class="bi bi-shield-check text-success"></i>
            我們提供多元支付方式:
            ATM轉帳、信用卡、ApplePay、GooglePay、LinePay。
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            有商品需要退換貨的話該怎麼辦
          </button>
        </h2>
        <div
          id="collapseTwo"
          class="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body text-muted">
            <i class="bi bi-shield-check text-success"></i>
            如果發現商品有毀損並需要退/換貨，請提供損毀物品的<span
              class="text-danger"
              >照片</span
            >及<span class="text-danger">訂單編號</span
            >訂單編號並一併寄電子郵件至<a
              href="mailto:toy-factory@support.com"
              class="text-decoration-none"
              >客服信箱</a
            >。我們將盡快為您處理!
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            請問下單後多久會寄出
          </button>
        </h2>
        <div
          id="collapseThree"
          class="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body text-muted">
            <i class="bi bi-shield-check text-success"></i>
            我們將會在您下單後1至2個工作天內寄出，請您耐心等候!
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.faq {
    height: 350px;
    background-image: url("../../assets/images/img/main.jpg");
    background-size: cover;
    background-position: center center;
}
.cover {
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
}

</style>


