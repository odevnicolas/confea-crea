import { Button } from "../../../ui/button"
import Confirmation from '../../../icons/confirmationpng.png';


type TStepSeven = {
    setActualStep: React.Dispatch<React.SetStateAction<number>>;
  }

const StepSeven: React.FC<TStepSeven> = ({ setActualStep }) => {
    return(
    <div>
      <div className="mb-10"> 
        <h1 className="text-3xl text-white">Pagamento</h1>
        <p className="text-[18px] text-[#C8C8C8] pt-2 mt-2">Seu pagamento foi concluido, confirme </p>
      </div>

      <div className="flex flex-col items-center mt-6">
        <img src={Confirmation} alt="Corneta Icon" className="mb-4"/>
        <h1 className="text-center text-[#909090] text-[24px]/[30px] mt-7">
          Sua ART foi cadastrada com sucesso, fique de olho em suas notificações para <br/>
          acompanhar o estado da solicitação.
        </h1>
      </div>

      <div className='flex items-center justify-between mt-20 '>
          <Button
            onClick={() => setActualStep(6)}
            className='bg-brand/5'>
            <p className='text-brand font-medium'>Voltar</p>
          </Button>

          <Button
            onClick={() => setActualStep(1)}
            className='bg-brand'>
            <p className='text-white font-medium'>Confirmar</p>
          </Button>
      </div>
    </div>
    )
}

export default StepSeven
