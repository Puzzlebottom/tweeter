/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

/**
 * I decided that since the ACs called for input validation, error
 * rendering and some DOM manipulation on submit, I might as well
 * use a plugin that handles all that: Jquery.validation.
 */

const validateInput = ($form) => {
  $form.validate({
    onfocusout: false, onkeyup: false, onclick: false, // disable validation on these actions; I only want to check the input on submit.
    rules: { text: { required: true, maxlength: 140 } }, // the rules applied to my only field: text. required = can't be blank, maxlength = total number of characters (including spaces)
    messages: {
      text: {
        required: "You can't tweet an empty tweet, you twit!", // custom messages
        maxlength: 'This tweet is twoo long!' // custom spelling
      }
    },
    errorPlacement: toggleErrorMessage, // errorPlacement is only invoked when there IS a validation error. We've got our custom handler in place.
    submitHandler: handleFormSubmit, // submitHandler is only invoked when there ISN'T a validation error.  This streamlines our submitHandler quite a bit.
  });
};