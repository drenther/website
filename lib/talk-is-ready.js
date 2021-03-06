/**
    Returns true if talk (issues object from github api) is assigned and labelled as Accepted and Scheduled.
**/

module.exports = function (talk) {
  if (!talk.milestone) {
    return false
  }
  var isAccepted = talk.labels.filter(function (label) {
    return (label.name === 'Accepted & Scheduled')
  }).length

  return (isAccepted)
}
