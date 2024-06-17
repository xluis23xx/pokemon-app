import { Router } from '@angular/router';
import { REDIRECT_HOME } from 'src/app/pokemon/elements/constants';
import { CardErrorComponent } from './card-error.component';

describe('@CardErrorComponent', () => {
  let component: CardErrorComponent;
  let spyRouter: jasmine.SpyObj<Router>

  beforeEach(() => {
    spyRouter = jasmine.createSpyObj('Router', ['navigate']);
    component = new CardErrorComponent(spyRouter);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#should navigate home view', () => {
    const urlView = REDIRECT_HOME;

    component.goToHome(urlView);

    expect(spyRouter.navigate).toHaveBeenCalled();
  });
});
