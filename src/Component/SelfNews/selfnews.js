import React, { useState } from 'react';
import './selfnews.css'; // Importing external CSS
import preview from '../../assets/previewimg.png';

const AddNews = () => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    link: '',
    image: null,
    imagePreview: preview, // Default placeholder path
    shareWith: {
      freeTrial: true,
      extendedTrial: true,
      basic: false,
      standard: false,
      premium: false,
    }
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        shareWith: {
          ...formData.shareWith,
          [name]: checked,
        },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({
          ...formData,
          image: file,
          imagePreview: reader.result, // Set uploaded image preview
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="selfnewsbiggestcontainer">
      <div className='selfnewstoptitle'>News</div>
      <div className="selfnews-container">
        <div className="selfnews-heading">Add Self News</div>
        <form className="selfnews-form" onSubmit={handleSubmit}>
          <div className="selfnewsinput-group">
            <input
              type="text"
              name="title"
              placeholder="Add Title"
              value={formData.title}
              onChange={handleChange}
              className="selfnewsinput-field"
            />
            <input
              type="text"
              name="content"
              placeholder="Add Content"
              value={formData.content}
              onChange={handleChange}
              className="selfnewsinput-field"
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              name="link"
              placeholder="Add Link (optional)"
              value={formData.link}
              onChange={handleChange}
              className="selfnewsoptionalfield"
            />
          </div>
          <div style={{ paddingTop: "25px" }}>
  <span style={{ fontWeight: "500" }}>Upload Image </span> 
  <span className="optional-text">(optional)</span>
</div>

    <div className='fullpreviewflex'>      
          <div className='textbuttonflex'> 
            <div className="file-upload-info" style={{paddingLeft:"10px",paddingTop:"10px"}}>Please upload a JPG or PNG file less than 2MB</div>
            <div className="selfnewsfile-upload">
            <label htmlFor="file-upload" className="custom-file-upload">
              Choose File
            </label>
            <input
              id="file-upload"
              type="file"
              onChange={handleFileChange}
              accept="image/jpeg,image/png"
              className="file-input" // Hide the default file input
            />
            </div>  
            </div>   
        
          <div className='selfnewspreviewflex'> 
 
            <div className="image-preview-container">
              <img src={formData.imagePreview} alt="Preview" className="image-preview" />
              </div>
            </div>
   
    </div>
          <div className="selfnewscheckbox-group">
            <label style={{fontWeight:"700"}}>Share With</label>
            <div className="selfnewscheckboxes">
              <label>
                <input
                  type="checkbox"
                  name="freeTrial"
                  checked={formData.shareWith.freeTrial}
                  onChange={handleChange}
                /> Free Trial Users
              </label>
              <label>
                <input
                  type="checkbox"
                  name="extendedTrial"
                  checked={formData.shareWith.extendedTrial}
                  onChange={handleChange}
                /> Extended Trial Users
              </label>
              <label>
                <input
                  type="checkbox"
                  name="basic"
                  checked={formData.shareWith.basic}
                  onChange={handleChange}
                /> Basic Users
              </label>
              <label>
                <input
                  type="checkbox"
                  name="standard"
                  checked={formData.shareWith.standard}
                  onChange={handleChange}
                /> Standard Users
              </label>
              <label>
                <input
                  type="checkbox"
                  name="premium"
                  checked={formData.shareWith.premium}
                  onChange={handleChange}
                /> Premium Users
              </label>
            </div>
          </div>
          <button type="submit" className="selfnewssubmit-btn">Post</button>
        </form>
      </div>
    </div>
  );
};

export default AddNews;
