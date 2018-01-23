import { RrrPage } from './app.po';

describe('rrr App', () => {
  let page: RrrPage;

  beforeEach(() => {
    page = new RrrPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
