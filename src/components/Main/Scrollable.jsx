import React, { useState, useEffect, useRef } from 'react'

function Scrollable(props) {
  const [state, setState] = useState({
    isScrolling: false,
    clientX: 0,
    scrollX: 0,
  })

  let ref = useRef();

  
  useEffect(() => {
    const el = ref.current;

    if(el) {
      const onWheel = (e) => {
        e.preventDefault();

        el.scrollTo({
          left: el.scrollLeft + e.deltaY * 5,
          behavior: 'smooth',
        });
      }

      el.addEventListener('wheel', onWheel);

      return () => el.removeEventListener('wheel', onWheel);
    }

  }, []);

  const onMouseUp = (e) => {
    if(ref && ref.current && !ref.current.contains(e.target)) {
      return
    }

    e.preventDefault();

    setState({
      ...state,
      isScrolling: false,
    })
  }

  const onMouseMove = (e) => {
    if(ref && ref.current && !ref.current.contains(e.target)) {
      return
    }

    e.preventDefault();

    const { clientX, scrollX, isScrolling } = state;

    if(isScrolling) {
      ref.current.scrollLeft = scrollX + e.clientX - clientX;

      setState({
        ...state,
        scrollX: scrollX + e.clientX - clientX,
        clientX: e.clientX,
      });
    }
  }

  const onMouseDown = (e) => {
    if(ref && ref.current && !ref.current.contains(e.target)) {
      return
    }

    e.preventDefault();

    setState({
      ...state,
      isScrolling: true,
      clientX: e.clientX,
    })
  }

  useEffect(() => {
    const el = ref.current;

    if(el) {
      el.addEventListener('mousedown', onMouseDown);
      el.addEventListener('mouseup', onMouseUp);
      el.addEventListener('mousemove', onMouseMove);
  
      return () => {
        el.removeEventListener('mousedown', onMouseDown);
        el.removeEventListener('mouseup', onMouseUp);
        el.removeEventListener('mousemove', onMouseMove);
      }
    }
  })


  return (
    <React.Fragment>
      <div 
        ref={ref}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp} 
        className={props._class}>
        {
          React.Children.map(props.children, child => React.Children.only(child))
        }
      </div>
    </React.Fragment>
  )
}

export default Scrollable;
