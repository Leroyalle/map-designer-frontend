import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const copyTextToClipboard = async (text: string) => {
  await navigator.clipboard.writeText(text);
};
export const pasteTextFromClipboard = async () => {
  return await navigator.clipboard.readText();
};
