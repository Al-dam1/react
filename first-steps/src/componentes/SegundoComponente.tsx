export function SegundoComponente(){
    const name = 'Damian nicolas'
    const lastName = 'Alderete'
    const favoriteGame =   ['Call of Duty', 'Fifa', 'GTA', 'Mortal Kombat']
    const isActive = false
    const adrress = {
        street: 'Calle falsa 123',
        city: 'Springfield',
        country: 'USA'
    }
    return (
        <>
        <h2>{name}</h2>
         <h3>{lastName}</h3>
         <p> {favoriteGame.join(', ')}</p>
         <h1>{isActive ? 'activo' : 'inactivo'}</h1>
         <p>{JSON.stringify(adrress)}</p> 
         {/* {JSON.stringify(adrress)}  esto sirve para ver el objeto en la interfaz */}
        </>
    )
}