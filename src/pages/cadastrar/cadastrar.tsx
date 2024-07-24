'use client';
import React, { useEffect, useState } from 'react';
import StepOne from './steps/step-one';
import StepTwo from './steps/step-two';
import StepFive from './steps/step-five';
import StepSix from './steps/step-six';
import StepSeven from './steps/step-seven';
import StepThree from './steps/step-three';
import StepFour from './steps/step-four';
import { X } from 'lucide-react';

const Cadastrar: React.FC<{ closeModal: () => void }> = ({closeModal}: { closeModal: () => void }) => {
  const [actualStep, setActualStep] = useState(1);

  useEffect(() => {
    document.body.classList.add('no-scroll');
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);

  const actualPage = () => {
    switch (actualStep) {
      case 1:
        return <StepOne setActualStep={setActualStep} />;
      case 2:
        return <StepTwo setActualStep={setActualStep} />;
      case 3:
        return <StepThree setActualStep={setActualStep}/>
      case 4:
        return <StepFour setActualStep={setActualStep}/>
      case 5:
        return <StepFive setActualStep={setActualStep}/>
      case 6:
        return <StepSix setActualStep={setActualStep}/>
      case 7:
        return <StepSeven setActualStep={setActualStep}/>
      default:
        return <StepOne setActualStep={setActualStep} />;
    }
  };

  const steps = [
    {
      title: 'Tipo de ART',
      number: 1,
      active: actualStep === 1,
    },
    {
      title: 'Modelo de criação',
      number: 2,
      active: actualStep === 2,
    },
    {
      title: 'Atividades contratadas',
      number: 3,
      active: actualStep === 3,
    },
    {
      title: 'Contrato',
      number: 4,
      active: actualStep === 4,
    },
    {
      title: 'Anexar arquivos',
      number: 5,
      active: actualStep === 5,
    },
    {
      title: 'Resumo',
      number: 6,
      active: actualStep === 6,
    },
    {
      title: 'Pagamento',
      number: 7,
      active: actualStep === 7,
    },
  ]

  return (
    <div className='flex-1 overflow-hidden bg-[#090E14]'>
      <header className='p-8 border-b border-[#333333] flex items-center justify-between'>
        <div>
          <h1 className='text-white font-bold'>Criar nova ART</h1>
          <p className='text-[#C8C8C8]'>Agora ficou mais rápido a criação de uma ART, basta seleciona o método que mais lhe convém.</p>
        </div>
        <button onClick={closeModal}>
          <X />
        </button>
      </header>
      
      <div className='flex'>
        <div className='min-w-60 border-r border-[#333333]'>
          <div className='w-full h-full flex flex-col pt-10 items-center ml-5 gap-13'>
            {steps.map(step => (
              <div className='w-full '>
                <div className='flex items-start justify-start cursor-default'>
                  <div className={`w-6 h-6 ${actualStep > step.number ? "bg-brand" : step.active ? "bg-[#181C21]" : "bg-transparent border border-[#181C21]"} flex items-center justify-center rounded-full`}>
                    <p className={`${actualStep > step.number || step.active ? "text-white" : "text-[#909090]"} font-medium text-xs`}>{step.number}</p>
                  </div>
                  <p className={`${actualStep > step.number || step.active ? "text-white" : "text-[#909090]"} font-medium ml-3`}>{step.title}</p>
                </div>
                <div className={`w-[1px] h-8 mt-2 ml-3 absolute ${actualStep > step.number ? "bg-brand" : "bg-[#181C21]"}`} />
              </div>
            ))}
          </div>
        </div>

        <div className='w-screen py-10 px-8 overflow-hidden'>
          {actualPage()}
        </div>
      </div>
    </div>
  )
}

export default Cadastrar;