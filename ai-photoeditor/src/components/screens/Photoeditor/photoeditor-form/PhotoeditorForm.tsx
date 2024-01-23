import styles from './PhotoeditorForm.module.css';

const PhotoeditorForm = () => {
  return (
    <form className={styles.formbody}>
      <div style={{ textAlign: 'center' }}>
        <input type='text' placeholder='Input your prompt' />
      </div>
      <div className={styles.row}>
        <div className={styles.column} style={{ textAlign: 'right' }}>
          <div>
            <img src='/user.svg' alt='User picture' />
          </div>
          <button className='btn'>Add photo</button>
        </div>
        <div
          className={styles.column}
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <button className='btn'>Create new photo</button>
        </div>
        <div className={styles.column} style={{ textAlign: 'left' }}>
          <div>
            <img src='/user.svg' alt='User picture' />
          </div>
          <button className='btn'>Save photo</button>
        </div>
      </div>
    </form>
  );
};

export default PhotoeditorForm;
