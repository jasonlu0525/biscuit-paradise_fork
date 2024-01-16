<template>
  <!-- bug fixed-bottom 雖然有達到固定在底部的效果，但是當打開開發工具的時候,nav 會往上重疊到list，透過my-5也沒有辦法避免重疊-->
  <nav aria-label="Page navigation example" class="fixed-bottom my-5">
    <ul class="pagination justify-content-center">
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Previous" @click.prevent="goPrev(currentPageInside)">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li class="page-item" v-for="page in pages.total_pages" :key="page" :class="{ 'active': page === pages.current_page }">
        <a class="page-link" href="#" @click.prevent="updatePage(page)"> {{ page }} </a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Next" @click.prevent="goNext(currentPageInside)">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
// :pages="{ 頁碼資訊 }"
// @emitPages="更新頁面事件"
export default { 
  props: ['pages','currentPageInside'],
  methods: {
    updatePage(page) {
      this.$emit('emit-pages', page);
    },
    goNext(currentPageInside){
      currentPageInside +=1;
      this.$emit('go-Next', currentPageInside);
    },
    goPrev(currentPageInside){
      currentPageInside -=1;
      this.$emit('go-Prev', currentPageInside);
    }
  },
};
</script>