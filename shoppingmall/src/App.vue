<template>
<div id="app">
  <!-- 상단 navbar2-->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">옷 쇼핑몰</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/">홈</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" to="/">제품리스트</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/detail">제품상세페이지</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/create">제품등록페이지</router-link>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  </nav>

  <!-- 상단 navbar1-->
  <nav class="navbar navbar-expand-sm bg-info navbar-dark justify-content-end">
    <a class="navbar-brand" href="#">Home</a>
    <button class="btn btn-success ml-auto mr-1">장바구니</button>
    |
    <button class="btn btn-success ml-auto mr-1">공지사항</button>
    |
    <button class="btn btn-success ml-auto mr-1">1:1문의</button>
    |
    <button class="btn btn-success ml-auto mr-1">회원가입</button>
    <!-- <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
      <span class="navbar-toggler-icon"></span>
    </button> -->
    <!-- <div class="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
      <ul class="navbar-nav text-right">
        <li class="nav-item active">
          <a class="nav-link" href="#">Right Link 1</a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="#">Right Link 2</a>
        </li>
      </ul>
    </div> -->
  </nav>

  <div id="nav">
    <router-link to="/">ProductList</router-link> | <router-link to="/detail">ProductDetail</router-link> |
    <router-link to="/create">ProductCreate</router-link> 
  </div>

  <router-view></router-view>
  </div>
</template>


<script>
// export default {
//   computed: {
//     user() {
//       return this.$store.state.user;
//     },
//   },
//   methods: {
//     kakaoLogin() {
//       window.Kakao.Auth.login({
//         scope: 'profile, account_email, gender',
//         success: this.getProfile,
//       });
//     },
//     getProfile(authObj) {
//       console.log(authObj);
//       window.Kakao.API.request({
//         url: '/v2/user/me', //로그인 한 사람의 정보를 갖고 오는 것
//         success: (res) => {
//           const kakao_account = res.kakao_account; //account 정보를 갖고 옴
//           console.log(kakao_account);
//           this.login(kakao_account);
//           alert('로그인 성공!');
//         },
//       });
//     },
//     async login(kakao_account) {
//       await this.$api('/api/login', {
//         param: [
//           { email: kakao_account.email, nickname: kakao_account.profile.nickname },
//           { nickname: kakao_account.profile.nickname },
//         ],
//       });

//       this.$store.commit('user', kakao_account); // 우리가 만든 store(vuex를 이용한 상태 관리 모듈)에다가 유저정보를 갱신
//     },
//     kakaoLogout() {
//       window.Kakao.Auth.logout((response) => {
//         console.log(response);
//         this.$store.commit('user', {});
//         alert('로그아웃');
//       });
//     },
//   },
// };
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
