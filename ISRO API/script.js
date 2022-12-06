let conT = document.createElement('div')
conT.className="container"
conT.innerHTML=`<div class="d-flex flex-row mb-3" id="items">
  <div class="p-2 " id ="one">Spacecrafts</div>
  <div class="p-2" id ="two">Launchers</div>
  <div class="p-2" id ="three" >centres</div>
</div>`
document.body.append(conT)

let conTf = document.createElement('div')
conTf.className='container-fliud'
conTf.id="info"
let list = document.createElement('ul')
list.className='list-group list-group-horizontal-md'
list.id='info1'
conTf.append(list)

document.body.append(conTf)

var dis1=document.getElementById('one')
var dis2=document.getElementById('two')
var dis3=document.getElementById('three')



dis1.addEventListener('click',()=>{

	alert("Press OK to see ISRO Spacecrafts lists")
let mypromise = new Promise((resolve,reject)=>{
async function isro(){
let data = await fetch("https://isro.vercel.app/api/spacecrafts")
let Spacecrafts = await data.json()
resolve(Spacecrafts)
}
isro();
})
mypromise.then((res)=>{console.log(res.spacecrafts[0].name)}).catch((err)=>{console.log(err)})


mypromise.then((res)=>{

	// res.spacecrafts.forEach(element=>console.log(element.name))
let N = res.spacecrafts.length;
var space= document.getElementById('info1')
space.innerHTML="";
for(i=0;i<N;i++){

var space= document.getElementById('info1')
var list1 = document.createElement('li')
list1.className="list-group-item"
space.append(list1)
list1.innerHTML=`${res.spacecrafts[i].name}`

console.log(list1)
}

console.log(N)

console.log(res.spacecrafts.length)
console.log(res.spacecrafts[0].name)

})


})


dis2.addEventListener('click',()=>{

alert("Press OK to see ISRO Launchers lists")	
let mypromise1 = new Promise((resolve,reject)=>{
async function isro1(){
let data1 = await fetch("https://isro.vercel.app/api/launchers")
let Launchers = await data1.json()
resolve(Launchers)
}
isro1();
})
mypromise1.then((res)=>{console.log(res.launchers)}).catch((err)=>{console.log(err)})


mypromise1.then((res)=>{

	// res.spacecrafts.forEach(element=>console.log(element.name))
let N = res.launchers.length;
var space= document.getElementById('info1')
space.innerHTML="";
for(i=0;i<N;i++){
var space2= document.getElementById('info1')
var list3 = document.createElement('li')
list3.className="list-group-item"
space2.append(list3)
list3.innerHTML=`${res.launchers[i].id}`

console.log(list3)
}

console.log(N)

console.log(res.launchers.length)
console.log(res.launchers[0].id)

})


})


dis3.addEventListener('click',()=>{
alert("Press OK to see ISRO Centres lists")	

	
let mypromise2 = new Promise((resolve,reject)=>{
async function isro2(){
let data2 = await fetch("https://isro.vercel.app/api/centres")
let Centres = await data2.json()
resolve(Centres)
}
isro2();
})
mypromise2.then((res)=>{console.log(res.centres)}).catch((err)=>{console.log(err)})


mypromise2.then((res)=>{

	// res.spacecrafts.forEach(element=>console.log(element.name))
let N = res.centres.length;
var space= document.getElementById('info1')
space.innerHTML="";


for(i=0;i<N;i++){
var space1= document.getElementById('info1')
var list2 = document.createElement('li')
list2.className="list-group-item"
space1.append(list2)
list2.innerHTML=`${res.centres[i].name} <br><hr>

                   ${res.centres[i].Place}<br><hr>

                   ${res.centres[i].State} `

console.log(list2)
}

console.log(N)

console.log(res.centres.length)
console.log(res.centres[0].id)

})


})