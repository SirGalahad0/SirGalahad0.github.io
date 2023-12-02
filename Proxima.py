import aminofix as amino
import pyfiglet, g4f, os, requests, json, random
from gtts import gTTS
from datetime import datetime
from random import randint
from time import time

print(pyfiglet.figlet_format("Proxyma", font="rounded"))

client = amino.Client(autoDevice = True)

email = "nikitadobrolubskiy@gmail.com"
password = "fuvibi17"
NSP_ID = "172854462"
TEST_ID = "230468006"


print("Добро пожаловать в панель управления Proxyma!\n\n\n")

client.login(email, password)
print("Вход успешно произведён!\n\n")

commands = [             #Список команд
    "!меню",             #0
    "!описание",         #1
    "!тест",             #2
    "!кости",            #3
    "!чат",              #4
    "!проксима",         #5
    "!закрыть_чаты",     #6
    "!открыть_чаты",     #7
    "!закрыть_соо",      #8
    "!открыть_соо",      #9
    "!озвучь",           #10
    "!котики",           #11
    "!монетка",          #12
    ]

subclient = amino.SubClient(comId = NSP_ID, profile = client.profile)

@client.event("on_text_message")

def on_text_message(data):

    chat_id              = data.message.chatId               # ID чата, в котором было написано сообщение  
    author_nickname      = data.message.author.nickname      # имя пользователя, отправившего сообщение
    msg                  = data.message.content              # содержание отправленного сообщения
    author_role          = data.message.author.role          #роль пользователя, отправившего сообщение (100 - лидер, 101 - куратор, 102 - агент, 0 - пользователь)
    author_id            = data.message.author.userId        # ID пользователя, отправившего сообщение
    msg_time             = datetime.now()                    # Определяется время отправленного сообщения
    
    data = {
            "user": {
                "id": author_id,
                "name": author_nickname,
                "role": author_role,
            }    
         }
    with open(f'users/user_{author_id}.json', 'w', encoding = 'utf-8') as json_file:
        json.dump(data, json_file, indent = 4, ensure_ascii = False) 

    print(chat_id, msg_time, author_nickname, msg, sep = "\n", end = "\n---------------------\n\n")
    
    #####################################################
    
    if msg.lower().startswith(commands[12]): #!монетка
        coin = ["орёл", "решка"]
        subclient.send_message(chat_id, message = f'Вы подкинули монетку в поисках решения вашей судьбы...\n...Вам выпадает {random.choice(coin)}')
            
    if msg.lower().startswith(commands[11]): #!котики
        url = "https://cataas.com/cat"
        r = requests.get(url);
        with open('cat.jpg', 'wb') as file:
            file.write(r.content) 
        
        with open('cat.jpg', 'rb') as file:
            subclient.send_message(chatId = chat_id, fileType = "image", file = file) 
        os.remove('cat.jpg')
    
    if msg.lower().startswith(commands[10]): #!озвучь
        tts = gTTS(text = msg.split(" ", 1)[1], lang= "ru", slow = False)
        tts.save('vc_reply.mp3')
        with open('vc_reply.mp3', 'rb') as file:
            subclient.send_message(chatId = chat_id, fileType = "audio", file = file)
        os.remove('vc_reply.mp3')
        
        
    
    if msg.lower().startswith(commands[9]) and author_role != 0: #!открыть_соо
        community = amino.ACM.edit_community()
        #community.update_privacy("Public")
        
        #community.save_changes()
        subclient.send_message(chat_id, "Сообщество успешно открыто!")
    
    if msg.lower().startswith(commands[8]) and author_role != 0: #!закрыть_соо
        community = amino.ACM.edit_community()
        #community.update_privacy("Request Only")
        #community.update_guests(False)
        
        #community.save_changes()
        subclient.send_message(chat_id, "Сообщество успешно закрыто!")
    
    if msg.lower().startswith(commands[7]) and (author_role != 0 or author_id == '4a084f93-8cec-434d-b1d7-361313c10591'): #!открыть_чаты
        chats_id = subclient.get_chat_threads(start = 0, size = 10).chatId
        for i in chats_id:
            subclient.edit_chat(chatId = i, viewOnly = False) 
    
    if msg.lower().startswith(commands[6]) and (author_role != 0 or author_id == '4a084f93-8cec-434d-b1d7-361313c10591'): #!закрыть_чаты
        chats_id = subclient.get_chat_threads(start = 0, size = 10).chatId
        for i in chats_id:
            subclient.edit_chat(chatId = i, viewOnly = True) 
            
    if msg.lower().startswith(commands[5]): #!проксима, ChatGPT
       response = g4f.ChatCompletion.create(
           model = g4f.models.gpt_35_turbo_16k_0613,
           prompt = msg.split(" ", 1)[1],
           messages = [
               {
                "role": "user",
                "content": msg.split(" ", 1)[1]
                }
           ]
       ) 
       tts = gTTS(text = response, lang= "ru", slow = False)
       tts.save('vc_reply.mp3')
       subclient.send_message(chatId = chat_id, message = response)
       
       with open('vc_reply.mp3', 'rb') as file:
           subclient.send_message(chatId = chat_id, fileType = "audio", file = file)
           
       os.remove('vc_reply.mp3')
       
    
    if msg.lower().startswith(commands[4]) and author_role != 0 : #!чат
        chat_users = subclient.get_chat_users(chatId = chat_id, start = 0, size = 999)
        return subclient.send_message(chatId = chat_id, mentionUserIds = chat_users.userId, message = "Приглашаем Вас посетить наш чат!" )
    
    if msg.lower().startswith(commands[3]): #!кости
        
        reply = ['Итак, вы подбросили игральные кости...', 
                 'Йо-хо-хо, насколько же судьба сегодняя благосклонна к вам?', 
                 'Хм-м... у меня довольно плохое предчувствие...']
        
        number_1 = randint(1, 6)
        number_2 = randint(1, 6)
        
        return subclient.send_message(chat_id, f"{random.choice(reply)}\n\n... вам выпали {number_1} и {number_2}!") 
                  
    
    if msg.lower().startswith(commands[2]): #!тест
        return subclient.send_message(chat_id, "Ответ получен. Тест пройден")
     
    if msg.lower().startswith(commands[1]): #!описание
        return subclient.send_message(chat_id, "[CB]Меня зовут Проксима - я являюсь хранителем данного сообщества.\n\n[C]На данный момент я нахожусь на стадии разработки.\n\n[C]Для ознакомления с моими функциями напишите команду !меню.")
    
    if msg.lower().startswith(commands[0]): #!меню
        return subclient.send_message(chat_id, 
        "[CB]Меню\n\n!меню - список доступных команд\n!описание - краткое описание бота.\n!кости - простой генератор игральных костей.\n!проксима, <...> - спросите что-то у меня, и я вам отвечу.\n!озвучь [текст] - озвучивает для Вас набранный вами текст.\n!котики - отправляет котика")