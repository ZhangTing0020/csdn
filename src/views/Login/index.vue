<template>
  <div class="login-container">
    <van-nav-bar title="登录">
      <template #left>
        <!-- # 是v-slot的简写 是一个具名插槽,名字为left -->
        <img class="logo" src="@/assets/images/logo.png" />
      </template>
    </van-nav-bar>

    <van-form @submit="onSubmit">
  <van-field
    v-model="username"
    name="用户名"
    label="用户名"
    placeholder="用户名"
    :rules="[{ required: true, message: '请填写用户名' }]"
  />
  <van-field
    v-model="password"
    type="password"
    name="密码"
    label="密码"
    placeholder="密码"
    :rules="[{ required: true, message: '请填写密码' }]"
  />
  <div style="margin: 16px;">
    <van-button round block type="info" native-type="submit">提交</van-button>
  </div>
</van-form>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    onSubmit (values) {
      console.log('submit', values)
    }
  }
}
</script>

<style lang="less" scoped>
// .van-nav-bar {
//   background: #007bff;
//   /* /deep/ 就是把data-v-hash值选择器写到类名的前面 */
//  /deep/ .van-nav-bar__title {
//   color: #fff;
// }
// }
.logo {
  width: 100px;
  height: 30px;
}
 .van-nav-bar__content {
  height: 100px;
}
</style>
