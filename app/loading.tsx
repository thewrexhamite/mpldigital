import Image from 'next/image';

export default function Loading() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <Image
        src="/brand/mpl-icon.svg"
        alt="Loading"
        width={40}
        height={40}
        className="animate-pulse"
        priority
      />
    </div>
  );
}
