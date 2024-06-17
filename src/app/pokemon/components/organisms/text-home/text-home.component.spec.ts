import { REDIRECT_LIST } from 'src/app/pokemon/elements/constants';
import { TextHomeComponent } from './text-home.component';
import { Router } from '@angular/router';

describe('@TextHomeComponent', () => {
  let component: TextHomeComponent;
  let spyRouter: jasmine.SpyObj<Router>

  beforeEach(() => {
    spyRouter = jasmine.createSpyObj('Router', ['navigate']);
    component = new TextHomeComponent(spyRouter);
  });

  it('#should create', () => {
    expect(component).toBeTruthy();
  });

  it('#should navigate list view', () => {
    const urlView = REDIRECT_LIST;

    component.goToList(urlView);

    expect(spyRouter.navigate).toHaveBeenCalled();
  });
});
