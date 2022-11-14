<template>


  <!-- Workshop card -->
  <div class="flex items-center" style="width: 800px;">

    <!-- Icon -->
    <div class="relative flex items-center justify-center mr-8" style="height: 214px; width: 242px">
      <svg class="absolute inset-0" width="242" height="214" viewBox="0 0 242 214" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M3.58717 101.056L57.1692 7.93867C59.285 4.26173 63.1927 2 67.418 2L174.582 2C178.807 2 182.715 4.26173 184.831 7.93867L238.413 101.056C240.529 104.734 240.529 109.266 238.413 112.944L184.831 206.061C182.715 209.738 178.807 212 174.582 212H67.418C63.1927 212 59.285 209.738 57.1692 206.061L3.58717 112.944C1.47094 109.266 1.47094 104.734 3.58717 101.056Z"
          fill="white" fill-opacity="0.1" stroke="#7652DD" stroke-width="4" />
      </svg>


      <div class="max-h-[136px] max-w-[128px] overflow-hidden" v-html="props.data.icon">
        

      </div>

    </div>
    <!-- Details -->
    <div class="flex-auto" style="width: 510px;">
      <h3 class="text-3xl font-medium text-primary mb-4">{{ props.data.date }}</h3>
      <h2 class="text-5xl font-semibold text-white">{{ props.data.title }}</h2>
    </div>
  </div>
</template>

<script setup lang="ts">

const props = defineProps<{data: { icon: string, title: string, date: string }}>()

</script>