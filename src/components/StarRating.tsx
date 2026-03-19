import { Star } from 'lucide-react';

export default function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={16} className="fill-gold-400 text-gold-400" />
      ))}
    </div>
  );
}
