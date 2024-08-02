import {Generator} from 'npm-dts';

declare module 'npm-dts-webpack-plugin' {
  export class NpmDtsPlugin {
    constructor(options: ConstructorParameters<typeof Generator>[0]);
  }
}
