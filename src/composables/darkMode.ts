import { onBeforeMount, ref, watch } from 'vue'
import { useMediaQuery } from '@vueuse/core'

export const useDarkMode = () => {
  const current = useMediaQuery('(prefers-color-scheme: dark)')
  const isInitial = current.value
  const isActive = ref(current)

  const toggle = () => {
    if (!isInitial) return
    isActive.value = !isActive.value
  }

  const applyDocClass = () => {
    if (isActive.value) {
      document.documentElement.classList.add('dark')
    }
    else {
      document.documentElement.classList.remove('dark')
    }
  }

  watch(isActive, () => applyDocClass())
  onBeforeMount(() => applyDocClass())

  return { toggle, isActive, isInitial }
}
