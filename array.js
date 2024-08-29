// const samplearr=[3,"sangee",true,{name:"guv"},["BWE"]];
// const arr=[]
// console.log(arr,typeof arr)
// const arr2 =new Array()
// console.log(arr2,typeof arr2)


const arr=[5,4,2,6,9,1,11]
arr.sort((a,b)=>a-b)
console.log(arr)
arr.reverse()
console.log(arr)

const arr_access=[1,3,5,7,9]
arr_access.push(10,11,12)
console.log(arr_access)

arr_access.pop()
console.log("pop",arr_access)

arr_access.unshift(0)
console.log("unshift" ,arr_access)

arr_access.shift()
console.log("shift",arr_access)

const sliced_arr=arr_access.slice(0,4)
console.log(arr_access)
console.log(sliced_arr)

arr_access.splice(1,3)
console.log(arr_access)


let a=15
let b=a
b=16
console.log(b)
console.log(a)


let some_arr_1=[2,3]
let some_arr_2=some_arr_1
some_arr_2[0]=5
console.log(some_arr_1)
console.log(some_arr_2)



//mrf
let mrf=[2,4,6,8,10]

let newmrf=mrf.map((val,index,accArr)=>{
    console.log("value:",val)
    console.log("index:",index)
    console.log("accArr:",accArr)
    return val*2
})
console.log(newmrf)

let fil_newmrf=newmrf.filter((val,index,accArr)=>{
    console.log("value:",val)
    console.log("index:",index)
    console.log("accArr:",accArr)
    return val!=4
})
console.log(fil_newmrf)

let result =fil_newmrf.reduce ((acc,val,index,accArr)=>{
    console.log("value:",val)
    console.log("index:",index)
    console.log("accArr:",accArr)
    return (acc+=val)
})
console.log(result)


const performancelist=[64,18,82,23,54]
const result_data=performancelist.
map((val)=>val+10)
.filter((val)=>val>=40)
.reduce((acc,val)=>{
    return(acc+=val)
},0)
console.log(result_data)


const failure_result=performancelist
.map((val)=>val+10)
.filter((val)=>val<40)
.reduce(
    (acc,val)=>{
        total_failure=acc[0]++
        acc[1]+=val
        acc[1]=acc[1]/acc[0]
        return acc
    },
[0,0])
console.log("failure_result",failure_result)