import { cn } from "@/lib/utils";

export function Marquee({ items, className }: { items: string[]; className?: string }) {
  const row = [...items, ...items];
  return (
    <div className={cn("overflow-hidden border-y border-border py-6 bg-[#EDF8FE]", className)}>
      <div className="flex gap-12 whitespace-nowrap animate-[marquee_40s_linear_infinite]">
        {row.map((t, i) => (
          <span key={i} className="font-display text-2xl md:text-4xl text-[#07090A]">
            {t} <span className="mx-6 opacity-40">✦</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
    </div>
  );
}
