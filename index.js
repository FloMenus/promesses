// // 1- Hello World

// const sayHello = () => {
//   // déclaration de ma promesse
//   return new Promise((resolve, reject) => {
//     // déclaration de la constante boolean qui
//     // garantie un resolve
//     const boolean = true;

//     // Déclaration d'une fonction timeout
//     setTimeout(() => {
//          // Si boolean = true,
//       if (boolean) {
//          // resolve= "hello world"
//         resolve("hello world");
//         // Si boolean = false,
//       } else {
//         reject("hello world, unsuccessful");
//         // reject = "hello world, unsuccessful"
//       }
//     //  Durée du timeout
//     }, 2000);
//   });
// };

// // fonction waitForResult qui va attendre l'execution
// // de la promesse avant d'afficher le résultat
// const waitForResult = async () => {
//   const result = await sayHello();
//   console.log(result);
// };

// // execution de la fonction waitForResult
// waitForResult();

// 2- Il fait froid

// const isCold = () => {
//     return new Promise((resolve, reject) => {
//         const temperature = 2

//         setTimeout(() => {
//             if (temperature <= 10) {
//                 resolve("il fait froid")
//             }
//             else {
//                 reject("il fait chaud")
//             }
//         }, 4000)
//     })
// }

// const isColdWaiting = async() => {
//     try {
//     const isColdResult = await isCold()
//     console.log("il fait froid")
//     } catch  {
//     console.log("il fait chaud")
//     }
// }

// isColdWaiting()

// 3- Ménage

// Lessive

const laundry = () => {
    const isLaundryDone = true

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isLaundryDone) {
                resolve()
            }
            else {
                reject()
            }
        }, 3000)
        console.log("Je commence la lessive.")
    })
}

const laundryWait = async() => {
    try {
        const laundryResult = await laundry()
        console.log ("J'ai fini la lessive")
    }
    catch {
        console.log("Je n'ai pas fini la lessive")
    }
}

laundryWait()

// Vaisselle

const dishes = () => {
    const isDishesDone = true

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isDishesDone) {
                resolve()
            }
            else {
                reject()
            }
        }, 3000)
        console.log("Je commence la vaisselle.")
    })
}

const dishesWait = async() => {
    try {
        const dishesResult = await dishes()
        console.log ("J'ai fini la vaisselle")
        console.log ("J'ai fini le ménage")
    }
    catch {
        console.log("Je n'ai pas fini la vaisselle")
    }
}

dishesWait()

