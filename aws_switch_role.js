(function(account, roleName, displayName) {
  var p = {
    "roleName": roleName,
    "account": account,
    "displayName": displayName,
    "color": "F2B0A9",
    "action": "switchFromBasis",
    "csrf": window.AWSC.Auth.getMbtc(),
    "redirect_uri": escape(window.location.href)
  };
  var f = document.createElement("form");
  f.setAttribute("method", "post");
  f.setAttribute("action", "https://signin.aws.amazon.com/switchrole");
  for (var k in p) {
    if (p.hasOwnProperty(k)) {
      var i = document.createElement("input");
      i.setAttribute("type", "hidden");
      i.setAttribute("name", k);
      i.setAttribute("value", p[k]);
      f.appendChild(i);
    }
  }
  document.body.appendChild(f);
  f.submit();
})("account", "roleName", "displayName");
