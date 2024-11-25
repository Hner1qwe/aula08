import { useState } from "react";

export default async function Registrar() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState( '')
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

  return (
        <>
        <main>
          <form>
            <input>name</input>
            <input>E-MAIL</input>
            <button>ENVIAR</button>
          </form>
        </main>
        </>
  );
}