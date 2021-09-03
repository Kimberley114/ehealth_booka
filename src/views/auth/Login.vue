<template>
  <div class="wrapper">
    <div class="title">Login</div>
    <form @submit.prevent="handleSubmit"  class="login_form">
      <div class="field">
        <input type="email" v-model="email" required>
        <label class="label">Email Address</label>
      </div>
      <div class="field">
        <input type="password" v-model="password" required>
        <label class="label">Password</label>
      </div>
      <button v-if="!isPending">Login</button>
      <button v-if="isPending" disabled>Loading</button> 
      <div v-if="error" class="error">{{ error }}</div>
      <div class="signup_link">Not a member yet??
        <a @click="routeToSignup">Sign Up NOW!!!</a>
      </div>
    </form>
  </div>
  
</template>

<script>
import useLogin from '@/composables/useLogin'
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const { error, login, isPending } = useLogin()
    const router = useRouter()

    const email = ref('')
    const password = ref('')

    const handleSubmit = async () => {
      const res = await login(email.value, password.value)
      if (!error.value) {
        router.push({ name: 'UserPosts' })
      }
    }

    const routeToSignup = () => {
      router.push({ name: 'Signup' })
    }

    return { email, password, handleSubmit, error, isPending, routeToSignup }
  }
}
</script>

<style scoped>
  .wrapper {
    display: grid;
    height: 100%;
    place-items: center;
    margin: 100px auto;
    width: 400px;
    background: #fff;
    border-radius: 15px;
    box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.1);
  }
  .wrapper .title {
    width: 100% !important;
    line-height: 100px;
    font-size: 35px;
    font-weight: 600;
    text-align: center;
    border-radius: 15px 15px 0px 0px;
    background: linear-gradient(-135deg, #c850c0, #4158d0);
  }
  .wrapper .login_form {
    padding: 10px 30px 50px 30px;
    width: 100% !important;
  }
  .wrapper .login_form .field {
    height: 50px;
    width: 100%;
  }
  .wrapper .login_form .field input {
    height: 100%;
    width: 100%;
    padding-left: 20px;
    border-radius: 25px;
    border: 1px solid lightgray;
    transition: all 0.3s ease-out;
  }
  .wrapper .login_form .field input:focus,
  .wrapper .login_form .field input:valid {
    border-color: #4158d0;
  }
  .wrapper .login_form input ~ .label {
    display: block;
    position: relative;
    top: -130%;
    left: 20px;
    font-size: 17px;
    color: #999;
    pointer-events: none;
    transition: all 0.3s ease-out;
  }
  .wrapper .login_form input:focus ~ .label,
  .wrapper .login_form input:valid ~ .label {
    top: -145%;
    transform: translate(0,-20px);
    font-size: 15px;
    color: #4158d0;
    background: #fff;
    width: max-content;
  }
  .wrapper .login_form button {
    position: relative;
    left: 20%;
    width: 200px;
    margin-top: 25px;
    margin-bottom: -10px;
  }
  .wrapper .login_form .signup_link {
    margin-top: 30px;
    margin-bottom: -10px;
  }
  .wrapper .login_form .signup_link a {
    color: #4158d0;
    font-weight: 500;
    text-decoration: underline;
    cursor: pointer;
  }
  .wrapper .login_form .signup_link a:hover {
    color: #08b450;
    font-weight: bold;
  }
</style>