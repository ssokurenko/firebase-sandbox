//  Firebase data object

var myDataRef = new Firebase('https://m4aejsactrd.firebaseio-demo.com/');

// Adding a new message
$('#add-message').click(function(e){
    e.preventDefault();
    var name = $('#nameInput').val();
    var text = $('#messageInput').val();
    var created = Math.round((new Date()).getTime() / 1000);
    
    console.log('Name: ' + name + ', Message: ' + text);
    
    if (name!="" && text!="") {
        myDataRef.push({name: name, text: text, created: created});
        ('#messageInput').val('');
    }

});

// Listening to chat changes and updating the list
myDataRef.on('child_added', function(snapshot) {
    var message = snapshot.val();
    displayChatMessage(message.name, message.text, message.created);
});

// Displaying created chat messages
function displayChatMessage(name, text, created) {
    $('#messages').prepend('<p><span class="text-muted">[' + created + ']</span>&nbsp;<strong>' + name + '</strong>: ' + text + '</p>');
}
