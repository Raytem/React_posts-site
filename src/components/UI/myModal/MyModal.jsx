import React from 'react';
import cl from './MyModal.module.css';
import './MyModal-transition.css';
import { CSSTransition } from 'react-transition-group';

function MyModal({children, visible, setVisible}) {

    const rootClasses = [cl.myModal];
    if (visible) {
        rootClasses.push(cl.active);
    }

    return ( 
        <CSSTransition
            in={visible}
            timeout={300}
            classNames="myModal"
        >
            <div onClick={() => setVisible(false)} className={rootClasses.join(' ')}>
                <CSSTransition
                    in={visible}
                    timeout={300}
                    classNames="myModalInner"
                >   
                    <div className={cl.myModalContent} onClick={e => e.stopPropagation()}>
                        {children}
                    </div>
                </CSSTransition>
            </div>
        </CSSTransition>
    );
}

export default MyModal;