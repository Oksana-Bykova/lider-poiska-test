import { useSelector } from 'react-redux';
import './Popup.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { closePopup } from '../../redux/modals/modalsSlice';

export const Popup = () => {
  const isOpen = useSelector((state) => state.popup.isOpen);
  const name = useSelector((state) => state.popup.name);
  const number = useSelector((state) => state.popup.number);
  
  const dispatch = useDispatch();

  function getRandomNumber() {
    const minDigits = 1; 
    const maxDigits = 5;
  
    const digitsCount = Math.floor(Math.random() * (maxDigits - minDigits + 1)) + minDigits; // Генерируем случайное количество разрядов
    let randomNumber = '';
  
    for (let i = 0; i < digitsCount; i++) {
      const digit = Math.floor(Math.random() * 10); 
      randomNumber += digit.toString(); 
    }
  
    return parseInt(randomNumber); 
  }

 const random = getRandomNumber();

 const handleOverlay = (e) => {
    if (e.target === e.currentTarget) {
      dispatch(closePopup());
    }
  };

  useEffect(() => {
    if (!isOpen) return;
    const closeByEscape = (e) => {
      if (e.key === 'Escape') {
        dispatch(closePopup());
      }
    };

    document.addEventListener('keydown', closeByEscape);

    return () => {
        document.removeEventListener('keydown', closeByEscape);
      };

},[isOpen,dispatch]);

  return (
     <div  className={`popup${isOpen ? ' popup_opened' : ''}`}  onMouseDown={handleOverlay}>
     <div className='popup__container'>
      <p className='popup__title'>Спасибо <span className='popup__span'>{name}</span>, ваш заказ <span className='popup__span'>№{random}</span> оформлен.</p>
      <p className='popup__text'>В ближайшее время мы свяжемся с вами по телефону <span className='popup__span'>{number}</span> для его подтверждения.</p>
      <button
          className='popup__close'
          type='button'
          onClick={() => dispatch(closePopup())}
        >
          
        </button>
      </div>
      </div>
  );
};