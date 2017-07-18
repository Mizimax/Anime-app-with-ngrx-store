import { NgrxHttpPage } from './app.po';

describe('ngrx-http App', () => {
  let page: NgrxHttpPage;

  beforeEach(() => {
    page = new NgrxHttpPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
