
import { Filter } from "lucide-react"
import { useEffect, useState } from 'react'
// import { FilterAdressArtForm } from "../forms/filters-art/address-form"
// import { FilterRegisterDate } from "../forms/filters-art/register-date-at-and-to-form"
// import { FilterArtTypeForm } from "../forms/filters-art/type-art-form"
import { Button } from "../ui/button"
import { DialogClose, DialogFooter } from "../ui/dialog"
import { Input } from "../ui/input"
import { Modal } from "../ui/modal"

type IModalFilters = {
  modalOppen: boolean
}

export const ModalFilters = ({ modalOppen }: IModalFilters) => {
  const [contratanteData, setContratanteData] = useState<string>('')
  const [tipoArtData, setTipoArtData] = useState<string>('')
  const [cepArtData, setCepArtData] = useState<string>('')
  const [logradouroArtData, setLogradouroArtData] = useState<string>('')
  const [numeroArtData, setNumeroArtData] = useState<string>('')
  const [bairroArtData, setBairroArtData] = useState<string>('')
  const [cidadeArtData, setCidadeArtData] = useState<string>('')
  const [singUpDate, setSingUpDate] = useState<string>('')
  const [paymentDate, setPaymentDate] = useState<string>('')


  // const [setArtFilter, artFilter, setArtAddress] = useArtListStore(state => [
  //   state.action.setArtFilter,
  //   state.artFilter,
  //   state.action.setFilterAdress
  // ])

  // useEffect(() => {
  //   setContratanteData(artFilter.nomeContratante || '');
  // }, [modalOppen])

  const dataArtFilters = [
    {
      name: 'Contratante',
      data: (
        <input
          value={contratanteData}
          onChange={(e) => setContratanteData(e.target.value)}
          className="text-font-size-medium/M text-global-gray-100 border"
          placeholder="Nome" />
      )
    },
    {
      name: 'Endereço',
      data: (
        <div></div>
        // <FilterAdressArtForm
        //   cep={setCepArtData}
        //   publicPlace={setLogradouroArtData}
        //   number={setNumeroArtData}
        //   neightborhood={setBairroArtData}
        //   city={setCidadeArtData}
        // />
      )
    },
    {
      name: 'Tipo de Art',
      data: (
        // <FilterArtTypeForm setTipoArtData={setTipoArtData} />
        <div></div>
      )
    },
    {
      name: 'Data de cadastro/pagamento',
      data: (
        // <FilterRegisterDate
        //   payment={setPaymentDate}
        //   singUp={setSingUpDate}
        // />
        <div></div>
      )
    },
  ]

  const updateFilters = () => {
    // setArtFilter({
    //   nomeContratante: contratanteData.toUpperCase(),
    //   tipoArt: tipoArtData.toUpperCase(),
    //   enderecoObra: `${logradouroArtData?.length > 0 || numeroArtData?.length > 0 || bairroArtData?.length > 0 || cidadeArtData?.length > 0 || cepArtData?.length > 0 ? `${logradouroArtData?.toUpperCase()} ${numeroArtData?.toUpperCase()} - ${bairroArtData?.toUpperCase()} - ${cidadeArtData?.toUpperCase()} - ${cepArtData?.replace('-', '')}` : ''}`,
    //   dataCadastro: singUpDate,
    //   dataPagamento: paymentDate,
    // })

    // setArtAddress({
    //   cep: cepArtData,
    //   publicPlace: logradouroArtData,
    //   city: cidadeArtData,
    //   neightborhood: bairroArtData,
    //   number: numeroArtData,
    // })
    setContratanteData('')
    setTipoArtData('')
    setCepArtData('')
    setLogradouroArtData('')
    setNumeroArtData('')
    setBairroArtData('')
    setCidadeArtData('')
    setSingUpDate('')
    setPaymentDate('')
  }

  return (
    <Modal
      title={
        <div className="flex gap-5">
          <div className="flex items-center justify-center border rounded-sm w-20 text-blue-600">
            <Filter className="text-sm" />
          </div>
          <div className="flex flex-col gap-2">
            <p>Filtros de pesquisa de ART</p>
            <p className="text-sm text-gray-400">Para agilizar sua pesquisa disponibilizamos os melhores filtros</p>
          </div>
        </div>
      }>
      <div className="pt-3 pb-3 overflow-y-auto pr-4 h-[60vh]">
        {dataArtFilters.map((data, index) => (
          <div
            className="w-full border-b-2 pb-10"
            key={index}>
            <p className="mt-5 font-bold text-[#808089]">{data.name}</p>
            <div className="mt-5">
              {data.data}
            </div>
          </div>
        ))}
      </div>
      <DialogFooter className="border-t">
        <DialogClose className="mt-2">
          <Button
            onClick={updateFilters}
            className="flex gap-2 rounded-sm">
            <Filter className="h-4 w-4" />
            <p>Filtrar</p>
          </Button>
        </DialogClose>
      </DialogFooter>
    </Modal>
  )

}