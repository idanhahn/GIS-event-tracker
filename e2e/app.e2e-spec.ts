import { CancerMvpPage } from './app.po';

describe('cancer-mvp App', function() {
  let page: CancerMvpPage;

  beforeEach(() => {
    page = new CancerMvpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
