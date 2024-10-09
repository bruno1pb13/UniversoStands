import { ref, onMounted, onUnmounted } from 'vue'

export const useMediaQuery = () => {
  const isMobile = ref(false) // Declare as reactive
  const mql = ref(null) // Declare as reactive and initialized with null

  function update(e) {
    isMobile.value = e.matches
  }

  onMounted(() => {
    mql.value = window.matchMedia('(max-width: 1024px)')
    isMobile.value = mql.value.matches
    mql.value.addEventListener('change', update)
  })

  onUnmounted(() => {
    if (mql.value) {
      mql.value.removeEventListener('change', update)
    }
  })

  return { isMobile }
}
