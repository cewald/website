import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type CvSkillGanttHeader from '~/components/cv/SkillGanttHeader.vue'

gsap.registerPlugin(ScrollTrigger)

export const useSkillGanttScroll = (
  containerEl: Ref<HTMLElement | null>,
  yearScaleEl: Ref<InstanceType<typeof CvSkillGanttHeader> | null>,
  sectionEl: Ref<HTMLElement[] | null>
) => {
  const isReady = ref(false)
  const isDomReady = computed(() => sectionEl.value && yearScaleEl.value?.$el && containerEl.value)

  const { getMediaQuery } = useScreens()

  onMounted(() => {
    isReady.value = true

    if (isDomReady.value) {
      const mm = gsap.matchMedia()

      mm.add(
        {
          isDesktop: getMediaQuery('sm'),
          isMobile: getMediaQuery('sm', 'max'),
          reduceMotion: '(prefers-reduced-motion: reduce)',
        },
        context => {
          const { isDesktop, isMobile, reduceMotion } = context.conditions as Record<string, boolean>

          if (!isDomReady.value || reduceMotion) return

          const beforePrintEvent = () => context.kill(true)
          window.addEventListener('beforeprint', beforePrintEvent)

          if (isDesktop) {
            gsap.timeline({
              label: 'desktop-scale-timeline',
              scrollTrigger: {
                trigger: containerEl.value,
                endTrigger: sectionEl.value?.[sectionEl.value.length - 1],
                pin: yearScaleEl.value?.$el,
                pinSpacing: false,
                start: 'top top',
                end: '-48px top',
              },
            })
          } else if (isMobile) {
            sectionEl.value?.forEach((el, i) => {
              const tl = gsap.timeline({
                label: 'section-scroll-' + i,
                scrollTrigger: {
                  trigger: el,
                  start: 'top 35%',
                  end: 'top top',
                  scrub: 1,
                },
              })

              tl.to(el.querySelector('#scrollElement'), {
                x: () => {
                  const { right } = el.getBoundingClientRect()
                  return -1 * right + window.innerWidth
                },
              })
            })
          }

          return () => window.removeEventListener('beforeprint', beforePrintEvent)
        }
      )
    }
  })

  return { yearScaleEl, containerEl, isReady }
}
