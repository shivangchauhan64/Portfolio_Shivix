import { API_BASE } from './endpoints.js';

export async function fetchProjects() {
  const response = await fetch(`${API_BASE}/projects`);
  if (!response.ok) throw new Error('Failed to fetch projects data');
  return response.json();
} 