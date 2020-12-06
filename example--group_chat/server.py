#!/bin/python3

#
import socket
import sys
from threading import Thread

#
clientSocketsArr = []
def sendMesage(message, sender):
    for client in clientSocketsArr:
        if client != sender:
            client.send(message)

def listenClient(client, nameClient):
    while True:
        message = client.recv(2048)
        if message.decode() == '--exit':
            clientSocketsArr.remove(client)
            client.send("--close".encode())
            print(nameClient, " disconnected!")
            client.close()
            break

        print(message.decode())
        sendMesage(message, client)


def server(host='', port=9090):
    serverSocket = socket.socket()
    serverSocket.bind((host, port))
    serverSocket.listen(10)
    while True:
        clientSocket, clientAddress = serverSocket.accept()
        clientSocketsArr.append(clientSocket)
        nameClient = clientSocket.recv(2048).decode()
        print(f"Client ({nameClient}) with address <{clientAddress[0]} connected!>")
        clientThread = Thread(target=listenClient, args=(clientSocket,nameClient))
        clientThread.start()


if len(sys.argv) < 3 :
    print("Invalid argument. Use the following scheme to enter\n python3 server.py <server address> <server port>")
    sys.exit()

serverIP, port = sys.argv[1], int(sys.argv[2])
server(serverIP, port)
sys.exit()