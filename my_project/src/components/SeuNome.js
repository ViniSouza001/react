

function SeuNome ({ setNome }) {
   return (


      <div>
         <p>Digite seu nome</p>
         <input 
         placeholder="Qual é o seu nome?" 
         type="text" 
         onChange={e => setNome(e.target.value)} />
      </div>
   )
}

export default SeuNome