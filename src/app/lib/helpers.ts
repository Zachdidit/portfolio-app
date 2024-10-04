// TypeScript version of clamp
export function clamp(num: number, min: number, max: number): number {
	return Math.min(Math.max(num, min), max);
  }

  // TypeScript version of valueAtPercentage
  interface ValueAtPercentageParams {
	from: number;
	to: number;
	percentage: number;
	unit?: string; // Optional unit parameter
  }

  export function valueAtPercentage({
	from,
	to,
	percentage,
	unit = ''
  }: ValueAtPercentageParams): string | number {
	return from + (to - from) * percentage + unit;
  }
