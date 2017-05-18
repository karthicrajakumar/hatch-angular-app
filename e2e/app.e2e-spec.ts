import { HatchAngularAppPage } from './app.po';

describe('hatch-angular-app App', () => {
  let page: HatchAngularAppPage;

  beforeEach(() => {
    page = new HatchAngularAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
