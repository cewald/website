export default () => {
  const trackingId = 'G-303834268'
  const initScript = `window.dataLayer = window.dataLayer || []; function gtag() { window.dataLayer.push(arguments) }; gtag('js', new Date()); gtag('config', '${trackingId}');`

  useHead({
    script: [
      {
        src: 'https://www.googletagmanager.com/gtag/js?id=' + trackingId,
        async: true
      },
      { hid: 'tracker', innerHTML: initScript, body: true }
    ]
  })
}
