import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: '#0071E3',
        borderRadius: 6,
      }}
    >
      <span
        style={{
          fontSize: 22,
          fontWeight: 700,
          color: '#FFFFFF',
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
