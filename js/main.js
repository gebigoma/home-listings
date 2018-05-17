var $address = $('#address')
var $bedrooms = $('#bedrooms')
var $bathrooms = $('#bathrooms')
var $list = $('#list')
var $submit = $('#submit')
var $form = $('form')

$form.on('submit', function(evt){
    evt.preventDefault()
    var addressValue = $address.val()
    var bathroomValue = $bathrooms.val()
    var bedroomsValue = $bedrooms.val()
    console.log(addressValue)
})

