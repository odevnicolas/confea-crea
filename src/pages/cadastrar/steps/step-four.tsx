import { Button } from "../../../ui/button";

type TStepFour = {
    setActualStep: React.Dispatch<React.SetStateAction<number>>;
  }
const StepFour: React.FC<TStepFour> = ({ setActualStep }) => {
    return(
    <div>
        <div className='flex items-center justify-between mt-20 '>
          <Button
            onClick={() => setActualStep(3)}
            className='bg-brand/5'>
            <p className='text-brand font-medium'>Voltar</p>
          </Button>

          <Button
            onClick={() => setActualStep(5)}
            className='bg-brand'>
            <p className='text-white font-medium'>Confirmar</p>
          </Button>
        </div>
    </div>
    )
}

export default StepFour;