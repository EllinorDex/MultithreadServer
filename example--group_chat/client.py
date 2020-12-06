#!/bin/python3

import socket
from threading import Thread
import sys

def listenServer():
    while True:
        message = clientSocket.recv(2048)
        if message.decode() == '--close':
            break
        print(message.decode())

def communication(host='127.0.0.1', port=9090):
    clientSocket = socket.socket()
    clientSocket.connect((host, port))
    clientName = input("Your name:")
    clientSocket.send(clientName.encode())

    listenThread = Thread(target=listenServer)
    listenThread.start()
    while True:
        message = input()
        if message == '--exit':
            clientSocket.send(message.encode())
            listenThread.join()
            clientSocket.close()
            break
        clientSocket.send((clientName + ': ' + message).encode())

if len(sys.argv) < 3 :
    print("Invalid argument. Use the following scheme to enter\n python3 client.py <server address> <server port>")
    sys.exit()
serverIP, port = sys.argv[1], int(sys.argv[2])
communication(serverIP, port)
sys.exit()