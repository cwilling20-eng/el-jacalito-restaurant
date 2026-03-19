import { Flame } from 'lucide-react';

export default function SectionDivider() {
  return (
    <div className="flex items-center justify-center gap-4 py-2">
      <span className="block w-16 h-px bg-chili-500/30" />
      <Flame size={16} className="text-chili-500" />
      <span className="block w-16 h-px bg-chili-500/30" />
    </div>
  );
}
