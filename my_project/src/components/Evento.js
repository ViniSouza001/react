import Button from './evento/Button'

function Evento () {

   function meuEvento () {
      alert('Item salvo no carrinho')
   }

   function segundoEvento () {
      alert('Item salvo nos favoritos')
   }

   return (
      <div>
         <p>Clique para disparar um evento</p>
         <Button text="Primeiro evento" event={meuEvento} />
         <Button text="Segundo evento" event={segundoEvento} />
      </div>

   )
}

export default Evento
