(function(){
  window.templates = window.templates || {};
  function attrs(obj, escaped){
  var buf = []
    , terse = obj.terse;

  delete obj.terse;
  var keys = Object.keys(obj)
    , len = keys.length;

  if (len) {
    buf.push('');
    for (var i = 0; i < len; ++i) {
      var key = keys[i]
        , val = obj[key];

      if ('boolean' == typeof val || null == val) {
        if (val) {
          terse
            ? buf.push(key)
            : buf.push(key + '="' + key + '"');
        }
      } else if (0 == key.indexOf('data') && 'string' != typeof val) {
        buf.push(key + "='" + JSON.stringify(val) + "'");
      } else if ('class' == key) {
        if (escaped && escaped[key]){
          if (val = escape(joinClasses(val))) {
            buf.push(key + '="' + val + '"');
          }
        } else {
          if (val = joinClasses(val)) {
            buf.push(key + '="' + val + '"');
          }
        }
      } else if (escaped && escaped[key]) {
        buf.push(key + '="' + escape(val) + '"');
      } else {
        buf.push(key + '="' + val + '"');
      }
    }
  }

  return buf.join(' ');
}
function escape(html){
  return String(html)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
function nulls(val) { return val != null && val !== '' }
function joinClasses(val) { return Array.isArray(val) ? val.map(joinClasses).filter(nulls).join(' ') : val; }
var jade = {
  attrs: attrs,
  escape: escape 
};templates['others/banner'] = function anonymous(locals) {
var buf = [];
buf.push("<div class=\"banner\"><p>We have a special promo for you.</p><div class=\"button\"><Redeem>now</Redeem></div><div class=\"span\">hide</div></div>");;return buf.join("");
};
})();