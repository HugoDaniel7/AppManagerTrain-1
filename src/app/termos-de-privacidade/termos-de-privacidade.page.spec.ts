import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TermosDePrivacidadePage } from './termos-de-privacidade.page';

describe('TermosDePrivacidadePage', () => {
  let component: TermosDePrivacidadePage;
  let fixture: ComponentFixture<TermosDePrivacidadePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TermosDePrivacidadePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
