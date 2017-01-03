import { CursoAngularUdemyPage } from './app.po';

describe('curso-angular-udemy App', function() {
  let page: CursoAngularUdemyPage;

  beforeEach(() => {
    page = new CursoAngularUdemyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
