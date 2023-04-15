const Activity = require('../models/activity.model');

const createActivity = async (activityBody) => {
  const result = await Activity.create(activityBody);
  return result;
};

const getActivity = async () => {
  const result = await Activity.find({}).populate('createdBy', 'name number');
  return result;
};

module.exports = {
  createActivity,
  getActivity,
};
