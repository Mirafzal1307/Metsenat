<template>
  <div class="bg-#f5f5f700 w-full h-full">
    <div class="max-w-[1200px] mx-auto flex justify-center mt-44">
      <div class="grid grid-cols-3 w-full">
        <div class="col-start-2">
          <div class="flex justify-center">
            <LogoMetsenat />
          </div>

          <div
            class="bg-white shadow-xl mt-12 p-8 shadow-gray-200 rounded-xl border-solid border-[#ebeefc00]"
          >
            <h3 class="text-2xl font-bold pb-11">Kirish</h3>
            <form @submit.prevent="login">
              <CInput
                v-model="userdata.username"
                id="login"
                type="text"
                placeholder="adm8904"
                label="Login"
                class="pb-5"
              />
              <CInput
                v-model="userdata.password"
                id="password"
                type="password"
                placeholder="••••••••••"
                label="Parol"
                class="pb-5"
              />
              <!-- <button type="submit">loror</button> -->

              <CButton type="submit">Kirish</CButton>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import LogoMetsenat from '@/components/Layout/LogoMetsenat.vue'
import CButton from '@/components/button/CButton.vue'
import CInput from '@/components/form/input/CInput.vue'
import { reactive } from 'vue'
import { useUserStore } from '@/stores/user.js'

const { userLogin } = useUserStore()

const userdata = reactive({
  username: 'metsenatadmin',
  password: 'uF9aH1vZ3bV2kN2y'
})

const login = async () => {
  const userCredentials =  {
    username: userdata.username.trim(),
    password: userdata.password.trim()
  }
   
  try {
    console.log(userCredentials);
    await userLogin(userCredentials)
    await router.push('/')
  } catch (error) {
    return error
  }
}
</script>
