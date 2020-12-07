import socket

def Main(arg_address, arg_port):
    host = arg_address
    port = arg_port
    s = socket.socket(socket.AF_INET,socket.SOCK_STREAM)
    s.connect((host,port))

    message = "Hello, Im your friend."

    while True:
        s.send(message.encode())
        if message == '--exit--':
            break
        data = s.recv(1024)  
        print('Received from the server :\t'+ data.decode())
        message = input()
        print(message)
    s.close()

if __name__ == '__main__':
    Main('127.0.0.1', 12345)
