var productName = document.getElementById('productName');
var productPrice = document.getElementById('productPrice');
var productCategory = document.getElementById('productCategory');
var productImage = document.getElementById('productImage');
var productDesc = document.getElementById('productDesc');
var resetBtn = document.getElementById('resetBtn');
var serach= document.getElementById('search');

resetBtn.onclick=resetForm;

var productList;
if(localStorage.getItem('product') !== null){
productList = JSON.parse(localStorage.getItem('product'));
display()
}else{
productList=[]
}

// add product
function addProduct(){
var product={
pName:productName.value,
price:productPrice.value,
category:productCategory.value,
desc:productDesc.value,
img:`./img/${productImage.files[0].name}`,
}

console.log(productImage.files[0].name)

if(document.getElementById('addBtn').innerHTML === 'Add Product'){
  productList.push(product);
}else{
console.log('update...')
productList.splice(currentIndex,1,product)
document.getElementById('addBtn').innerHTML = 'Add Product'
}

localStorage.setItem('product',JSON.stringify(productList))
display()
resetForm()
console.log('object' ,product)
console.log('array' ,productList)
}
// JSON object
// stringify()  json(array of object ) to string
// parse()      string to json(array of object)

function display(){
var box =``;
for(var i=0;i<productList.length;i++){
box += `
<div class="col-md-3 col-sm-6">
<div class="product border">
  <img src="${productList[i].img}" class="w-100"/>
  <div class="product-details p-3">
    <h2 class="h4">${productList[i].pName}</h2>
    <p class="text-secondary border-bottom pb-2">${productList[i].desc}</p>
    <p><span class="fw-bold">Category</span><span class="text-secondary">${productList[i].category}</span></p>
    <p><span class="fw-bold">Price</span><span class="text-secondary">${productList[i].price}</span></p>
  <div class="text-center">
   <button onclick="deleteProduct(${i})" class="w-75 btn btn-outline-danger my-2">Delete <i class="fa fa-trash"></i></button>
   <button onclick="updateProduct(${i})" class="w-75 btn btn-outline-warning">Update <i class="fa fa-edit"></i></button>
  </div>
  </div>
</div>
</div>
`
}
document.getElementById('rowBody').innerHTML=box;
}

function resetForm(){
productName.value =null;
productPrice.value =null;
productDesc.value =null;
productImage.value =null;
productCategory.value =null;
}

function deleteProduct(index){
productList.splice(index,1);
display();
localStorage.setItem('product',JSON.stringify(productList))
}

var currentIndex;

function updateProduct(index){
currentIndex = index;
console.log(productList[index])
productName.value = productList[index].pName;
productCategory.value = productList[index].category;
productDesc.value = productList[index].desc;
productPrice.value = productList[index].price;
document.getElementById('addBtn').innerHTML ='Update Product';
}


// search
function searchProduct(){
var searchValue =serach.value;
var box=``;
for(var i=0;i<productList.length;i++){
  if(productList[i].pName.toLowerCase().includes(searchValue.toLowerCase()) == true){
     console.log(i)
     box += `
<div class="col-md-3 col-sm-6">
<div class="product border">
  <img src="${productList[i].img}" class="w-100"/>
  <div class="product-details p-3">
    <h2 class="h4">${productList[i].pName}</h2>
    <p class="text-secondary border-bottom pb-2">${productList[i].desc}</p>
    <p><span class="fw-bold">Category</span><span class="text-secondary">${productList[i].category}</span></p>
    <p><span class="fw-bold">Price</span><span class="text-secondary">${productList[i].price}</span></p>
  <div class="text-center">
   <button onclick="deleteProduct(${i})" class="w-75 btn btn-outline-danger my-2">Delete <i class="fa fa-trash"></i></button>
   <button onclick="updateProduct(${i})" class="w-75 btn btn-outline-warning">Update <i class="fa fa-edit"></i></button>
  </div>
  </div>
</div>
</div>
`
  }
}
document.getElementById('rowBody').innerHTML=box;

}



console.log(result)
// localstorage 
// localStorage.setItem(key,value)
// localStorage.setItem('name','shimaa')
// localStorage.setItem('name','ali')
// localStorage.setItem('salary','45678')

// var result =localStorage.getItem('name')
// console.log(result)

// localStorage.removeItem('salary')

// localStorage.clear()
// console.log(localStorage.length)