import './modal.css';
import  ReactDOM  from 'react-dom';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useEffect } from 'react';
import { PropTypes } from 'prop-types';

const portal = document.getElementById('portal')


const Modal = ({active,setActive,children,}) => {
   
    useEffect(() => {
        const close = (e) => {
          if(e.keyCode === 27){
            setActive(false)
          }
        }
        window.addEventListener('keydown', close)
      return () => window.removeEventListener('keydown', close)
    },[])
   const modal = (
        <>
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}
        
        >
            <div className={active ? 'modal__content active' : 'modal__content'} onClick={(e) =>e.stopPropagation() }>
                <div onClick={() => setActive(false)} className='close'> 
                <CloseIcon type="primary" /></div>
            {children}
            </div>
        </div>
        </>
    )  
    return ReactDOM.createPortal(modal,portal)
}

Modal.PropTypes = {
    
    active: PropTypes.bool,
    setActive:PropTypes.func,
    children: PropTypes.element
}

export default Modal