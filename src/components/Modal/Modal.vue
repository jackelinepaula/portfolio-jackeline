<script setup>
import Detalhes from '@/views/Detalhes.vue'
import { ref, watch } from 'vue'
const props = defineProps({
  visible: Boolean,
})
const emit = defineEmits(['update:visible'])

const visibleLocal = ref(props.visible)

watch(
  () => props.visible,
  (newVal) => {
    visibleLocal.value = newVal
  },
)

function closeDialog() {
  emit('update:visible', false)
}

watch(visibleLocal, (newVal) => {
  if (!newVal) {
    emit('update:visible', false)
  }
})
</script>

<template>
  <Dialog
    v-model:visible="visibleLocal"
    :draggable="false"
    @hide="closeDialog"
    modal
    header="Detalhes"
    :style="{ width: '50vw' }"
    :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
  >
    <Detalhes
      nomeProjeto="Nominho"
      descricao="Alguma descrição de algo que fazia nesse projetinho. Alguma descrição de algo que fazia nesse projetinho. Alguma descrição de algo que fazia nesse projetinho."
    />
  </Dialog>
</template>
