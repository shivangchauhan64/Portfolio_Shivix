import { ABOUT_ENDPOINT } from './endpoints.js';

export async function fetchAbout() {
  const response = await fetch(ABOUT_ENDPOINT);
  if (!response.ok) throw new Error('Failed to fetch about data');
  return response.json();
} 