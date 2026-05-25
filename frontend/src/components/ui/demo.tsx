import { GlowCard } from "./spotlight-card";
import { HoverButton } from "./hover-glow-button";

export function Default() {
  return (
    <div className="w-screen min-h-screen flex flex-col md:flex-row items-center justify-center gap-8 bg-[#0D0D0D] p-8">
      {/* Card 1: Spotlight */}
      <GlowCard glowColor="green">
        <div className="flex flex-col items-center justify-between h-full text-center p-6 z-10">
          <div className="w-12 h-12 rounded-full bg-[#1A3E1A]/50 border border-[#2A6B2A]/30 flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#4CAF50"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="m15 15-3-3" />
              <path d="M8 12h.01" />
              <path d="M12 8h.01" />
            </svg>
          </div>
          <div>
            <h3 className="font-playfair text-xl font-bold mb-2 text-[#C9A84C]">Spotlight Card</h3>
            <p className="font-dmsans text-sm text-[#B0ADA8] leading-relaxed">
              Hover over this card to see the premium green glow effect following your cursor.
            </p>
          </div>
        </div>
      </GlowCard>

      {/* Card 2: Interactive */}
      <GlowCard glowColor="green">
        <div className="flex flex-col items-center justify-between h-full text-center p-6 z-10">
          <div className="w-12 h-12 rounded-full bg-[#1A3E1A]/50 border border-[#2A6B2A]/30 flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#4CAF50"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m4 4 7.07 17 2.51-7.39L21 11.07z" />
              <path d="M13 13l6 6" />
            </svg>
          </div>
          <div>
            <h3 className="font-playfair text-xl font-bold mb-2 text-[#C9A84C]">Interactive</h3>
            <p className="font-dmsans text-sm text-[#B0ADA8] leading-relaxed">
              The radial highlight responds dynamically to the pointer position in real time.
            </p>
          </div>
        </div>
      </GlowCard>

      {/* Card 3: Customizable */}
      <GlowCard glowColor="green">
        <div className="flex flex-col items-center justify-between h-full text-center p-6 z-10">
          <div className="w-12 h-12 rounded-full bg-[#1A3E1A]/50 border border-[#2A6B2A]/30 flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#4CAF50"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" x2="4" y1="21" y2="14" />
              <line x1="4" x2="4" y1="10" y2="3" />
              <line x1="12" x2="12" y1="21" y2="12" />
              <line x1="12" x2="12" y1="8" y2="3" />
              <line x1="20" x2="20" y1="21" y2="16" />
              <line x1="20" x2="20" y1="12" y2="3" />
              <line x1="2" x2="6" y1="14" y2="14" />
              <line x1="10" x2="14" y1="8" y2="8" />
              <line x1="18" x2="22" y1="16" y2="16" />
            </svg>
          </div>
          <div>
            <h3 className="font-playfair text-xl font-bold mb-2 text-[#C9A84C]">Customizable</h3>
            <p className="font-dmsans text-sm text-[#B0ADA8] leading-relaxed">
              Easily adjust the size, color range, border radius, and styles using Tailwind CSS.
            </p>
          </div>
        </div>
      </GlowCard>
    </div>
  );
}

export const DemoOne = () => {
  return (
    <HoverButton
      glowColor="#00ffc3"
      backgroundColor="#000"
      textColor="#ffffff"
      hoverTextColor="#67e8f9"
      className="shadow-lg"
    >
      Hover Me!
    </HoverButton>
  );
};
