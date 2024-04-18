#!/bin/bash
while true; do
    /usr/bin/php /var/www/html/activity-check.net/is_online.php
    sleep 60
done
