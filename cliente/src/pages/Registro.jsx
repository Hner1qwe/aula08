import { useState } from "react";

export default async function Registrar() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState( '')

  const registrarPessoa = async (event) => {
    event.preventDefault();
    try{
      await fetch('http://localhost:3000/usuarios', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({
          nome: nome, 
          email: email
        })
      })
    }
    catch {
      alert("ocorrou um erro")
    }
  
  }
  const removerPessoa = async (id) => {
try{
  await fetch('http://localhost:3000/usuarios/'+id, {
method: 'DELETE'
  })
}
catch{
  alert("stop bitch")
}
  }

  return (
        <main>
          <form onSubmit={registrarPessoa}>
            <input type="text" name="" id="" value={name} onChange={(event) => setNome(event.target.value)}/>
            <input type="email" name="" id="" value={email} onChange={(event) => setEmail(event.target.value)}/>
            <button>ENVIAR</button>
          </form>
        </main>
  );
}