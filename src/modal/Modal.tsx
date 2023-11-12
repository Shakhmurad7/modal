import {useState} from 'react'

function Modal() {
    const [modal , setmodal] = useState(false)

  return (
    <>
    <div className="container-modal">
        <p onClick={()=>setmodal(true)} >Opne window</p>
    </div>
    <div className={`modal ${modal? `window` : `none`}`}>
        <div className='modal-box'>
            <p>WELCOME</p>
            <div className='modal-text-center'>
                <p>this is window</p>
                <div className="page-row">
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                </div>
            </div>
                <div className="modal-text-end">
                    <p onClick={()=>setmodal(false)} > close</p>
                </div>
        </div>
    </div>
    </>
  )
}

export default Modal