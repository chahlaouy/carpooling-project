import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserCarComponent } from './user-car.component';

describe('UserCarComponent', () => {
  let component: UserCarComponent;
  let fixture: ComponentFixture<UserCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCarComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
