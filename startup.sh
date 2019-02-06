#!/bin/sh

sudo service docker start

docker run -d -p 5010:5010 samgreaves/rustrestapi

sudo iptables -A PREROUTING -t nat -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 5010

sudo iptables -A INPUT -p tcp -m tcp --sport 80 -j ACCEPT

sudo iptables -A OUTPUT -p tcp -m tcp --sport 80 -j ACCEPT