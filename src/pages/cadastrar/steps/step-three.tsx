import { Button } from "../../../ui/button";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../../../ui/select';

type TStepThree = {
    setActualStep: React.Dispatch<React.SetStateAction<number>>;
  }

const StepThree: React.FC<TStepThree> = ({ setActualStep }) => {
    return(
        <div>
            <div className="mb-10"> 
                <h1 className="text-3xl text-white">Atividades contratada</h1>
                <p className="text-[18px] text-[#C8C8C8] pt-2 mt-2">Selecione e adicione atividades.</p>
            </div>

            <div className='w-full'>
                <h1 className='text-white font-bold mb-3'>Atividade <span className='text-red-500'>*</span></h1>
                <Select>
                    <SelectTrigger className='text-[#909090]'>
                    <SelectValue
                        className='text-white'
                        placeholder="Selecionar Estado" />
                    </SelectTrigger>
                    <SelectContent>
                    <SelectGroup>
                        <SelectItem value="atividade-1">3367 - VÍNCULO TÉCNICO COM A EMPRESA *DESEMPENHO DE CARGO/FUNÇÃO TÉCNICA DENTRO DA EMPRESA</SelectItem>
                        <SelectItem value="atividade-2">3367 - VÍNCULO TÉCNICO COM A EMPRESA *DESEMPENHO DE CARGO/FUNÇÃO TÉCNICA DENTRO DA EMPRESA</SelectItem>
                        <SelectItem value="atividade-3">3367 - VÍNCULO TÉCNICO COM A EMPRESA *DESEMPENHO DE CARGO/FUNÇÃO TÉCNICA DENTRO DA EMPRESA</SelectItem>
                        <SelectItem value="atividade-4">3367 - VÍNCULO TÉCNICO COM A EMPRESA *DESEMPENHO DE CARGO/FUNÇÃO TÉCNICA DENTRO DA EMPRESA</SelectItem>
                    </SelectGroup>
                    </SelectContent>
                </Select>
            </div>

            <div className="w-full flex space-x-4 mt-10">
                <div className="w-full">
                    <h1 className='text-white font-bold mb-3'>Nível de atividade <span className='text-red-500'>*</span></h1>
                    <Select>
                        <SelectTrigger className='text-[#909090]'>
                            <SelectValue className='text-white' placeholder="Selecionar Estado" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="atividade-1">3367 - VÍNCULO TÉCNICO COM A EMPRESA *DESEMPENHO DE CARGO/FUNÇÃO TÉCNICA DENTRO DA EMPRESA</SelectItem>
                                <SelectItem value="atividade-2">3367 - VÍNCULO TÉCNICO COM A EMPRESA *DESEMPENHO DE CARGO/FUNÇÃO TÉCNICA DENTRO DA EMPRESA</SelectItem>
                                <SelectItem value="atividade-3">3367 - VÍNCULO TÉCNICO COM A EMPRESA *DESEMPENHO DE CARGO/FUNÇÃO TÉCNICA DENTRO DA EMPRESA</SelectItem>
                                <SelectItem value="atividade-4">3367 - VÍNCULO TÉCNICO COM A EMPRESA *DESEMPENHO DE CARGO/FUNÇÃO TÉCNICA DENTRO DA EMPRESA</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>

                <div className="w-full">
                    <h1 className='text-white font-bold mb-3'>Nível de atividade <span className='text-red-500'>*</span></h1>
                    <Select>
                        <SelectTrigger className='text-[#909090]'>
                            <SelectValue className='text-white' placeholder="Selecionar Estado" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="atividade-1">3367 - VÍNCULO TÉCNICO COM A EMPRESA *DESEMPENHO DE CARGO/FUNÇÃO TÉCNICA DENTRO DA EMPRESA</SelectItem>
                                <SelectItem value="atividade-2">3367 - VÍNCULO TÉCNICO COM A EMPRESA *DESEMPENHO DE CARGO/FUNÇÃO TÉCNICA DENTRO DA EMPRESA</SelectItem>
                                <SelectItem value="atividade-3">3367 - VÍNCULO TÉCNICO COM A EMPRESA *DESEMPENHO DE CARGO/FUNÇÃO TÉCNICA DENTRO DA EMPRESA</SelectItem>
                                <SelectItem value="atividade-4">3367 - VÍNCULO TÉCNICO COM A EMPRESA *DESEMPENHO DE CARGO/FUNÇÃO TÉCNICA DENTRO DA EMPRESA</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>

                <div className="w-full">
                    <h1 className='text-white font-bold mb-3'>Atividade Profissional <span className='text-red-500'>*</span></h1>
                    <Select>
                        <SelectTrigger className='text-[#909090]'>
                            <SelectValue className='text-white' placeholder="Selecionar Estado" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="atividade-1">3367 - VÍNCULO TÉCNICO COM A EMPRESA *DESEMPENHO DE CARGO/FUNÇÃO TÉCNICA DENTRO DA EMPRESA</SelectItem>
                                <SelectItem value="atividade-2">3367 - VÍNCULO TÉCNICO COM A EMPRESA *DESEMPENHO DE CARGO/FUNÇÃO TÉCNICA DENTRO DA EMPRESA</SelectItem>
                                <SelectItem value="atividade-3">3367 - VÍNCULO TÉCNICO COM A EMPRESA *DESEMPENHO DE CARGO/FUNÇÃO TÉCNICA DENTRO DA EMPRESA</SelectItem>
                                <SelectItem value="atividade-4">3367 - VÍNCULO TÉCNICO COM A EMPRESA *DESEMPENHO DE CARGO/FUNÇÃO TÉCNICA DENTRO DA EMPRESA</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>

                <div className="w-full">
                    <h1 className='text-white font-bold mb-3'>Unidade de medida <span className='text-red-500'>*</span></h1>
                    <Select>
                        <SelectTrigger className='text-[#909090]'>
                            <SelectValue className='text-white' placeholder="Selecionar Estado" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="atividade-1">3367 - VÍNCULO TÉCNICO COM A EMPRESA *DESEMPENHO DE CARGO/FUNÇÃO TÉCNICA DENTRO DA EMPRESA</SelectItem>
                                <SelectItem value="atividade-2">3367 - VÍNCULO TÉCNICO COM A EMPRESA *DESEMPENHO DE CARGO/FUNÇÃO TÉCNICA DENTRO DA EMPRESA</SelectItem>
                                <SelectItem value="atividade-3">3367 - VÍNCULO TÉCNICO COM A EMPRESA *DESEMPENHO DE CARGO/FUNÇÃO TÉCNICA DENTRO DA EMPRESA</SelectItem>
                                <SelectItem value="atividade-4">3367 - VÍNCULO TÉCNICO COM A EMPRESA *DESEMPENHO DE CARGO/FUNÇÃO TÉCNICA DENTRO DA EMPRESA</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>


            
            <div className='flex items-center justify-between mt-20 '>
                <Button
                    onClick={() => setActualStep(2)}
                    className='bg-brand/5'>
                    <p className='text-brand font-medium'>Voltar</p>
                </Button>

                <Button
                    onClick={() => setActualStep(4)}
                    className='bg-brand'>
                    <p className='text-white font-medium'>Confirmar</p>
                </Button>
            </div>
        </div>
    )
}

export default StepThree