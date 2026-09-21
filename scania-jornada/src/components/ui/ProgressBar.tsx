interface ProgressBarProps {
  current: number;
  total: number;
  label?: string;
  showSteps?: boolean;
}

export default function ProgressBar({ current, total, label, showSteps = true }: ProgressBarProps) {
  const pct = Math.round((current / total) * 100);
  return (
    <div className="w-full">
      {(label || showSteps) && (
        <div className="flex items-center justify-between mb-2">
          {label && <span className="text-xs text-white/60 font-scania">{label}</span>}
          {showSteps && (
            <span className="text-xs text-white/60 font-scania ml-auto">
              {current} / {total}
            </span>
          )}
        </div>
      )}
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${pct}%` }}
          role="progressbar"
          aria-valuenow={current}
          aria-valuemin={0}
          aria-valuemax={total}
        />
      </div>
      <div className="flex mt-1.5 gap-1">
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            className={`flex-1 h-0.5 rounded-full transition-all duration-300 ${
              i < current ? 'bg-scania-yellow' : 'bg-white/10'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
