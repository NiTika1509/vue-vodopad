<template>

    <div class="auth-form-body">
      <h3 class="auth-form-name">Авторизация</h3>
      <div class="auth-form-field">
        <span>У вас нет аккаунта?</span>
        <router-link class="auth-form-item_link" to="/register">Регистрация</router-link>
      </div>
      <form @submit.prevent="handleSubmit(!v$.$invalid)" class="p-fluid">
        <div class="w-full">
          <div class="auth-form-item">
            <div class="p-float-label p-input-icon-right">
              <div class="p-float-label p-input-icon-right">
                <i class="pi pi-envelope" />
                <InputText id="email" v-model="v$.email.$model" :class="{'p-invalid':v$.email.$invalid && submitted}" aria-describedby="email-error"/>
                <label for="email" :class="{'p-error':v$.email.$invalid && submitted}">Почта</label>
              </div>
              <span v-if="v$.email.$error && submitted">
                <span id="email-error" v-for="(error, index) of v$.email.$errors" :key="index">
                  <small class="p-error">{{error.$message}}</small>
                </span>
              </span>
              <small v-else-if="(v$.email.$invalid && submitted) || v$.email.$pending.$response" class="p-error">{{v$.email.required.$message.replace('Value', 'Email')}}</small>
            </div>
          </div>
          <div class="auth-form-item">
            <div class="p-float-label">
              <FormPassword id="password" :feedback="false" v-model="v$.password.$model" :class="{'p-invalid':v$.password.$invalid && submitted}" toggleMask></FormPassword>
              <label for="password" :class="{'p-error':v$.password.$invalid && submitted}">Пароль</label>
            </div>
            <small v-if="(v$.password.$invalid && submitted) || v$.password.$pending.$response" class="p-error">{{v$.password.required.$message.replace('Value', 'Password')}}</small>
          </div>
          <div class="auth-form-footer">
            <div class="auth-form-item-text">
              <div>
                <PrimeCheckbox id="remember" :binary="true" v-model="remember" class="mr-2"></PrimeCheckbox>
                <label for="remember">Запомнить меня</label>
              </div>
              <router-link class="auth-form-item_link" to="/register">Восстановить пароль</router-link>
            </div>
              <PrimeButton type="submit" label="Войти" class="w-full"></PrimeButton>
          </div>
        </div>
      </form>
    </div>

</template>

<script>
import {useVuelidate} from "@vuelidate/core/dist/index.esm";
import {email, required} from "@vuelidate/validators";


export default {
  name: "AuthLogin",
  data() {
    return {
      email: '',
      password: '',
      remember: null,
      submitted: false,
      showMessage: false
    }
  },
  setup: () => (
      { v$: useVuelidate() }
  ),
  validations() {
    return {
      email: {
        required,
        email
      },
      password: {
        required
      },
      remember: {
        required
      }
    }
  },
  methods: {
    handleSubmit(isFormValid) {
      this.submitted = true;

      if (!isFormValid) {
        return isFormValid;
      }
      this.loginHandler();
    },
    async loginHandler() {
      try{

        const formData = {
          email: this.email,
          password: this.password
        };

        await this.$store.dispatch('login', formData);
        /* ПРОВЕРКА ЕСЛИ УСПЕШНАЯ АВТОРИЗАЦИЯ, ТО РЕДИРЕКТ */

      }catch (e){
        /* КОММИТИМ ОШИБКУ В КОМПОНЕНТ ВЫВОДА ОШИБКИ */
        await this.$store.commit('setError', e.message);
        throw e;
      }finally {
        this.$router.push('/admin');
        this.$store.commit('setError','login');

      }
    },
    resetForm() {
      this.name = '';
      this.email = '';
      this.password = '';
      this.date = null;
      this.remember = null;
      this.submitted = false;
    }
  },
}
</script>

<style scoped>

</style>