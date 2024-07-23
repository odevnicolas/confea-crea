import React from 'react';

const Cadastrar: React.FC = () => {

  const steps = [
    {
      title: 'Tipo de ART',
      number: 1,
      active: true
    },
    {
      title: 'Modelo de criação',
      number: 2,
      active: false
    },
    {
      title: 'Atividades contratadas',
      number: 3,
      active: false
    },
    {
      title: 'Contrato',
      number: 4,
      active: false
    },
    {
      title: 'Anexar arquivos',
      number: 5,
      active: false
    },
    {
      title: 'Resumo',
      number: 6,
      active: false
    },
    {
      title: 'Pagamento',
      number: 7,
      active: false
    },
  ]

  return (
    <div className='flex-1 w-screen h-dvhp overflow-hidden bg-[#090E14]'>
      <header className='p-8 border-b border-[#333333]'>
        <h1 className='text-white font-bold'>Criar nova ART</h1>
        <p className='text-[#C8C8C8]'>Agora ficou mais rápido a criação de uma ART, basta seleciona o método que mais lhe convém.</p>
      </header>
      
      <div className='flex'>
        <div className='min-w-60 h-screen border-r border-[#333333]'>
          <div className='w-full h-full flex flex-col pt-10 items-center ml-5 gap-13'>
            {steps.map(step => (
              <div className='w-full '>
                <div className='flex items-start justify-start cursor-default'>
                  <div className={`w-6 h-6 ${step.active ? "bg-[#181C21]" : "bg-transparent border border-[#181C21]"} flex items-center justify-center rounded-full`}>
                    <p className={`${step.active ? "text-white" : "text-[#909090]"} font-medium text-xs`}>{step.number}</p>
                  </div>
                  <p className={`${step.active ? "text-white" : "text-[#909090]"} font-medium ml-3`}>{step.title}</p>
                </div>
                <div className='w-[1px] h-8 mt-2 ml-3 absolute bg-[#181C21]' />
              </div>
            ))}
          </div>
        </div>

        <div className='w-full py-10 px-8'>
          <h1 className='text-white text-2xl'>Escolha como será sua ART</h1>
          <p className='text-[#C8C8C8]'>Selecione o modelo de ART e o estado de criação.</p>
        </div>
      </div>
    </div>
  )
}

export default Cadastrar;