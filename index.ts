export const colors: Record<string, [number, number]> = {
  reset: [0, 0],
  bold: [1, 22],
  dim: [2, 22],
  italic: [3, 23],
  underline: [4, 24],
  blink: [5, 25],
  inverse: [7, 27],
  hidden: [8, 28],
  strikethrough: [9, 29],
  doubleunderline: [21, 24],
  black: [30, 39],
  red: [31, 39],
  green: [32, 39],
  yellow: [33, 39],
  blue: [34, 39],
  magenta: [35, 39],
  cyan: [36, 39],
  white: [37, 39],
  bgBlack: [40, 49],
  bgRed: [41, 49],
  bgGreen: [42, 49],
  bgYellow: [43, 49],
  bgBlue: [44, 49],
  bgMagenta: [45, 49],
  bgCyan: [46, 49],
  bgWhite: [47, 49],
  framed: [51, 54],
  overlined: [53, 55],
  gray: [90, 39],
  redBright: [91, 39],
  greenBright: [92, 39],
  yellowBright: [93, 39],
  blueBright: [94, 39],
  magentaBright: [95, 39],
  cyanBright: [96, 39],
  whiteBright: [97, 39],
  bgGray: [100, 49],
  bgRedBright: [101, 49],
  bgGreenBright: [102, 49],
  bgYellowBright: [103, 49],
  bgBlueBright: [104, 49],
  bgMagentaBright: [105, 49],
  bgCyanBright: [106, 49],
  bgWhiteBright: [107, 49],
};

/**
 * Style a string of text using ANSI escape codes.
 *
 * @param {string} text - The text to style.
 * @param {string|object} style - The style to apply. Can be a string (e.g., "bold") or an array of styles to apply. Can be strings (e.g., ["bold", "italic"])
 * @return {string} The styled text.
 */
export const styleText = (format: string | string[], text: string) => {
  const applyFormat = (format: string, text: string) => {
    const formatCodes = colors[format] ?? null;
    if (formatCodes === null) return text;
    return `\u001b[${formatCodes[0]}m${text}\u001b[${formatCodes[1]}m`;
  };
  if (typeof format === "object" && Array.isArray(format))
    return format.reduce((text, format) => applyFormat(format, text), text);
  return applyFormat(format, text);
};

/**
 * Unstyle a string of text by removing ANSI escape codes.
 *
 * @param {string} text - The text to unstyle.
 * @return {string} The unstyled text.
 */
export const unstyleText = (text: string) =>
  text.replaceAll(/(\u001b\[\d+m)/g, "");
