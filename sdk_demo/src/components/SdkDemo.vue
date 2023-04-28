
<script>
export default {
  name: "Sdktest",
};
</script>

<script setup>
import CryptoJS from "crypto-js/crypto-js";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
const router = useRouter();
const clound = ref(null);
const token = ref("");
onMounted(() => {});
const getUid = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};
const getToken = () => {
  let nonce = getUid();
  let timestamp = new Date().getTime().toString();
  let stringB = CryptoJS.MD5(
    timestamp + "f0c3765a39aa9f4ed92685deb9642fd3" + nonce
  ).toString();
  console.log(stringB);
  axios
    .post(
      "https://meet-openapi.51meet.com/open-api/user/login",
      {},
      {
        headers: {
          "Content-Type": "application/json",
          nonce: nonce,
          timestamp: timestamp,
          signature: stringB,
          appkey: "b1321dbf6abbf0d3e98baec41afcf58e",
        },
      }
    )
    .then((response) => {
      token.value = response.data.result.token;
    });
};
getToken();
// 初始化sdk
const init = () => {
  let clientConfig = {
    tagId: "hello",
    meetNumber: "120595239",
    title: "SDK测试-永开活动",
    token: token.value,
  };
  clound.value = new MeetSDK(clientConfig);
  console.log(clound.value);
  clound.value.init().then((res) => {
    console.log(res);
    if (res) {
      clound.value.start();
    }
  });
  clound.value.on("MeetEvent", (res) => {
    console.log("666666666");
    console.log(res);
    const { type, message } = res;
    switch (type) {
      case "ready": //画面准备就绪
        console.log(message); //详细内容见下方示例
        break;
      case "exit": //退出
        console.log(message); //详细内容见下方示例
        clound.value = null;
        router.push({ path: "/" });
        break;
      case "error":
        console.log(message);
        alert(message.desc);
        clound.value = null;
      // eslint-disable-next-line no-fallthrough
      default:
        break;
    }
  });
};
</script>

<template>
  <div v-if="!clound" @click="init" class="init-but">init</div>
  <div id="hello"></div>
</template>

<style lang="less" scoped>
.init-but {
  padding: 12px;
  background: #6d6de7;
  color: #fff;
  margin: 20px auto;
  width: 120px;
  text-align: center;
  cursor: pointer;
}
</style>
