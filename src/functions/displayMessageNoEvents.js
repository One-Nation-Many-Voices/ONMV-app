  module.exports = function displayMessageNoEvents (data) {
    if (data.length === 0) {
      return 'No Events Matching the Type and/or Location Selected';
    } else {
      return ''
    }
  }
