import { API_BASE } from './endpoints.js';

export async function fetchExperience() {
  const response = await fetch(`${API_BASE}/experience`);
  if (!response.ok) throw new Error('Failed to fetch experience data');
  return response.json();
} 