module.exports = replaceDOM

function replaceDOM (el, newEl) {
  el.parentNode.replaceChild(newEl,el) // === el.replaceWith(newEl)
  return newEl
}
