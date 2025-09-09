import React from "react";
import { GlowCard } from "./spotlight-card";

const SpotlightCard = ({ children, glowColor = "purple", size = "md", className = "" }) => (
  <GlowCard glowColor={glowColor} size={size} className={className}>
    {children}
  </GlowCard>
);

export default SpotlightCard;
