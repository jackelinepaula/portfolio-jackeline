<script setup>
import { ref, defineProps } from 'vue'

defineProps({
  images: {
    type: Array,
  },
})

const activeIndex = ref(0)
const displayCustom = ref(false)

function openGallery(index) {
  activeIndex.value = index
  displayCustom.value = true
}
</script>

<template>
  <div class="thumbnail-grid" style="display: flex; flex-wrap: wrap; gap: 1rem">
    <img
      v-for="(image, index) in images"
      :key="index"
      :src="image.thumbnailImageSrc"
      :alt="image.alt"
      style="cursor: pointer; width: 250px; height: auto; object-fit: cover; border-radius: 4px"
      @click="openGallery(index)"
    />
  </div>

  <Galleria
    v-model:activeIndex="activeIndex"
    v-model:visible="displayCustom"
    :value="images"
    :fullScreen="true"
    :showThumbnails="false"
    :showItemNavigators="true"
  >
    <template class="container-item" #item="slotProps">
      <div
        style="
          width: 100vw;
          height: 85vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #000;
        "
      >
        <img
          :src="slotProps.item.itemImageSrc"
          :alt="slotProps.item.alt"
          style="height: 85vh; width: auto; max-width: 100%; object-fit: contain"
        />
      </div>
    </template>
  </Galleria>
</template>

<style scoped>
.thumbnail-grid {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
