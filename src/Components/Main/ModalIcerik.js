import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export default function ModalIcerik({ ModalShow, setModalShow }) {

    const cancelButtonRef = useRef(null)
    console.log(cancelButtonRef);

    return (
        <Transition.Root show={ModalShow} as={Fragment}>
            <Dialog as="div" className="relative z-40" initialFocus={cancelButtonRef} onClose={setModalShow}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-[400px]">
                                <div className='w-full flex flex-col items-center justify-center'>
                                    <button className='h-12 py-1 px-2 text-sm font-bold text-[#ed4956] border-b border-[#dbdbdb] w-full'>Şikayet Et</button>
                                    <button className='h-12 py-1 px-2 text-sm font-bold text-[#ed4956] border-b border-[#dbdbdb] w-full'>Takibi Bırak</button>
                                    <button className='h-12 py-1 px-2 text-sm font-normal text-black border-b border-[#dbdbdb] w-full'>Favorilere ekle</button>
                                    <button className='h-12 py-1 px-2 text-sm font-normal text-black border-b border-[#dbdbdb] w-full'>Gönderiye git</button>
                                    <button className='h-12 py-1 px-2 text-sm font-normal text-black border-b border-[#dbdbdb] w-full'>Paylaş...</button>
                                    <button className='h-12 py-1 px-2 text-sm font-normal text-black border-b border-[#dbdbdb] w-full'>Bağlantıyı Kopyala</button>
                                    <button className='h-12 py-1 px-2 text-sm font-normal text-black border-b border-[#dbdbdb] w-full'>Sitene Göm</button>
                                    <button className='h-12 py-1 px-2 text-sm font-normal text-black border-b border-[#dbdbdb] w-full'>Bu hesap hakkında</button>
                                    <button onClick={() => setModalShow(false)} className='h-12 py-1 px-2 text-sm font-normal text-black border-b border-[#dbdbdb] w-full'>İptal</button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
