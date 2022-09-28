export const promesa = (productos) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve(productos)
        }, 1000)
    })
}