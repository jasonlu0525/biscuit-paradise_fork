<template>
  <div class="footer-bg-color">
    <div class="container-fluid pt-4 text-white text-center">
      <ul class="list-unstyled fs-3 d-flex justify-content-center">
        <li><i class="bi bi-facebook px-3 footer-icon"></i></li>
        <li><i class="bi bi-instagram px-3 footer-icon"></i></li>
        <li><i class="bi bi-twitter px-3 footer-icon"></i></li>
      </ul>
      <button type="button"
      class="btn btn-outline-light btn-sm border-top-0 border-bottom-0 rounded-0 mt-3 px-3"
      @click="goLogin">
      管理者後台</button>
      <small class="mb-0 mt-3 pb-2 d-block">
        Copyright © 2023 made by Sam | 個人作品無商業用途
      </small>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goLogin() {
      this.$router.push('/login');
    },
  },
};
</script>

<style lang="scss"  scoped>
.footer-bg-color{
  background-color: #0C2F5E;
}
.footer-icon{
  cursor: pointer;
  &:hover{
    color: #8DD0E5;
  }
}
</style>