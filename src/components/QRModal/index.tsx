import React from 'react';

interface Props {
  showModal: boolean;
  qrcode: any;
  close: () => void
}

const QRModal = ({ showModal, qrcode, close }: Props) => {
  return (
    <div>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-full mx-6 md:w-[400px] my-6 md:mx-auto md:max-w-4xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h2 className="text-2xl md:text-3xl font-medium mb-2.5 text-black">
                    Compartir
                  </h2>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => close()}
                  >
                    <span className="bg-transparent text-black h-6 w-6 text-3xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                <div className="flex justify-center items-center p-6 flex-auto">
                  <img
                    src={qrcode}
                    alt='qrcode/image'
                    className='w-[250px] h-[250px]'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black">
          </div>
        </>
      ) : null}
    </div>
  )
}

export default QRModal