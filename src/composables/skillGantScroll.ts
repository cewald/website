import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useSkillGantScroll = (
  containerEl: Ref<HTMLElement | null>,
  yearScaleEl: Ref<HTMLElement | null>,
  sectionEl: Ref<HTMLElement[] | null>,
) => {
  const isReady = ref(false)

  onMounted(() => {
    isReady.value = true

    if (sectionEl.value && yearScaleEl.value && containerEl.value) {
      gsap.timeline({
        scrollTrigger: {
          trigger: containerEl.value,
          endTrigger: sectionEl.value[sectionEl.value.length - 1],
          pin: yearScaleEl.value,
          pinSpacing: false,
          start: 'top top',
          end: '-28px top',
        },
      })

      // sectionEl.value.forEach(el => {
      //   const tl = gsap.timeline({
      //     scrollTrigger: {
      //       trigger: sectionEl.value,
      //       pin: true,
      //       // pinSpacing: false,
      //       start: 'top top', // when the top of the trigger hits the top of the viewport
      //       end: 'bottom top', // end after scrolling 500px beyond the start
      //       // scrub: 1,
      //       markers: true,
      //     },
      //   })

      //   tl.to(el, {
      //     x: () => {
      //       const { right } = el.getBoundingClientRect()
      //       // return -1 * right - 32 + window.innerWidth
      //       return -1 * window.innerWidth
      //     },
      //   })
      // })
    }
  })

  return { yearScaleEl, containerEl, isReady }
}