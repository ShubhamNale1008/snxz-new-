import './style.css'

const loader = `
  <div class="page-loader" aria-label="Loading SNXZ portfolio" role="status">
    <div class="loader-brand"><span>S</span><span>N</span><span>X</span><span>Z</span></div>
    <div class="loader-line"><i></i></div>
    <small class="loader-message">Love editing</small>
  </div>
`

const header = `
  <header class="site-header">
    <a class="wordmark" href="https://instagram.com/snxz_edit" target="_blank" rel="noreferrer" aria-label="Visit SNXZ on Instagram">
      <span class="mark"><img src="/profile.jpg" alt="" width="30" height="30" draggable="false" decoding="async"></span><span>SNXZ</span><span class="wordmark-heart" aria-hidden="true">ꨄ︎</span>
    </a>
    <button class="menu-toggle" aria-expanded="false" aria-controls="main-nav">Menu <span>+</span></button>
    <nav id="main-nav" class="main-nav"><a href="#about">About</a><a href="#work">Process</a><a href="#contact" class="nav-contact">Let's talk <span>↗</span></a></nav>
  </header>
`

const hero = `
  <section class="hero section-shell">
    <div class="hero-copy reveal">
      <p class="eyebrow"><i></i> CINEMATIC EDITOR </p>
      <h1>Stories that<br><em>stay with you.</em></h1>
      <p class="hero-intro">I turn unforgettable scenes, characters, and stories into cinematic visual experiences.</p>
      <a class="hero-tools" href="#work" aria-label="See the tools I use">
        <span class="hero-tools-label">Tools I use</span>
        <span class="hero-tool-list">DaVinci Resolve <i>·</i> After Effects <i>·</i> Premiere Pro</span>
        <b>↓</b>
      </a>
    </div>
    <div class="hero-watermark" aria-hidden="true"><span>S</span><span>N</span><span>X</span><span>Z</span></div>
    <div class="hero-silhouette" aria-hidden="true"><div class="sun-halo"></div><div class="portrait-motion"><img class="profile-photo" src="/profile.jpg" alt="SNXZ in cinematic side profile" width="410" height="580" fetchpriority="high" decoding="async" draggable="false" onerror="this.hidden = true"><span class="hair-motion"></span></div></div>
  </section>
`

const about = `
  <section id="about" class="about section-shell reveal">
    <p class="section-index">01 / About me</p>
    <div><h2>I look for the<br><em>feeling</em> between<br>the frames.</h2><p class="body-copy">I create cinematic edits inspired by fantasy, film, and television.
    From House of the Dragon and Game of Thrones to unforgettable characters and moments, I turn scenes I love into stories worth replaying.</p><p class="identity-line"><span>Programmer</span><i>/</i><span>Engineering student · CST</span><i>/</i><span>Passionate editor</span></p><a class="text-link" href="#contact">More about my approach <span>↗</span></a></div>
  </section>
`

const tools = `
  <section id="work" class="work section-shell">
    <div class="section-heading reveal"><p class="section-index">02 / The edit</p><h2>My tools are quiet.<br><em>The feeling isn't.</em></h2></div>
    <div class="tool-grid">
      <article class="tool-card reveal"><span class="tool-number">01</span><div class="tool-icon icon-resolve"><img src="/davinci-resolve.png" alt="DaVinci Resolve logo" width="45" height="45" draggable="false" loading="lazy" decoding="async" onerror="this.style.display='none'"></div><h3>DaVinci Resolve</h3><p>Where the edit, color, and emotional weight of a scene come together.</p></article>
      <article class="tool-card reveal"><span class="tool-number">02</span><div class="tool-icon icon-after">Ae</div><h3>After Effects</h3><p>Small interventions. Motion with a reason to exist.</p></article>
      <article class="tool-card reveal"><span class="tool-number">03</span><div class="tool-icon icon-premiere">Pr</div><h3>Premiere Pro</h3><p>The foundation for shaping raw footage into a rhythm.</p></article>
    </div>
  </section>
`

