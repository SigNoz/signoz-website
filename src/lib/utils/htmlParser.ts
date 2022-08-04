const { replace } = "";

// escape
export const es = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34);/g;
export const ca = /[&<>'"]/g;

const esca: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  "'": "&#39;",
  '"': "&quot;",
};

const pe = (m: string) => esca[m];

/**
 * Safely escape HTML entities such as `&`, `<`, `>`, `"`, and `'`.
 * @param {string} es the input to safely escape
 * @returns {string} the escaped input, and it **throws** an error if
 *  the input type is unexpected, except for boolean and numbers,
 *  converted as string.
 */
export const escape = (es: VoidFunction): string => replace.call(es, ca, pe);
