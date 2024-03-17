import React, { useState } from 'react';

const WorkSubmissionForm: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [link, setLink] = useState('');
  const [comment, setComment] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ file, link, comment });
    // Handle the submission here, e.g., uploading to server
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Submit Your Work</h2>
      <input type="file" onChange={handleFileChange} />
      <input type="text" placeholder="Link" value={link} onChange={(e) => setLink(e.target.value)} />
      <textarea placeholder="Comment" value={comment} onChange={(e) => setComment(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default WorkSubmissionForm;
