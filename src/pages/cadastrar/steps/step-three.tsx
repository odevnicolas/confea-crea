import { useState } from "react";
import { Button } from "../../../ui/button";
import { Input } from '../../../ui/input';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../../../ui/select';
import { 
    atividadeOptions,
    nivelDeAtividadeOptions, 
    atividadeProfissionalOptions, 
    unidadeDeMedidaOptions 
  } from '../models/options-art';
import { Table, TableBody, TableCell, TableHead, TableRow } from '../../../ui/table';
import { Trash2, UserRoundPen } from "lucide-react";

type TStepThree = {
    setActualStep: React.Dispatch<React.SetStateAction<number>>;
  }

const StepThree: React.FC<TStepThree> = ({ setActualStep }) => {
    const [selectedValue, setSelectedValue] = useState<string | null>(null);
    const [selectedAtividade, setSelectedAtividade] = useState<string | null>(null);
    const [selectedNivelAtividade, setSelectedNivelAtividade] = useState<string | null>(null);
    const [selectedAtividadeProfissional, setSelectedAtividadeProfissional] = useState<string | null>(null);
    const [selectedUnidadeMedida, setSelectedUnidadeMedida] = useState<string | null>(null);
    const [quantidade, setQuantidade] = useState<string>('');
    const [atividades, setAtividades] = useState<Array<any>>([]);

    const handleAddAtividade = () => {
        const newAtividade = {
            atividade: getLabel(atividadeOptions, selectedAtividade),
            nivelAtividade: getLabel(nivelDeAtividadeOptions, selectedNivelAtividade),
            atividadeProfissional: getLabel(atividadeProfissionalOptions, selectedAtividadeProfissional),
            unidadeMedida: getLabel(unidadeDeMedidaOptions, selectedUnidadeMedida),
            quantidade: quantidade,
        };

        setAtividades([...atividades, newAtividade]);
    };

    const getLabel = (options: Array<{ value: string, label: string }>, value: string | null) => {
        const option = options.find(option => option.value === value);
        return option ? option.label : '';
    }

    const formatLabel = (label: string, maxLength: number = 16) => {
        return label.length > maxLength ? `${label.substring(0, maxLength)}...` : label;
    }

    return(
        <div>
            <div className="mb-10"> 
                <h1 className="text-3xl text-white">Atividades contratada</h1>
                <p className="text-[18px] text-[#C8C8C8] pt-2 mt-2">Selecione e adicione atividades.</p>
            </div>

            <div className='w-full mt-10'>
                <h1 className='text-white font-bold mb-3'>Atividade <span className='text-red-500'>*</span></h1>
                <Select onValueChange={setSelectedAtividade}>
                    <SelectTrigger className='text-[#909090]'>
                        <SelectValue
                            className='text-white'
                            placeholder="Selecionar Atividade" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            {atividadeOptions.map(option => (
                                <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>

            <div className="w-full space-y-8 mt-10">
                <div className="w-full">
                    <h1 className='text-white font-bold mb-3'>Nível de atividade <span className='text-red-500'>*</span></h1>
                    <Select onValueChange={setSelectedNivelAtividade}>
                        <SelectTrigger className='text-[#909090]'>
                            <SelectValue className='text-white' placeholder="Selecionar Estado" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                {nivelDeAtividadeOptions.map(option => (
                                    <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>

                <div className="w-full">
                    <h1 className='text-white font-bold mb-3'>Atividade Profissional <span className='text-red-500'>*</span></h1>
                    <Select onValueChange={setSelectedAtividadeProfissional}>
                        <SelectTrigger className='text-[#909090]'>
                            <SelectValue className='text-white' placeholder="Selecionar Estado" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                {atividadeProfissionalOptions.map(option => (
                                    <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>

                <div className="w-full space-y-4">
                    <div className="w-full">
                        <h1 className='text-white font-bold mb-3'>Unidade de medida <span className='text-red-500'>*</span></h1>
                        <Select onValueChange={setSelectedUnidadeMedida}>
                            <SelectTrigger className='text-[#909090]'>
                                <SelectValue className='text-white' placeholder="Selecionar Estado" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    {unidadeDeMedidaOptions.map(option => (
                                        <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="w-full">
                        <h1 className='text-white font-bold mb-3'>Quantidade</h1>
                        <Input
                            value={quantidade}
                            onChange={(e) => setQuantidade(e.target.value)}
                            placeholder='Quantidade'
                            className='h-10 border border-[#333333] bg-[#181C21]' />
                    </div>
                </div>
            </div>

            <div className="w-full flex justify-end mt-[32px]">
                <Button 
                    className="bg-brand text-white px-4 py-2 rounded"
                    onClick={handleAddAtividade}
                >
                    Adicionar atividade
                </Button>
            </div>

            <div className='w-full mt-5'>
                <hr/>
                <Table className='w-full'>
                    <TableRow className='border-0 hover:bg-transparent'>
                        <TableHead className="text-[#909090] text-[16px]">Atividades</TableHead>
                        <TableHead className="text-[#909090] text-[16px]">Nível de atividade</TableHead>
                        <TableHead className="text-[#909090] text-[16px]">Atividade Profissional</TableHead>
                        <TableHead className="text-[#909090] text-[16px]">Unidade de medida</TableHead>
                        <TableHead className="text-[#909090] text-[16px]">Quantidade</TableHead>
                        <TableHead className="text-[#909090] text-[16px]">Editar</TableHead>
                        <TableHead className="text-[#909090] text-[16px]">Excluir</TableHead>
                    </TableRow>
                    <TableBody>
                        {atividades.map((atividade, index) => (
                            <TableRow key={index} className='border-0 hover:bg-transparent'>
                                <TableCell className="text-[14px] text-white">{formatLabel(atividade.atividade)}</TableCell>
                                <TableCell className="text-[14px] text-white">{atividade.nivelAtividade}</TableCell>
                                <TableCell className="text-[14px] text-white">{atividade.atividadeProfissional}</TableCell>
                                <TableCell className="text-[14px] text-white">{atividade.unidadeMedida}</TableCell>
                                <TableCell className="text-[14px] text-white ">{atividade.quantidade}</TableCell>
                                <TableCell>
                                    <UserRoundPen className="text-brand flex align-middle" size={16} />
                                </TableCell>
                                <TableCell>
                                    <Trash2 className="text-red-500 flex align-middle" size={16} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
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