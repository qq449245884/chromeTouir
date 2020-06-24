// validation script here

const patterns = {
  // telephone: /[0-9]/
  telephone: /^\d{11}$/
}

const inputs = document.querySelectorAll('input')

inputs.forEach((input) => {
  input.addEventListener('keyup', (e) => {
    // console.log(e.target.attributes.name.value)
    // console.log(e.target, patterns['telephone'])
    validate(e.target, patterns[e.target.attributes.name.value])
  })
})

function validate(field, regex) {
  // console.log(regex.test(field.value))
  if (regex.test(field.value)) {
    field.className = 'valid'
  } else {
    field.className = 'invalid'
  }
}