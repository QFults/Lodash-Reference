// import inquirer
var inq = require('inquirer')
// import lodash
var _ = require('lodash')
// create inquirer prompt
var pmpt = inq.createPromptModule()

// array to hold inquirer questions
var qs = [
  // single question object
  {
    // question type
    type: 'input',
    // name of question
    name: 'name',
    // message to be displayed in console
    message: 'Choose a lodash method'
  }
]

// application function
function load () {
  // prompts user for lodash function name
  pmpt(qs).then((r) => {
    // assigns user input to a temporary variable
    var temp = r.name
    // logs lodash function
    console.log('' + _[temp])
    // calls function again to allow multiple searches
    load()
    // catch errors thrown by inquirer
  }).catch((e) => {
    // logs any errors to the console
    console.log(e)
  })
}

// initial function call
load()
