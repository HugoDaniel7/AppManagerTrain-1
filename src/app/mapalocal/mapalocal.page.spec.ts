import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapalocalPage } from './mapalocal.page';

describe('MapalocalPage', () => {
  let component: MapalocalPage;
  let fixture: ComponentFixture<MapalocalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MapalocalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
