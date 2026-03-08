import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: '#0A0A0A',
        borderRadius: 36,
      }}
    >
      <span
        style={{
          fontSize: 120,
          fontWeight: 700,
          color: '#1E90FF',
          fontFamily: 'system-ui',
        }}
      >
        M
      </span>
    </div>,
    {
      ...size,
    },
  );
}
