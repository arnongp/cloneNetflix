const config = {
  type: 'carousel',
  perView: 4,
  breakpoints: {
    1150: { perView: 3 },
    860: { perView: 2 },
    580: { perView: 1 }
  }
}

new Glide('.glide', config).mount()
