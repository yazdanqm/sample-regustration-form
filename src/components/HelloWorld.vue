<script setup>
// props
const props = defineProps({msg: String})
</script>
<template>
  <div class="bg-backgroud fixed overflow-y-auto inset-0 flex flex-col gap-3 items-center justify-center p-4">
    <div class="w-full sm:w-[400px] border border-border rounded-2xl p-8">
      <h1>{{ msg }}</h1>
    </div>
    <div class="text-[14px] text-description">{{ `Developed with 💖 by Yazdan Qolami` }}</div>
  </div>
</template>
