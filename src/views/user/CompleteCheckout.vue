<template>
  <div class="container py-5">
    <div class="d-flex align-items-center justify-content-around text-nowrap">
      <div
        class="border d-inline-block text-center p-4"
        style="width: 150px; height: 150px"
      >
        <i class="bi bi-list-check fs-4"/>
        <p class="mt-2">填寫資料</p>
        <p class="mb-0">STEP 1</p>
      </div>
      <i class="bi bi-arrow-right fs-1 d-none d-sm-block"/>
      <div
        class="border d-inline-block text-center p-4"
        style="width: 150px; height: 150px"
      >
        <i class="bi bi-credit-card fs-4"/>
        <p class="mt-2">確認付款</p>
        <p class="mb-0">STEP 2</p>
      </div>
      <i class="bi bi-arrow-right fs-1 d-none d-sm-block"/>
      <div
        class="border d-inline-block text-center p-4 bg-dark text-white"
        style="width: 150px; height: 150px"
      >
        <i class="bi bi-clipboard-check fs-4"/>
        <p class="mt-2">送出訂單</p>
        <p class="mb-0">STEP 3</p>
      </div>
    </div>
  </div>
  <div class="text-center">
    <i class="bi bi-check-circle-fill text-success fs-1"></i>
    <h2 class="fw-bold">恭喜您，購買完成!</h2>
    <h3>商品會在1至2個工作天內送達</h3>
  </div>
  <div class="d-flex justify-content-center">
    <button type="button" class="btn  m-3" @click="$router.push('/user')">
      回首頁
    </button>
    <button
      type="button"
      class="btn  m-3"
      @click="$router.push('/user/productList')"
    >
      繼續購物!
    </button>
  </div>
</template>

