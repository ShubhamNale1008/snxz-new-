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
      <span class="mark"><img src="/profile.jpg" alt="" width="30" height="30" draggable="false" decoding="async"></span><span class="wordmark-name">SNXZ</span>
    </a>
    <button class="menu-toggle" aria-expanded="false" aria-controls="main-nav">Menu <span>+</span></button>
    <nav id="main-nav" class="main-nav"><a href="#about">About</a><a href="#work">Process</a><a href="#color">Color</a><a href="#contact" class="nav-contact">Let's talk <span>↗</span></a></nav>
  </header>
`

const hero = `
  <section class="hero section-shell">
    <div class="hero-orbit" aria-hidden="true"><span class="orbit-ring orbit-ring-one"></span><span class="orbit-ring orbit-ring-two"></span><span class="orbit-core"></span><span class="orbit-flare"></span></div>
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

const gradeStills = [
  'Timeline 1_01_00_34_12.jpg',
  'Timeline 1_01_00_32_19.jpg',
  'Timeline 1_01_00_32_00.jpg',
  'Timeline 1_01_00_27_20.jpg',
  'Timeline 1_01_00_26_14.jpg',
  'Timeline 1_01_00_24_00.jpg',
  'Timeline 1_01_00_22_11.jpg',
  'Timeline 1_01_00_18_19.jpg',
  'Timeline 1_01_00_17_23.jpg',
  'Timeline 1_01_00_17_11.jpg',
  'Timeline 1_01_00_12_20.jpg',
  'Timeline 1_01_00_12_10.jpg',
  'Timeline 1_01_00_08_01.jpg',
]

const gradeReelLinks = {
  0: 'https://www.instagram.com/reel/Ddjc-6YtBd0/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==',
  1: 'https://www.instagram.com/reel/Dc8v6mpNzqq/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==',
  4: 'https://www.instagram.com/reel/Ddy45YVNHVu/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==',
  5: 'https://www.instagram.com/reel/DdrItQ4thBD/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==',
  7: 'https://www.instagram.com/reel/DclJF6rNCt3/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==',
  8: 'https://www.instagram.com/reel/DctTXpbtfER/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==',
  10: 'https://www.instagram.com/reel/Ddy45YVNHVu/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==',
  12: 'https://www.instagram.com/reel/Ddy45YVNHVu/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==',
}
const gradeItems = (copy = false) => gradeStills.map((image, index) => {
  const reelUrl = !copy ? gradeReelLinks[index] : ''
  const isLinked = Boolean(reelUrl)
  const watchLabel = isLinked ? `<a href="${reelUrl}" target="_blank" rel="noreferrer" aria-label="Watch reel ${index + 1} on Instagram">WATCH</a>` : 'WATCH'
  return `
  <article class="grade-item" ${copy ? 'aria-hidden="true"' : ''}>
    <div class="grade-image"><img src="/${image}" alt="${copy ? '' : `Color grading study ${String(index + 1).padStart(2, '0')}`}" loading="lazy" decoding="async" draggable="false"></div>
    <span class="grade-caption"><i>${String(index + 1).padStart(2, '0')} /</i>${watchLabel}</span>
  </article>
`
}).join('')

const color = `
  <section id="color" class="color-section section-shell">
    <div class="color-heading reveal"><p class="section-index">03 / Color & footage</p><div><h2>Every frame has<br><em>its own mood.</em></h2><p class="color-copy">Thoughtful color, controlled contrast, and cinematic tones — crafted frame by frame to give every shot its own identity.</p></div></div>
    <div class="grade-reel reveal" role="region" aria-label="Color grading stills" tabindex="0">
      <div class="grade-track"><div class="grade-group">${gradeItems()}</div><div class="grade-group" aria-hidden="true">${gradeItems(true)}</div></div>
    </div>
    <div class="grade-note"><span>SNXZ / COLOR GRADING</span><span>DaVinci Resolve · Frame by frame</span><button class="grade-motion-toggle" type="button" aria-pressed="false" aria-label="Pause color reel"><span aria-hidden="true">Ⅱ</span> Pause reel</button></div>
  </section>
`

