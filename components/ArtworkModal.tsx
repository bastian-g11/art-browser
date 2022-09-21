/* eslint-disable @next/next/no-img-element */
import Modal from 'react-modal';

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
const ArtworkModal = ({ modalIsOpen, closeModal, artwork }) => {
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
      <div>
        <button type='button' onClick={closeModal}>
          close
        </button>
        <div className='flex justify-center'>
          <img
            src={img_link}
            className='object-cover max-h-[80vh] max-w-[80vh]'
            alt='Artwork'
          />
        </div>
        <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>
          {title}
        </h5>
        <p className='mb-3 font-normal text-gray-700'>{author}</p>
      </div>
    </Modal>
  );
};

export { ArtworkModal };
