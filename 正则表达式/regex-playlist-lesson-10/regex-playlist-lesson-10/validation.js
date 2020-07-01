// validation script here

const patterns = {
  telephone: /^1\d{10}$/,
  username: /^[a-z]{5,12}$/i,
  password: /^[\w@-]{8,20}$/,
  slug: /^[a-z\d-]{8,20}$/,
  email: /^([a-z\d\.]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
};

const inputs = document.querySelectorAll('input')

inputs.forEach(input => {
  input.addEventListener('keyup', (e) => {
    const inputName = e.target.attributes.name.value
    validate(e.target, patterns[inputName]);
  })
})

function validate (field, regex) {
  if (regex.test(field.value)) {
    field.className = 'valid'
  } else {
    field.className = "invalid";
  }
}