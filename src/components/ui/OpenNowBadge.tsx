import { useMemo } from 'react';

interface OpenStatus {
  isOpen: boolean;
  label: string;
}

function getOpenStatus(): OpenStatus {
  const now = new Date();
  const day = now.getDay(); // 0=Sun, 1=Mon, ..., 6=Sat
  const hour = now.getHours();
  const min = now.getMinutes();
  const time = hour + min / 60;

  // Opening: 11am every day
  const opens = 11;
  // Closing: Mon-Thu & Sun = 11pm (23:00), Fri-Sat = midnight (24:00)
  const isFriSat = day === 5 || day === 6;
  const isSun = day === 0;
  const closes = isFriSat ? 24 : isSun ? 22.5 : 23; // Sun closes 10:30pm

  const isOpen = time >= opens && time < closes;

  if (!isOpen) {
    if (time < opens) return { isOpen: false, label: `Opens at 11am` };
    return { isOpen: false, label: `Opens tomorrow 11am` };
  }

  // How long until close
  const closingHour = isFriSat ? 0 : isSun ? 22 : 23;
  const closingMin = isSun ? 30 : 0;
  const closingLabel = isFriSat ? 'Midnight' : isSun ? '10:30pm' : '11pm';

  void closingHour; void closingMin; // used for label only
  return { isOpen: true, label: `Open until ${closingLabel}` };
}

interface Props {
  className?: string;
  showLabel?: boolean;
}

export function OpenNowBadge({ className = '', showLabel = true }: Props) {
  const status = useMemo(() => getOpenStatus(), []);

  return (
    <span className={`inline-flex items-center gap-1.5 ${className}`}>
      <span
        className={`w-2 h-2 rounded-full shrink-0 ${status.isOpen ? 'bg-green-500' : 'bg-red-400'}`}
        style={status.isOpen ? { boxShadow: '0 0 0 3px rgba(34,197,94,0.2)' } : undefined}
      />
      {showLabel && (
        <span className={`font-label text-[10px] uppercase tracking-widest ${status.isOpen ? 'text-green-600' : 'text-red-500'}`}>
          {status.label}
        </span>
      )}
    </span>
  );
}
