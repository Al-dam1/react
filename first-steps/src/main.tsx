import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {PrimerComponente}  from './componentes/PrimerComponente.tsx'
import {SegundoComponente}  from './componentes/SegundoComponente.tsx'
import ItemCounter from './shopping-cart/ItemCounter.tsx'

const itemsInCart : ItemsInCart[] = [
  {productName: 'Nintengo Switch 2', quantity: 6},
  {productName: 'PlayStation 5', quantity: 8},
  {productName: 'Xbox Series X', quantity: 2},
]
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PrimerComponente/>
    <SegundoComponente/>

    {itemsInCart.map(({productName, quantity}) => (
      <ItemCounter
       key={productName}
        name={productName}
         quantity={quantity} />
    ))}


    {/* <ItemCounter name='Nintengo Switch 2' quantity={6}/>
    <ItemCounter name='PlayStation 5' quantity={1}/>
    <ItemCounter name='Xbox Series X' quantity={2}/> */}
  </StrictMode>
)

 

