export const getExposureColor = (pct: number): string => {
  if (pct >= 80) {
    return "text-destructive";
  }
  if (pct >= 50) {
    return "text-orange-400";
  }
  return "text-foreground";
};

export const getRiverBorderColor = (contaminated: boolean): string =>
  contaminated ? "border-l-destructive" : "border-l-blue-400";
