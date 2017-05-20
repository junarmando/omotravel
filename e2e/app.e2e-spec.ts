import { OmotravelPage } from './app.po';

describe('omotravel App', () => {
  let page: OmotravelPage;

  beforeEach(() => {
    page = new OmotravelPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
