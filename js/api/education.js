import { API_BASE } from './endpoints.js';

export async function fetchEducation() {
  const response = await fetch(`${API_BASE}/education`);
  if (!response.ok) throw new Error('Failed to fetch education data');
  return response.json();
} 