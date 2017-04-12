#!C:/Users/rory_/AppData\Local/Programs/Python/Python36/python.exe

import cgi
import html
import smtplib


form = cgi.FieldStorage()

name = form.getfirst('name', 'Empty.')
email = form.getfirst('email', 'Empty.')
tel = form.getfirst('phone', 'I have no telephone.')
message = form.getfirst('message', 'Run your imagination.')

name = html.escape(name)
email = html.escape(email)
tel = html.escape(tel)
message = html.escape(message)

say = 'Привет, я твой потенциальный заказчик, звать меня - ' + name + ".\n" + 'Я хочу тебе сказать: ' + message + ".\n" + 'Здесь либо есть телфон, по которому ты можешь позвонить, либо нет: ' + tel + ".\n Ты всегда сможешь написать мне на email: " + email + '\n. С уважением, твой заказчик:З.'
say = html.escape(say)

myEmail = 'shiningfinger@list.ru'

print("Content-type: text/html\n")
print("""<!DOCTYPE HTML>
		<html>
		<head>
			<title>Обработка данных форм</title>
			<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
  		
		</head>
		<body>
			<div class='container'>""")
print("<h1 class='text-center'>Оставайтесь на связи!:)</h1>")
print("""<p style="padding: 0 20%">Скоро я зайду в почтовый ящик и увижу ваше сообщение, 
	после чего буду рад обсудить с вами то, что вас интересует.\n
	Снюхаемся!</p>""")

print("""</div>
		</body>
	   </html>""")
		
s = smtplib.SMTP('smtp.mail.ru', 587)
s.starttls()
s.login(myEmail, 'ruking198237645')
s.sendmail(myEmail, myEmail, say)
s.quit()