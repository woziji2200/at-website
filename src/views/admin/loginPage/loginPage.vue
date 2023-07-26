<template>
    <div id="app" class="background">
        <div class="login">
            <span class="login-title">LOGIN</span>

            <input class="login-input" v-model="username" type="text" placeholder="USERNAME">
            <input class="login-input" v-model="password" type="password" placeholder="PASSWORD">
            <el-checkbox class="login-rem" v-model="remember">记住密码</el-checkbox>
            <button class="login-button" @click="login">登录</button>
        </div>

        <!-- <button @click="test()">233</button> -->
    </div>
</template>
<script>
export default {
    methods: {
        async test() {
            let a = await this.$http.get("/registrant/", "");
            console.log(a.headers["set-cookie"]);
        },
        async login() {
            console.log(this.nowLogin);
            if(this.nowLogin) return

            this.nowLogin = true
            try {
                let loginMsg = await this.$http.post("/login/", {
                    "username": this.username,
                    "password": this.password,
                    "remember": this.remember ? "strud" : "nostrud"
                })
                console.log(loginMsg, document.cookie);
                if (loginMsg.status == 200) {
                    this.$message({
                        message: '登录成功',
                        type: 'success'
                    });
                    localStorage.setItem("login", JSON.stringify(loginMsg.data))
                    this.nowLogin = false;
                    setTimeout(() => {
                        this.$router.push({ "path": "/admin/registrant/" })
                    }, 2000)
                    this.nowLogin = false;
                } else {
                    // console.log(123123123);
                    this.nowLogin = false;
                    this.$message({
                        message: '登录失败，错误码' + loginMsg.status,
                        type: 'error'
                    });
                    this.nowLogin = false;
                }
            } catch {

            }
            this.nowLogin = false;
        }
    },
    data() {
        return {
            username: "",
            password: "",
            remember: false,
            nowLogin: false
        }
    }
}
</script>

<style scoped>
.background {
    background: linear-gradient(to bottom right, blue, pink);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.login {
    width: 500px;
    height: 300px;
    background-color: rgba(255, 255, 255, 0.4);
    box-shadow: 0px 0px 39px 10px rgba(62, 66, 66, 0.22);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.login-title {
    /* color: white; */
    font-size: 28px;
}

.login-input {
    height: 30px;
    width: 60%;
    background-color: rgba(255, 255, 255, 0);
    border: none;
    border-bottom: solid 1px rgb(124, 124, 124);
    padding-left: 20px;
    padding-right: 20px;
    outline: none;
    transition: all 0.4s;
    margin-top: 20px;
}

.login-input:hover {
    border-bottom: solid 1px rgb(32, 95, 255);
}

.login-input:focus {
    border-bottom: solid 1px rgb(0, 67, 236);
}

.login-button {
    font-size: 14px;
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 10px;
    height: 30px;
    width: 200px;
    outline: none;
    border: none;
    letter-spacing: 6px;
    margin-top: 20px;
    transition: all 0.3s;
    color: rgb(72, 72, 72);
}

.login-button:hover {
    background-color: rgba(255, 255, 255, 0.7);
}

.login-rem {
    margin-top: 20px;
}
</style>
