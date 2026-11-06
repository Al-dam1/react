import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {PrimerComponente}  from './componentes/PrimerComponente.tsx'
import {SegundoComponente}  from './componentes/SegundoComponente.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PrimerComponente/>
    <SegundoComponente/>
  </StrictMode>,
)
