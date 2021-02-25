import React, { Fragment, useState } from 'react';

const ProjectForm = (props) => {
  const initialState = {
    title: '',
    subtitle: '',
    features: '',
    likes: '',
    learnedFront: '',
    learnedBack: '',
    technologies: '',
    repo: '',
    url: '',
  };
  const [formData, setFormData] = useState(initialState);
  const {
    title,
    subtitle,
    features,
    likes,
    learnedFront,
    learnedBack,
    technologies,
    repo,
    url,
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    // todo --> connect to db...store all data in db
    // fetch('url_goes_here', {
    //   "type": "application/json",
    //   "method": "POST",
    //   "payload": formData
    // })
    console.log("You have pressed the submit form button. Congratulations!");
  };

  return (
    <Fragment>
      <center>
        <h1 className="large text-primary">Edit Your Profile</h1>
        <p className="lead">
          <i className="fas fa-user" /> Add some changes to your profile
        </p>
        <small>* = required field</small>
        <form className="form" onSubmit={onSubmit}>
          
          <div className="form-group">
            <input
              type="text"
              placeholder="title"
              name="title"
              value={title}
              onChange={onChange}
            />
            <small className="form-text">
              Could be your own company or one you work for
            </small>
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="subtitle"
              name="subtitle"
              value={subtitle}
              onChange={onChange}
            />
            <small className="form-text">
              Could be your own or a company website
            </small>
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="features"
              name="features"
              value={features}
              onChange={onChange}
            />
            <small className="form-text">
              City & state suggested (eg. Boston, MA)
            </small>
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="likes"
              name="likes"
              value={likes}
              onChange={onChange}
            />
            <small className="form-text">
              Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)
            </small>
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="learnedFront"
              name="learnedFront"
              value={learnedFront}
              onChange={onChange}
            />
            <small className="form-text">
              If you want your latest repos and a Github link, include your
              username
            </small>
          </div>
          <div className="form-group">
            <textarea
              placeholder="A short learnedBack of yourself"
              name="learnedBack"
              value={learnedBack}
              onChange={onChange}
            />
            <small className="form-text">Tell us a little about yourself</small>
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="technologies"
              name="technologies"
              value={technologies}
              onChange={onChange}
            />
            <small className="form-text">
              Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)
            </small>
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="repo"
              name="repo"
              value={repo}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="url"
              name="url"
              value={url}
              onChange={onChange}
            />
          </div>

          <input type="submit" className="btn btn-primary my-1" />

        </form>
      </center>
    </Fragment>
  );
};

export default ProjectForm