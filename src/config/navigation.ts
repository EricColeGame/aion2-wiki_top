export const NAVIGATION_CONFIG = [] as const;

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => (item as any).isContentType).map((item) => (item as any).path.replace(/^\//, ""));
