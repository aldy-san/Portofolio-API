const Project = require('../models/projectsModel');
const {success, error} = require('../helpers/response')

const createProject = async (req, res) => {
    let project = new Project({
        title: req.body.title,
        description: req.body.description
    });
  
    project
      .save()
      .then((result) => {
        success(res, result, 201)
      })
      .catch((err) => {
        error(res, err, 422)
      });
};

const getProject = async (req, res) => {
    Project.find({})
    .then((result) => {
      success(res, result, 200)
    })
    .catch((err) => {
      error(res, err, 422)
    });
};

const deleteProject = async (req, res) => {
    Project.findOneAndDelete({ _id: req.params.id })
    .then((result) => {
      success(res, result, 200)
    })
    .catch((err) => {
      error(res, err, 500)
    });
};

module.exports = {
    createProject,
    getProject,
    deleteProject,
  };