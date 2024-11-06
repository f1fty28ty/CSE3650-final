// components/BackButton.tsx
"use client"
import { useRouter } from 'next/navigation';

export default function BackButton({ className = "" }) {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className={`bg-neon-hotPink text-white px-3 py-1 rounded-md text-sm font-medium hover:bg-neon-pink transition-colors duration-200 flex items-center ${className} ml-4 mt-4`}
      aria-label="Go back"
    >
      <span>←</span>
      <span className="ml-1">Back</span>
    </button>
  );
}