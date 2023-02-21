export default function CardBtn({ text, type='btn-primary', href='#' }) {
  return (
    <a href={href} className={'btn ' + type}>
      { text }
    </a>
  )
}