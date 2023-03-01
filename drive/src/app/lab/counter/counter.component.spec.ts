import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { CounterComponentForLab } from "./counter.component";


 fdescribe('Counter Component for lab', () => {
  let fixture: ComponentFixture<CounterComponentForLab>,
    component: CounterComponentForLab
 
    beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponentForLab]
    })

    fixture = TestBed.createComponent(CounterComponentForLab);
    component = fixture.componentInstance;
  })

  it("when click btn fires increse fun should the interpolation detect the change", () => {
     
      let btn1=fixture.debugElement.queryAll(By.css('button'))[0]
      btn1.triggerEventHandler('click');
      expect(component.counter).toBe(1)

      let para1=fixture.nativeElement.querySelector('p')
      fixture.detectChanges();
      expect(para1.textContent).toContain('1')




   
  })
});
