interface Message {
  name: 'Me' | 'AI'
  text: string
}

interface Props {
  label?: string
  messages: Message[]
}

export function ChatSim({ label = 'From my conversation logs', messages }: Props) {
  return (
    <div className="chat-sim">
      <div className="chat-label">{label}</div>
      {messages.map((msg, idx) => (
        <div key={idx} className={`chat-bubble ${msg.name === 'Me' ? 'bubble-me' : ''}`}>
          <div className="bubble-name">{msg.name === 'Me' ? 'Me' : 'AI'}</div>
          <div className="bubble-text">{msg.text}</div>
        </div>
      ))}
    </div>
  )
}
