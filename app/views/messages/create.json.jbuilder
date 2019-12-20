json.text @message.text
json.image @message.image.url
json.created_at @message.created_at.to_s(:datetime)
json.name @message.user.name