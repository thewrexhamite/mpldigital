import { Loader2 } from 'lucide-react';

export default function Loading() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <Loader2 size={32} className="text-accent animate-spin" aria-label="Loading" />
    </div>
  );
}
