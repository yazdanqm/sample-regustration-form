<script setup>
// imports
import UserNameStep from "@/components/UserNameStep.vue"
import {computed, ref} from "vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
import IconPrevious from "@/components/icons/IconPrevious.vue";
import IconNext from "@/components/icons/IconNext.vue";
import useUsernameValidator from "@/composables/useUsernameValidator.js";
import EmailStep from "@/components/EmailStep.vue";
import useEmailValidator from "@/composables/useEmailValidator.js";
import ReviewStep from "@/components/ReviewStep.vue";
// constants
const constants = {
  EMAIL: 'EMAIL',
  USERNAME: 'USERNAME',
  REVIEW: 'REVIEW'
}
// vue ref data
const username = ref('')
const email = ref('')
const step = ref(constants.USERNAME)
const usernameHasError = ref(false)
const emailHasError = ref(false)
const usernameValidated = ref(false)
const emailValidated = ref(false)
// computed data
const showNextBtn = computed(() => {
  if (step.value !== constants.REVIEW) {
    if (step.value === constants.USERNAME) {
      return !usernameHasError.value
    } else if (step.value === constants.EMAIL) {
      return !emailHasError.value
    }
  } else {
    return false
  }
})
const showPrevBtn = computed(() => {
  return step.value !== constants.USERNAME
})
// methods
const nextClickHandler = () => {
  if (step.value === constants.USERNAME) {
    if (usernameValidated.value) {
      step.value = constants.EMAIL
    } else {
      let usernameValidationResult = useUsernameValidator(username.value)
      usernameHasError.value = !usernameValidationResult
      if (usernameValidationResult) {
        step.value = constants.EMAIL
        usernameValidated.value = true
      }
    }
  } else if (step.value === constants.EMAIL) {
    if (emailValidated.value) {
      step.value = constants.REVIEW
    } else {
      let emailValidationResult = useEmailValidator(email.value)
      emailHasError.value = !emailValidationResult
      if (emailValidationResult) {
        step.value = constants.REVIEW
        emailValidated.value = true
      }
    }
  }
}
const prevClickHandler = () => {
  if (step.value === constants.EMAIL) {
    step.value = constants.USERNAME
  } else if (step.value === constants.REVIEW) {
    step.value = constants.EMAIL
  }
}
</script>

<template>
  <div class="bg-backgroud fixed overflow-y-auto inset-0 flex flex-col gap-3 items-center justify-center p-4">
    <div class="w-full sm:w-[400px] border border-border rounded-2xl p-8">
      <h1 class="text-text font-semibold text-[24px] text-center">Registration</h1>
      <div class="text-description font-extralight text-center mt-2">Hello there! Let's create your account</div>
      <UserNameStep v-if="step === constants.USERNAME" @input="usernameHasError = false" v-model="username"
                    :has-error="usernameHasError" :username-validated="usernameValidated" class="mt-8"/>
      <EmailStep v-if="step === constants.EMAIL" @input="emailHasError = false" v-model="email"
                 :has-error="emailHasError" :email-validated="emailValidated" class="mt-8"/>
      <ReviewStep v-if="step === constants.REVIEW" :username="username" :email="email" class="mt-8" />
      <div class="grid grid-cols-2 gap-3 mt-10">
        <ButtonComponent @click="prevClickHandler" title="Prev" id="btn-prev" :disabled="!showPrevBtn"
                         class="flex-row-reverse">
          <template #icon>
            <IconPrevious class="w-[16px]"/>
          </template>
        </ButtonComponent>
        <ButtonComponent @click="nextClickHandler" title="Next" id="btn-next" :disabled="!showNextBtn">
          <template #icon>
            <IconNext class="w-[16px]"/>
          </template>
        </ButtonComponent>
      </div>
    </div>
    <div class="text-[14px] text-description">{{`Developed with 💖 by Yazdan Qolami`}}</div>
  </div>
</template>
