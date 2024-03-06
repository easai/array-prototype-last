var Array = require('./index.js');

describe("test suite", () => {
    it("test a", () => {
        nums = [null, {}, 3];
        ans = 3;
        res = nums.last();
        console.log(res);
        expect(res).toEqual(ans);
  });
    it("test a", () => {
        nums = [];
        ans = -1;
        res = nums.last();
        console.log(res);
        expect(res).toEqual(ans);
  });
    
});
