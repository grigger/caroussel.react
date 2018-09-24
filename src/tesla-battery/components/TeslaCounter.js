import React from 'react';







// onBlurSpeed = () => {
//     this.setState({speed: {...this.state.speed, focused: false}})
// }


export const TeslaCounter = ({speed, incrementSpeed, decrementSpeed, onBlurSpeed, onFocusSpeed}) => {
    return (
        <div className="tesla-counter">
            <p className="tesla-counter__title">Speed</p>
            <div className="tesla-counter__container cf">
              <div className="tesla-counter__item" tabIndex="0"
                   onBlur={onBlurSpeed}
                   onFocus={onFocusSpeed}>
                <p className="tesla-counter__number">
                  {speed.value}
                  <span>mph</span>
                </p>
                <div className="tesla-counter__controls"
                     tabIndex="-1">
                  <button tabIndex="-1"
                          type="button"
                          onClick={incrementSpeed}
                          disabled={speed.value === speed.max}/>
                  <button tabIndex="-1"
                          type="button"
                          onClick={decrementSpeed}
                          disabled={speed.value === speed.min}/>
                </div>
              </div>
            </div>
        </div>
    );
}