const socials = `
  <section class="socials section-shell reveal">
    <div><p class="section-index">04 / Find me elsewhere</p><h2>Come say<br><em>hello.</em></h2></div>
    <div class="social-grid"><a href="https://instagram.com/snxz_edit" target="_blank" rel="noreferrer" class="social-card"><span>Instagram</span><b>↗</b><small>@snxz_edit</small></a><a href="https://www.youtube.com/@snxzeditss" target="_blank" rel="noreferrer" class="social-card"><span>YouTube</span><b>↗</b><small>@snxzeditss</small></a><a href="https://open.spotify.com/playlist/6b5tJwIH6TxcrwaupLLH9y?si=NCBcbrvBQQ2TdNV1V1Be8A" target="_blank" rel="noreferrer" class="social-card"><span>Spotify</span><b>↗</b><small>Playlist</small></a></div>
  </section>
`

const web3FormsAccessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ?? ''
const contact = `
  <section id="contact" class="contact section-shell reveal">
    <p class="section-index">05 / Start a project</p>
    <div class="contact-content">
      <h2>Have a story<br>in mind?</h2>
      <p class="contact-intro">Tell me about the edit, footage, or idea you want to bring to life.</p>
      <form class="contact-form" id="contact-form" novalidate>
        <input type="hidden" name="access_key" value="${web3FormsAccessKey}">
        <input type="hidden" name="subject" value="New editing request from SNXZ">
        <input type="hidden" name="from_name" value="SNXZ Portfolio">
        <div class="contact-form-row">
          <label class="contact-field">Name<input name="name" type="text" autocomplete="name" maxlength="100" placeholder="Your name" aria-describedby="name-error" required><span class="contact-field-error" id="name-error"></span></label>
          <label class="contact-field">Email<input name="email" type="email" autocomplete="email" maxlength="254" placeholder="you@example.com" aria-describedby="email-error" required><span class="contact-field-error" id="email-error"></span></label>
          <label class="contact-field">Instagram username<input name="instagram" type="text" autocomplete="off" maxlength="30" placeholder="@username (optional)"></label>
        </div>
        <label class="contact-field">Project type<span class="contact-select-wrap"><select name="request_type" aria-describedby="request_type-error" required><option value="" selected disabled>Select a topic</option><option value="Editing request">Editing request</option><option value="Creative idea">Creative idea</option><option value="Collaboration">Collaboration</option></select><span class="contact-select-chevron" aria-hidden="true"></span></span><span class="contact-field-error" id="request_type-error"></span></label>
        <label class="contact-field">Details<textarea name="message" rows="5" maxlength="5000" placeholder="Share your edit request, idea, or collaboration details..." aria-describedby="message-error" required></textarea><span class="contact-field-error" id="message-error"></span></label>
        <input class="contact-honeypot" type="text" name="botcheck" tabindex="-1" autocomplete="off" aria-hidden="true">
        <div class="contact-form-actions">
          <button class="button button-light" type="submit">Send request <span>↗</span></button>
          <p class="contact-form-status" role="status" aria-live="polite"></p>
        </div>
      </form>
    </div>
  </section>
`
const footer = '<footer class="site-footer"><span>© 2026 SNXZ</span><span>Storyteller</span><small class="footer-note">This site may feel a little laggy while I find time to fix bugs. ♡ Developed by SNXZ</small><a href="#top">Back to top ↑</a></footer>'

document.querySelector('#app').innerHTML = `${loader}<div class="scroll-progress" aria-hidden="true"><span></span></div><div class="ambient ambient-one"></div><div class="ambient ambient-two"></div><div class="ambient ambient-three"></div>${header}<main id="top">${hero}${about}${tools}${color}${socials}${contact}</main>${footer}`

const contactForm = document.querySelector('#contact-form')
const contactStatus = document.querySelector('.contact-form-status')
const contactFields = [...contactForm.querySelectorAll('[required]')]
const contactRequiredMessages = {
  name: 'Please add your name so I know who the request is from.',
  email: 'Add an email address where I can send my reply.',
  request_type: 'Choose whether you have an edit request, an idea, or a collaboration in mind.',
  message: 'Give me a few details about the edit you have in mind.',
}
let contactValidationAttempted = false
let contactHeartTimer = 0

const validateContactField = (field) => {
  let message = ''
  if (!field.value.trim()) message = contactRequiredMessages[field.name]
  else if (field.name === 'email' && field.validity.typeMismatch) message = 'That email address looks incomplete. Give it another look.'
  field.setAttribute('aria-invalid', String(Boolean(message)))
  document.querySelector(`#${field.name}-error`).textContent = message
  return !message
}

