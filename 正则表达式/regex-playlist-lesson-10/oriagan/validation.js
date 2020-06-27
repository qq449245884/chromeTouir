// validation script here

const patterns = {
  telephone: /^1\d{10}$/,
  username: /^[a-z\d]{5,12}$/i,
  // password: /^[a-z\d]$/,
  password: /^[\w@-]{8,20}$/,
  slug: /^[a-z\d-]{8,20}$/,
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
    field.className = 'vallid'
  } else {
    field.className = "invallid";
  }
}