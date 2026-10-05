import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 17,
          background: 'linear-gradient(135deg, #4f46e5 0%, #3730a3 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#ffffff',
          borderRadius: 7,
          fontWeight: 900,
          letterSpacing: '-0.5px',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.35)',
        }}
      >
        KS
      </div>
    ),
    {
      ...size,
    }
  );
}
