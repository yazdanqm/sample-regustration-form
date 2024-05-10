<script setup>
// imports
import IconCheck from "@/components/icons/IconCheck.vue";
// props
const props = defineProps({username: String, email: String})
</script>
<template>
  <div>
    <div class="text-text text-[14px] mb-1">Step: review</div>
    <div class="bg-white rounded-lg p-4">
      <div class="flex items-center gap-2 pb-3 border-b border-border mb-3">
        <IconCheck class="text-success w-[16px]" />
        <div class="text-text text-[16px] truncate">{{ 'Username: ' + username ?? 'No verified username' }}</div>
      </div>
      <div class="flex items-center gap-2">
        <IconCheck class="text-success w-[16px]" />
        <div class="text-text text-[16px] truncate">{{ 'Email: ' + email ?? 'No verified email' }}</div>
      </div>
    </div>
  </div>
</template>