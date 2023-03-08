import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'myApp',
  webDir: 'build',
  bundledWebRuntime: false,
  server: {
    url: 'http://192.168.0.105:8100',
    cleartext: true,
     },
};

export default config;
