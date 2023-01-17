<template>
  <DialogPrime v-model:visible="showMessage" :breakpoints="{ '960px': '80vw' }" :style="{ width: '30vw' }" position="top">
    <div class="auth-form-successful pt-6 px-3">
      <i class="pi pi-check-circle" :style="{fontSize: '5rem', color: 'var(--green-500)' }"></i>
      <h5>Успешная регистрация!</h5>
      <p :style="{lineHeight: 1.5, textIndent: '1rem'}">
        <b>{{name}}</b>, вы успешно прошли регистрацию, вам на почту <b>{{email}}</b> пришло письмо активации учётной записи.
      </p>
    </div>
    <template #footer>
      <div class="flex justify-content-center">
        <PrimeButton label="OK" @click="toggleDialog" class="p-button-text" />
      </div>
    </template>
  </DialogPrime>

      <div class="auth-form-body">
          <h3 class="auth-form-name">Регистрация</h3>
          <div class="auth-form-field">
            <span>Уже есть аккаунт?</span>
            <router-link class="auth-form-item_link" to="/login">Войти</router-link>
          </div>
        <form @submit.prevent="handleSubmit(!v$.$invalid)" class="p-fluid">
          <div class="auth-form-item">
            <div class="p-float-label">
              <InputText id="name" v-model="v$.name.$model" :class="{'p-invalid':v$.name.$invalid && submitted}" />
              <label for="name" :class="{'p-error':v$.name.$invalid && submitted}">Имя</label>
            </div>
            <small v-if="(v$.name.$invalid && submitted) || v$.name.$pending.$response" class="p-error">{{v$.name.required.$message.replace('Value', 'Name')}}</small>
          </div>
          <div class="auth-form-item">
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
          <div class="auth-form-item">
            <div class="p-float-label">
              <FormPassword id="password" v-model="v$.password.$model" :class="{'p-invalid':v$.password.$invalid && submitted}" toggleMask>
                <template #header>
                  <h6>Введите пароль</h6>
                </template>
                <template #footer="sp">
                  {{sp.level}}
                  <PrimeDivider />
                  <p>Требования</p>
                  <ul style="line-height: 1.5">
                    <li>Хотя бы один символ в нижнем регистре.</li>
                    <li>Хотя бы один символ в верхнем регистре.</li>
                    <li>Хотя бы одна цифра.</li>
                    <li>Минимум 8 символов.</li>
                  </ul>
                </template>
              </FormPassword>
              <label for="password" :class="{'p-error':v$.password.$invalid && submitted}">Пароль</label>
            </div>
            <small v-if="(v$.password.$invalid && submitted) || v$.password.$pending.$response" class="p-error">{{v$.password.required.$message.replace('Value', 'Password')}}</small>
          </div>
          <div class="auth-form-footer">
            <div class="auth-form-item-text">
              <div>
                <PrimeCheckbox id="accept" name="accept" value="Accept" v-model="v$.accept.$model" :class="{'p-invalid':v$.accept.$invalid && submitted}" />
                <label for="accept" :class="{'p-error': v$.accept.$invalid && submitted}">Я согласен с правилами и условиями пользования.</label>
              </div>
            </div>
            <PrimeButton type="submit" label="Зарегистрироваться" />
          </div>
        </form>
      </div>

</template>

<script>
import { email, required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";

export default {
  name: "AuthRegister",
  setup: () => (
      { v$: useVuelidate() }
  ),
  data() {
    return {
      name: '',
      email: '',
      password: '',
      accept: null,
      submitted: false,
      showMessage: false
    }
  },
  validations() {
    return {
      name: {
        required
      },
      email: {
        required,
        email
      },
      password: {
        required
      },
      accept: {
        required
      }
    }
  },
  methods: {
    handleSubmit(isFormValid) {
      this.submitted = true;

      if (!isFormValid) {
        return;
      }
      /*Обработка ошибки записи и запись */
      this.handleUser();
      this.toggleDialog();
    },
    toggleDialog() {
      this.showMessage = !this.showMessage;

      if(!this.showMessage) {
        this.resetForm();
        this.$router.push('/login');

      }
    },
    async handleUser(){
      const formData = {
        name: this.name,
        email: this.email,
        password: this.password
      }
      try{
        await this.$store.dispatch('register', formData);
        console.log('Запись в базу данных')
      }catch (e){
        console.log(e);
      }
    },
    resetForm() {
      this.name = '';
      this.email = '';
      this.password = '';
      this.accept = null;
      this.submitted = false;
    }
  },

}
</script>

<style scoped>

</style>