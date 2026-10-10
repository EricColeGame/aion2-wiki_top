export interface NavigationItem {
  key: string;
  path: `/${string}`;
  isContentType: boolean;
}

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", isContentType: true },
  { key: "classes", path: "/classes", isContentType: true },
  { key: "mechanics", path: "/mechanics", isContentType: true },
  { key: "items", path: "/items", isContentType: true },
  { key: "servers", path: "/servers", isContentType: true },
  { key: "characters", path: "/characters", isContentType: true },
  { key: "controls", path: "/controls", isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