contactFields.forEach((field) => {
  const updateField = () => {
    if (!contactValidationAttempted) return
    validateContactField(field)
    if (contactFields.every((contactField) => contactField.validity.valid && contactField.value.trim())) contactStatus.textContent = ''
  }
  field.addEventListener('input', updateField)
  field.addEventListener('change', updateField)
})

contactForm.addEventListener('submit', async (event) => {
  event.preventDefault()
  contactValidationAttempted = true
  const firstInvalidField = contactFields.find((field) => !validateContactField(field))
  if (firstInvalidField) {
    contactStatus.textContent = ''
    firstInvalidField.focus()
    return
  }

  if (!web3FormsAccessKey) {
    contactStatus.textContent = 'The form is not configured yet. Add your Web3Forms access key to .env.local.'
    return
  }

  const submitButton = contactForm.querySelector('button[type="submit"]')
  submitButton.disabled = true
  window.clearTimeout(contactHeartTimer)
  submitButton.classList.remove('is-sending')
  void submitButton.offsetWidth
  submitButton.classList.add('is-sending')
  contactHeartTimer = window.setTimeout(() => submitButton.classList.remove('is-sending'), 1000)
  contactStatus.textContent = 'Sending your request...'

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: new FormData(contactForm),
    })
    const result = await response.json()
    if (!response.ok || !result.success) throw new Error(result.message || 'Submission failed')
    contactForm.reset()
    contactValidationAttempted = false
    contactFields.forEach((field) => {
      field.removeAttribute('aria-invalid')
      document.querySelector(`#${field.name}-error`).textContent = ''
    })
    contactStatus.textContent = 'Thanks, your request has been sent.'
  } catch {
    contactStatus.textContent = 'Your request could not be sent. Please try again in a moment.'
  } finally {
    submitButton.disabled = false
  }
})

const gradeReel = document.querySelector('.grade-reel')
const gradeTrack = document.querySelector('.grade-track')
const gradeGroup = gradeTrack.querySelector('.grade-group')
const gradeMotionToggle = document.querySelector('.grade-motion-toggle')
const gradeReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
let gradeMotionPaused = gradeReducedMotion.matches
let gradeInteracting = false
let gradeDragging = false
let gradeDragMoved = false
let gradeSuppressClick = false
let gradeDragStartX = 0
let gradeDragStartScroll = 0
let gradeResumeTimer = 0
let gradeLastFrame = 0

const setGradeMotionPaused = (paused) => {
  gradeMotionPaused = paused
  gradeMotionToggle.setAttribute('aria-pressed', String(paused))
  gradeMotionToggle.setAttribute('aria-label', `${paused ? 'Play' : 'Pause'} color reel`)
  gradeMotionToggle.innerHTML = `<span aria-hidden="true">${paused ? '▶' : 'Ⅱ'}</span> ${paused ? 'Play' : 'Pause'} reel`
}

const pauseGradeForInteraction = () => {
  gradeInteracting = true
  window.clearTimeout(gradeResumeTimer)
}

const resumeGradeAfterInteraction = () => {
  window.clearTimeout(gradeResumeTimer)
  gradeResumeTimer = window.setTimeout(() => { gradeInteracting = false }, 900)
}

gradeMotionToggle.addEventListener('click', () => setGradeMotionPaused(!gradeMotionPaused))
setGradeMotionPaused(gradeMotionPaused)

