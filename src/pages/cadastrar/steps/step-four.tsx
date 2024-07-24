import { Button } from "../../../ui/button";
import CornetaIcon from '../../../icons/cornetaIcon.png';
import { Input } from "../../../ui/input";

type TStepFour = {
    setActualStep: React.Dispatch<React.SetStateAction<number>>;
  }
const StepFour: React.FC<TStepFour> = ({ setActualStep }) => {
    return(
      <div className="h-screen overflow-auto scrollbar-hide">
        <div className="mb-10"> 
          <h1 className="text-3xl text-white">Detalhes do contrato</h1>
          <p className="text-[18px] text-[#C8C8C8] pt-2 mt-2">Edite e selecione os detalhes do contrato.</p>
        </div>

        <div className="bg-[#181C21] rounded mt-5 px-6 py-5">
            <div className="flex gap-4 mb-6">
                <img src={CornetaIcon} alt="Corneta Icon" className="h-6 w-6"/>
                <h1 className="text-[18px] text-white">Informações</h1>
            </div>
            <p className="text-[#909090] text-[16px]">
            Para informar um contratante estrangeiro, escolha uma das opções: Contratante Pessoa Física (nome) ou Contratante Pessoa Jurídica (nome), digite o nome 
            e clique no  botão de cadastro que exibirá um formulário com uma opção para fazer o cadastro do contratante estrangeiro (sem a necessidade de informar o
            número de CPF/CNPJ,  permitindo também, cadastrar o endereço de outro país).
            </p>
        </div>

        <div className="grid grid-cols-4 gap-4 mt-10">
          <div className="col-span-1">
            <h1 className='text-white font-bold mb-3'>Contratante <span className='text-red-500'>*</span></h1>
            <Input
              placeholder='000.000.000-00'
              className='h-10 border border-[#333333] bg-[#181C21] text-white' />
          </div>
          
          <div className="col-span-1">
            <h1 className='text-white font-bold mb-3'>Proprietário <span className='text-red-500'>*</span></h1>
            <Input
              placeholder='000.000.000-00'
              className='h-10 border border-[#333333] bg-[#181C21] text-white' />
          </div>
          
          <div className="col-span-1">
            <h1 className='text-white font-bold mb-3'>Número de contrato <span className='text-red-500'>*</span></h1>
            <Input
              placeholder='102030'
              className='h-10 border border-[#333333] bg-[#181C21] text-white' />
          </div>
          
          <div className="col-span-1">
            <h1 className='text-white font-bold mb-3'>Código de obra pública <span className='text-red-500'>*</span></h1>
            <Input
              placeholder='102030'
              className='h-10 border border-[#333333] bg-[#181C21] text-white' />
          </div>
          
          <div className="col-span-1">
            <h1 className='text-white font-bold mb-3'>Celebrado em <span className='text-red-500'>*</span></h1>
            <Input
              placeholder='31/10/2023'
              className='h-10 border border-[#333333] bg-[#181C21] text-white' />
          </div>
          
          <div className="col-span-1">
            <h1 className='text-white font-bold mb-3'>Data de contrato <span className='text-red-500'>*</span></h1>
            <Input
              placeholder='31/10/2023'
              className='h-10 border border-[#333333] bg-[#181C21] text-white' />
          </div>
          
          <div className="col-span-1">
            <h1 className='text-white font-bold mb-3'>Início de obra/serviço <span className='text-red-500'>*</span></h1>
            <Input
              placeholder='31/10/2023'
              className='h-10 border border-[#333333] bg-[#181C21] text-white' />
          </div>
          
          <div className="col-span-1">
            <h1 className='text-white font-bold mb-3'>Valor de obra/serviço <span className='text-red-500'>*</span></h1>
            <Input
              placeholder='R$ 10.000'
              className='h-10 border border-[#333333] bg-[#181C21] text-white' />
          </div>
        </div>

        <h2 className='text-white font-bold mt-10'>Endereço da obra / serviço</h2>

        <div className="grid grid-cols-4 gap-4 mt-4">
          <div className="col-span-1">
            <h1 className='text-white font-bold mb-3'>CEP <span className='text-red-500'>*</span></h1>
            <Input
              placeholder='00000-000'
              className='h-10 border border-[#333333] bg-[#181C21] text-white' />
          </div>
          
          <div className="col-span-1">
            <h1 className='text-white font-bold mb-3'>País <span className='text-red-500'>*</span></h1>
            <Input
              placeholder='Brasil'
              className='h-10 border border-[#333333] bg-[#181C21] text-white' />
          </div>
          
          <div className="col-span-1">
            <h1 className='text-white font-bold mb-3'>Logradouro <span className='text-red-500'>*</span></h1>
            <Input
              placeholder='Rua Guará'
              className='h-10 border border-[#333333] bg-[#181C21] text-white' />
          </div>
          
          <div className="col-span-1">
            <h1 className='text-white font-bold mb-3'>Número <span className='text-red-500'>*</span></h1>
            <Input
              placeholder='510'
              className='h-10 border border-[#333333] bg-[#181C21] text-white' />
          </div>
          
          <div className="col-span-1">
            <h1 className='text-white font-bold mb-3'>Complemento <span className='text-red-500'>*</span></h1>
            <Input
              placeholder='-'
              className='h-10 border border-[#333333] bg-[#181C21] text-white' />
          </div>
          
          <div className="col-span-1">
            <h1 className='text-white font-bold mb-3'>Bairro <span className='text-red-500'>*</span></h1>
            <Input
              placeholder='Jurema'
              className='h-10 border border-[#333333] bg-[#181C21] text-white' />
          </div>
          
          <div className="col-span-1">
            <h1 className='text-white font-bold mb-3'>Cidade <span className='text-red-500'>*</span></h1>
            <Input
              placeholder='Caucaia'
              className='h-10 border border-[#333333] bg-[#181C21] text-white' />
          </div>
          
          <div className="col-span-1">
            <h1 className='text-white font-bold mb-3'>UF <span className='text-red-500'>*</span></h1>
            <Input
              placeholder='Ceará'
              className='h-10 border border-[#333333] bg-[#181C21] text-white' />
          </div>
          
          <div className="col-span-1">
            <h1 className='text-white font-bold mb-3'>Telefone <span className='text-red-500'>*</span></h1>
            <Input
              placeholder='-'
              className='h-10 border border-[#333333] bg-[#181C21] text-white' />
          </div>
          
          <div className="col-span-1">
            <h1 className='text-white font-bold mb-3'>Tipo de contratação <span className='text-red-500'>*</span></h1>
            <Input
              placeholder='-'
              className='h-10 border border-[#333333] bg-[#181C21] text-white' />
          </div>
          
          <div className="col-span-1">
            <h1 className='text-white font-bold mb-3'>Latitude <span className='text-red-500'>*</span></h1>
            <Input
              placeholder='-'
              className='h-10 border border-[#333333] bg-[#181C21] text-white' />
          </div>
          
          <div className="col-span-1">
            <h1 className='text-white font-bold mb-3'>Longitude <span className='text-red-500'>*</span></h1>
            <Input
              placeholder='-'
              className='h-10 border border-[#333333] bg-[#181C21] text-white' />
          </div>
        </div>


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