import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'shiphaus - Just Keep Shipping'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#FFFEF8',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          position: 'relative',
        }}
      >
        {/* Geometric shapes */}
        <div
          style={{
            position: 'absolute',
            top: '60px',
            right: '80px',
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            background: '#F5B51E',
            opacity: 0.8,
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '120px',
            right: '220px',
            width: '120px',
            height: '120px',
            background: '#1E4D8C',
            opacity: 0.7,
            transform: 'rotate(15deg)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            right: '80px',
            width: '100px',
            height: '100px',
            background: '#2D936C',
            opacity: 0.7,
            transform: 'rotate(-10deg)',
          }}
        />

        {/* Date */}
        <div
          style={{
            fontSize: '24px',
            fontFamily: 'monospace',
            color: '#6B6B6B',
            textTransform: 'uppercase',
            letterSpacing: '4px',
            marginBottom: '20px',
          }}
        >
          January 23–25, 2026
        </div>

        {/* Title */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            lineHeight: 0.9,
          }}
        >
          <span
            style={{
              fontSize: '180px',
              fontWeight: 800,
              color: '#0A0A0A',
              letterSpacing: '-8px',
            }}
          >
            ship
          </span>
          <span
            style={{
              fontSize: '180px',
              fontWeight: 800,
              color: '#E63B2E',
              letterSpacing: '-8px',
            }}
          >
            haus
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: '36px',
            fontWeight: 500,
            color: '#0A0A0A',
            marginTop: '40px',
          }}
        >
          Just Keep Shipping.
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '12px',
            background: '#0A0A0A',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}
