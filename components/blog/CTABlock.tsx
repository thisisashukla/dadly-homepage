import { TrackingLink } from '../TrackingLink'

interface Props {
  title: string
  titleHtml?: string   // optional raw HTML version (e.g. with <em> tags)
  description: string
  buttonText?: string
  buttonHref?: string
  page?: string
}

export function CTABlock({
  title,
  titleHtml,
  description,
  buttonText = 'Get Dadly',
  buttonHref = '/waitlist',
  page = 'blog',
}: Props) {
  return (
    <div className="cta-block">
      {titleHtml ? (
        <h3 dangerouslySetInnerHTML={{ __html: titleHtml }} />
      ) : (
        <h3>{title}</h3>
      )}
      <p>{description}</p>
      <TrackingLink
        href={buttonHref}
        location="cta_blog"
        page={page}
        className="cta-btn"
      >
        {buttonText}
      </TrackingLink>
      <span className="cta-sub">Free 7-day trial. No credit card required.</span>
    </div>
  )
}
