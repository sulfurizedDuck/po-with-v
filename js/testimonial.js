$('#testimonialForm').on('submit', (e) => {
  if ($('#name').val() === '') {
    e.preventDefault()
    alert('Name must be filled.')
  }
  else if ($('#title').val() === '') {
    e.preventDefault()
    alert('Title must be filled.')
  }
  else if ($('#title').val().length < 4) {
    e.preventDefault()
    alert('Title must be at least 4 characters.')
  }
  else if ($('#male').prop('checked') === false &&
    $('#female').prop('checked') === false) {
    e.preventDefault()
    alert('Gender must be selected.')
  }
  else if (!$('#address').val().toLowerCase().endsWith('street')) {
    e.preventDefault()
    alert('Address must be ended with \'street\'.')
  }
  else if ($('#review').val().split(' ').length < 6) {
    e.preventDefault()
    alert('Review must be at least 7 words.')
  }
  else if (isNaN($('#rating').val())) {
    e.preventDefault()
    alert('Rating must be numeric.')
  }
  else if ($('#rating').val() < 1 || $('#rating').val() > 5) {
    e.preventDefault()
    alert('Rating must be between 1 and 5.')
  }
  else {
    alert('Thank you!')
  }
})

var inputTitle = $('input[id=title]')
var inputRating = $('input[id=rating]')
var inputAddress = $('input[id=address]')
var inputReview = $('input[id=review]')

// Name
$('input[id=name]').on('focusout', function() {
  inputVal = $('input[id=name]').val()
  if (inputVal == '') 
    $('label[for=name]').html('Name')
  else
    $('label[for=name]').html(inputVal) 
})
$('input[id=name]').on('focusin', function() {
  $('label[for=name]').html('Name')
})

// Title
$('input[id=title]').on('focusout', function() {
  inputVal = $('input[id=title]').val()
  if (inputVal == '') 
    $('label[for=title]').html('Title')
  else
    $('label[for=title]').html(inputVal) 
})
$('input[id=title]').on('focusin', function() {
  $('label[for=title]').html('Title')
})

// Rating
$('input[id=rating]').on('focusout', function() {
  inputVal = $('input[id=rating]').val()
  if (inputVal == '') 
    $('label[for=rating]').html('Rating')
  else
    $('label[for=rating]').html(inputVal) 
})
$('input[id=rating]').on('focusin', function() {
  $('label[for=rating]').html('Rating')
})

// Address
$('textarea[id=address]').on('focusout', function() {
  inputVal = $('textarea[id=address]').val()
  if (inputVal == '') 
    $('label[for=address]').html('Address')
  else
    $('label[for=address]').html(inputVal) 
})
$('input[id=address]').on('focusin', function() {
  $('label[for=address]').html('Address')
})

// Review
$('textarea[id=review]').on('focusout', function() {
  inputVal = $('textarea[id=review]').val()
  if (inputVal == '') 
    $('label[for=review]').html('Review')
  else
    $('label[for=review]').html(inputVal) 
})
$('input[id=review]').on('focusin', function() {
  $('label[for=review]').html('Review')
})