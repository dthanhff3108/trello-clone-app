export const sortOrder = (arr,order,key) => {
    arr.sort((a,b)=>order.indexOf(a[key]) - order.indexOf(b[key]))
    return arr
}