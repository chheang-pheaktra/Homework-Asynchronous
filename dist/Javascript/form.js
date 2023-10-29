'use strict'
const titleElement = document.querySelector('#title')
const describeElement =document.querySelector('#textarea')
const priceElement =document.querySelector('#price')
const fileElement =document.querySelector('#file')

//function for creat product
async function createProduct(){
    const title= titleElement.value
    const description=describeElement.value
    const price = Number(priceElement.value)
    const file =fileElement.files[0]
    const imageUrl=await uplodeImage(file)
    const product ={
        title,
        price,
        description,
        categoryId: 1,
        images: [imageUrl.location]
    }
    fetch('https://api.escuelajs.co/api/v1/products/',{
        method:'POST',
        body: JSON.stringify(product),
        headers: {
            'Content-Type':'application/json'
        }
    })
    .then(res=>res.json())
    .then(data=>console.log(data))
    .catch(err=>console.log(err))

}

//uplode image 
async function uplodeImage(file){
    const formData = new FormData()
    formData.append('file', file)

    // sent request ot server
    const res = await fetch('https://api.escuelajs.co/api/v1/files/upload',{
        method:'POST',
        body :formData
    })
    return res.json()
}