interface Stat {
  value: string
  label: string
}

interface Props {
  stats: Stat[]
}

export function StatRow({ stats }: Props) {
  return (
    <div className="stat-row">
      {stats.map((stat, idx) => (
        <div key={idx} className="stat-item">
          <div className="stat-val">{stat.value}</div>
          <div className="stat-key">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}
