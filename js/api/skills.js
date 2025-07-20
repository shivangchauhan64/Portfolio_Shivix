import { API_BASE } from './endpoints.js';

export async function fetchSkills() {
  const response = await fetch(`${API_BASE}/skills`);
  if (!response.ok) throw new Error('Failed to fetch skills data');
  return response.json();
} 