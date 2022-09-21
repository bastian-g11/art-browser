/* eslint-disable @next/next/no-img-element */
import Modal from 'react-modal';
import { Artwork } from '../types/index';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

interface ArtworkModalProps {
  modalIsOpen: boolean;
  closeModal: () => void;
  artwork: Artwork;
}

const ArtworkModal = ({
  modalIsOpen,
  closeModal,
  artwork,
}: ArtworkModalProps) => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { title, author, img_link } = artwork;

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel='Example Modal'
      ariaHideApp={false}
    >
      <div className='max-w-[90vw]'>
        <button type='button' onClick={closeModal} className='px-4'>
          <img src='/icons/exit.svg' alt='Exit icon' className='h-6' />
        </button>
        <div className='flex justify-center'>
          <img
            src={img_link}
            className='object-cover max-h-[80vh] max-w-[80vw]'
            alt='Artwork'
          />
        </div>
        <h5 className='px-4 mb-2 text-2xl font-bold tracking-tight text-gray-900'>
          {title}
        </h5>
        <p className='px-4 mb-3 font-normal text-gray-700'>{author}</p>
      </div>
    </Modal>
  );
};

export { ArtworkModal };
