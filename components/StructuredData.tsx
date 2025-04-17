import Script from 'next/script'

type SchemaType = 'Person' | 'WebPage' | 'CreativeWork' | 'WebSite' | 'Article'

interface StructuredDataProps {
  type: SchemaType
  data: Record<string, any>
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  return (
    <Script
      id={`structured-data-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  )
}