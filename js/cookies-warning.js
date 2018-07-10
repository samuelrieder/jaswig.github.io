// function CookiesWarning() {
//   if ( window.Cookies && this.isAccepted() ) return
//
//   this.$component = this.getDOM( $('.cookies-warning') )
//
//   this.addEventListeners()
//   this.show()
// }
//
// CookiesWarning.prototype.isAccepted = function () {
//   $('script').each(function(){
//       if($(this).attr('data-cookiescript') == 'accepted'){
//           var temp = this;
//       temp.setAttribute('type','text/javascript');
//       document.body.appendChild(temp);
//       }
//   });
//   return window.Cookies.get('isCookiesAccepted')
// };
//
// CookiesWarning.prototype.accept = function () {
//   window.Cookies.set('isCookiesAccepted', true, { expires: 365 });
//   this.$component.$root.trigger('accepted');
//   $('script').each(function(){
//       if($(this).attr('data-cookiescript') == 'accepted'){
//           var temp = this;
//   		temp.setAttribute('type','text/javascript');
//   		document.body.appendChild(temp);
//       }
//   });
// };
//
// CookiesWarning.prototype.getDOM = function ($root) {
//   return {
//     $root: $root,
//     $acceptButton: $('.cookies-warning__accept', $root)
//   }
// };
//
// CookiesWarning.prototype.show = function () {
//   this.$component.$root.addClass('cookies-warning--show')
// };
//
// CookiesWarning.prototype.hide = function () {
//   this.$component.$root.removeClass('cookies-warning--show')
// };
//
// CookiesWarning.prototype.addEventListeners = function () {
//   var self = this;
//
//   this.$component.$root.on('accepted', this.hide.bind(this))
//
//   this.$component.$acceptButton.on('click', this.accept.bind(this))
// };
