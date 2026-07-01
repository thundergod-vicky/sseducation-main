const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5050/api';

/**
 * Resolves static media file paths served by the backend
 */
export const resolveImageUrl = (imagePath: string | undefined | null): string => {
  if (!imagePath) return '';
  if (imagePath.startsWith('http')) return imagePath;
  
  let base = API_BASE_URL;
  
  // Securely strip only the trailing /api or /api/ from the end
  if (base.endsWith('/api')) {
    base = base.slice(0, -4);
  } else if (base.endsWith('/api/')) {
    base = base.slice(0, -5);
  }
  
  // If base doesn't start with protocol, normalize it
  if (!base.startsWith('http://') && !base.startsWith('https://')) {
    // Strip leading dots or slashes
    while (base.startsWith('.') || base.startsWith('/')) {
      base = base.substring(1);
    }
    base = `https://${base}`;
  }
  
  const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base;
  const cleanPath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
  
  return `${cleanBase}${cleanPath}`;
};

/**
 * Custom fetch wrapper that automatically appends Auth headers and parses JSON
 */
export const apiRequest = async (endpoint: string, options: RequestInit = {}) => {
  const token = localStorage.getItem('adminToken');
  const headers = new Headers(options.headers || {});

  // Do not override content type for FormData as fetch handles boundaries automatically
  if (!(options.body instanceof FormData) && !headers.has('Content-Type')) {
    headers.set('Content-Type', 'application/json');
  }

  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || `Request failed with status ${response.status}`);
  }

  // Handle empty responses (like 204 No Content) or standard JSON
  if (response.status === 204) return null;
  return response.json();
};

export const getApiBaseUrl = () => API_BASE_URL;
