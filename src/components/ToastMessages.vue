<template>
  <div class="toast-container position-absolute pe-3 top-0 end-0" style="z-index: 1050">
    <ToastComp v-for="(msg, key) in messages" :key="key" :msg="msg" />
  </div>
</template>

<script>
import ToastComp from '@/components/ToastComp.vue';

export default {
  components: { ToastComp },
  data() {
    return {
      messages: [],
    };
  },
  inject: ['emitter'],
  mounted() {
    this.emitter.on('push-message', (message) => {
      const { style , title, content } = message;
      this.messages.push({ style, title, content });
    });
  },
};
</script>