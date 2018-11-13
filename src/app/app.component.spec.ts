import { AppComponent } from './app.component';
import { createHostComponentFactory, SpectatorWithHost } from '@netbasal/spectator';

describe('AppComponent', () => {
  let host: SpectatorWithHost<AppComponent>;

  const createHost = createHostComponentFactory(AppComponent);

  it('should render title in a h1 tag', () => {
    host = createHost(`<app-root></app-root>`);
    host.detectChanges();
    expect(host.query('h1').textContent).toContain('Welcome to spectator-strict!');
  });
});
