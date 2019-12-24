$(function(){
  
  function buildHTML(message){
    if (message.image && message.text) {
      var html = `
        <div class="message" data-message-id=${message.id}>
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
              <img src=${message.image} width="400px" height="400px">
          </div>
        </div>`
    } else if(message.text){
      var html = `
        <div class="message" data-message-id=${message.id}>
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
    } else if(message.image){
      var html = `
      <div class="message" data-message-id=${message.id}>
        <div class="upper-message">
          <div class="upper-message__user-name">
            ${message.name}
          </div>
          <div class="upper-message__date">
            ${message.created_at}
          </div>
          <img src=${message.image} width="400px" height="400px">
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

  $(function() {
    
    setInterval(reloadMessages, 7000);
    var reloadMessages = function() {
        
        last_message_id = $('.message:last').data("message-id");
        $.ajax({
          
          url: "api/messages",
          type: 'get',
          dataType: 'json',
          data: {id: last_message_id}
        })
        
        .done(function(messages) {
          if (messages.length !== 0) {
          var insertHTML = '';
          
          $.each(messages, function(i, message) {
            insertHTML += buildHTML(message)
          });
          
          $('.chat_main__message_list').append(insertHTML);
          $('.chat_main__message_list').animate({ scrollTop: $('.chat_main__message_list')[0].scrollHeight});
          $("#new_message")[0].reset();
          $(".form__submit").prop("disabled", false);
        }
            })
        .fail(function() {
          
      });
    };
    if (document.location.href.match(/\/groups\/\d+\/messages/)) {
      setInterval(reloadMessages, 7000);
    }
  });
})