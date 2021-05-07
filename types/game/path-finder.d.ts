declare module "game" {
  module "path-finder" {
    // TODO: type this
    function searchPath(origin: any, goal: any, options: any): any;

    // TODO: type this
    interface CostMatrix {
      deserialize(data: any): any;
      _bits: Uint8Array;
      set(xx: any, yy: any, val: any): void;
      get(xx: any, yy: any): number;
      clone(): CostMatrix;
      serialize(): any;
    }
  }
}