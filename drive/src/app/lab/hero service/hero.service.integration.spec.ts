import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing"
import { TestBed } from "@angular/core/testing"
import { Hero } from "src/app/hero"
import { HeroServiceForLab } from "./hero.service"


fdescribe(' hero service', () => {

    let heroServ: HeroServiceForLab, httpServControler: HttpTestingController, heroesfack: Hero[]

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [HeroServiceForLab],
            imports: [HttpClientTestingModule]
        })
        heroServ = TestBed.inject(HeroServiceForLab)
        httpServControler = TestBed.inject(HttpTestingController)
    })

    it('get heroes ', () => {

        heroesfack = [
            { id: 11, name: 'Mr. Nice', strength: 10 },
            { id: 12, name: 'Narco', strength: 5 },
            { id: 13, name: 'Bombasto', strength: 8 }]


        heroServ.getHeroes().subscribe(heroes => {
            expect(heroes.length).toBe(3)
            heroes.forEach((hero, index) => {
                expect(hero.id).toBe(heroesfack[index].id)
            })
        })

        let req = httpServControler.expectOne("api/heroes")
        req.flush(heroesfack)
        httpServControler.verify()

        expect(req.request.method).toBe('GET')



    })
})