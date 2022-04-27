const { tsExternalModuleReference } = require("@babel/types")
const ting=require("./sumof")

const thang= new ting


test ("2+5=7", ()=>{
    expect (thang.sumof(2, 5)).toBe(7)
})

test ("2*5=10", ()=>{
    expect (thang.boopOf(2, 5)).toBe(10)
})

test ("16-2=14", ()=>{
    expect (thang.andIOopOf(16, 2)).toBe(14)
})

test ("9+10=21", ()=>{
    expect (thang.quickMafs(9, 10)).toBe(21)
})