<template>
  <section class="container py-lg-5">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/">首頁</router-link></li>
        <li class="breadcrumb-item">關於我們</li>
      </ol>
    </nav>
    <div class="about text-center px-4 py-5">
      <div class="text-white text-center p-3 cover d-inline-block">
        <p class="mb-0">品味我們的故事</p>
        <h1 class="fw-bold my-3">關於我們</h1>
        <p class="mb-0">歡迎加入我們的甜蜜行列，一起尋找屬於你的快樂滋味！</p>
      </div>
    </div>
    <div class="row flex-row-reverse g-3 pt-5">
      <div class="col-lg-6 d-flex align-items-center">
        <div>
          <h2 class="fw-bold">關於「餅乾天堂」</h2>
          <p class="lh-lg text-secondary mb-0">
            在餅乾天堂的起點，是老板娘童年一個簡單的夢想：製作出每一片都充滿幸福的餅乾，讓人品味到童年的快樂。每片餅乾都是她夢寐以求的烘焙藝術。我們始終秉持著對品質的堅持，為顧客奉上甜蜜的美味時光，讓每個人都能在餅乾的天堂找到屬於自己的幸福。
          </p>
        </div>
      </div>
      <div class="col-lg-6">
        <img src="../../assets/images/img/造型_星星.jpg" alt="關於我們" class="img-fluid" />
      </div>
    </div>
    <div class="row g-3 py-5">
      <div class="col-lg-6 d-flex align-items-center">
        <div>
          <h2 class="fw-bold">閃耀新滋味，"夢幻可頌"登場！</h2>
          <p class="lh-lg text-secondary mb-0">
            在餅乾天堂，我們一直以來都追求美味的極致。現在，除了我們經典的餅乾外，全新的夢幻可頌系列也正式登場！用心製作，帶給您更多層次的口感和驚喜滋味。品味新滋味，一同享受甜蜜的時光。
          </p>
        </div>
      </div>
      <div class="col-lg-6">
        <img src="../../assets/images/img/可頌_香草可頌.jpg" alt="關於我們" class="img-fluid" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.cover {
  background-image: linear-gradient(rgba(0,0,0,.3),rgba(0,0,0,.3));
}
.about {
  background-image: url("../../assets/images/img/main.jpg");
  background-position: center;
  height: 350px;
  background-size: cover;
}
</style>