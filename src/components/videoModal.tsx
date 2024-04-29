import { useRef, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import YouTubeEmbed from './embedVideo'

interface ModalVideoProps {
    embedId: string
    onClose: () => void
}

export default function ModalVideo({
    embedId,
    onClose
}: ModalVideoProps) {
    const modalOpen = embedId != ""
    const videoRef = useRef<HTMLVideoElement>(null)
    return (
        <div>
            <Transition show={modalOpen} as={Fragment} afterEnter={() => videoRef.current?.play()}>
                <Dialog initialFocus={videoRef} onClose={() => onClose()}>
                    <Transition.Child
                        className="fixed inset-0 z-10 bg-black bg-opacity-50 transition-opacity"
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition ease-out duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        aria-hidden="true"
                    />
                    <Transition.Child
                        className="fixed inset-0 z-10 flex p-6"
                        enter="transition ease-out duration-300"
                        enterFrom="opacity-0 scale-75"
                        enterTo="opacity-100 scale-100"
                        leave="transition ease-out duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-75"
                    >
                        <div className="max-w-5xl mx-auto h-full flex items-center">
                            <Dialog.Panel className={`w-full h-[50vw] lg:h-[70%] aspect-video bg-black overflow-hidden bg-red`}>
                                <YouTubeEmbed embedId={embedId}/>
                            </Dialog.Panel>
                        </div>
                    </Transition.Child>
                </Dialog>
            </Transition>
        </div>
    )
}