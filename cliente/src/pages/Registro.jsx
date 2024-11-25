import { useState } from "react";

export default function Registrar() {
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
            <input></input>
            <input></input>
            <button></button>
          </form>
        </main>
        </>
  );
}