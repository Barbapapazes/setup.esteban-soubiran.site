import redirects from '../config/redirects'

export default defineEventHandler(() => {
  let redirectsList = ''

  for (const redirect in redirects)
    redirectsList += `<li><a href="${redirect}">${redirect}</a></li>`

  return `Welcome to <a href="https://github.com/barbapapazes/setup"> my setup scripts </a>!

  <ul>
    ${redirectsList}
  </ul>
  `
})
