// Image Types
declare module "*.jpg";
declare module "*.png";
declare module "*.ico";
declare module "*.gif";

// Other types
declare module "*.pdf";

// Explicitly specified globals
interface Window {
  rootURL: string;
}
