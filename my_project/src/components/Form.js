function Form () {

   function cadastrarUsuario (e) {
      e.preventDefault()
      alert('Usuário cadastrado')
   }

   return (
      <div>
         <h1>Meu cadastro</h1>
         <form onSubmit={cadastrarUsuario}>
            <div>
               <input type="text" placeholder="Digite seu nome" />
               <input type="submit" value="Cadastrar" />
            </div>
         </form>
      </div>
   )
}

export default Form