import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'MPL Digital — Strategy meets code.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OGImage() {
  return new ImageResponse(
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: '#0A0A0A',
        position: 'relative',
      }}
    >
      {/* Geometric accent */}
      <div
        style={{
          position: 'absolute',
          right: 80,
          top: '50%',
          transform: 'translateY(-50%) rotate(45deg)',
          width: 300,
          height: 300,
          border: '1px solid rgba(30, 144, 255, 0.1)',
          display: 'flex',
        }}
      />
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          gap: 8,
          marginBottom: 16,
        }}
      >
        <span
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: '#1E90FF',
            fontFamily: 'system-ui',
          }}
        >
          MPL
        </span>
        <span
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: '#F0F0F0',
            fontFamily: 'system-ui',
          }}
        >
          Digital
        </span>
      </div>
      <span
        style={{
          fontSize: 24,
          color: '#9A9A9A',
          fontFamily: 'system-ui',
        }}
      >
        Strategy meets code.
      </span>
    </div>,
    {
      ...size,
    },
  );
}