const socials = `
  <section class="socials section-shell reveal">
    <div><p class="section-index">03 / Find me elsewhere</p><h2>Come say<br><em>hello.</em></h2></div>
    <div class="social-grid"><a href="https://instagram.com/snxz_edit" target="_blank" rel="noreferrer" class="social-card"><span>Instagram</span><b>↗</b><small>@snxz_edit</small></a><a href="https://www.youtube.com/@snxzeditss" target="_blank" rel="noreferrer" class="social-card"><span>YouTube</span><b>↗</b><small>@snxzeditss</small></a><a href="https://open.spotify.com/playlist/6b5tJwIH6TxcrwaupLLH9y?si=NCBcbrvBQQ2TdNV1V1Be8A" target="_blank" rel="noreferrer" class="social-card"><span>Spotify</span><b>↗</b><small>Playlist</small></a></div>
  </section>
`

const contact = `
  <section id="contact" class="contact section-shell reveal">
    <p class="section-index">04 / Start a project</p>
    <div class="contact-content"><h2>Have a story<br>in mind?</h2><a class="contact-email" href="mailto:snxzedit04@gmail.com">snxzedit04@gmail.com <span>↗</span></a><p>For collaborations, creative projects, or just say hello.</p></div>
  </section>
`
const footer = '<footer class="site-footer"><span>© 2026 SNXZ</span><span>Visual editor / Storyteller</span><a href="#top">Back to top ↑</a></footer>'

document.querySelector('#app').innerHTML = `${loader}<div class="scroll-progress" aria-hidden="true"><span></span></div><div class="ambient ambient-one"></div><div class="ambient ambient-two"></div><div class="ambient ambient-three"></div>${header}<main id="top">${hero}${about}${tools}${socials}${contact}</main>${footer}`

const toggle = document.querySelector('.menu-toggle')
const nav = document.querySelector('.main-nav')
let menuOpen = false
let ignoreMenuToggleUntil = 0
const isMenuToggleIgnored = () => Date.now() < ignoreMenuToggleUntil || document.body.classList.contains('is-scrolling')
const setMenuOpen = (open) => {
  if (menuOpen === open) return
  menuOpen = open
  toggle.setAttribute('aria-expanded', String(open))
  toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu')
  nav.classList.toggle('is-open', open)
  document.body.classList.toggle('menu-open', open)
}
toggle.addEventListener('click', (event) => {
  if (isMenuToggleIgnored()) {
    event.preventDefault()
    event.stopPropagation()
    return
  }
  setMenuOpen(!menuOpen)
})
document.querySelectorAll('.main-nav a').forEach((link) => link.addEventListener('click', () => setMenuOpen(false)))
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') setMenuOpen(false) })
document.addEventListener('click', (event) => {
  if (!menuOpen || nav.contains(event.target) || toggle.contains(event.target)) return
  setMenuOpen(false)
})

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return
    entry.target.classList.add('is-visible')
    observer.unobserve(entry.target)
  })
}, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 })
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))

document.addEventListener('contextmenu', (event) => { if (event.target.closest('img')) event.preventDefault() })
document.addEventListener('dragstart', (event) => { if (event.target.closest('img')) event.preventDefault() })

window.addEventListener('load', () => {
  window.setTimeout(() => document.querySelector('.page-loader')?.classList.add('is-done'), 850)
}, { once: true })

const progressBar = document.querySelector('.scroll-progress span')
const siteHeader = document.querySelector('.site-header')
let progressFrame = 0
let scrollIdle = 0
let headerScrolled = false
let scrollableHeight = 1
const updateScrollMetrics = () => { scrollableHeight = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1) }
const updateScrollProgress = () => {
  if (progressFrame) return
  progressFrame = window.requestAnimationFrame(() => {
    const y = window.scrollY
    progressBar.style.transform = `scaleX(${y / scrollableHeight})`
    const nextScrolled = headerScrolled ? y > 8 : y > 28
    if (nextScrolled !== headerScrolled) {
      headerScrolled = nextScrolled
      siteHeader.classList.toggle('is-scrolled', headerScrolled)
    }
    progressFrame = 0
  })
}
window.addEventListener('scroll', () => {
  document.body.classList.add('is-scrolling')
  ignoreMenuToggleUntil = Date.now() + 400
  window.clearTimeout(scrollIdle)
  scrollIdle = window.setTimeout(() => document.body.classList.remove('is-scrolling'), 180)
  updateScrollProgress()
}, { passive: true })
window.addEventListener('resize', updateScrollMetrics, { passive: true })
window.addEventListener('load', updateScrollMetrics, { once: true })
updateScrollMetrics()
updateScrollProgress()
