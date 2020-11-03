import './less/index.less';
import $ from 'jquery';

$('.to-login').on('click', function() {
  $('#login-nav a').trigger('click');
});

$('.to-register').on('click', function() {
  $('#register-nav a').trigger('click');
});

$('#login-btn').on('click', () => {
  window.location.href = '../index.html';
  console.log(222222222);
});

$('#register-btn').on('click', () => {
  $('#login-nav a').trigger('click');
});
