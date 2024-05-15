import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type CvSkillGanttHeader from '~/components/cv/SkillGanttHeader.vue'

gsap.registerPlugin(ScrollTrigger)

export const useSkillGantScroll = (
  containerEl: Ref<HTMLElement | null>,
  yearScaleEl: Ref<InstanceType<typeof CvSkillGanttHeader> | null>,
  sectionEl: Ref<HTMLElement[] | null>,
) => {
  const isReady = ref(false)

  onMounted(() => {
    isReady.value = true

    if (sectionEl.value && yearScaleEl.value?.$el && containerEl.value) {
      window.addEventListener('beforeprint', () => {
        console.error('Before print', scaleTimeline)
      })

      const scaleTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerEl.value,
          endTrigger: sectionEl.value[sectionEl.value.length - 1],
          pin: yearScaleEl.value.$el,
          pinSpacing: false,
          start: 'top top',
          end: '-28px top',
        },
      })

      // sectionEl.value.forEach(el => {
      // const tl = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: el,
      //     pin: true,
      //     pinSpacing: false,
      //     start: 'top center', // when the top of the trigger hits the top of the viewport
      //     end: 'bottom center', // end after scrolling 500px beyond the start
      //     scrub: 1,
      //     markers: true,
      //   },
      // })

      // const an = tl.to(yearScaleEl.value, {
      //   x: () => {
      //     const { right } = el.getBoundingClientRect()
      //     return -1 * right - 32 + window.innerWidth
      //   },
      // })
      // })
    }
  })

  return { yearScaleEl, containerEl, isReady }
}
