// change horizontal line height on input focus

let wrappers = document.getElementsByClassName('wrapper');

let total_hr = document
  .getElementsByTagName('form')[0]
  .getElementsByTagName('hr');

for (let i = 0; i < wrappers.length; i++) {
  wrappers[i].addEventListener('click', function () {
    for (el of total_hr) {
      el.style.height = '1px';
    }
    let hr = wrappers[i].childNodes[3];
    if (hr.style.height === '1px') {
      hr.style.height = '2px';
    } else {
      hr.style.height = '1px';
    }
  });
}

// submit form validation
let form = document.getElementsByTagName('form')[0];
let submit = document.getElementsByClassName('submit')[0];
let inputs = document.querySelectorAll('input[type=text],textarea');
let errors = document.getElementsByClassName('error-msg');
let email_error = document.getElementsByClassName('email-error')[0];
let phone_error = document.getElementsByClassName('phone-error')[0];
let success = document.getElementsByClassName('success')[0];

for (el of inputs) {
  el.addEventListener('click', function () {
    for (el of errors) {
      el.style.display = 'none';
    }
    email_error.style.display = 'none';
    phone_error.style.display = 'none';
    success.classList.add('hide');
  });
}

submit.addEventListener('click', function () {
  let error_count = 0;

  for (el of errors) {
    el.style.display = 'none';
  }
  phone_error.style.display = 'none';
  email_error.style.display = 'none';

  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value == '') {
      errors[i].style.display = 'flex';
      error_count++;
    } else {
      if (i === 1) {
        if (
          !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
            inputs[i].value
          )
        ) {
          console.log('invalid email');
          email_error.style.display = 'flex';
          error_count++;
        }
      } else if (i === 2) {
        if (!/\d{9}/.test(inputs[2].value)) {
          phone_error.style.display = 'flex';
          error_count++;
        }
      }
    }
  }

  if (error_count === 0) {
    for (el of inputs) {
      el.value = '';
    }
    success.classList.remove('hide');
  }

  // If we wanted to connect the form submission to a backend using PHP we would do the following instead:

  // if (error_count === 0) {
  //   form.submit();
  // }

  // and the PHP program would be the following:
  //   <?php

  // $userName = $_POST['name']
  // $userEmail = $_POST['email']
  // $userPhone = $_POST['phone']
  // $message = $_POST['message']

  // $to = 'nuno.dev@gmail.com'
  // $body = ''
  // $body .= 'From: '.$userName. '\r\n';
  // $body .= 'Email: '.$userEmail. '\r\n';
  // $body .= 'Phone: '.$userPhone. '\r\n';
  // $body .= 'Message: '.$message. '\r\n';

  // mail($to, $messageSubject,$body)

  // ?>
});
