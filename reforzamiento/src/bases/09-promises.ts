const myPromise = new Promise((resolve, reject)=>{
    setTimeout(() => {
        //! yo quiero mi dinero!!!
        //resolve(100);
        reject('mi amigo se perdio');
    }, 2000); //2 segundos
});

myPromise.then(
    (myMoney) =>{
        console.log(`tengo mi dinero ${myMoney}`);
        
    }).catch(reason =>{
        console.warn(reason);
        
    }).finally(()=>{
        console.log('pues a seguir');
        
    })