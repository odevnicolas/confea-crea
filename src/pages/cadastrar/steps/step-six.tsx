import { Button } from "../../../ui/button";
import CornetaIcon from '../../../icons/cornetaIcon.png';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../../../ui/select';
import { toast, ToastContainer } from 'react-toastify';
import { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';

type TStepSix = {
    setActualStep: React.Dispatch<React.SetStateAction<number>>;
}

const StepSix: React.FC<TStepSix> = ({ setActualStep }) => {
    const [selectedValue, setSelectedValue] = useState<string | null>(null);

    const handleSelectChange = (value: string) => {
        setSelectedValue(value);
    };

    const handleButtonClick = () => {
        toast.success('Boleto gerado com sucesso');
    };

    return (
        <div>
            <div className="mb-10"> 
                <h1 className="text-3xl text-white">Pagamento</h1>
                <p className="text-[18px] text-[#C8C8C8] pt-2 mt-2">Selecione aqui a forma de pagamento</p>
            </div>
            <div className="bg-[#181C21] rounded mt-5 px-6 py-5">
                <div className="flex gap-4 mb-6">
                    <img src={CornetaIcon} alt="Corneta Icon" className="h-6 w-6"/>
                    <h1 className="text-[18px] text-white">Informações</h1>
                </div>
                <p className="text-[#909090] text-[16px]">
                    Para gerar o boleto de pagamento, por favor, escolha em nome de quem o boleto será gerado. Você pode selecionar entre o contratante e o proprietário. Após fazer sua escolha, 
                    clique no botão "Gerar Boleto" para prosseguir.
                </p>
            </div>

            <div className='w-115 mt-10'>
                <h1 className='text-white font-bold mb-3'>Forma de pagamento<span className='text-red-500'>*</span></h1>
                <div className='flex items-center space-x-4'>
                    <Select onValueChange={handleSelectChange}>
                        <SelectTrigger className='text-[#909090]'>
                            <SelectValue className='text-white' placeholder="Selecionar" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="proprietary">Proprietário</SelectItem>
                                <SelectItem value="contract">Contratante</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <Button
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                        disabled={!selectedValue}
                        onClick={handleButtonClick}
                    >
                        Gerar boleto
                    </Button>
                </div>
            </div>

            <div className='flex items-center justify-between mt-20'>
                <Button
                    onClick={() => setActualStep(5)}
                    className='bg-brand/5'>
                    <p className='text-brand font-medium'>Voltar</p>
                </Button>

                <Button
                    onClick={() => setActualStep(7)}
                    className='bg-brand'>
                    <p className='text-white font-medium'>Salvar</p>
                </Button>
            </div>
            <ToastContainer />
        </div>
    );
}

export default StepSix;
