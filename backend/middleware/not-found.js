const pageNotFound = (req, res) => res.status(404).send('Page you requested does not exist. Please try again');

module.exports = pageNotFound;