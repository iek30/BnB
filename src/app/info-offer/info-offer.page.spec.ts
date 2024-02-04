import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoOfferPage } from './info-offer.page';

describe('InfoOfferPage', () => {
  let component: InfoOfferPage;
  let fixture: ComponentFixture<InfoOfferPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InfoOfferPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
