// import React from "react";
// import { forwardRef, useImperativeHandle, useRef } from "react";
// import { ReactPortal } from "react";

// const Modal = forwardRef(function Modal({ children }, ref) {
//   const dialog = useRef();

//   useImperativeHandle(ref, () => {
//     return {
//       open() {
//         dialog.current.showModal();
//       },
//     };
//   });

//   return createPortal(
//     <dialog ref={dialog}>
//       {children}
//       <form method="dialog">
//         <button>close</button>
//       </form>
//     </dialog>,
//     document.getElementById("modal-root")
//   );
// });
// export default Modal;
