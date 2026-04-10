export default function SpinnerLoader({ size = 40 }) {
  return (
    <div className="spinner-wrapper">
      <div
        className="spinner"
        style={{ width: size, height: size }}
      ></div>
    </div>
  )
}