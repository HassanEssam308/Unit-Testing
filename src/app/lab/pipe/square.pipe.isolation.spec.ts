import { SquarePipe } from "./square.pipe"



fdescribe('square pipe', () => {
    let pipe: SquarePipe;
    beforeEach(() => {
        pipe = new SquarePipe()
    })
    it('should return 16 when passing 4', () => {
        
        expect(pipe.transform(4)).toBe(16)
    })
    it('should type of  return number  when passing 4', () => {
        
        // expect(pipe.transform(4)).toBe(16)
        expect(pipe.transform(4)).toEqual(jasmine.any(Number))
    })

    it('should return Not a number when passing xx', () => {

        expect(pipe.transform('xx')).toBe('Not a number')
    })
    it('should return Not a number when passing [1,2,3]', () => {

        expect(pipe.transform([1,2,3])).toBe('Not a number')
    })

})