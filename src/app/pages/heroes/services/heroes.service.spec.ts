import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { HeroService } from './hero.service';

describe('HeroesService', () => {
  let service: HeroService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  const mockList = [

    {
      "name": "BATMAN",
      "gender": "male",
      "ability": "strength",
      "id": 1
    },
    {
      "id": 2,
      "name": "SPIDERMAN",
      "ability": "spider sense",
      "gender": "male"
    },
  ]

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get','post', 'delete', 'put']);
    service = new HeroService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a list of heroes', (done: DoneFn) => {

    httpClientSpy.get.and.returnValue(of(mockList))

    service.getListHeroes().subscribe(((res) => {
      expect(res).toEqual(mockList)
      done()
    }))
  });

  it('should return a hero', (done: DoneFn) => {

    const mockHero = {
      "name": "BATMAN",
      "gender": "male",
      "ability": "strength",
      "id": 1
    }

    httpClientSpy.get.and.returnValue(of(mockHero))

    service.getHero(1).subscribe(((res) => {
      expect(res).toEqual(mockHero)
      done()
    }))
  });

  it('should delete a hero', (done: DoneFn) => {

    httpClientSpy.delete.and.returnValue(of(mockList[0]))

    service.deleteHero(1).subscribe(((res) => {
      expect(res).toEqual(mockList[0])
      done()
    }))

  });

  it('should create a hero', (done: DoneFn) => {

    httpClientSpy.post.and.returnValue(of(mockList[0]))

    const mockHero = {
      "name": "BATMAN",
      "gender": "male",
      "ability": "strength",
      "id": 1
    }

    service.createHero(mockHero).subscribe(((res) => {
      expect(res).toEqual(mockHero)
      done()
    }))

  });

  it('should search heroes by param', (done: DoneFn) => {

    httpClientSpy.get.and.returnValue(of(mockList))

    service.searchHero('man').subscribe(((res) => {
      expect(res).toEqual(mockList)
      done()
    }))

  });



});
