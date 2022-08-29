import React from "react";

const cleanPercentage = (percentage) => {
  const tooLow = !Number.isFinite(+percentage) || percentage < 0;
  const tooHigh = percentage > 100;
  return tooLow ? 0 : tooHigh ? 100 : +percentage;
};

const Circle = ({ colour, pct }) => {
  const r = 51;
  const circ = 2 * Math.PI * r;
  const strokePct = ((100 - pct) * circ) / 100;
  return (
    <circle
      r={r}
      cx={100}
      cy={100}
      fill="transparent"
      stroke={strokePct !== circ ? colour : ""} // remove colour as 0% sets full circumference
      strokeWidth={"9px"}
      strokeDasharray={circ}
      strokeDashoffset={pct ? strokePct : 0}
      strokeLinecap="butt"
    ></circle>
  );
};

/* const Text = ({ percentage }) => {
  return (
    <text
      x="50%"
      y="50%"
      dominantBaseline="central"
      textAnchor="middle"
      fontSize={"1.5em"}
    >
      {percentage.toFixed(0)}%
    </text>
  );
}; */

const Pie = ({ percentage, color1, color2, count }) => {
  const pct = cleanPercentage(percentage);
  return (
    <svg width={200} height={200}>
      <g transform={`rotate(-90 ${"100 100"})`}>
        <Circle colour="rgba(255,255,255,0.1)" />
        <Circle colour={`url(#GradientColor${count})`} pct={pct} />
      </g>
      {/* 	<Text percentage={pct} /> */}
      <defs>
        <linearGradient
          id={`GradientColor${count}`}
          x1="0"
          x2="0"
          y1="0"
          y2="1"
          gradientTransform="rotate(-10)"
        >
          <stop offset="0%" stopColor={color1} />

          <stop offset="95%" stopColor={color2} />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Pie;
