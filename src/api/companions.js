const _companions = [
  {
    id: 1,
    title: 'Betrayal at the House of the Hill',
    url: 'ttps://boardgamegeek.com/boardgame/10547/betrayal-house-hill',
    imgSrc: 'static/portraits/betrayal.png'
  }
]

export function getAllCompanions (p) {
  setTimeout(() => p(_companions), 100)
}
