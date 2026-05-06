interface Props {
  children: React.ReactNode
}

export function PullQuote({ children }: Props) {
  return (
    <div className="pull-quote">
      <p>{children}</p>
    </div>
  )
}
