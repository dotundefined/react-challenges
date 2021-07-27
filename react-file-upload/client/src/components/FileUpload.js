import React, { Fragment } from 'react';
import Message from './Message';
import Progress from './Progress';

const FileUpload = () => {

  const onChange = e => {
    // TODO: 
  };

  const onSubmit = async e => {
    // TODO:
  }

  return (
    <Fragment>
      {/* TODO: Display message when image uploaded
       <Message />
        */}
      <form onSubmit={onSubmit}>
        <div className="custom-file mb-4">
          <input
            type="file"
            className="custom-file-input"
            id="customFile"
            onChange={onChange}
          />
          <label className='custom-file-label' htmlFor='customFile'>
            {/* TODO: Display name of the image */}
          </label>
        </div>

        <Progress />

        <input
          type="submit"
          value="Upload"
          className="btn btn-primary btn-block mt-4"
        />
      </form>
      {/* Display uploaded image */}
    </Fragment>
  );
};

export default FileUpload;
