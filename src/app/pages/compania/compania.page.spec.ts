import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CompaniaPage } from './compania.page';

describe('CompaniaPage', () => {
  let component: CompaniaPage;
  let fixture: ComponentFixture<CompaniaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompaniaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CompaniaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
