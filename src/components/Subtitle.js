const Subtitle = ({ text, customClass }) => {
  return <p className={`text-primary text-sm tracking-wider ${customClass}`}>{text}</p>
}

export default Subtitle
