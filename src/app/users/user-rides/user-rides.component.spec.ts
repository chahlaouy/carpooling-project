import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserRidesComponent } from './user-rides.component';

describe('UserRidesComponent', () => {
  let component: UserRidesComponent;
  let fixture: ComponentFixture<UserRidesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRidesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserRidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
