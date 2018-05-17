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

    $list.append(`<li style="display:none">Address: ${addressValue} Bedrooms: ${bedroomsValue} Bathrooms: ${bathroomValue}</li>`)
    $('li').last().fadeIn()
})

    // if user clicks anywhere in this list
    // 'this' refers to the specific thing within
    // that was clicked
    $list.on('click', 'li', function() {
        $(this).fadeOut(function () {
        $(this).remove()
    })
})

