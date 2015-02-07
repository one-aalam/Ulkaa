Template.registerHelper('pageTitle', function(string) {
  return "Ulkaa - Meteor Boilerplate";
});

Template.registerHelper('summarize', function(string) {
  var cleanString = _(string).stripTags();
  return _(cleanString).truncate(140);
});