import '@angular/platform-server/init';

import { enableProdMode } from '@angular/core';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

export { AppServerModule } from './app/Angular Project/app.server.module'
export { renderModule, renderModuleFactory } from '@angular/platform-server';
