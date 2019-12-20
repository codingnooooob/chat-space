$(function(){
  
  function buildHTML(message){
    if (message.image) {
      var html = `
        <div class="message">
          <div class="upper-message">
            <div class="upper-message__user-name">
              ${message.name}
            </div>
            <div class="upper-message__date">
              ${message.created_at}
            </div>
          </div>
          <div class="lower-message">
            <p class="lower-message__content">
              ${message.text}
            </p>
              <img src=${message.image} >
          </div>
        </div>`
    } else {
      var html = `
        <div class="message">
          <div class="upper-message">
            <div class="upper-message__user-name">
              ${message.name}
            </div>
            <div class="upper-message__date">
              ${message.created_at}
            </div>
          </div>
          <div class="lower-message">
              <p class="lower-message__content">
                ${message.text}
              </p>
          </div>
        </div>`
    }
    return html
  }

  $("#new_message").on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })

    .done(function(data){
    var html = buildHTML(data);
    $('.chat_main__message_list').append(html);
    $('.chat_main__message_list').animate({ scrollTop: $('.chat_main__message_list')[0].scrollHeight});
    $('.btn_2').prop( 'disabled', false )
    $('form')[0].reset();
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    });
  })
})