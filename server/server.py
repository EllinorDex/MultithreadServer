import socket
import threading


def cryptFunc(data):
    data = data[::-1]
    return data


def threadFunc(conn):
    while True:
        data = conn.recv(1024)
        if not data:
            continue
        data = data.decode()
        if data == '--exit--':
            break
        data = cryptFunc(data)
        data = data.encode()
        conn.send(data)
    conn.close()


def Main(arg_address, arg_port):
    host = arg_address
    port = arg_port
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    s.bind((host, port))
    print("socket binded to port", port)
    s.listen(10)
    while True:
        conn, addr = s.accept()
        print('Connected to :', addr[0], ':', addr[1])
        thread = threading.Thread(target = threadFunc, args = (conn,))
        thread.start()
    s.close()

if __name__ == '__main__':
    Main("", 12345)
