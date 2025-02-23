function numUniqueEmails(emails) {
  const obj = {};

  for (let email of emails) {
    let [localName, domain] = email.split('@');
    localName = localName.replaceAll('.', '');
    localName = localName.split('+')[0];
    
    if (!obj[localName + '@' + domain]) {
      obj[localName + '@' + domain] = 1;
    }
  }

  return Object.keys(obj).length;
}

module.exports = numUniqueEmails;