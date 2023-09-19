import { useState } from 'react'
import './App.css'

import logo from './assets/fato-engracado.png'

function App() {

  const [ textoFrase, setTextoFrase] = useState ("")
  const [categoriaSelec, setCategoriaSelec] = useState (0)

  const todasFrases = [
    { id: 1,
      nome: "Motivacional",
      frases: [
        "Há três coisas na vida que nunca voltam atrás: a flecha lançada, a palavra pronunciada e a oportunidade perdida.",
        "A humildade é a realeza sem coroa. —— Spencer W. Kimball",
        "Espere o melhor, prepare-se para o pior e receba o que vier." 
      ]
    }, 
    { id: 2,
      nome: "Bom dia",
      frases: [
        "Não duvide do poder de Deus em te dar um dia abençoado e te trazer a vitória. —— Frases do bem", 
        "A melhor forma de acordar é pular da cama e se preparar para correr atrás de todos os seus sonhos! Bom dia, mundo!Bom dia!",
        "Bom dia! Não se esqueça que a sua alma é o reflexo do sol, tão forte e brilhante quanto um girassol."
      ]
    },
    { id: 3,
      nome:"Boa noite",
      frases:[
        "Que sua noite seja iluminada pelos mais lindos sonhos. Boa noite!",
        "É hora de agradecer pelo hoje e sonhar com os planos de amanhã. Tenha uma linda noite!",
        "Boa noite! Que o amanhã nos reserve as melhores surpresas, com muitos momentos de felicidade, e energia para ir em busca de nossos sonhos."
      ]
    }

  ] 

  function categoriaEsc (index: number) {
    console.log("posição do item clicado", index)
  }

  return (
    <>
      <div className='container'>
        <img
          alt="Logo frases"
          src= {logo}
          className='logo'
        />

        <h2 className='titulo'>Categorias</h2>
        <section className='area-categoria'>
          {todasFrases.map((item,index) =>
            <button key={item.id} className='btn-categoria' 
              style={{
                borderWidth: item.nome === todasFrases[categoriaSelec].nome? 2:0,
                borderColor: 'blue'
              }} onClick={() => categoriaEsc(index)}>
              {item.nome}
            </button>)}

        </section>
        <button className='btn-frases'>Gerar Frases</button>

        { textoFrase !== '' && <p className='texto-frase'>{textoFrase}</p>}
      </div>
    </>
  )
}

export default App
