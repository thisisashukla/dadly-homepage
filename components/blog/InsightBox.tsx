interface Props {
  label?: string
  children: React.ReactNode
}

export function InsightBox({ label = 'Insight', children }: Props) {
  return (
    <div className="insight-box">
      <div className="ib-label">{label}</div>
      <p>{children}</p>
    </div>
  )
}
