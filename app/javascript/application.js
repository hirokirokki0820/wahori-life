// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails

// = require semantic-ui

import "@hotwired/turbo-rails"
import "controllers"
import "jquery"

 /* Semantic UI 用の jquery関数 */
$(document).on("turbo:load", function() {

  /* ドロップダウン */
  $('.ui.dropdown').dropdown();

  /* アコーディオン */
  $('.ui.accordion').accordion();

  /* 入力フォームのバリデーション */


//   $('.ui.form').form({
//     fields: {
//       user_email:{
//         rules: [
//           {
//             type: 'empty',
//             prompt: 'メールアドレスを入力してください'
//           }
//       ]},
//       user_password:{
//         rules: [
//           {
//             type: 'empty',
//             prompt: 'パスワードを入力してください'
//           },
//           {
//             type: 'minLength[6]',
//             prompt: '6文字以上の英数字を入力してください'
//           }
//       ]},
//       user_password_confirmation:{
//         rules: [
//           {
//             type: 'empty',
//             prompt: ''
//           },
//           {
//             type: 'minLength[6]',
//             prompt: ''
//           }
//       ]}
//     }
//   })
// ;


}); //$(document).on("turbo:load"...
