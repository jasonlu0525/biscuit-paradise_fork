<template>
  <div class="container mt-5">
    <form class="row justify-content-center"
      @submit.prevent="signIn">
      <div class="col-md-6">
        <h1 class="h3 mb-3 font-weight-normal">管理者登入</h1>
        <div class="mb-2">
          <label for="inputEmail" class="sr-only">Email address</label>
          <input
            type="email"
            id="inputEmail"
            class="form-control"
            placeholder="Email address"
            required
            autofocus
            v-model="user.username"
          />
        </div>
        <div class="mb-2">
          <label for="inputPassword" class="sr-only">Password</label>
          <input
            type="password"
            id="inputPassword"
            class="form-control"
            placeholder="Password"
            required
            v-model="user.password"
          />
        </div>

        <div class="d-flex justify-content-between align-items-center mt-4">
          <div>
            <router-link to="/user" class="fs-5 fw-bold text-decoration-none">
              <i class="bi bi-house"></i> 返回首頁
            </router-link>
            <p class="text-muted ">不是管理者嗎?</p>
          </div>
          <button class="btn btn-lg btn-primary btn-block" type="submit">登入</button>
        </div>

      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    signIn() {
      const api = `${process.env.VUE_APP_API}admin/signin`;
      this.$http.post(api, this.user)
        .then((res) => {
          if (res.data.success) {
            const { token, expired } = res.data;
            document.cookie = `hexToken=${token}; expires=${new Date(expired)}`;
            this.$router.push('/dashboard/products');
          }
        });   
    },
  },
};
</script>