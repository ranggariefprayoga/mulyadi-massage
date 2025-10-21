import { ReactNode } from "react";

type LayoutHeroSectionProps = {
  children: ReactNode;
};

const LayoutHeroSection = ({ children }: LayoutHeroSectionProps) => {
  return (
    <div className="text-black">
      <div className="mx-auto bg-cover" style={{ backgroundImage: 'url("/background/5.png")' }}>
        {children}
      </div>
    </div>
  );
};

export default LayoutHeroSection;
