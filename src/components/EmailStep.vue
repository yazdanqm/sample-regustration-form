<script setup>
// imports
import {defineModel} from 'vue'
import IconCheck from "@/components/icons/IconCheck.vue";
// props
const props = defineProps({hasError: Boolean, emailValidated: Boolean})
// data
const email = defineModel()
</script>
<template>
  <div class="relative pb-6">
    <label for="username" class="text-text text-[14px] mb-1 block">
      Email:
    </label>
    <div class="h-[40px] relative overflow-hidden rounded-[8px]">
      <div v-if="emailValidated"
           class="absolute inset-0 bg-input border border-success rounded-[8px] flex items-center justify-between gap-3 px-3">
        <span class="w-full block truncate">{{ email }}</span>
        <IconCheck class="text-success !w-[16px] min-w-max"/>
      </div>
      <input
          v-else
          v-model="email"
          :class="{'!border-error' : hasError}"
          class="w-full bg-input text-text rounded-[8px] h-[40px] outline-none border border-border px-3 placeholder:font-light placeholder:text-description hover:border-darkerBorder focus:border-darkerBorder transition-all"
          placeholder="Enter email"
          type="text"
          name="email"
          id="email"
      />
    </div>
    <span v-if="hasError"
          class="absolute bottom-0 left-0 text-[14px] text-error font-light">Invalid email address.</span>
  </div>
</template>
