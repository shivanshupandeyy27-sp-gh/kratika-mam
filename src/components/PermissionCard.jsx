import { ClipboardList, MapPin, CalendarDays, User, Users, FileText } from 'lucide-react'
import { MY_NAME, KARTIKA_NAME, FRESHERS_DATE, MEETING_LOCATION } from '../config'

export default function PermissionCard() {
  const rows = [
    [User, 'Requested By', MY_NAME],
    [Users, 'Meeting With', `${KARTIKA_NAME} Ma'am`],
    [FileText, 'Purpose', 'Requesting a few minutes of your valuable time.'],
    [MapPin, 'Location', MEETING_LOCATION],
    [CalendarDays, 'Date', FRESHERS_DATE],
  ]

  return (
    <div className="glass border-dashed border-gold/50 p-6 w-full max-w-md text-left rotate-[-1deg] hover:rotate-0 transition-transform duration-500">
      <div className="flex items-center gap-2 text-gold">
        <ClipboardList size={20} />
        <h3 className="font-serif text-lg tracking-wide">REQUEST</h3>
      </div>
      <p className="text-[10px] tracking-[0.25em] text-blush/80 mt-1">OFFICIAL JUNIOR INVITATION</p>
      <dl className="mt-5 space-y-3">
        {rows.map(([Icon, k, v]) => (
          <div key={k} className="flex gap-3 items-start">
            <Icon size={16} className="text-gold mt-1 shrink-0" />
            <div>
              <dt className="text-xs text-cream/50 uppercase tracking-wider">{k}</dt>
              <dd className="text-cream font-medium">{v}</dd>
            </div>
          </div>
        ))}
      </dl>
      <div className="mt-6 inline-block px-4 py-2 rounded-full bg-gold/15 border border-gold/40 text-gold text-sm">
        Status: Awaiting Ma'am's Time ✨
      </div>
    </div>
  )
}
