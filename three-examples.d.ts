declare module 'three/examples/jsm/controls/OrbitControls' {
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
  export { OrbitControls };
}
// src/types/three-examples.d.ts

declare module 'three/examples/jsm/loaders/SVGLoader.js' {
  import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader';
  export { SVGLoader };
}

// Provide a declaration for the path without the .js extension.
// This re-exports everything from the .js version, so both imports work.
declare module 'three/examples/jsm/loaders/SVGLoader' {
  export * from 'three/examples/jsm/loaders/SVGLoader.js';
}

// (You can add other example imports similarly, if needed.)
