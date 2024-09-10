import React from 'react'

type horizontal='left' | 'center' | 'right'
type vertical='top' | 'center' | 'down'

// Create a template literal type for position
type ToastPositionType = `${horizontal}-${vertical}` | 'center';

// Exclude the 'center-center' position
type ToastProps = {
    position: Exclude<ToastPositionType, 'center-center'>;
};
function ToastPosition({position}:ToastProps) {
  return (
    <div>ToastPosition for notification popup{position}</div>
  )
}

export default ToastPosition