module.exports = isUserOrganizer(event, req) {

  if (!req.session.user_id || (req.session.user_id !== event.organizer_id)) {
    return false;
  } else {
    return true;
  }

};