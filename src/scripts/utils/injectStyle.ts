export const injectStyle = (id: string, css: string) => {
  const style = document.createElement('style')
  const target = document.head ?? document.documentElement
  style.id = id
  style.textContent = css
  target.appendChild(style)
}