gradeReel.scrollLeft = gradeGroup.getBoundingClientRect().width
gradeReel.addEventListener('pointerdown', (event) => {
  pauseGradeForInteraction()
  if (event.pointerType !== 'mouse' || event.button !== 0 || event.target.closest('a, button')) return
  gradeDragging = true
  gradeDragMoved = false
  gradeDragStartX = event.clientX
  gradeDragStartScroll = gradeReel.scrollLeft
  gradeReel.setPointerCapture(event.pointerId)
  gradeReel.classList.add('is-dragging')
})
gradeReel.addEventListener('pointermove', (event) => {
  if (!gradeDragging) return
  const distance = event.clientX - gradeDragStartX
  if (Math.abs(distance) > 4) gradeDragMoved = true
  if (gradeDragMoved) {
    gradeReel.scrollLeft = gradeDragStartScroll - distance
    event.preventDefault()
  }
}, { passive: false })
const finishGradeDrag = (event) => {
  if (gradeDragging && gradeReel.hasPointerCapture(event.pointerId)) gradeReel.releasePointerCapture(event.pointerId)
  if (gradeDragMoved) {
    gradeSuppressClick = true
    window.setTimeout(() => { gradeSuppressClick = false }, 0)
  }
  gradeDragging = false
  gradeReel.classList.remove('is-dragging')
  resumeGradeAfterInteraction()
}
gradeReel.addEventListener('pointerup', finishGradeDrag)
gradeReel.addEventListener('pointercancel', finishGradeDrag)
gradeReel.addEventListener('click', (event) => {
  if (!gradeSuppressClick) return
  event.preventDefault()
  event.stopPropagation()
  gradeSuppressClick = false
}, true)
gradeReel.addEventListener('wheel', () => { pauseGradeForInteraction(); resumeGradeAfterInteraction() }, { passive: true })
gradeReel.addEventListener('keydown', (event) => {
  if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return
  event.preventDefault()
  gradeReel.scrollLeft += event.key === 'ArrowRight' ? 180 : -180
  pauseGradeForInteraction()
  resumeGradeAfterInteraction()
})
gradeReducedMotion.addEventListener('change', (event) => setGradeMotionPaused(event.matches))

const updateGradeReel = (time) => {
  if (!gradeLastFrame) gradeLastFrame = time
  if (!gradeMotionPaused && !gradeInteracting && !document.hidden) {
    const cycleWidth = gradeGroup.getBoundingClientRect().width
    gradeReel.scrollLeft += Math.min(time - gradeLastFrame, 50) * .045
    if (cycleWidth && gradeReel.scrollLeft >= gradeReel.scrollWidth - gradeReel.clientWidth - 1) gradeReel.scrollLeft -= cycleWidth
    if (cycleWidth && gradeReel.scrollLeft <= 0) gradeReel.scrollLeft += cycleWidth
  }
  gradeLastFrame = gradeMotionPaused || gradeInteracting ? 0 : time
  window.requestAnimationFrame(updateGradeReel)
}
window.requestAnimationFrame(updateGradeReel)

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

const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)')
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
const heroSection = document.querySelector('.hero')
const tiltCards = document.querySelectorAll('.tool-card, .social-card')
let pointerFrame = 0
let pointerX = 0
let pointerY = 0

const resetPointerMotion = () => {
  heroSection?.style.setProperty('--pointer-x', '0px')
  heroSection?.style.setProperty('--pointer-y', '0px')
  tiltCards.forEach((card) => card.style.removeProperty('--tilt-x'))
  tiltCards.forEach((card) => card.style.removeProperty('--tilt-y'))
}

const updatePointerMotion = () => {
  pointerFrame = 0
  if (!finePointer.matches || reducedMotion.matches) return
  heroSection?.style.setProperty('--pointer-x', `${pointerX * 10}px`)
  heroSection?.style.setProperty('--pointer-y', `${pointerY * 8}px`)
}

document.addEventListener('pointermove', (event) => {
  if (!finePointer.matches || reducedMotion.matches) return
  pointerX = event.clientX / window.innerWidth - .5
  pointerY = event.clientY / window.innerHeight - .5
  if (!pointerFrame) pointerFrame = window.requestAnimationFrame(updatePointerMotion)
}, { passive: true })

document.addEventListener('pointerleave', resetPointerMotion, { passive: true })
tiltCards.forEach((card) => {
  card.addEventListener('pointermove', (event) => {
    if (!finePointer.matches || reducedMotion.matches) return
    const bounds = card.getBoundingClientRect()
    const x = (event.clientX - bounds.left) / bounds.width - .5
    const y = (event.clientY - bounds.top) / bounds.height - .5
    card.style.setProperty('--tilt-x', `${y * -4}deg`)
    card.style.setProperty('--tilt-y', `${x * 4}deg`)
  }, { passive: true })
  card.addEventListener('pointerleave', () => {
    card.style.removeProperty('--tilt-x')
    card.style.removeProperty('--tilt-y')
  }, { passive: true })
})

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
