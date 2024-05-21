let res=fetch("https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
res.then((data)=>{
    return data.json()
}).then((data1)=> foo(data1)).catch((error)=>console.log(error))

let container=document.createElement("div");
container.className="container";

let row=document.createElement("div");
row.className="row";

function foo(data1){
for( let i=0;i<data1.length;i++){
  console.log(data1[i]);
    var col=document.createElement("div");
    col.className="col-lg-4";
    col.innerHTML=`<div class="card border-primary mb-3" style="max-width: 18rem; background:linear-gradient(25deg,white,grey)">
    <div class="card-header"><h4 style="color:black; text-align:center;">${data1[i].name}</h4> </div>
    <div class="card-body text-primary">
      <h6 class="card-title" style="color:black">Capital:${data1[i].capital}  </h6>
      <p class="card-text" style="color:black">Region :${data1[i].region}</p>
      <p class="card-text" style="color:black">latlang : ${data1[i].latlng}</p>
      <p class="card-text" style="color:black">Calling codes :${data1[i].callingCodes}</p>
    </div>`;
    row.append(col);
    container.append(row);
    document.body.append(container);

}
}