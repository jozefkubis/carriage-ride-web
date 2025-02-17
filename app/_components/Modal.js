import { ToastContainer } from "react-toastify"
import styled from "styled-components"
import { IoCloseOutline } from "react-icons/io5"

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  box-shadow: var(--shadow-lg);
  border-radius: 10px;
  /* padding: 2rem 2rem; */
  transition: all 0.5s;
`

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--primary-50);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`

const Button = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  /* border-radius: var(--border-radius-sm); */
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;

  &:hover {
    background-color: var(--primary-50);
  }

  & svg {
    width: 1.4rem;
    height: 1.4rem;
    /* Sometimes we need both */
    /* fill: var(--color-grey-500);
    stroke: var(--color-grey-500); */
    color: var(--primary-200);
  }
`

export default function Modal({ children, onClose }) {
  return (
    <Overlay>
      <StyledModal>
        <Button onClick={onClose}>
          <IoCloseOutline />
        </Button>

        <div>{children}</div>
      </StyledModal>
      <ToastContainer />
    </Overlay>
  )
}
