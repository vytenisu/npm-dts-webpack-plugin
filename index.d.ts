import {Generator} from 'npm-dts';

declare module 'npm-dts-webpack-plugin' {
  export default class NpmDtsPlugin {
    constructor(options: ConstructorParameters<typeof Generator>[0]);
  }
}
