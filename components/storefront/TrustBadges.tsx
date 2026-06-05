import { Percent, Shield, RefreshCcw, Clock } from "lucide-react";

const badges = [
  { Icon: Percent, title: "0% Interest", sub: "Buy Now Pay Later" },
  { Icon: Shield, title: "Extended Warranty", sub: "Extra peace of mind" },
  { Icon: RefreshCcw, title: "Easy Returns", sub: "Hassle-free policy" },
  { Icon: Clock, title: "24h Delivery", sub: "& Installation" },
];

export default function TrustBadges() {
  return (
    <div className="bg-[#F7F8FC] border-y border-[#ADBBDA]/30 py-4 my-6">
      <div className="mx-auto max-w-[1280px] px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {badges.map(({ Icon, title, sub }) => (
            <div key={title} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#EDE8F5] flex items-center justify-center shrink-0">
                <Icon size={18} className="text-[#3D52A0]" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#3D52A0]">{title}</p>
                <p className="text-[11px] text-gray-500">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
