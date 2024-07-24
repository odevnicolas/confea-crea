import { ClipboardList, FileHeart, PrinterCheck, Trash2 } from 'lucide-react';
import { Button } from '../../../ui/button';
import MockArtSummary from '../mockArtSummary';

type TStepFive = {
  setActualStep: React.Dispatch<React.SetStateAction<number>>;
}

const StepFive: React.FC<TStepFive> = ({ setActualStep }) => {

  const handleBack = () => {
    setActualStep(2);
  };

  const handleContinue = () => {
    setActualStep(6);
  };

  return (
    <div className="h-screen overflow-y-auto p-4 bg-gray-800">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl text-white">Resumo da ART</h1>
          <p className="text-[16px] text-[#C8C8C8] pt-2">Veja aqui o resumo da ART</p>
        </div>
        <div className='flex space-x-4'>
          <Button className="bg-brand/5 text-[#FF5E2C] px-8 py-2 rounded gap-2">
          <FileHeart  size={18}/>
            Usar como modelo
           </Button>
          <Button className="bg-brand/5 text-[#9747FF] px-8 py-2 rounded gap-2">
          <PrinterCheck  size={18}/>
            Imprimir
          </Button>
          <Button className="bg-brand/5 text-[#1578E0] px-8 py-2 rounded gap-2">
          <ClipboardList size={18} />
            Gravar
          </Button>
          <Button className="bg-brand/5 text-[#FF3030] px-8 py-2 rounded gap-2">
          <Trash2 size={18} />
            Descartar ART
           </Button>
        </div>
      </div>
      <div className="mt-4">
        <MockArtSummary handleBack={handleBack} handleContinue={handleContinue} />
      </div>
      <div className='flex items-center justify-between mt-20 '>
        <Button
          onClick={() => setActualStep(4)}
          className='bg-brand/5'>
          <p className='text-brand font-medium'>Voltar</p>
        </Button>

        <Button
          onClick={() => setActualStep(6)}
          className='bg-brand'>
          <p className='text-white font-medium'>Continuar</p>
        </Button>
    </div>
    </div>
  )
}

export default StepFive;
