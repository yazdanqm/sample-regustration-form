<script setup>
// props
const props = defineProps({title: String, disabled: Boolean , id : String})
</script>
<template>
  <button
      :title="title"
      :id="id"
      :class="{'!bg-disableBackground !text-disableText select-none' : disabled}"
      :disabled="disabled"
      class="bg-primary hover:bg-primaryDarker text-white font-medium text-[16px] px-5 py-2 rounded-md transition-all flex items-center justify-center gap-1.5">
    {{ title }}
    <slot name="icon" />
  </button>
</template>