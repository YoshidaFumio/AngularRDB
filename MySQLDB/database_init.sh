#!/bin/sh

# ===============================
#
#  database initialize
#
# ===============================

mysql -u dbuser -pxodarap ngrxd-ar-sample -e'source /usr/etc/dbinit/database.ddl;'
mysql -u dbuser -pxodarap ngrxd-ar-sample -e'source /usr/etc/dbinit/database.sql;'

