import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TermosDeServicoPage } from './termos-de-servico.page';

describe('TermosDeServicoPage', () => {
  let component: TermosDeServicoPage;
  let fixture: ComponentFixture<TermosDeServicoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TermosDeServicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
