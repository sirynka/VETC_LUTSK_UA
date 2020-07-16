$(() => {
    $(".image h1")
    .hide()
    .fadeIn(2000)

})

// $(() => {
//   const SLIDE_INTERVAL = 3000
//   const FADE_INTERVAL = 400

//   setInterval(() => {
//     let img = $(".slideshow img:first").fadeOut(FADE_INTERVAL)

//     setTimeout(() => {
//       img
//         .next()
//         .fadeIn(FADE_INTERVAL)
//         .end()
//         .appendTo('.slideshow')
//         .fadeIn(FADE_INTERVAL)
//     }, FADE_INTERVAL * 1.5)
//   }, SLIDE_INTERVAL)

// })
