const {parseCronMinutes} = require("./helpers")

describe("parseCronMinutes", ()=>{
  test("successfully handles *",()=>{
    expect(parseCronMinutes("*")).toEqual([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59])
  })
  test("successfully handles '15,30,45",()=>{
    expect(parseCronMinutes("15,30,45")).toEqual([15, 30, 45]);
  })
  test("successfully handles '10-30'",()=>{
    expect(parseCronMinutes("10-20")).toEqual([10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
  })
  test("successfully handles '*/15'",()=>{
    expect(parseCronMinutes("*/15")).toEqual([0,15,30,45]);
  })
})